let formSignUp = document.getElementById('signupForm');

// Событие submit

formSignUp.addEventListener('submit', function(event) {
    event.preventDefault();

    // Список полей

    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    // Блок для ошибок

    let usernameError = document.getElementById('usernameError');
    let emailError = document.getElementById('emailError');
    let passwordError = document.getElementById('passwordError');
    let confirmPasswordError = document.getElementById('confirmPasswordError');

    // Сброс текста в ошибке
    usernameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';

    let isValid = true;

    // Условия для поля username

    if (!username) {
        usernameError.textContent = 'Введите имя пользователя';
        isValid = false;
    }

    // Условия для поля email

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
        emailError.textContent = 'Введите email';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = 'Некорректный email';
        isValid = false;
    }

    // Условия для поля password

    if (!password) {
        passwordError.textContent = 'Введите пароль';
        isValid = false;
    } else if (password.length < 6) {
        passwordError.textContent = 'Пароль должен быть не менее 6 символов';
        isValid = false;
    }

    // Условия для поля confirm password

    if (password !== confirmPassword) {
        confirmPasswordError.textContent = 'Пароли не совпадают';
        isValid = false;
    }

    // Проверка формы на true по всем условиям выше

    if (isValid) {
        alert('Форма отправлена успешно!');
    }
})