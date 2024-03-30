import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './firebase-config.js';

const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');

const handleRegisterForm = (e) => {
  e.preventDefault();
  const userEmail = document.getElementById('user-email');
  const userPw = document.getElementById('user-password');
  const userCfPw = document.getElementById('user-password-cf');

  if (userPw.value !== userCfPw.value) {
    alert('Password not match');
    return;
  }

  createUserWithEmailAndPassword(auth, userEmail.value, userPw.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      setTimeout(() => {
        window.location.href = './index.html';
      }, 1200);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode, errorMessage);
    });
};

const handleLoginForm = (e) => {
  e.preventDefault();
  const userEmail = document.getElementById('user-email');
  const userPw = document.getElementById('user-password');
  signInWithEmailAndPassword(auth, userEmail.value, userPw.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      setTimeout(() => {
        window.location.href = './index.html';
      }, 1200);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode, errorMessage);
    });
};

if (registerForm) {
  registerForm.addEventListener('submit', handleRegisterForm);
}

if (loginForm) {
  loginForm.addEventListener('submit', handleLoginForm);
}
