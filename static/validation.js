function validateForm() {
    var login = document.getElementById("login").value;
    var password = document.getElementById("password").value;
    var password2 = document.getElementById("password2").value;
    var isValid = true;

    // Reset error messages
    document.getElementById("loginError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("password2Error").innerHTML = "";

    // Validate login
    if (!isValidEmail(login)) {
        document.getElementById("loginError").innerHTML = "Некорректный почтовый адрес!";
        isValid = false;
    }

    // Validate password
    if (password.length === 0 || password.length >= 10) {
        document.getElementById("passwordError").innerHTML = "Пароль должен быть не пустым и содержать менее 10 символов";
        isValid = false;
    }

    // Validate password confirmation
    if (password !== password2) {
        document.getElementById("password2Error").innerHTML = "Пароли не совпадают";
        isValid = false;
    }

    return isValid;
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        return false;
    }

    if (/(\.{2,})/.test(email.split('@')[1])) {
        return false;
    }

    if (/(\.{2,})/.test(email.split('@')[0])) {
        return false;
    }

    return true;
}