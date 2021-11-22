// import Holidays from 'date-holidays-parser'
import debug from './debug.js';
import englandHolidays from './englandHolidays.js';
import { Jolidays } from './Jolidays.js';

// const hd = new Holidays(englandHolidays)

// hd.init('GB', 'ENG')

// Date.prototype.addDays = function(days) {
//     var date = new Date(this.valueOf());
//     date.setDate(date.getDate() + days);
//     return date;
// }

// function isWeekend(maturityDate) {
//  return (!(maturityDate.getDay() % 6));
// }

// function getValidDate(maturityDate) {
//   let newDate = new Date(maturityDate);
//   while(isWeekend(newDate) || hd.isHoliday(newDate)) {
//     newDate = newDate.addDays(1) 
//   }
//   return newDate;
// }

const jd = new Jolidays(englandHolidays, 'GB', 'ENG')
console.log('FNEWYEATR-HOLIDSY', jd.isHoliday(new Date('2012-01-02'))) //new year holiday
console.log('EASTER', jd.isHoliday(new Date('2022-04-17'))) //new year holiday