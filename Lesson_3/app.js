// Spread

const myArr1 = [1, 2, 3];
const myArr2 = [4, 5, 6];

// Mo rong mang
const myArr3 = [4, 10, ...myArr1];

// Sao chep mang
const myArr4 = [...myArr1];

// Mo rong doi tuong
const obj1 = {
  class: 8,
  isHandsome: true,
};

const obj2 = {
  name: 'Duc Nhan',
  age: 14,
};

const ducNhanInfo = { ...obj1, ...obj2 };

// console.log(ducNhanInfo);

// Sao chep doi tuong
const obj1Copy = { ...obj1 };

// function logger(log) {
//   console.log(log);
// }

// logger('Hello Ngoc Nghi');

let name = 'Ngoc Nghi';
let age = 15;

let info = 'Ten: ' + name + '. Tuoi: ' + age;

let info2 = `Ten: ${name}. Tuoi: ${age}`;
// console.log(info2);

// rest
const myArr5 = [1, 2, 3, 4, 5, 6, 7];

const [first, second, ...rest] = myArr5;
// console.log(first);
// console.log(second);
// console.log(rest);

import { number } from './main.js';
// console.log(number);

// OOP
// Object Oriented Programing
// Lập trình hướng đối tượng

// Function Constructer
// function Animal(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Animal.prototype.speak = function () {
//   console.log(`${this.name} makes a noise`);
// };

// const meozz = new Animal('Dau', 4);

// meozz.speak();

// Class
// Đóng gói và trìu tượng
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  makeSound() {
    console.log(`${this.name} makes "${this.sound}" sound`);
  }
}

const meozz = new Animal('Đậu', 'Meozz');
const dog = new Animal('Chó', 'Gâuuuuu');
meozz.makeSound();
dog.makeSound();

//3. Đa hình, Kế thừa

class Dogs extends Animal {
  // Đa hình
  makeSound() {
    console.log('Gâu gâu gâu');
  }
}

const dog2 = new Dogs('Chó 2', 'Ẳng');
dog2.makeSound();
