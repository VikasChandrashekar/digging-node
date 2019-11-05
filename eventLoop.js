const fs = require('fs');

//2.
let bar;

const printNextTick = () => console.log('bar', bar);

const someAsyncApiCall = (cb) => process.nextTick(cb);

//1.
const immediately = () => console.log('This is immediately');

const printHello = () => console.log('Hello');

const blockFor500ms = () => {};

const useImportedTweets = (error, data) => {
    const tweets = JSON.parse(data)
    console.log(tweets.tweet);
};

//execute context
setTimeout(printHello, 0);

fs.readFile('./tweets.json', useImportedTweets);

blockFor500ms();

console.log('Me first');

setImmediate(immediately);

//2.
someAsyncApiCall(printNextTick);

bar = 1;

