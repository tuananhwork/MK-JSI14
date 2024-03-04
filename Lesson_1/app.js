// Biến: Nơi lưu trữ dữ liệu

// var x = 10;   // < ES6 ECMAScript
// const y = 100; // function, array, object, element, hang so
// let z = 1000;

// x = 20;
// z = 2000;

// ++z;

// console.log(z);

// let fisrtname = 'Anh';
// let lastname = 'Tuan';

// let fullname = fisrtname + ' ' + lastname;

// console.log(fullname);

// let isHuman = true
// let score = -10

// if (score < 0) {
//     isHuman = false
// }

// let age = 24;
// let isHuman = true;

// if (age >= 18 && isHuman) {
//   console.log('La nguoi truong thanh');
// } else if (age < 18 && isHuman) {
//   console.log('La thanh thieu nien');
// } else if (!isHuman) {
//   console.log('Khong phai con nguoi');
// }

// Tham so

// Declaration Function
function hello(name, age) {
  //   console.log('Hello ' + name + '. Ban ' + age + ' Tuoi.');
  return `Hello ${name}. Ban ${age} Tuoi.`;
}

let test = hello('Anh', 16);
console.log(test);

// hello('Thanh Dat', 16);
// hello('Gia Binh', 16);

// Expession Function
const sum = function (a, b) {
  return a + b;
};

let result = sum(10, 100);

console.log(result);

// Arrow Function
const sum2 = (a, b) => {
  return a + b;
};

console.log(sum2(10, 11));

const weight = 50;
const height = 170;

const BMI = (weight, height) => {
  return weight / (2 * height);
};

console.log(BMI(weight, height));
