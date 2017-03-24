var btnMenu = document.getElementById('menu-btn');

btnMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('nav-opened');
    document.body.classList.toggle('nav-closed');
});


window.onload = (function() {
  stroll.bind('.et-nav-v ul');
});