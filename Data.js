import util from './utils.js';

export default class Data {
    constructor (data, country, state) {
      this.opts = {
        country,
        state
        }
      this.data = data || {}
    }
  
    /**
     * get all countries from the data
     * @param {String} lang - Iso-639 shortcode
     * @return {Object} shortcode-name value pairs. E.g. `{ AT: 'Österreich', ... }`
     */
    getCountries (lang) {
      const o = {}
      const countries = _.get(this.data, 'holidays', {})
      Object.keys(countries).forEach((country) => {
        o[country] = this._name(countries, country, lang, { country })
      })
      return o
    }
  
    /**
     * get all states for a given country from the data
     * @param {String|Object} country
     * @param {String} [lang] - Iso-639 shortcode
     * @return {Object} shortcode-name value pairs. E.g. `{ b: 'Burgenland', ... }`
     */
    getStates (country, lang) {
      const opts = Object.assign({}, Data.splitName(country))
      const states = _.get(this.data, ['holidays', opts.country, 'states']) ||
        _.get(this.data, ['holidays', opts.country, 'regions'])
      if (states) {
        const o = {}
        Object.keys(states).forEach((state) => {
          opts.state = state
          o[state] = this._name(states, state, lang, opts)
        })
        return o
      }
    }
  
    /**
     * get all regions for a given country/ state from the data
     * @param {String} country
     * @param {String} state
     * @param {String} [lang] - Iso-639 shortcode
     * @return {Object} shortcode-name value pairs.
     */
    getRegions (country, state, lang) {
      const opts = Object.assign({}, Data.splitName(country, state))
      const regions = _.get(this.data, ['holidays', opts.country, 'states', opts.state, 'regions'])
  
      if (regions) {
        const o = {}
        Object.keys(regions).forEach((region) => {
          opts.region = region
          o[region] = this._name(regions, region, lang, opts)
        })
        return o
      }
    }
  
    /**
     * @private
     */
    _name (obj, key, lang, opts) {
      const names = obj[key].names
      const _lang = lang || this.getLanguages(opts)[0] || Object.keys(names)[0]
      const mlang = Data.majorLang(_lang)
      const name = obj[key].name || names[_lang] || names[mlang] || names[Object.keys(names)[0]]
      return name
    }
  
    /**
     * get languages for selected country, state, region
     * @return {Array} containing ISO 639-1 language shortcodes
     */
    getLanguages (opts) {
      return this._getValue('langs', opts) || []
    }
  
    /**
     * get default day off as weekday
     * @return {String} weekday of day off
     */
    getDayOff () {
      return this._getValue('dayoff')
    }
  
    /**
     * get timezones for country, state, region
     * @return {Array} of {String}s containing the timezones
     */
    getTimezones () {
      return this._getValue('zones') || []
    }
  
    /**
     * get list of raw holiday rules for country/ state/ region
     * @param {Object|String} [country]
     * @param {String} [state]
     * @param {String} [region]
     * @return {Object} holidayname <-> unparsed rule or date pairs
     */
    getRules (country, state) {
      const rules = {}
      const countryState = this.opts
  
      if (!(countryState && countryState.country)) {
        return rules
      }
  
      country = countryState.country
      state = countryState.state
      let countryHolidays = util.get(this.data, ['holidays', country])
      if (countryHolidays) {
        this._assign(rules, countryHolidays)
        // console.log('RIEEELS', rules)
        // if ((state && countryHolidays.regions && (countryHolidays = countryHolidays.regions[state])) ||
        //     (state && countryHolidays.states && (countryHolidays = countryHolidays.states[state]))
        // ) {
        //   this._assign(rules, countryHolidays)
        //   if (region && countryHolidays.regions && (countryHolidays = countryHolidays.regions[region])) {
        //     this._assign(rules, countryHolidays)
        //   }
        // }
        // Object.keys(rules).forEach((key) => {
        //   // assign name references with `_name`
        //   const _name = rules[key]._name
        //   if (_name && this.data.names[_name]) {
        //     delete rules[key]._name
        //     rules[key] = _.merge({}, this.data.names[_name], rules[key])
        //   }
        // })
      }
      
      return rules
    }
  
    /**
     * get name for substitute name
     * @return {Object} translations of substitute day names
     */
    getSubstitueNames () {
      return _.get(this.data, ['names', 'substitutes', 'name'])
    }
  
    /**
     * helper to assign objects based on properties
     * @private
     * @param {Object} out - object where obj gets assigned into
     * @param {Object} obj - input obj
     * @return {Object}
     */
     _assign (out, obj) {
      
      let days = {}
      // "holidays": {
      //   "GB": {          
      //     "days": {
      //       01-01": {
      //         "_name": "01-01",
      //         "_style": "month-day"
      //       },
      //     }
      if (days || obj.days) {
        days = Object.assign(days, obj.days)
        Object.keys(days).forEach(function (p) {
       
          out[p] = Object.assign({}, out[p], days[p])
          if (!days[p].type) {
            out[p].type = 'public'
          }
        })
      }
      return out
    }
  
    /**
     * get a object from the data tree
     * @private
     * @param {String} key - key to look at
     * @return {Object} return object
     */
    _getValue (key, opts = this.opts) {
      return (
        util.get(this.data, ['holidays', opts.country, 'states', opts.state, 'regions', opts.regions, key]) ||
        util.get(this.data, ['holidays', opts.country, 'states', opts.state, key]) ||
        util.get(this.data, ['holidays', opts.country, key])
      )
    }
}
  
  // static functions
  /**
   * split country state names if they appear in concatenated format e.g. 'at.b'
   * @param {String|Object} country
   * @param {String} [state]
   * @param {String} [region]
   * @return {Object}
   */
  Data.splitName = function (country, state, region) {
    if (typeof country === 'object' && country.country) {
      return toUpperCase(country)
    } else if (typeof country === 'string') {
      const countr = country.split(/[.-]/) //splits if given UK-ENG or UK.ENG
      const o = {
        country: countr.shift(), //Removes the first element from an array and returns it.
        state: countr.shift() || state,
        region: countr.shift() || region
      }
      return toUpperCase(o)
    }
  }

  Data.toUpperCase = function(countryy, statee) {
      const country = countryy.toUpperCase();
      const state = statee.toUpperCase();
      return {
          country,
          state
      }
  }


  /**
 * @private
 */
function toUpperCase (obj) {
    ;['country', 'state', 'region'].forEach(key => {
      if (typeof obj[key] === 'string') {
        obj[key] = obj[key].toUpperCase()
      }
    })
    return obj
  }