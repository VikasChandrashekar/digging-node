const slowAdd = (a, b) => {
    setTimeout(() => {
        console.log(a+b);
    }, 5000);
};

slowAdd(3, 3);
slowAdd(4, 4);

const slowAddSetImmediate = (a, b) => {
    setTimeout(()=>{
        console.log(a+b);
    }, 0)
};

/**
 * Despite of the timeout being 0 seconds
 * callback is not executed immediately 
 * because of event loop logic
 * 
 * This is exactly same logic setImmediate follows.
 */

