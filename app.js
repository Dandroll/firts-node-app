const logger = require('./logger');
const path = require('path');
const os = require('os');
const fs = require('fs');

//console.log(logger);
//logger.log('Daniel');

let pathObj = path.parse(__filename);

logger.log('path: ', pathObj);

let freeMem = os.freemem();
let totalMem = os.totalmem();

logger.log('free ', freeMem);
logger.log('total ', totalMem);

//forma sincrona
let rootDir = fs.readdirSync('./');


//forma correcta asincrona
fs.readdir('./', (err, files) => {
    (err) ? console.log(err) : console.log('async: ', files);
})

console.log('sync: ', rootDir);

