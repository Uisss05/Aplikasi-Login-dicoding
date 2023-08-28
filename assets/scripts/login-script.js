/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */
/* 
variable setiap element view
*/
const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');
/*membuar variable untuk menyimpan informasi email dan password*/
const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';
/*aksi klik pada button*/
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();
 /* Comment : Mendapatkan nilai dari masing-masing input (email dan password) ketika tombol ditekan.
  /*memastikan bahwa email benar*/
  const email = inputEmailElement.value;
  /*memastikan jika password benar*/
  const password = inputPasswordElement.value;
  /*jika benar maka masuk kehalaman home*/
  if (email == expectedEmail && password == expectedPassword) {
    goToHome();
  }
  /*jika salah maka muncul popup*/
  else {
    showPopUp();
  }
});
