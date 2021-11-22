import Parser from './Parser.js'
import CalEventFactory from './CalEventFactory.js'
import Rule from './Rule.js'
import PostRule from './PostRule.js'
/**
 * handles one rule
 */
 export default class DateFn {
    /**
     * @param {string} rule - unparsed rule
     * @param {array} holidays - all holidays rules (required for bridge day calculations)
     */
    constructor (ruleStr, holidays) {
      const parser = new Parser()
      this.ruleStr = ruleStr
     // console.log('Francis', this.rules)
     // console.log('ruleStr', ruleStr)
      this.rules = parser.parse(ruleStr) //input example: ruleKey: "01-01"
       
      this.ok = !parser.error
      this.holidays = holidays
      this.opts = holidays ? holidays[ruleStr] : {}
      this.event = undefined
      this.cache = new Map()
    }

    /*
    *  creates a calendar event 
    *
    */
    inYear (year) {
        if (this.cache.has(year)) {
          this.event = this.cache.get(year)
          return this
        }
    
        let ruleFn // current rule
        const postProc = new PostRule(this.ruleStr, this.opts, this.holidays)
    
        this.rules.forEach((rule) => { //[ { fn: 'gregorian', year: undefined, month: 1, day: 1 } ]
          let calEvent
          if (rule.fn) {
            calEvent = new CalEventFactory(rule)
              .inYear(year - 1) // run over neighboring dates to catch overlaps
              .inYear(year)
              .inYear(year + 1)
            postProc.push(calEvent)
            ruleFn = new Rule(calEvent)
          } else {
            
            if (ruleFn.resolve(rule)) {
              postProc.resolve(rule, year)
            }
          }
        })
    
        const event = postProc.getEvent(year)
        this.cache.set(year, event)
    
        this.event = event //calEvent
        return this
    }

    get (timezone) {
      return this.event.get(timezone)
    }
}