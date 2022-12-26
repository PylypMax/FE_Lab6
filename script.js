const usersDiv = document.getElementById('users');

function addUser() {
    fetch('https://randomuser.me/api').then((r) => {
        return r.json();
    }).then((r) => {
        const fullUser = r.results[0];
        const person = new Person(
            fullUser.picture,
            fullUser.name,
            fullUser.cell,
            fullUser.location.city,
            fullUser.phone);
        person.createPersonDiv();
    });
}

function clearUsers() {
    while (usersDiv.firstChild) usersDiv.removeChild(usersDiv.firstChild);
}

class Person {
    constructor(picture, name, cell, city, phone) {
        this.picture = picture;
        this.name = name;
        this.cell = cell;
        this.city = city;
        this.phone = phone;
    }

    getFullName() {
        return `${this.name.title} ${this.name.first} ${this.name.last}`;
    }

    createPersonDiv() {
        const user = document.createElement('div');
        user.id = 'user';

        const imgElement = document.createElement('img');
        imgElement.src = this.picture.medium;
        imgElement.alt = 'user photo'
        user.appendChild(imgElement);

        const info = document.createElement('span');
        info.innerHTML = `${this.getFullName()}<br>Cell: ${this.cell}<br>City: ${this.city}<br>Phone: ${this.phone}`;
        user.appendChild(info);

        usersDiv.appendChild(user);

        console.log(this.picture.thumbnail, this.getFullName(), this.cell, this.city, this.phone);
    }
}