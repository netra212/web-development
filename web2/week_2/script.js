// Complex Types. 
// Arrays in JS ==> arrays/vec C++ => Vectors in rust => arrayList in Java. 
// Object in JS => Map in C++ => 

// Object in JS: key-value pairs. 
// each key is a string. 
// value is 

// Assignment 1
function greetUser(user){
    console.log("Hi " + user.name + " your age is " + 19);
}

let user = {
    name: "Netra",
    age: 19
}

greetUser(user)

// Assignment 2
// same thing.

// Assignment 3
function checkVotingRight(user) {
    
    console.log("Hi " + user.name + ".Your age is: " + user.age)

    if (user[age] >= 18){
        console.log("You are entitled for the voting.");
    }
    else{
        console.log("You are not entitled for the voting.");
    }
}

// Arrays of Objects.
// Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old and male. 

function arrUsers(usrArr){

    let arr2 = [];

    for (let i = 0; i < usrArr.length; i++){
        if (usrArr[i].age > 18 && usrArr[i].gender == "Male"){
            arr2.push(usrArr[i])
        }
    }
    return arr2;
}


let usrArr = [
    {
        name: "netra",
        age: 25,
        gender: "Male"
    }
    ,
    {
        name: "sita",
        age: 26,
        gender: "Female"
    }
    ,
    {
        name: "yagya",
        age: 23,
        gender: "Male"
    }
    ,
    {
        name: "sanam",
        age: 29,
        gender: "Male"
    }
]

arrUsers(usrArr)
