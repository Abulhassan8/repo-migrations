'use strict';

// const Person = function(firstName, birtYear) {
//   this.firstName = firstName;
//   this.birtYear = birtYear;
// };
// const person1 = new Person('Abul', 2025);
// const arr = [1,2,3,4];

// const Car = function(make, speed) {
//   this.make = make;
//   this.speed = speed;
// }

// const rx4 = new Car('Mazda', 10);
// Car.prototype.accelerate = function() {
//   this.speed = this.speed + 10;
//   return this.speed;
// };
// console.log("Updated speed: ", rx4.accelerate());
// console.log(rx4);
// Car.prototype.brake = function() {
//   this.speed = this.speed - 5;
//   return this.speed;
// };
// console.log("Updated speed: ", rx4.brake());
// console.log(rx4);

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  get getSpeedForUs() {
    return this.speed / 1.6;
  }

  set setSpeedForUs(speed) {
    this.speed = speed * 1.6;
  }
};

const ElectricCar = function(make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

ElectricCar.prototype = Object.create(Car.prototype);

ElectricCar.prototype.chargeBattery = function (charge) {
  this.charge = charge;
}
const tesla = new ElectricCar('v1', 100, 70);
console.log(tesla);

// const skyliner = new Car('Nissan', 40);
// console.log(skyliner);
// console.log(skyliner.getSpeedForUs);
// skyliner.setSpeedForUs = 50;
// console.log(skyliner.getSpeedForUs);
// console.log(skyliner);
// class Person {
//   constructor(firstName, lastName, birthYear) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2300 - this.birthYear);
//   }
// };

// const jack = new Person('Jack','Sullivan', 1999);
// jack.calcAge();
// console.log(jack)

// const account = {
//   name: 'Abul',
//   cash: [10, 20, 30, 40],

//   get getLastEntry() {
//     return this.cash.slice(-1).pop();
//   },

//   set setNewEntry(entry) {
//     this.cash.push(entry)
//   },
// }

// const result = account.getLastEntry;
// console.log(result);
// account.setNewEntry = 50;
// console.log(account);
