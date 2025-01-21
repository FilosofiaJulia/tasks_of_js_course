# Tasks of js course

## Practice 1: lists ##  

1. Добавьте третью кнопку, которая будет показывать всех людей из массива.
2. Измените вывод списка так, чтобы он включал дополнительное поле "Статус" (например, "Взрослый" или "Ребенок").
3. (задача со звездочкой) Добавить возможность сортировать список по возрасту по нажатию на дополнительную кнопку.

## Lesson 13: form validation ##  

> Усовершенствуйте код практического примера, добавив эти ограничения и проверки:

1. Пользователь должен ввести не менее четырёх символов в поле username. Если символов меньше четырёх — добавьте соответствующее сообщение об ошибке.
2. Сделайте динамическую подсветку некорректно заполненных полей. Если поле заполнено неверно, его границы должны окраситься в красный цвет. Если поле заполнено верно — в зелёный. Для этого можно изменять CSS-свойство border прямо в JavaScript при каждой проверке (пример: style.borderColor = "red" или style.borderColor = "green")
3. Добавьте проверку о том, что поле "Подтверждение пароля" должно быть заполнено и если это не так, то границы input должны окраситься в красный и пользователь должен увидеть сообщение "Установите пароль"

## Practice 2: saving tracks ##

1. Напишите код, который позволит сделать для окрашенной кнопки .track button (этот код уже есть, где fill = #b4241a для svg) эффект потрясывания через CSS стили. Данный эффект даст понять пользователю, что лайк уже поставлен и трек находится в списке "Понравившиеся треки".

Подсказка: Через событие click на кнопку дополнительно навесьте класс shake. Стили будут такими:
button.shake { animation: shake 0.3s; }
@keyframes shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-5px)}50%{transform:translateX(5px)}75%{transform:translateX(-5px)}}

2. Добавьте счетчик количества треков в блоке "Список треков" (просто число через тег <span> внутри <h2>)

3. Добавьте счетчик количества треков в блоке "Понравившиеся треки" (просто число через тег <span> внутри <h2>) 
Этот счётчик должен увеличиваться на 1 при добавлении трека в избранное и уменьшаться на 1 при его удалении. Учтите, что лайки сохраняются в localStorage и должны быть восстановлены при перезагрузке страницы.

## Lesson 18: work with API ##

Напишите код, который получает данные с API и отображает их в заданной HTML-структуре. Вот основные данные, которые помогут вам выполнить задание:

1) Вам дана ссылка на API: https://randomuser.me/api/?results=10

2) При запросе к этому API вы получите массив из 10 пользователей. Для каждого пользователя нужно вывести следующую информацию:

Фото пользователя: <img src="URL"> (поле picture.large).
Имя: <p> (поле name.first и name.last).
Пол: <p> (поле gender).
Город: <p> (поле location.city).
Email: <a href="mailto:EMAIL">EMAIL</a> (поле email).
Имя пользователя: <p> (поле login.username).
Пароль: <p> (поле login.password).
3) HTML-структура, которая должна быть в браузере для каждого пользователя, выглядит так:

<div class="user">
<img src="URL" alt="User Name">
<div>
<p><strong>Name:</strong> FirstName LastName</p>
<p><strong>Gender:</strong> Gender</p>
<p><strong>City:</strong> City</p>
<p><strong>Email:</strong> <a href="mailto:email@example.com">email@example.com</a></p>
<p><strong>Username:</strong> Username</p>
<p><strong>Password:</strong> Password</p>
</div>
</div>

4) Для стилизации используйте CSS:
Класс .user для стилей карточки пользователя.
Изображение (<img>) должно быть круглым.
Сделайте небольшой отступ между карточками.

5) Ваш код должен работать так:
Создайте запрос к API.
Создать карточки пользователей и вставить их в HTML.
Используйте fetch() для получения данных.
Проверьте, приходит ли ответ с сервера, с помощью console.log().
Примените методы forEach() и innerHTML для генерации карточек.