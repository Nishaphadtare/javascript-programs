
console.log('1. Write any two functions with no agrguments and no return value as per your choice & log message on console');

function msg(){
    console.log('Hii...........Good morning');
}
msg()

function demo(){
    console.log('I am learning Angular');  
}
 demo()
 
console.log('--------------------------------------------------------------------------------------------------');
console.log('WAF -> PersoanlDetails with arguments namely firstName, lastName, collegeName arguments and log on console inside a function. Dont forgot to call it');

function persoanlDetails(firstName, lastNamem, collegeName){
    console.log('My First name is:', firstName);
    console.log('My Last name is:', firstName);
    console.log('My College name is:', firstName);

}
persoanlDetails("Nisha, Phadtare, DSG College")

console.log('--------------------------------------------------------------------------------------------------');
console.log("WAF with 3 parameters or arguments and it should log the addition");
console.log("3.1. function name: addthreeValues");
console.log("3.2. call the function for values -> 10.23, 600, 40");
console.log("3.3. invoke the same function for values 'Hello', 'Good' 'Morning' ");

function addthreeValues(arg1, arg2, arg3){
    console.log("Addition of three numbers is: ", arg1, arg2, arg3); 
}
addthreeValues(10.23, 600, 40);
addthreeValues("Hello", "Good", "Morning") 


