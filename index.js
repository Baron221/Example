//Module package CORE
// setTimeout(function(){
//     console.log("Ishga Tushdi")
// },5000);



// let number  = 1;
// setInterval(function(){
//     console.log(`Interval ham ishlayapdi ${number++} `)
// }, 1000)


// const fs = require("fs");
// const data = fs.readFileSync('./input.txt', 'utf8');
// console.log(data);

// fs.writeFileSync("./input.txt", `${data} \n\t\t by Bekzod Ali`)
// const new_Data = fs.readFileSync("./input.txt", "utf-8" );
// console.log(new_Data)

//Module package External
// const moment =require('moment');



// setInterval(function(){
//     const time = moment().format();
//     console.log(`hozirgi vaqt ${time}`)
// },5000)


// const inquirer = require("inquirer");
// inquirer
// .prompt([{type:"input",name:"son", message:"raqamni kiriting: "}]) 
// .then((answer) => {
//     console.log("Man kiritgan raqam qiymati : ", answer.son);
// })
//  .catch((err) => console.log(err))

// const validator =require("validator");
// const test =validator.isEmail("foobar@bar.com");
// const test1 =validator.isIP("122.111.33.32")
// const test2 =validator.isInt("44")
// console.log(`test qilingan qiymat: ${test} va ${test1} va ${test2}`)


// const {v4:uuidv4} =require('uuid');
// const random = uuidv4();
// console.log("random: " ,random)


// const chalk =require('chalk');
// const log = console.log;
// log(chalk.blue('Hello') + 'World' + chalk.red('!'));




//Module package FILE

// const calculate = require('./hisob.js');
// const result = calculate.kopaytirish(50,60);
// console.log(`Natija : ${result}`);
// console.log('*******************');

// const substruction = calculate.ayrish(50,25);
// console.log(`Ayrish natijasi : ${substruction}`);
// console.log("*******************");

// const devision = calculate.bolish(90,8);
// console.log(`Bo'lish natijasi : ${devision}`);

const Account = require('./account');

Account.tellMeTime();
const myNewAcc = new Account('Baxromjon', 900000 ,10010214158);
console.log(myNewAcc.tellMeMyBalance());
console.log(myNewAcc.makeDeposit(50000));
console.log(myNewAcc.giveMeDetails())
