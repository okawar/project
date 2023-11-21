function validateLoginForm() {
    let login = document.getElementById("loginInput").value;
    let password = document.getElementById("passwordInput").value;

    if (login === "" || password === "") {
        alert("Пожалуйста, заполните все поля.");
        return false;
    }

    if (!isValidLogin(login)) {
        alert("Некорректный логин. Логин должен начинаться с буквы, содержать только буквы, цифры и символы подчеркивания, и быть длиной от 3 до 20 символов.");
        return false;
    }

    if (!isValidPassword(password)) {
        alert("Некорректный пароль. Пароль должен содержать минимум 8 символов, включая хотя бы одну строчную букву, одну заглавную букву, одну цифру и один спецсимвол.");
        return false;
    }

    return true;
}

function validateRegistrationForm() {
    let login = document.getElementById("login").value;
    let password = document.getElementById("password").value;
    let password2 = document.getElementById("password2").value;

    if (login === "" || password === "" || password2 === "") {
        alert("Пожалуйста, заполните все поля.");
        return false;
    }

    if (!isValidLogin(login)) {
        alert("Некорректный логин. Логин должен начинаться с буквы, содержать только буквы, цифры и символы подчеркивания, и быть длиной от 3 до 20 символов.");
        return false;
    }

    if (!isValidPassword(password)) {
        alert("Некорректный пароль. Пароль должен содержать минимум 8 символов, включая хотя бы одну строчную букву, одну заглавную букву, одну цифру и один спецсимвол.");
        return false;
    }

    if (password !== password2) {
        alert("Пароли не совпадают. Пожалуйста, введите одинаковые пароли в оба поля.");
        return false;
    }

    return true;
}

function isValidLogin(login) {
    // Логин должен начинаться с буквы, содержать только буквы, цифры и символы подчеркивания, и быть длиной от 3 до 20 символов.
    let loginRegex = /^[a-zA-Z][a-zA-Z0-9_]{2,19}$/;
    return loginRegex.test(login);
}

function isValidPassword(password) {
    // Пароль должен содержать минимум 8 символов, включая хотя бы одну строчную букву, одну заглавную букву, одну цифру и один спецсимвол.
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}
