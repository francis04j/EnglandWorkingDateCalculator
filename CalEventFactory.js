/* eslint spaced-comment:0 */

import CalEvent from './CalEvent.js'
import Easter from './Easter.js'

// --- pre-processor instructions for prepin ---
// #ifndef nojulian
//import Julian from './Julian.js'
// #endif


export default class CalEventFactory {
  constructor (opts) { //{ fn: 'gregorian', year: undefined, month: 1, day: 1 }
    switch (opts.fn) {
      case 'easter':
        return new Easter(opts)
      // #ifndef nojulian
      // case 'julian':
      //   return new Julian(opts)
      // #endif
      default:
        return new CalEvent(opts)
    }
  }
}
