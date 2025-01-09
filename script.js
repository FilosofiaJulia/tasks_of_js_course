// Данные 
const user = [
    { name: 'Анна', age: 25 },
    { name: 'Михаил', age: 15 },
    { name: 'Иван', age: 18 },
    { name: 'Мария', age: 32 },
    { name: 'Дмитрий', age: 12 },
    { name: 'София', age: 20 }
];

// Получение элементов из DOM
let showAdultsButton = document.getElementById('showAdults');
let showChildrenButton = document.getElementById('showChildren');
let userList = document.getElementById('userList');

// Функция для отображения списка людей

function showUsers(userArray) {
    userList.innerHTML = '';
    userArray.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = `${user.name}, ${user.age} лет`;
        userList.appendChild(listItem);
    });
}

// Обработчик события вывода взрослых

showAdultsButton.addEventListener('click', () => {
    const adults = user.filter(user => user.age >= 18);
    showUsers(adults);
});

// Обработчик события вывода детей

showChildrenButton.addEventListener('click', () => {
    const children = user.filter(user => user.age < 18);
    showUsers(children);
});