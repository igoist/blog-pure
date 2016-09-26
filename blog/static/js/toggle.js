
function toggleMenu() {

    document.getElementById('toggle').classList.toggle('x');
    document.getElementById('toggle2').classList.toggle('x');
    document.getElementById('toggle3').classList.toggle('x');
};

document.getElementById('toggle').addEventListener('click', function (e) {
    toggleMenu();
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

// document.getElementById('toggle5').addEventListener('click', function (e) {
//     document.getElementById('toggle5').classList.toggle('x');
// });