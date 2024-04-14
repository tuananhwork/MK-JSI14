import { app } from './firebase-config.js';

import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-storage.js';

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js';

const storage = getStorage(app);
const db = getFirestore(app);

const uploadForm = document.getElementById('upload-form');
const productImage = document.getElementById('product-image');
const productImageShow = document.getElementById('product-image-show');
const productName = document.getElementById('product-name');
const productPrice = document.getElementById('product-price');
const productDesc = document.getElementById('product-description');
const uploadBtn = document.getElementById('upload-btn');

const init = () => {
  setTimeout(() => {
    productImageShow.style.display = 'none';
    productName.value = '';
    productPrice.value = '';
    productDesc.value = '';
    uploadBtn.textContent = 'Upload';
  }, 1000);
};

// Change image when upload file done
productImage.onchange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      productImageShow.src = e.target.result;
      productImageShow.style.display = 'block';
    };
    reader.readAsDataURL(file);
  }
};

// Upload data to storage and firestore
uploadForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  uploadBtn.disabled = true;
  uploadBtn.textContent = 'Uploading ...';

  try {
    const file = productImage.files[0];
    const storageRef = ref(storage, `productImages/${file.name}`);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadUrl = await getDownloadURL(snapshot.ref);

    await addDoc(collection(db, 'products'), {
      name: productName.value,
      price: parseInt(productPrice.value) || 0,
      description: productDesc.value,
      imageUrl: downloadUrl,
    });

    console.log('Upload Success!');
    uploadBtn.textContent = 'Upload Success!';

    init();
  } catch (error) {
    console.log(error);
    uploadBtn.textContent = 'Failure Upload';

    init();
  } finally {
    uploadBtn.disabled = false;
  }
});
