// ** OBJECT ORIENTED PROGRAMMING ** //
// CONSTRUCTORS AND THE 'THIS' KEYWORD //

// Object
// const brad = {
//     name: 'Brad',
//     age: 30,
// };

// console.log(brad);
// console.log(brad.age);

// Constructor function
// Person constructor
// // 'this' keyword refers to current instance of the 
// // object. In this case, it pertains to the person
// // (this function's scope)
function Person(name, dob) {
    this.name = name;
    // logging 'this' within function gives us both of the
    // objects that have been instantiated 
    // console.log(this);
    // this.age = age;
    this.birthday = new Date(dob);
    // create method in constructor
    // method is function inside of an object
    // NOTE: this is a common formula to get an age from
    // a birthday
    this.calculateAge = function() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
};

// const bret = new Person('Bret', 31);
// const john = new Person('John', 24);

// console.log(bret);
// console.log(john);

// console.log(john.age);

const brad = new Person('Brad', '9-10-1981');
console.log(brad);
console.log(brad.calculateAge());

// 'this' outside of a function
// we get the window object when we use 'this' globally
// console.log(this.alert(1));

// CONSTRUCTORS AND THE 'THIS' KEYWORD END //
// BUILT IN CONSTRUCTORS //
// String

const name1 = 'Jeff';
// name 2 gives 'Jeff' as an object
const name2 = new String('Jeff');

// name2.foo = 'bar';
// console.log(name2);

console.log(typeof name2);
// name2 type is not equal to string, so NO
// double equal just checks value of Jeff, not checking
// string type
if(name2 === 'Jeff') {
    console.log('YES');
} else {
    console.log('NO');
};

// Examples of Constructors
// Number
const num1 = 5;
const num2 = new Number(5);
// console.log(typeof num2);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

// console.log(bool2);

// Function
const getSum1 = function(x, y) {
    return x + y;
};

// console.log(getSum1(1, 1));

const getSum2 = new Function('x', 'y', 'return 1 + 1');
// console.log(getSum2);

// Object
const john1 = {name: "John"};
const john2 = new Object({name: "John"})
console.log(john2);

// Arrays
const array1 = [1,2,3,4,5];
const array2 = new Array(1,2,3,4,5);

console.log(array2);

// Regular Expressions
const re1 = /\w+/;
const re2 = new RegExp('\\w+');

console.log(re1);
console.log(re2);

// BUILT IN CONSTRUCTORS END //

