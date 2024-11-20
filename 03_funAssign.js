
console.log("WAF 'BankDetails' with 4 arguments bankName, accountnum, location, pinCode");
console.log("1.1 Log these values on same line on console as it is with meaningful message");
console.log("---------------------------------------------------------------------------------------------");

console.log("Invoke function as");

console.log("1.2. bankDetails: 'city Bank', 3456782345, 'Pune', 431202");
console.log("1.2. bankDetails: 'Axis Bank', 7856782345, 'Mumbai' 441202");
console.log("1.2. bankDetails: 'city Bank', 3456782345, 'Pune', 431202");

console.log("---------------------------------------------------------------------------------------------");

function bankDetails(bankName, accountnum, location, pinCode){
    console.log('My bank details: ', bankName, accountnum, location, pinCode);

}
bankDetails("BFI, 0731210001098, Ankoli, 413253");
bankDetails("'city Bank', 3456782345, 'Pune', 431202")
bankDetails("'Axis Bank', 7856782345, 'Mumbai' 441202")
bankDetails("'HDFC Bank', 8956782345, 'Pune' 631202, 'Open'")








