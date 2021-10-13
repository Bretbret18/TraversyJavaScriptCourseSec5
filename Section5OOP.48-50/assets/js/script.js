// USING OBJECT.CREATE // ***
// const personPrototypes = {
//     greeting: function() {
//         return `Hello there ${this.firstName} ${this.lastName}`;
//     },
//     getMarried: function(newLastName) {
//         this.lastName = newLastName;
//     }
// };

// // takes in prototypes
// const mary = Object.create(personPrototypes);
// mary.firstName = 'Mary';
// mary.lastName = 'Williams';
// mary.age = 30;

// mary.getMarried('Thompson');

// console.log(mary.greeting());

// const brad = Object.create(personPrototypes, {
//     firstName: {value: 'Brad'},
//     lastName: {value: 'Traversy'},
//     age: {value: 36}
// });

// console.log(brad.greeting());

// USING OBJECT.CREATE END // ***
// ES6 CLASSES // ***

// A class is considered 'syntactic sugar'... though it
// is created in a different manner, it is still the same
// as making an Object
// class Person {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.birthday = new Date(dob);
//     }

//     greeting() {
//         return `Hello there ${this.firstName} ${this.lastName}`;
//     }

//     calculateAge() {
//         // Again, this is a formula to calculate a person's
//         // current Age.
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff);
//         // Math.abs = Math.absolute()
//         return Math.abs(ageDate.getUTCFullYear() - 1970);
//     }

//     getsMarried(newLastName) {
//         this.lastName = newLastName;
//     }

//     static addNumbers(x, y) {
//         return x + y;
//     }
// };

// const mary = new Person('Mary', 'Williams', '11-13-1980');

// mary.getsMarried('Thompson')

// console.log(mary);
// console.log(mary.calculateAge());

// console.log(Person.addNumbers(1, 3));

// ES6 CLASSES END // ***
// SUB CLASSES // ***

// Inheritance
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;

    }

    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}

class Customer extends Person {
    constructor(firstName, lastName, phone, membership) {
        super(firstName, lastName);

        this.phone = phone;
        this.membership = membership;
    }

    static getMembershipCost() {
        return 500;
    }
}

const john = new Customer('John', 'Doe', '555-555-5555',
'Standard');

console.log(john);
console.log(john.greeting());

// No greeting in Customer but we are still able to use
// that function because we extended Person{}

// because we are using a static method, we use the actual
// class name
console.log(Customer.getMembershipCost());

// using Person.getMembershipCost() would not work because
// we extended Person, not Customer


// SUB CLASSES END // ***