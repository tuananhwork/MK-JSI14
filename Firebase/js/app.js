import { getAuth, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js';

import { app } from './firebase-config.js';

const auth = getAuth(app);

const changeNavlistAndHandleSignOut = () => {
  const navlistEl = document.querySelector('nav .navlist');

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const username = user.displayName || 'User';
      navlistEl.innerHTML = `
        <li><a href="index.html">Home</a></li>
        <li><a href="upload-product.html">Upload</a></li>
        <li><a href="#">${username}</a></li>
        <li><a href="#" id="logout-btn">Log out</a></li>
      `;

      const logoutBtn = document.getElementById('logout-btn');
      logoutBtn.addEventListener('click', () => {
        signOut(auth)
          .then(() => {
            console.log('Logout Success');
          })
          .catch((err) => {
            alert(err);
          });
      });
    } else {
      navlistEl.innerHTML = `
        <li><a href="index.html">Home</a></li>
        <li><a href="upload-product.html">Upload</a></li>
        <li><a href="login.html">Login</a></li>
        <li><a href="signup.html">Signup</a></li>
      `;
    }
  });
};

changeNavlistAndHandleSignOut();
