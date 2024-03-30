// Mảng: Là tập hợp các phần tử

// const: function, hang so, mang, object, dom-element

// const arr1 = [1, 2, 3];
// const arr2 = [4, 7, 9];

// const arr3 = arr1.concat(arr2);

// console.log(arr3);

// Lam viec voi Object

// Object constructors

// function Student(name, age = 16, isHandsome = true) {
//   this.name = name;
//   this.age = age;
//   this.isHandsome = isHandsome;
// }

// const giaBinhStudent = new Student('Gia Binh');
// const giaAnStudent = new Student('Gia An', 17, false);
// console.log(giaAnStudent);

// const myArr = ['Anh', 'Em', 'Chu', 'Bac'];

// for (let index = 0; index < myArr.length; index++) {
//   console.log(myArr[index]);
// }

// const form = document.getElementById('form');
// const nameInput = document.getElementById('name');
// const suggestionInput = document.getElementById('suggest');

// const handleSubmit = (e) => {
//   e.preventDefault();
//   const username = nameInput.value;
//   const userSuggestion = suggestionInput.value;

//   //   localStorage.setItem('username', username);
//   //   localStorage.setItem('userSuggestion', userSuggestion);
// };

// form.addEventListener('submit', handleSubmit);

const btn = document.getElementById('btn');

const handleChangeDog = () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((res) => res.json())
    .then((data) => {
      const img = document.getElementById('img');
      const imgUrl = data.message;
      img.src = imgUrl;     
    });
};

btn.addEventListener('click', handleChangeDog);

