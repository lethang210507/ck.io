import { getAuth, signInAnonymously } from "firebase/auth";

const auth = getAuth();
signInAnonymously(auth)
  .then(() => {
    // Signed in..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });

  import { getAuth, onAuthStateChanged } from "firebase/auth";


onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

let register_form = document.getElementById('register-form');

register_form.addEventListener('submit', function (e) {
    e.preventDefault();
    // lấy input
    let email = document.querySelector('.email-input').value;
    let password = document.querySelector('.password-input').value;
    let repassword = document.querySelector('.repassword-input').value;

    // Lấy data từ local storage
    let user_email_list = localStorage.getItem("user_email_list");
    user_email_list = JSON.parse( user_email_list );

    let user_password_list = localStorage.getItem("user_password_list");
    user_password_list = JSON.parse( user_password_list );

    if ( email == '' || password == '' || repassword == '') {
        noti( 'Vui lòng điền đầy đủ thông tin', email, password, repassword, 0 );
        return;
    }

    if ( password != repassword ) {
        noti( 'Mật khẩu không trùng khớp', email, password, repassword, 0 );
        return;
    }

    if ( user_email_list == null && user_password_list == null ) {
        user_email_list = [email];
        user_password_list = [password];
        localStorage.setItem( "user_email_list", JSON.stringify(user_email_list) );
        localStorage.setItem( "user_password_list", JSON.stringify(user_password_list) );
        noti( 'Đăng ký thành công', email, password, repassword, 1 );
    } else {
        for( key in user_email_list ) {
            if ( email == user_email_list[key] ) {
                noti( 'Email đã tồn tại', email, password, repassword, 0 );
                return;
            }
        }
        user_email_list.push(email);
        user_password_list.push(password);
        localStorage.setItem( "user_email_list", JSON.stringify(user_email_list) );
        localStorage.setItem( "user_password_list", JSON.stringify(user_password_list) );
        noti( 'Đăng ký thành công', email, password, repassword, 1 );
        
    }
})

function noti( message, email, password, repassword, status ) {
    document.querySelector('.email-input').value = email;
    document.querySelector('.password-input').value = password;
    document.querySelector('.repassword-input').value = repassword;
    let noti = document.querySelector('#noti-mess')
    noti.innerHTML = message;
    if ( status == 1 ) {
        noti.style.color = 'green';
        document.querySelector('.email-input').value = '';
        document.querySelector('.password-input').value = '';
        document.querySelector('.repassword-input').value = '';
    } else {
        noti.style.color = 'red';
    }
    noti.style.opacity = 1;

}
import { FacebookAuthProvider } from "firebase/auth";

const provider = new FacebookAuthProvider();
provider.addScope('user_birthday');
import { getAuth } from "firebase/auth";


auth.languageCode = 'it';
// To apply the default browser preference instead of explicitly setting it.
// auth.useDeviceLanguage();
provider.setCustomParameters({
    'display': 'popup'
  });
  import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";

const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;

    // IdP data available using getAdditionalUserInfo(result)
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);

    // ...
  });
  import { getAuth, signInWithRedirect } from "firebase/auth";

const auth = getAuth();
signInWithRedirect(auth, provider);
import { getAuth, getRedirectResult, FacebookAuthProvider } from "firebase/auth";

const auth = getAuth();
getRedirectResult(auth)
  .then((result) => {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);
    // ...
  });

