const fs = require('fs');

let bar;

const printNextTick = () => console.log('bar', bar);

const someAsyncApiCall = (cb) => process.nextTick(cb);

const useImportedTweets = (error, data) => {
    const tweets = JSON.parse(data)
    console.log(tweets.tweet);
};

const immediately = () => console.log('This is immediately');

const printHello = () => console.log('Hello');

const blockFor500ms = () => {};

setTimeout(printHello, 0);

someAsyncApiCall(printNextTick);

fs.readFile('./tweets.json', useImportedTweets);

blockFor500ms();

console.log('Me first');

setImmediate(immediately);

bar = 1;

