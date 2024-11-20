console.log(`Given string "   Hey you are doing good keep it up   "`);
console.log(" Steps: Please create a function 'stringHandsOn' With no arguments and no return value, pls don't forgot to invoke the function");

console.log("---------------------------------------------------------------------------------");
function stringHandsOn(){
    console.log("1. ----- Print the string as it is on console -----");
    var str = "   Hey you are doing good keep it up   ";
    console.log(` Given string is: "${str}"`);

    console.log("2. ----- Calculate length of the string -----");
    var strLength = str.length;
    console.log(` total length of given string is: ${strLength}`);

    console.log("3. ----- Remove the leading and trailing extra spaces and log string on console with it's length -----");
    var result = str.trim();
    console.log(` Remove extra Space from the given string: ${result.length}`);
    
    console.log("4. ----- Print the total number extra spaces count that is removed in step three -----");
    var beforTrim = str.length;
    var afterTrim = result.length
    var res = beforTrim - afterTrim
    console.log(` Befor trim = ${str.length};  After trim = ${result.length};  removed Extra spaces are = ${res} `);  

    console.log("5. ----- Print the first and last character on same line after trim i.e after step 3-----");
    var firstChar = result.charAt(0)
    var lastChar = result.charAt(result.length-1);
    console.log(` First character of given sting is: ${firstChar} and Last character of given sting is: ${lastChar}`);
    
    console.log("6. ----- Print the count the total words available in the sting after step3-----");
    var res = str.split(" ");
    // var totalWords = res.length;
    console.log(` Given string is: ${str} Total number of words are: ${res.length} `);

    console.log("7. ----- Print the index of words 'good' from hte given sting-----");
    var res = result.indexOf("good")
    console.log(` Index of given string is: ${res}`);

    console.log("8. ----- Print the substring starting from index 22 using substring()-----");
    var sub = str.substring(22);
    console.log(` Substring of given string is: ${sub}`);
       

    console.log("9. ----- Check is string ends with word 'up' after step3-----");
    var endsWithMethod = result.endsWith("up");
    console.log(` Given string ends with: ${endsWithMethod}`);

    console.log("10. ----- Check is string starts with word 'Hey' after trimming -> after step3 O/P string value-----");
    var starsWithMethod = result.startsWith("Hey");
    console.log(` Given string is starts with: ${starsWithMethod}`);

}
stringHandsOn();