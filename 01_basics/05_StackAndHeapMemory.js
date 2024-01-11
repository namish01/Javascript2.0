// All premitive data-type uses Stack Memory and use the concept of call by value which means that 
// copies are made and changes are not reflected to the original value:


// let projectOne="Spoitfy-clone";
// let projectTwo=projectOne
// projectTwo="portfolio-website";

// console.log(projectOne)
// console.log(projectTwo)

// Non -Premitive also Known as referrence data Type 
// changes reflcets due to reffernece:
let userOne={
    email:"user@gmail.com",
    designation:"SDE1"

}

let userTwo=userOne
userTwo.email="namish@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)