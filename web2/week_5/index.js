// map, filter, arrow function.

function sum(a, b){
    return a + b;
}

const sum = (a, b) => {
    return a + b;
}

let sum1 = sum(1, 2);
console.log(sum1);

// Given an array, give me back a new array in which every value is multiplied by 2. 
// [1, 2, 3, 4, 5]
// [2, 4, 6, 8, 10]

const input = [1, 2, 3, 4, 5]
const newArray = [];

for (let i = 0; i < input.length; i++){
    newArray.push(input[i]*2);
}
console.log(newArray);

// Other solution.
function transformArray(i) {
    return i * 2;
}

const ans = input.map(transformArray);
console.log(ans);

// Filtering.
// Given an input array, give me back all the even values from it. 
const arr = [1, 2, 3, 4, 5]

const newArr = [];
for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 == 0){
        newArr.push(arr[i]);
    }
}

console.log(newArr);

// With filter.
const ans1 = arr.filter(function (n) {
    if (n % 2 == 0) {
        return true;
    } else {
        return false;
    }
});

console.log(ans1);

