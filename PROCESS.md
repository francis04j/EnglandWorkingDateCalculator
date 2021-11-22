NEXT: how days are generated

JHolidays('holidayDataInJson', 'country:gb', 'region:eng')

---initialisation step
first: convert the country and region paramter to upperCase
create a Data object using the json, country and region
Get the rules using the Data class: Data.getRules
  - get all the values under the "holidays" field and  under  "GB" fields   
    - holidays { GB: {.....}}
  - construct an object(holidays) and assign type field of public
    - 'substitutes 01-01 if sunday then next monday': { substitute: true, _name: '01-01', type: 'public' }
if(holidays )
then setHoliday() for each rule by
 -Going through the holidays object keys, 
 find a function that can parse it,( use Parser.js (tokenize function))
 -update the holidays object with the function (fn) that can parse it

-- isHoliday
 get CalendarDate for that date with end and start
 [
  {
    date: '2012-01-01 00:00:00',
    start: CalDate {
      year: 2012,
      month: 1,
      day: 1,
      hour: 0,
      minute: 0,
      second: 0,
      duration: 24
    },
    end: CalDate {
      year: 2012,
      month: 1,
      day: 2,
      hour: 0,
      minute: 0,
      second: 0,
      duration: 24
    }
  }
]
Then checks if the given date falls between those CalendarDates(start and end)
return the days or false