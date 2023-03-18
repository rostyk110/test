// Adding elements at the end of an array
// Declaring and initializing arrays
var number_arr = [ 10, 20, 30, 40, 50 ];
var string_arr = [ "piyush", "gourav", "smruti", "ritu" ];

// push()
// number_arr contains [10, 20, 30, 40, 50, 60]
number_arr.push(60);

// We can pass multiple parameters to the push()
// number_arr contains
// [10, 20, 30, 40, 50, 60, 70, 80, 90]
number_arr.push(70, 80, 90);

// string_arr contains
// ["piyush", "gourav", "smruti", "ritu", "sumit", "amit"];
string_arr.push("sumit", "amit");

// Printing both the array after performing push operation
console.log("After push op " + number_arr);
console.log("After push op " + string_arr);