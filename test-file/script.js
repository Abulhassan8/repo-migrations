'use strict';

// const convert = (string) => {
//   const [first, last] = string.toLowerCase().trim().split('_');
//   const result = first + last.replace(last[0], last[0].toUpperCase());
//   return result;
// }
// let result = '';

// document.getElementById('btn').addEventListener('click', () => {
//   const inputText = document.getElementById('input-box').value;
//   const inputValues = inputText.split('\n');

//   for(let i = 0; i<inputValues.length; i++ ) {
//     let symbol = '✅'.repeat(i+1);
//     result +=`${convert(inputValues[i])} ${symbol} \n`;
//   }
//   console.log(result);

//   document.getElementById('result').textContent = result;
// })

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

let output;
let length = 0;

const result = flights.split('+');
for (let operation of result){
  let op = operation.split(';');
  const firstElement = op[0].includes('Delayed') ? '🛑 ' : '';
  op.unshift(firstElement);
  output = op[0]+op[1].replace('_', ' ').trim() + ' from '+ op[2].slice(0,3).toUpperCase()+' to '+ op[3].slice(0,3).toUpperCase() + ' (' + op[4] + ')';
  length = output.length > length ? output.length : length;
}

const bookings = [];

const createBooking = (flightNum, numPassangers, price) => {
  const booking = {
    flightNum,
    numPassangers,
    price
  }
  console.log(booking);
  bookings.push(booking);
}

createBooking('LH123');

// (async () => {
//   let timeTakenInMillisecs = 0;
//   let totalAttempts = 0;
  
//   const limit = 100;
  
//   for(let i=0; i<limit; i++) {
//     const start = window.performance.now();
//     try {
//       await fetch('https://stag.lifion.oneadp.com/api/identity-service/v0/clients/002/attributes');
//     } catch(err){
//       console.log(err);
//     }
    
//     const end = window.performance.now();
  
//     timeTakenInMillisecs += (end-start);
//     totalAttempts += 1;
//    }
  
//    console.log(timeTakenInMillisecs / totalAttempts, timeTakenInMillisecs, totalAttempts);
// })();


