import { db, collection, addDoc } from './firebase-config.js';
import { storage, ref, uploadBytes, getDownloadURL } from './firebase-config.js';

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

// upload data to storage and firestore
uploadForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  uploadBtn.disabled = true;
  uploadBtn.textContent = 'Đang tải lên...';

  try {
    const file = productImage.files[0];
    if (!file) {
      throw new Error('Vui lòng chọn hình ảnh sản phẩm.');
    }
    const storageRef = ref(storage, `productImages/${file.name}`);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);

    await addDoc(collection(db, 'products'), {
      name: productName.value,
      price: parseInt(productPrice.value, 10) || 0,
      description: productDesc.value,
      imageUrl: downloadURL,
    });

    console.log('Sản phẩm đã được tải lên thành công!');
    uploadBtn.textContent = 'Tải lên thành công';

    init();
  } catch (error) {
    console.error('Lỗi:', error);
    uploadBtn.textContent = 'Lỗi tải lên';

    init();
  } finally {
    uploadBtn.disabled = false;
  }
});
