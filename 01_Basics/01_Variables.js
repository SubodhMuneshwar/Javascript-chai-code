const accountId = 220922 //accountId,account_ID all are one and the same but prefer accountId
let accountEmail = "subodh@google.com" 
var accountPass = "7355608" 
accountCity = "Mumbai" //this is also used but it is not recommended as it is bad coding 
let accountState; //semi-colon daale ya na daale koi farak nai padta

//There are 4 ways to declare some constants or varibles. This is done to assign some values for these variables into the memory.

/*
  PREFER NOT TO USE VAR TO DECLARE VARIABLES
  DUE TO THE PROBLEM OF BLOCK SCOPE AND FUNCTIONAL SCOPE
*/

/*
  We cannot change the constant which is accountId like accountId = 1234
*/

accountEmail = "sub.subodh.com"
accountPass ="2222"
accountCity="Kerela"

console.table([accountId, accountEmail, accountPass,accountCity,accountState]);
