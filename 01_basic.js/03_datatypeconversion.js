let score = true
// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33" => NaN
// true => 1 , false => 0 
// null => 0 , undefined => NaN 

let isLoggedIn = "disha" 
let booleanIsLogged = Boolean(isLoggedIn)
console.log(booleanIsLogged);

// 1 => true , 0 => false 
// "" => false , "disha" => true 

let someNumber = 33
let stringNumber = String(someNumber)
console.table([typeof stringNumber, stringNumber])
