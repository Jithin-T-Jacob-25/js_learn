const accountId = 1;
let accountEmail = "jithin@gmail.com";
var accountPassword = "12345";
accountCity = "Surat";
let accountState;

// accountId = 2; // not allowed
// accountEmail = "j@gmail.com";
// accountPassword = "45678"; 
// accountCity = "Kottayam";
/*
Prefer not to use var because of issue in block scope and functional scope.
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
