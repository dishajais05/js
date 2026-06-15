const  accountId = 899976
let accountEmail = "disha@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState ;

// accountId = 789012  // not allowed 
accountEmail = "dj@gmail.com"
accountPassword = "21212121"
accountCity ="barabanki"

console.log(accountId);
/* 
prefer not to use VAR 
because of issue of block scope and fuctional scope 
*/
console.table([accountId, accountEmail, accountPassword, accountCity , accountState]);

