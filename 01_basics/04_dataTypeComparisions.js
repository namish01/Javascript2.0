// No problem in using these types of comparisions as the data types are same :
// console.log(1>2);
// console.log(1<2);
// console.log(1>=2);
// console.log(1<=2);
// console.log(1!=2);
// console.log(1==2);



// dont use these types of comparision as it dont give error in js it just start the coversion
// in the eg below (1) 1 is conveted into a number and then being compared and same with 2 in(2)
console.log(2>"1")//TRUE
console.log("2">1);//TRUE



// In the EG below (3) is representing true for a reason that is equality and greater than works differently
// comparision convert null to a no in zero that why true in (3):
console.log(null>0)//false
console.log(null==0)//false
console.log(null>=0)//true

console.log(undefined==0)
console.log(undefined>0)
console.log(undefined<0)

// STRICT CHECK:
console.log("2"===1)