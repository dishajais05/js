let myDate = new Date
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// // console.log(typeof myDate);
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.getTimezoneOffset());

let myCreatedDate = new Date(2023,0,23,5,3) //Date(2023,0,23)          output
// console.log(myCreatedDate.toLocaleString());//toDateString());---   mon jan 23 2023

 let myNewCreateDate = new Date("2023-01-14") //month agar 00 hui to invalid date aayega
console.log(myNewCreateDate.toLocaleString());

//if Date("14-01-2023") output - 14/01/2023 12:00:00 AM

// TIMESTAMP 

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());


// // convert into seconds

// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
// console.log(newDate.getMonth()+1);  //6
// console.log(newDate.getDay());  //5
// console.log(newDate.getDate());  //19
// console.log(newDate.getFullYear());  //2026
// console.log((newDate.getHours())); //13
// console.log(newDate.getMilliseconds());  //784
// console.log(newDate.getMinutes()); //18
// console.log(newDate.getSeconds()); //31
// console.log(newDate.getTime());   //1781874987469
// console.log(newDate.getTimezoneOffset()); //0
// console.log(newDate.getUTCDate());  //19
// console.log(newDate.getUTCDay());  //5
// console.log(newDate.getUTCFullYear());  //2026
// console.log(newDate.getUTCHours());  //13

newDate.toLocaleString('default',
    {
    weekday : "narrow"
})















