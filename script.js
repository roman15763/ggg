document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Запобігає перезавантаженню сторінки

    // Отримуємо дані з форми
    const firstName = document.getElementById('firstName').value.toLowerCase(); // Перетворюємо на нижній регістр
    const lastName = document.getElementById('lastName').value.toLowerCase();
    const group = document.getElementById('group').value;
    const password = document.getElementById('password').value;

    // Перевірка користувача
    if (firstName === "рома" && lastName === "ващук" && group === "1-кт-25" && password === "ваш_пароль") {
        window.location.href = "page1.html"; // Сторінка для Роми
    } else if (firstName === "слава" && lastName === "ващук" && group === "1-кт-26" && password === "2505") {
        window.location.href = "page2.html"; // Сторінка для Слави
    } else {
        document.getElementById('error').innerText = "Невірні дані входу!";
    }
});
