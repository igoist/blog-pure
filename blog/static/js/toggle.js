
function toggleMenu() {

    document.getElementById('toggle-00-00').classList.toggle('x');
    document.getElementById('toggle-01-00').classList.toggle('x');
    document.getElementById('toggle2').classList.toggle('x');
    document.getElementById('toggle3').classList.toggle('x');
    document.getElementById('toggle4').classList.toggle('x');
    document.getElementById('toggle-04-00').classList.toggle('x');
    document.getElementById('toggle-05-00').classList.toggle('x');
    document.getElementById('toggle-07-00').classList.toggle('x');
};

document.getElementById('toggle-00-00').addEventListener('click', function (e) {
    toggleMenu();
});

document.getElementById('toggle-01-00').addEventListener('click', function (e) {
    document.getElementById('toggle-01-00').classList.toggle('x');
});

document.getElementById('toggle2').addEventListener('click', function (e) {
    document.getElementById('toggle2').classList.toggle('x');
});

document.getElementById('toggle3').addEventListener('click', function (e) {
    document.getElementById('toggle3').classList.toggle('x');
});

document.getElementById('toggle4').addEventListener('click', function (e) {
    document.getElementById('toggle4').classList.toggle('x');
});

document.getElementById('toggle-04-00').addEventListener('click', function (e) {
    document.getElementById('toggle-04-00').classList.toggle('x');
});

document.getElementById('toggle-05-00').addEventListener('click', function (e) {
    document.getElementById('toggle-05-00').classList.toggle('x');
});

document.getElementById('toggle-07-00').addEventListener('click', function (e) {
    document.getElementById('toggle-07-00').classList.toggle('x');
});

