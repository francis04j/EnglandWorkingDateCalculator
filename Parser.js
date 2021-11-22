/* eslint
   no-spaced-func: 0,
   no-unexpected-multiline: 0
 */

   import { toNumber } from './internal/utils.js'

   const WEEKDAYS = 'Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday'.split('|')
   
   const lowerCaseWeekday = (weekday) => WEEKDAYS.includes(weekday) ? weekday.toLowerCase() : weekday
   
   /**
    * regular expressions to parse holiday statements
    */
   const grammar = (function () {
     /**
      * combines different regexes
      * @private
      * @return {RegExp} combined regex
      */
     function replace (regex, opt) {
       regex = regex.source
       opt = opt || ''
       return function self (name, val) {
         if (!name) return new RegExp(regex, opt)
         val = val.source || val
         val = val.replace(/(^|[^[])\^/g, '$1')
         regex = regex.replace(name, val)
         return self
       }
     }
   
     // raw rules
     const raw = {
       _weekdays: '[Ss]unday|[Mm]onday|[Tt]uesday|[Ww]ednesday|[Tt]hursday|[Ff]riday|[Ss]aturday|day',
       _months: 'January|February|March|April|May|June|July|August|September|October|November|December',
       _days: /(_weekdays)s?/,
       _direction: /(before|after|next|previous|in)/,
       _counts: /(\d+)(?:st|nd|rd|th)?/,
       _count_days: /([-+]?\d{1,2}) ?(?:days?|d)?/,
       _timezone: / in ([^\s]*|[+-]\d{2}:\d{2})/,
   
       dateMonth: /^(_months)/,
       date: /^(?:0*(\d{1,4})-)?0?(\d{1,2})-0?(\d{1,2})/,
       time: /^(?:T?0?(\d{1,2}):0?(\d{1,2})|T0?(\d{1,2}))/,
       duration: /^P(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?)?/, // follows ISO 8601
   
       easter: /^(easter|orthodox)(?: _count_days)?/,
   
       modifier: /^(substitutes|and|if equal|then|if)\b/,
       rule_year: /^(?:in (even|odd|leap|non-leap) years|every (\d+) years? since 0*(\d{1,4}))/,
       rule_weekday: /(not )?on ((?:(?:_weekdays)(?:,\s?)?)*)/,
       rule_date_if_then: /^if ((?:(?:_weekdays)(?:,\s?)?)*) then (?:_direction _days)?/,
       rule_day_dir_date: /^(?:_counts )?_days _direction/,
       rule_bridge: /^is (?:([^ ]+) )?holiday/,
       rule_same_day: /^#\d+/,
       rule_active_from: /^since (0*\d{1,4})(?:-0*(\d{1,2})(?:-0*(\d{1,2})|)|)(?: and|)/,
       rule_active_to: /^prior to (0*\d{1,4})(?:-0*(\d{1,2})(?:-0*(\d{1,2})|)|)/,
   
       rule_type_if_then: /if ((?:(?:_weekdays)(?:,\s?)?)*) then/,
       rule_type_dir: /_days _direction$/,
       rule_type_bridge: / if .* is .* holiday$/,
   
       space: /^\s+/
     }
     /* eslint-disable func-call-spacing */
     raw._days = replace(raw._days)
     (/_weekdays/, raw._weekdays)
     ()
     raw.easter = replace(raw.easter, '')
     (/_count_days/, raw._count_days)
     ()
 
     raw.dateMonth = replace(raw.dateMonth)
     (/_months/, raw._months)
     ()
   
     raw.rule_weekday = replace(raw.rule_weekday, '')
     (/_weekdays/g, raw._weekdays)
     ()
     raw.rule_date_if_then = replace(raw.rule_date_if_then, '')
     (/_direction/g, raw._direction)
     (/_weekdays/g, raw._weekdays)
     (/_days/g, raw._days)
     ()
     raw.rule_day_dir_date = replace(raw.rule_day_dir_date, '')
     (/_counts/, raw._counts)
     (/_days/g, raw._days)
     (/_direction/g, raw._direction)
     ()
     raw.rule_type_if_then = replace(raw.rule_type_if_then, '')
     (/_direction/g, raw._direction)
     (/_days/g, raw._days)
     ()
   
     let i = 1
     raw.months = {}
     raw._months.split('|').forEach(function (m) {
       raw.months[m] = i++
     })
   
     return raw
     /* eslint-enable */
   })()
   
   export default class Parser {
     constructor (fns) {
       this.fns = fns || [
         '_date',
          '_easter',
          '_dateMonth',
          '_ruleDateIfThen',
          '_ruleWeekday',
           '_ruleYear',
           '_ruleDateDir',
           '_ruleBridge',
           '_ruleTime',
           '_ruleDuration',
         '_ruleModifier',
           '_ruleSameDay',
           '_ruleActiveFrom',
           '_ruleActiveTo'
       ]
       this.tokens = []
     }
   
     parse (rule) { //input example: ruleKey: "01-01"
       this.setup = { str: rule, rule: rule } //why? as they are same value
       this.error = 0
       this.tokens = []
       this._tokenize(this.setup)
       this._reorder()
       return this.tokens
     }
   
     /**
      * reorder set of tokens for rule dateDir
      * dateDir: [dateDir2, dateDir1, fn] --> [fn, dateDir1, dateDir2]
      * dateIfThen: [fn, dateIfThen1, dateIfThen2] --> [fn, dateIfThen1, dateIfThen2]
      */
     _reorder () {
       const tmp = []
       const res = []
   
       this.tokens.forEach((token) => {
         if (token.rule === 'dateDir') {
           tmp.push(token)
         } else {
           res.push(token)
           if (tmp.length) {
             while (tmp.length) {
               res.push(tmp.pop())
             }
           }
         }
   
         // no modifiers before a date
         if (token.fn && res[0].modifier) {
           while (res[0].modifier) {
             res.push(res.shift())
           }
         }
       })
       this.tokens = res
     }
   
    //  _tokenize ({str, rule}) { // (o) {
    //    //let last
    //     let ruleTokenise = false
    //   // while (str) { //input example: ruleKey: "01-01"
    //      for (let i = 0; i < this.fns.length; i++) {
    //        //console.log('this.fns', this.fns[i])
    //        //console.log('str rule', str)
    //        if (this[this.fns[i]]({str, rule})){ //apply the function and check if true
    //         ruleTokenise = true
    //         break
    //        } 
    //      }

    //      if(!ruleTokenise) this.error++
         
    //     //  this._space(str, rule)
    //     //  if (last === str) {
    //     //   console.log('END THERE?', last)
    //     //    this.error++
    //     //    break
    //     //  }
         
    //     // last = str
    //    //}
    //  }
   
     _tokenize (o) {
      let last
      while (o.str) {
        for (let i = 0; i < this.fns.length; i++) {
          if (this[this.fns[i]](o)){
            console.log('THISFUNCWORK', this.fns[i])
            break
          } 
        }
        //this._space(o)
        let cap
        console.log('OSSS', o.str)
        if ((cap = grammar.space.exec(o.str))) { 
          console.log('CAPPP', cap)
          o.str = o.str.substr(cap[0].length, o.str.length)
          console.log("SSSS", o.str)
          console.log('AAA', cap[0].length)
          console.log('BBB', o.str.length)
        }
       // console.log('OOOO', o)
        if (last === o.str) {
          this.error++
          break
        }
        last = o.str
      }
    }

    /*
    * removes a string
    */
     _shorten (o, cap0) {
       o.str = o.str.substr(cap0.length, o.str.length)
     }
   
     _date (o) {
       let cap
       if ((cap = grammar.date.exec(o.str))) {
         //  console.log('asdsads', cap)
         this._shorten(o, cap[0])
         cap.shift()
        // console.log('AAAA1', cap)
         const res = {
           fn: 'gregorian',
           year: toNumber(cap.shift()),
           month: toNumber(cap.shift()),
           day: toNumber(cap.shift())
         }
         this.tokens.push(res)
         return true
       }
     }
   

   
     _easter (o) {
       let cap
       if ((cap = grammar.easter.exec(o.str))) {
         this._shorten(o, cap[0])
         cap.shift()
         const res = {
           fn: 'easter',
           type: cap.shift(),
           offset: toNumber(cap.shift()) || 0
         }
         this.tokens.push(res)
         return true
       }
     }
   
    
     _dateMonth (o) {
       let cap
       if ((cap = grammar.dateMonth.exec(o.str))) {
         this._shorten(o, cap[0])
         cap.shift()
         const res = {
           fn: 'gregorian',
           day: 1,
           month: grammar.months[cap.shift()],
           year: undefined
         }
         this.tokens.push(res)
         return true
       }
     }
   
     _space (o) {
       let cap
       if ((cap = grammar.space.exec(o.str))) {
         this._shorten(o, cap[0])
         return true
       }
     }
   
     _ruleSameDay (o) {
       let cap
       if ((cap = grammar.rule_same_day.exec(o.str))) {
         this._shorten(o, cap[0])
         return true
       }
     }
   
     _ruleModifier (o) {
       let cap
       if ((cap = grammar.modifier.exec(o.str))) {
         this._shorten(o, cap[0])
         cap.shift()
         const res = {
           modifier: cap.shift()
         }
         this.tokens.push(res)
         return true
       }
     }
   
     _ruleTime (o) {
       let cap
       if ((cap = grammar.time.exec(o.str))) {
         this._shorten(o, cap[0])
         cap.shift()
         const res = {
           rule: 'time',
           hour: toNumber(cap.shift()) || 0,
           minute: toNumber(cap.shift()) || 0
         }
         res.hour = res.hour || toNumber(cap.shift()) || 0
         this.tokens.push(res)
         return true
       }
     }
   
     _ruleDuration (o) {
       let cap
       if ((cap = grammar.duration.exec(o.str))) {
         this._shorten(o, cap[0])
         cap.shift()
         const tmp = {
           days: toNumber(cap.shift()) || 0,
           hours: toNumber(cap.shift()) || 0,
           minutes: toNumber(cap.shift()) || 0
         }
         const res = {
           rule: 'duration',
           // duration is calculated in hours
           duration: (tmp.days * 24) + tmp.hours + (tmp.minutes / 60)
         }
         this.tokens.push(res)
         return true
       }
     }
   
     _ruleDateIfThen (o) {
       
       let cap
       if ((cap = grammar.rule_date_if_then.exec(o.str))) {
        //console.log('RLLLLES', cap)
         this._shorten(o, cap[0])
         cap.shift()
         const res = {
           rule: 'dateIfThen',
           if: (cap.shift()).split(/(?:,\s?)/).map(lowerCaseWeekday),
           direction: cap.shift(),
           then: lowerCaseWeekday(cap.shift())
         }
         // create a sub-parser to only check for time, duration
         const p = new Parser(['_ruleTime', '_ruleDuration'])
         p.parse(o.str)
         if (p.tokens.length) {
           res.rules = p.tokens
         }
         o.str = ' ' + p.setup.str // ' ' required such that the _tokenize function finalizes the loop
         this.tokens.push(res)
         return true
       }
     }
   
     _ruleWeekday (o) {
       let cap
       if ((cap = grammar.rule_weekday.exec(o.str))) {
         this._shorten(o, cap[0])
         cap.shift()
         const res = {
           rule: 'weekday',
           not: !!cap.shift(),
           if: (cap.shift()).split(/(?:,\s?)/).map(lowerCaseWeekday)
         }
         this.tokens.push(res)
         return true
       }
     }
   
     _ruleDateDir (o) {
       let cap
       if ((cap = grammar.rule_day_dir_date.exec(o.str))) {
         this._shorten(o, cap[0])
         cap.shift()
         const res = {
           rule: 'dateDir',
           count: toNumber(cap.shift()) || 1,
           weekday: lowerCaseWeekday(cap.shift()),
           direction: cap.shift()
         }
         if (res.direction === 'in') {
           res.direction = 'after'
         }
         this.tokens.push(res)
         return true
       }
     }
   
     _ruleYear (o) {
       let cap
       if ((cap = grammar.rule_year.exec(o.str))) {
         this._shorten(o, cap[0])
         cap.shift()
         const res = {
           rule: 'year',
           cardinality: cap.shift(),
           every: toNumber(cap.shift()),
           since: toNumber(cap.shift())
         }
         this.tokens.push(res)
         return true
       }
     }
   
     _ruleBridge (o) {
       let cap
       if ((cap = grammar.rule_bridge.exec(o.str))) {
         this._shorten(o, cap[0])
         cap.shift()
         const res = {
           rule: 'bridge',
           type: cap.shift()
         }
         this.tokens.push(res)
         return true
       }
     }
   
     _ruleActiveFrom (o) {
       let cap
       if ((cap = grammar.rule_active_from.exec(o.str))) {
         this._shorten(o, cap[0])
         cap.shift()
         const res = {
           rule: 'activeFrom',
           year: toNumber(cap.shift()),
           month: toNumber(cap.shift()) || 1,
           day: toNumber(cap.shift()) || 1
         }
         this.tokens.push(res)
         return true
       }
     }
   
     _ruleActiveTo (o) {
       let cap
       if ((cap = grammar.rule_active_to.exec(o.str))) {
         this._shorten(o, cap[0])
         cap.shift()
         const res = {
           rule: 'activeTo',
           year: toNumber(cap.shift()),
           month: toNumber(cap.shift()) || 1,
           day: toNumber(cap.shift()) || 1
         }
         this.tokens.push(res)
         return true
       }
     }
   }
   