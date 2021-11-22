import Data from './Data.js'
import DateFn from './DateFn.js'

export class Jolidays {
    constructor (data, country, state) {
        if (!data) {
          throw new TypeError('need holiday data')
        }
        this._data = data        
        this.init(country, state)
      }

       /**
       * initialize holidays for a country/state/region
       * @param {String|Object} country - if object use `{ country: {String}, state: {String}, region: {String} }`
       * @param {String} [state] - specifies state
       * @param {String} [region] - specifies region
       * @param {Object} [opts] - options
       * @param {Array|String} [opts.languages] - set language(s) with ISO 639-1 shortcodes
       * @param {String} [opts.timezone] - set timezone
       * @param {Array} [opts.types] - holiday types to consider; priority is in ascending order (low ... high)
       */
      init (...args) {
        const [country, state] = getArgs(...args);
        this.__conf = Data.toUpperCase(country,state);
        this.__data = new Data(this._data, country, state)
        this.__languages = ['en']
        const holidays = this.__data.getRules() //filter through days field
        this.holidays = holidays
        
        if (holidays) {
          this.__timezone = 'Europe/London' 
          console.log('Holidays', holidays)
          Object.keys(holidays).forEach((rule) => { //for every days rule
            this.setHoliday(rule, holidays[rule])
          })
          return true
        }
      }

       /**
       * set (custom) holiday
       * then setHoliday() for each rule by
       * -Going through the holidays object keys, 
       * find a function that can parse it,( use Parser.js (tokenize function))
       * update the holidays object with the function (fn) that can parse it
       * @throws {TypeError}
       * @param {String} rule - rule for holiday (check supported grammar) or date in ISO Format, e.g. 12-31 for 31th Dec
       * @param {Object|String} [opts] - holiday options, if String then opts is used as name
       * @param {Object} opts.name - translated holiday names e.g. `{ en: 'name', es: 'nombre', ... }`
       * @param {String} opts.type - holiday type `public|bank|school|observance`
       * @returns {Boolean} `true` if holiday could be set
       */
      setHoliday (rulekey, ruleValue) {
        //ruleKey: "01-01", ruleValue: { _name: '01-01', type: 'public' }
        const fn = new DateFn(rulekey, this.holidays)
        if (fn.ok) {
          this.holidays[rulekey].fn = fn
          return true
        } else {
          // throw Error('could not parse rule: ' + rule) // NEXT
          console.error('could not parse rule: ' + rulekey) // eslint-disable-line
        }
        return false
      }

        /**
         * gets all dates in that year based on the rule
   * @private
   * @param {Number} year
   * @param {String} rule
   */
  _dateByRule (year, rule) {
    const _rule = this.holidays[rule]
    const dates = _rule.fn.inYear(year)
      .get(this.__timezone)
      // .map((date) => {
      //   const odate = _.merge({},
      //     _.omit(date, ['substitute']),
      //     _.omit(_rule, ['fn', 'enable', 'disable', 'substitute', 'active'])
      //   )
      //   if (_rule.substitute && date.substitute) {
      //     odate.substitute = true
      //   }
      //   return odate
      // })
     // console.log('DESDCC', dates)
    return dates
  }
      

    /**
   * check whether `date` is a holiday or not
   * @param {Date|String} [date]
   * @returns {Holiday[]|false} holiday:
   * ```
   * {String} date - ISO Date String of (start)-date in local format
   * {Date} start - start date of holiday
   * {Date} end - end date of holiday
   * {String} name - name of holiday using `language` (if available)
   * {String} type - type of holiday `public|bank|school|observance`
   * ```
   */
     isHoliday (date) {
      let d = date ? new Date(date) : new Date()      
      const year = d.getFullYear();
      const rules = Object.keys(this.holidays)
      //console.log('RULESthis.holidays', this.holidays)
      const days = []
      for (const rule of rules) {
         const hd = [].concat(this._dateByRule(year, rule))
         // console.log('HDHDHDss', hd)
        for (const hdrule of hd) {
         // console.log('ONEEE', hdrule.start.toDate())
          //console.log('TWOOO', hdrule.end.toDate())
          //console.log('COME-DATE', date)
          if (hdrule && date >= hdrule.start.toDate() && date < hdrule.end.toDate()) {
            days.push(hdrule)
          }
        }
      }
      return days.length ? days : false
    }
}

function getArgs (country, state, region, opts) {
  if (typeof region === 'object') {
    opts = region
    region = null
  } else if (typeof state === 'object') {
    opts = state
    state = null
  } else if (typeof country === 'object' && !country.country) {
    opts = country
  }
  opts = opts || {}
  return [country, state, region, opts]
}