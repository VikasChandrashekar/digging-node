process.on('message', msg => console.log(`message from parent:\n ${JSON.stringify(msg)}`));

for(let i=0; i<= 10; i++){
    process.send({counter: i});
}