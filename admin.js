let userPoints = {
    Рома: 0,
    Слава: 0
};

function openUser(name, group) {
    document.getElementById('modalUserName').innerText = `${name} Ващук`;
    document.getElementById('modalUserGroup').innerText = `Група: ${group}`;
    document.getElementById('pointsDisplay').innerText = userPoints[name]; // Відображення поточних поінтів
    document.getElementById('pointsInput').value = 1; // Скидання значення введення
    document.getElementById('userModal').style.display = "block";

    document.getElementById('closeModal').onclick = function() {
        document.getElementById('userModal').style.display = "none";
    };
}

function updatePoints(action) {
    const name = document.getElementById('modalUserName').innerText.split(' ')[0]; // Отримуємо ім'я
    const points = parseInt(document.getElementById('pointsInput').value);
    
    if (!isNaN(points)) {
        if (action === 'add') {
            userPoints[name] += points; // Додаємо поінти
        } else if (action === 'subtract') {
            userPoints[name] = Math.max(userPoints[name] - points, 0); // Віднімаємо поінти, не дозволяючи бути менше 0
        }
        document.getElementById('pointsDisplay').innerText = userPoints[name]; // Оновлюємо поінти на сторінці

        // Оновлюємо поінти на сторінках користувачів
        updateUserPointsDisplay(name);
    } else {
        alert("Будь ласка, введіть правильну кількість поінтів.");
    }
}

function updateUserPointsDisplay(userName) {
    // Знайдемо сторінки користувачів і оновимо їх поінти
    const userPage = userName === 'Рома' ? 'page1.html' : 'page2.html';
    const pointsElement = userName === 'Рома' ? document.querySelector('#page1Points span') : document.querySelector('#page2Points span');
    
    if (pointsElement) {
        pointsElement.innerText = userPoints[userName]; // Оновлюємо поінти на сторінці користувача
    }
}
