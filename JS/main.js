function f() {
    document.getElementsByClassName('dropdown')[0].classList.toggle('down');
    document.getElementsByClassName('fa-bars')[0].classList.toggle('activ');
    document.getElementsByClassName('fa-times')[0].classList.toggle('activ');
    document.getElementsByClassName('arrow')[0].classList.toggle('gone');
    if (document.getElementsByClassName('dropdown')[0].classList.contains('down')) {
        setTimeout(function () {
            document.getElementsByClassName('dropdown')[0].style.overflow = 'visible';
        }, 500);
    } else {
        document.getElementsByClassName('dropdown')[0].style.overflow = 'hidden';
    }
}

// Добавляем обработчики событий для элементов с классом dropdown_item Почему не работает const и let?
var dropdownItems = document.getElementsByClassName('dropdown_item');
for (var i = 0; i < dropdownItems.length; i++) {
    dropdownItems[i].addEventListener('click', function() {
        document.getElementsByClassName('dropdown')[0].style.overflow = 'hidden';
        document.getElementsByClassName('dropdown')[0].classList.remove('down');
        document.getElementsByClassName('fa-bars')[0].classList.remove('activ');
        document.getElementsByClassName('fa-times')[0].classList.remove('activ');
        document.getElementsByClassName('arrow')[0].classList.remove('gone');
    });
}

// Модальное окно регистрации
// Вызов модального окна
var modal = document.getElementById("myModal");
// Вызов кнопки модального окна
var btn = document.getElementById("myBtn");

var btn_2 = document.getElementById("myBtn_5");
var btn_3 = document.getElementById("myBtn_2");
var btn_4 = document.getElementById("myBtn_3");
var btn_5 = document.getElementById("myBtn_4");
var btn_6 = document.getElementById("speakers_container_button")

// Это переменная отвечает за закрытие модального окна
var span = document.getElementsByClassName("close")[0];

// Условия при нажатии каких кнопок открывается модальное окно
if (btn) {
    btn.onclick = function () {
        modal.style.display = "block";
    }
}

if (btn_2) {
    btn_2.onclick = function () {
        modal.style.display = "block";
    }
}

if (btn_3) {
    btn_3.onclick = function () {
        modal.style.display = "block";
    }
}

if (btn_4) {
    btn_4.onclick = function () {
        modal.style.display = "block";
    }
}

if (btn_5) {
    btn_5.onclick = function () {
        modal.style.display = "block";
    }
}

if (btn_6) {
    btn_6.onclick = function () {
        modal.style.display = "block";
    }
}

// Здесь закрывается модальное окно.
if (span) {
    span.onclick = function () {
        modal.style.display = "none";
    }
}

// щелчок по любому месту кроме крестика закрывает окно
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

window.onload = function() {
    alert('Это учебный проект подготовленный IT-студией «Шекспир и племянники».');
};