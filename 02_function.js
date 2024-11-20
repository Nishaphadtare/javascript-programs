
console.log("=========== Function with no arguments and no return value ============");

function show(){
    console.log("Invoke the function");
    
}
show()

console.log("=========== Function with arguments and no return value ============");
function multiply(n1, n2){
 console.log('Given numbers:', n1, n2);
  var result = n1 * n2
  console.log('multiplication is: ',result);
  
 
}
multiply(8, 9)
multiply(100, 300)
multiply(123.67, 90.77)
multiply(70)

// console.log("=========== Function with arguments and no return value ============");
// function addition(a1, a2){
//     console.log('given number is: ', a1, a2);
//     var result = a1 + a2;
//     console.log('addition is: ',result);
    
// }
// addition(100, 400)

console.log("=========== Function with no arguments and return value ============");
function demo(){
    console.log('Inside demo function');
    
    return 'Good Morning';
}
var res = demo()
console.log(res);

function square(num){
    console.log('Given number for square is:', num);
    var res = num * num;
    return res
}
var returnval = square(5)
console.log('Square is:', returnval);

var returnval = square(15)
console.log('Square is:', returnval);


