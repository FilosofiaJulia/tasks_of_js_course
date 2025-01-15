// Извлекает данные из localStorage или возвращает пустой массив
function getFavorites() {
   return JSON.parse(localStorage.getItem('favoriteTracks')) || [];
}

// Сохраняет обновлённый список избранного в localStorage
function saveFavorites(favorites) {
   localStorage.setItem('favoriteTracks', JSON.stringify(favorites));
}

// Обновляет отображение списка избранных треков и иконок
function updateFavoritesDisplay() {
   const favorites = getFavorites();
   const favoritesBox = document.getElementById('favorites');
   const trackElements = document.querySelectorAll('#tracks .track');

   favoritesBox.innerHTML = ''; // Очищаем блок избранных треков

   countAlltracks(); // подсчитываем кол-во треков в "Списоке треков"
   countFavoriteTracks(); // подсчитываем кол-во треков в "Понравившиxся трекax"

   // Отображаем избранные треки
   favorites.forEach(track => {
      const trackBox = document.createElement('div');
      trackBox.className = 'favorite';

      const trackName = document.createElement('span');
      trackName.textContent = track;

      const removeButton = document.createElement('button');
      removeButton.textContent = 'Удалить';
      removeButton.addEventListener('click', () => {
         removeFavorite(track);
      });

      trackBox.appendChild(trackName);
      trackBox.appendChild(removeButton);
      favoritesBox.appendChild(trackBox);
   });

   // Обновляем цвет иконок SVG
   trackElements.forEach(trackElement => {
      const trackName = trackElement.querySelector('span').textContent;
      const trackBtn = trackElement.querySelector('button');
      const svg = trackElement.querySelector('svg');
      svg.style.fill = favorites.includes(trackName) ? '#b4241a' : '#ffffff';
      // удаляем анимацию для кнопок-лайков
      if (trackBtn.classList.contains("shake")) trackBtn.classList.remove("shake");
   });
}

// Добавляет трек в избранное
function addFavorite(trackName) {
   const favorites = getFavorites();

   if (!favorites.includes(trackName)) {
      favorites.push(trackName);
      saveFavorites(favorites);
      countFavoriteTracks();
      updateFavoritesDisplay();
   }
}

// Удаляет трек из избранного
function removeFavorite(trackName) {
   const favorites = getFavorites().filter(track => track !== trackName);
   saveFavorites(favorites);
   updateFavoritesDisplay();
}

// Добавляет обработчики для кнопок
function initializeButtons() {
   document.querySelectorAll('#tracks .track button').forEach(button => {
      const trackName = button.parentElement.querySelector('span').textContent;
      button.addEventListener('click', () => {
         addFavorite(trackName);
         button.classList.add("shake"); // Добавляем анимацию для кнопок-лайков
      });
   });
}

// создает счетчики количества треков в заголовках
function createCounters() {
   let counters = document.querySelector('.app').querySelectorAll('h2');
   counters.forEach((counter, index) => {
      let number = document.createElement('span');
      number.style.float = 'right';
      number.style.marginRight = '10px';
      number.classList.add(`counter${index+1}`);
      counter.appendChild(number);
   })
}

function countAlltracks() {
   const trackElements = document.querySelectorAll('#tracks .track');
   let countTracks = document.querySelector('.counter1');
   countTracks.textContent = `${trackElements.length}`;
}

function countFavoriteTracks() {
   let countFavoriteTracks = document.querySelector('.counter2');
   countFavoriteTracks.textContent = `${getFavorites().length}`;
}

// Инициализация при загрузке страницы
window.onload = () => {
   initializeButtons();
   createCounters();
   updateFavoritesDisplay();
};
