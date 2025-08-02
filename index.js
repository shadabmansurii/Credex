const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');
const random =  require('random');
const FILE_PATH = './data.json';

const makeCommit = n  =>{
    if(n===0) return simpleGit().push();
    const x = Math.random(0,54);
    const y = Math.random(0,6);
    
    const DATE = moment()
    .subtract(1, 'y')     // Subtract 1 year
    .subtract(1, 'd')     // Subtract 1 day
    .subtract(x, 'w')     // Subtract x weeks
    .subtract(y, 'd')     // Subtract y days
    .format();

const data = {
    date : DATE
}
console.log(DATE);
jsonfile.writeFile(FILE_PATH ,  data, ()=>{
    simpleGit().add([FILE_PATH]).commit(DATE, {'--date' : DATE},
        makeCommit.bind(this, --n));
});
}

makeCommit(20);


