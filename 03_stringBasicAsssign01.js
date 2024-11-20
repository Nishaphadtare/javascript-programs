
console.log("Please have the function with name -> stringBasics(), No arguments and no teturn is required");
console.log(`1. My dream company is "Your deram company name" log on console`);
console.log(`----2. Creat 3 variables for my Hobbies are, "Your Hobby1","Your Hobby2","Your Hobby3"----`);
console.log("----2.1 Log all hobbies on console on same line----");
console.log("----2.2 Sum the total number of characters that is available in hobby1, hobby2 and hobby3 and log on console----");
console.log("************************ ANS **************************");


function stringBasics(){
    var company = "TCS"
    console.log(`1.  My dream company name is: ${company}`);
     var hobby1 =  "Travelling";
     var hobby2 = "Reading";
     var hobby3 = "drawing";

     console.log(`2.1 My hobbies are: ${hobby1}, ${hobby2}, ${hobby3}.`);
     var totalNumberOfChar = hobby1 + hobby2 + hobby3;
     console.log(`2.2 Total Character available in my hobbies is: ${totalNumberOfChar.length}`);   

}
stringBasics()
