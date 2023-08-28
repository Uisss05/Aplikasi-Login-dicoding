
/* Comment : variable setiap element view*/
const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');
/*membuar variable untuk menyimpan informasi email dan password*/
const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';
/*Comment : aksi klik pada button*/
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();
 /* Comment : Mendapatkan nilai dari masing-masing input (email dan password) ketika tombol ditekan.
  /* Comment : memastikan bahwa email benar*/
  const email = inputEmailElement.value;
  /*Comment : memastikan jika password benar*/
  const password = inputPasswordElement.value;
  /*Comment : jika benar maka masuk kehalaman home*/
  if (email == expectedEmail && password == expectedPassword) {
    goToHome();
  }
  /*Comment : jika salah maka muncul popup*/
  else {
    showPopUp();
  }
});
