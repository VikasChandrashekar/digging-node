/**
 * Import
 */
const eventEmitter = require('events');

/**
 * Extend
 */
class Logger extends EventEmitter {};

/**
 * init
 */
const logger = new Logger();

/**
 * emit;
 */
logger.emit('event');

/**
 * addListener
 */
logger.on('event', listenerFunc);

/**
 * once 
 */
logger.once('event1', doOnceFunction);