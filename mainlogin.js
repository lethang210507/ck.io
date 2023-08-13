let login_form = document.getElementById('login-form');

login_form.addEventListener('submit', function (e) {
    // lấy input
    let email = document.querySelector('.email-input').value;
    let password = document.querySelector('.password-input').value;

    // Lấy data từ local storage
    let user_email_list = localStorage.getItem("user_email_list");
    user_email_list = JSON.parse( user_email_list );

    let user_password_list = localStorage.getItem("user_password_list");
    user_password_list = JSON.parse( user_password_list );
let is_login=false
    for( key in user_email_list ) {
        if ( email == user_email_list[key] && password == user_password_list[key] ) {
            alert('Đăng nhập thành công');
            window.location.href="http://127.0.0.1:5500/index2ck.html"
            is_login=true
            return false;
        }
        if (is_login=false){alert("Đăng nhập không thành công");}
    }
})
