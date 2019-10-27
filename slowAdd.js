const slowAdd = (a, b) => {
    setTimeout(() => {
        console.log(a+b);
    }, 5000);
};

slowAdd(3, 3);
slowAdd(4, 4);

/**
 * Event loop Logic:
 *
 * When the call stack gets empty:
 * 
 * While the queue is not empty:
 * event = dequeue an event
 * if there is a callback:
 *  call the event's callback 
 */

const slowAddSetImmediate = (a, b) => {
    setTimeout(()=>{
        console.log(a+b);
    }, 0)
};

/**
 * Despite of the timeout being 0 seconds
 * callback is not executed immediately 
 * because of above event loop logic
 * 
 * This is exactly same logic setImmediate follows.
 */


/**
 * process.nextTick()
 * Not related to event loop
 * executes after the current operation and 
 * before event loop begins.
 */