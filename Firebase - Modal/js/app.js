import { auth, onAuthStateChanged, signOut } from './firebase-config.js';
import { db, collection, getDocs } from './firebase-config.js';

const productContainer = document.querySelector('.product-container');
// Change navlist
(function changeNavlistAndHandleSignOut() {
  const navlistEl = document.querySelector('.navlist');

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const username = user.name || 'User';
      navlistEl.innerHTML = `
            <li><a href="index.html">Products</a></li>
            <li><a href="upload-product.html">Upload</a></li>
            <li><a href="#">${username}</a></li>
            <li><a href="#" id="logout-btn">Logout</a></li>
        `;

      const signOutBtn = document.getElementById('logout-btn');
      console.log(signOutBtn);

      signOutBtn.onclick = () => {
        signOut(auth)
          .then(() => {
            navlistEl.innerHTML = `
                <li><a href="index.html">Products</a></li>
                <li><a href="upload-product.html">Upload</a></li>
                <li><a href="login.html">Login</a></li>
                <li><a href="register.html">Register</a></li>
            `;
          })
          .catch((error) => {
            // Handle signout errors
          });
      };
    } else {
      navlistEl.innerHTML = `
        <li><a href="index.html">Products</a></li>
        <li><a href="upload-product.html">Upload</a></li>
        <li><a href="login.html">Login</a></li>
        <li><a href="register.html">Register</a></li>
    `;
    }
  });
})();

// Update Product from firestore
const querySnapshot = await getDocs(collection(db, 'products'));
querySnapshot.forEach((doc) => {
  const productData = doc.data();

  const productEl = `
    <div class="product">
        <img src="${productData.imageUrl}" alt="${productData.name}" class="product-img">
        <div class="product-info">
            <h3 class="product-name">${productData.name}</h3>
            <h3 class="product-price"><span>${productData.price}</span> $</h3>
            <p class="product-desc">${productData.description}</p>
        </div>
    </div>
  `;

  productContainer.innerHTML += productEl;
});
