import * as firebase from 'firebase';
import moment from 'moment';
const config = {
    apiKey: "AIzaSyCzD4aZ8YB6B7En5unG4WQfN4TxgNNj7GU",
    authDomain: "expensify-1cf9c.firebaseapp.com",
    databaseURL: "https://expensify-1cf9c.firebaseio.com",
    projectId: "expensify-1cf9c",
    storageBucket: "expensify-1cf9c.appspot.com",
    messagingSenderId: "692764449370"
  };

firebase.initializeApp(config);

const database = firebase.database();

database.ref('expenses')
  .on('value', (snapshot) => {
    const output= [];
    snapshot.forEach((childSnapshot)=> {
        output.push({
            ...childSnapshot.val(),
            id: childSnapshot.key
        });
    });

    console.log(output);
  });

database.ref('expenses').on('child_removed',
(snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_changed',
(snapshot) => {
    console.log('child changed ', snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_added',
(snapshot) => {
    console.log('child added ', snapshot.key, snapshot.val());
});

// setTimeout(()=> {
//     database.ref('expenses')
//     .push({ 
//         description: 'test', 
//         amount: 12300
//     });
// }, 3500);

// const expenses = [
//     {id: '1', description: 'Gum', note: '', amount: 195, createdAt: 0},
//     {id: '2', description: 'Rent', note: '', amount: 109500, createdAt: moment(0).subtract(4, 'days') .valueOf()},
//     {id: '3', description: 'Credit Card', note: '', amount: 4500, createdAt: moment(0).add(4, 'days').valueOf()},
// ];
// expenses.forEach((item)=>{
//     database.ref('expenses').push(item);
// });


// database.ref('notes').push({
//     title: 'other',
//     note: 'learn react'
// });

// database.ref('notes/-LKXLj5UlmEOJ3a05yE9').remove();

// setTimeout(() => {
//     database.ref().update({
//         name: 'Nate',
//         'job/title': 'Soft Dev',
//         'job/company': 'Monetary'
//     });
// }, 3500);

// setTimeout(() => {
//     database.ref('age').set(29);
// }, 3500);


// setTimeout(() => {
//     database.ref().off(subscription);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500);

// database.ref('location/city').once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   }).catch((e) => {
//     console.log('Error fetching data ', e);
//   });

// database.ref().set({
//     name: 'Nate Tregillus',
//     age: 45,
//     stressLevel: 6,
//     job:{ 
//         title: 'Software Developer', 
//         company: 'Google'
//     },
//     location: {
//         city: 'Silverton',
//         country: 'USA'
//     }
// }).then(()=>{
//     console.log('database is reset.')
// })
// .catch((e) => {
//     console.log('database reset failed: ', e);
// });

// database.ref().update({
//     stressLevel : 9,  
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'

// });

// database.ref('isSingle').remove()
// .then(() => {
//     console.log('loging success!');
// }).catch((e)=> {
//     console.log('uhoh, remove failed! ', e );
// })