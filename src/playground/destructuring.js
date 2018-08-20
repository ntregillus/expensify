console.log('starting destructuring.js');

const person = {
    name: 'Nate',
    age: 35,
    location: {
        city: 'Durango',
        temp: '85'
    }
};
const {name, age} = person;
console.log(`${name} is ${age}.`);

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name:publisherName = 'Self-Published' } = book.publisher;
console.log(`book.publisher is ${publisherName}`);

const address = ['13 Delwood St', 'Durango', 'Colorado', '81301'];
const [ , city = 'Rochester', state = 'New York'] = address;
console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75' ];
const [itemName, , medPrice] = item;
console.log(`a medium ${itemName} costs ${medPrice}`);