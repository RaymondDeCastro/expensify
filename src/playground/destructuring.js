/*
Object Destructuring

const person = {
    name: 'Raymond',
    age: 32,
    location: {
        city: 'San Jose',
        temp: 88
    }
};

const {name: firstName = 'Default', age} = person;
//const name = person.name;
//const age = person.age;

console.log(`${firstName} is ${age}.`);

const {city, temp: temperature} = person.location;
if (city && temperature) {
    console.log(`It's ${temperature} in ${city}.`);
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);
*/

/* Array destructuring */

const address = ['123 Easy Street', 'San Jose', 'California', '95132'];
const [, city, state = 'Oregon'] = address; 
console.log(`You are in ${city}, ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [hotCoffee, , cost] = item;
console.log(`A medium ${hotCoffee} costs ${cost}.`);