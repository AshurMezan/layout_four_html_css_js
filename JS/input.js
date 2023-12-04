// Работа с полем input в регистрации
let name = document.querySelector('#name');
let firstname = document.querySelector('#firstname');
let telephone = document.querySelector('#telephone');
let mail = document.querySelector('#mail');
let submit = document.querySelector('#submit');

let users = {};

function User(name, firstname, telephone, mail) {
    this.name = name;
    this.firstname = firstname;
    this.telephone = telephone;
    this.mail = mail;
}

function createId(users) {
    return Object.keys(users).length;
}

submit.addEventListener('click', () => {
    const nameUser = name.value;
    const firstnameUser = firstname.value;
    const telephoneUser = telephone.value;
    const mailUser = mail.value;

    const user = new User(nameUser, firstnameUser, telephoneUser, mailUser);

    const userId = 'User' + createId(users);
    users[userId] = user;

    console.log(users)
    alert(`${nameUser}, вы успешно прошли регистрацию.`)

    // Очистка полей после отправки информации
    name.value = '';
    firstname.value = '';
    telephone.value = '';
    mail.value = '';
});