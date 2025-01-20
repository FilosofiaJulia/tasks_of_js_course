fetch('https://randomuser.me/api/?results=10')
   .then(function(response) {
      return response.json();
   })
   .then(function(data) {
        let users = data.results;
        console.log(users);
        
        for (let i = 0; i <= users.length - 1; i++) {
            createUserCard(users[i]);
        }
      
   })
   .catch(function(error) {
        console.error('Ошибка при получении данных', error);
   });

function createUserCard(user) {
    const usersList = document.querySelector('.users');
    const userCard = document.createElement('div');
    userCard.className = 'user';
    userCard.innerHTML = `
        <img src="${user.picture.large}" alt="User Name">
        <div>
            <p><strong>Name:</strong> ${user.name.first} ${user.name.last}</p>
            <p><strong>Gender:</strong> ${user.gender}</p>
            <p><strong>City:</strong> ${user.location.city}</p>
            <p><strong>Email:</strong> <a href="mailto:${user.email}">${user.email}</a></p>
            <p><strong>Username:</strong> ${user.login.username}</p>
            <p><strong>Password:</strong> ${user.login.password}</p>
        </div>
    `;
    usersList.appendChild(userCard);
}

    /* function createUserCard() {
        const usersList = document.querySelector('.users');
        const userCard = document.createElement('div');
        userCard.className = 'user';
        userCard.innerHTML = `
            <img src="URL" alt="User Name">
<div>
<p><strong>Name:</strong> FirstName LastName</p>
<p><strong>Gender:</strong> Gender</p>
<p><strong>City:</strong> City</p>
<p><strong>Email:</strong> <a href="mailto:email@example.com">email@example.com</a></p>
<p><strong>Username:</strong> Username</p>
<p><strong>Password:</strong> Password</p>
</div>
        `;
        usersList.appendChild(userCard);
    }

    const usersList = document.querySelector('.users');
    for (let i = 0; i <= 9; i++) {
        createUserCard();
    } */