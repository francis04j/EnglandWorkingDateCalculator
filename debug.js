class loggableError extends Error {

}
const debug = function() {
    
    loggableError.prototype.write = function(args) {
        var suffix;
        if(this.lineNumber) {
            suffix = {'@': (this.fileName + ':' + this.lineNumber + ':1')}
        }

        if(this.stack) {
            suffix = this.stack.split('\n')[2]
        }
        
        args = args.concat([suffix])
        console.log(args)
    }

    return function(args) {
        new loggableError().write(args)
    }
}(); //self executing because it needs to run immediately with the provided arguments

export default debug;
/**
 * test
 * debug('THis is a line')
 */
 //debug('should show file and line 14');

 //debug('should show file and line 16');

 /**
  * console log this.stack under write method yields this
  * Error
    at file:///Users/8502342/Dev/EnglandWorkingDateCalculator/debug.js:13:9
    at file:///Users/8502342/Dev/EnglandWorkingDateCalculator/debug.js:21:2
    at ModuleJob.run (internal/modules/esm/module_job.js:170:25)
    at async Loader.import (internal/modules/esm/loader.js:178:24)
    at async Object.loadESM (internal/process/esm_loader.js:68:5)
  */