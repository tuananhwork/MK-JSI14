import { app } from './firebase-config.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js';

const auth = getAuth(app);

const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');

const googleBtn = document.getElementById('google-btn');
const githubBtn = document.getElementById('github-btn');

console.log(googleBtn, githubBtn);

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
      }, 1000);
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
      }, 1000);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode, errorMessage);
    });
};

const handleGoogleLogin = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(user);

      setTimeout(() => {
        window.location.href = './index.html';
      }, 1000);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      alert(errorCode, errorMessage);
    });
};

const handleGithubLogin = () => {};

if (registerForm) {
  registerForm.addEventListener('submit', handleRegisterForm);
}

if (loginForm) {
  loginForm.addEventListener('submit', handleLoginForm);
}

googleBtn.addEventListener('click', handleGoogleLogin);
githubBtn.addEventListener('click', handleGithubLogin);

export { onAuthStateChanged, signOut, getAuth };
