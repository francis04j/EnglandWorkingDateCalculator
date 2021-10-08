import Holidays from 'date-holidays-parser'
import englandHolidays from './englandHolidays.js';

const hd = new Holidays(englandHolidays)

hd.init('GB', 'ENG')

Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

function isWeekend(maturityDate) {
 return (!(maturityDate.getDay() % 6));
}

function getValidDate(maturityDate) {
  let newDate = new Date(maturityDate);
  while(isWeekend(newDate) || hd.isHoliday(newDate)) {
    newDate = newDate.addDays(1) 
  }
  return newDate;
}

const maturityDate = '2032-08-28';
console.log('new date', getValidDate(maturityDate));