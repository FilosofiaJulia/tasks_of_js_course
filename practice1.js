// Данные 
const users = [
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

// Создание кнопки для вывода полного списка

userList.insertAdjacentHTML('beforeBegin', '<button id="showAllPeople">Показать всех</button>');
let showPeopleButton = document.getElementById('showAllPeople');

// Функция для отображения списка людей

function showUsers(userArray) {
    userList.innerHTML = '';
    userArray.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = `${user.name}, ${user.age} лет, статус: ${getStatus(user.age)}`;
        userList.appendChild(listItem);
    });

    createSortButton(); // вызов кнопки сортировки
}

// Обработчик события вывода взрослых

showAdultsButton.addEventListener('click', () => {
    const adults = users.filter(user => user.age >= 18);
    showUsers(adults);
});

// Обработчик события вывода детей

showChildrenButton.addEventListener('click', () => {
    const children = users.filter(user => user.age < 18);
    showUsers(children);
});

// Обработчик события вывода всех людей

if(showPeopleButton) {
    showPeopleButton.addEventListener('click', () => {
        showUsers(users);
    });
}

// функция получения статуса человека
function getStatus(age) {
    let result = '';
    if (isNaN(age)) return '';

    return result = (age >= 18) ? 'Взрослый' : 'Ребёнок';
}

// создание кнопки сортировки c обработчиком

let createSortButton = function(){
    userList.insertAdjacentHTML('beforeBegin', '<button id="sortOfList">Сортируй</button>');
    let sortBtn = document.getElementById('sortOfList');

    if(sortBtn) {
        sortBtn.addEventListener('click', () => {
            sortingLists(userList, users); 
            sortBtn.remove();
        });
    }

    createSortButton = function() {
        return false;
    }
}

// сортировка списка по возрасту

function sortingLists(elem, userArray) {
    if(elem.hasChildNodes()) {
        let list = elem.querySelectorAll('li');
        userArray.sort((a, b) => a.age - b.age);

        for(let i = 0; i <= list.length - 1; i++ ){
            list[i].innerHTML = `${userArray[i].name}, ${userArray[i].age} лет, статус: ${getStatus(userArray[i].age)}`;
        }
    } else {
        return console.log('Список пуст');
    }
}

