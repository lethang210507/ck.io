import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyA5JM2x4uPlcCgS8pBP0p5r_3Uz5yt5Q_w",
    authDomain: "fir-jsi01.firebaseapp.com",
    projectId: "fir-jsi01",
    storageBucket: "--redacted--",
    messagingSenderId: "877711756021",
    appId: "--redacted--"
};

const app = initializeApp(firebaseConfig);


let register_form = document.getElementById('register-form');

register_form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('running');
    // lấy input
    let email = document.querySelector('.email-input').value;
    let password = document.querySelector('.password-input').value;
    let repassword = document.querySelector('.repassword-input').value;

    if ( password != repassword ) {
        alert(' Mật khẩu và xác nhận mật khẩu không trùng khớp');
        return 0;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
        // ..
    });
})