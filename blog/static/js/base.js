var btnMenu = document.getElementById('menu-btn');

btnMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('nav-opened');
    document.body.classList.toggle('nav-closed');
});



try {
  var xhr = new XMLHttpRequest();
  xhr.open('get', 'http://127.0.0.1:8000/slideshow/api/', false);
  // xhr.setRequestHeader('accept', 'egoist');
  xhr.send(null);

  var listObj = JSON.parse(xhr.responseText);

  var etNavUl = document.querySelector('.et-nav-v ul');
  var fragment = document.createDocumentFragment();
  var tmpLi = null;
  var tmpA = null;
  var tmpSmall = null;

  for(var i = 0; i < listObj.length; i++) {
    tmpSmall = document.createElement('small');
    tmpSmall.appendChild(document.createTextNode(listObj[i].describe));

    tmpA = document.createElement('a');
    tmpA.appendChild(document.createTextNode(listObj[i].title));
    tmpA.appendChild(tmpSmall);
    tmpA.href = listObj[i].link;

    tmpLi = document.createElement('li');
    tmpLi.dataset.index = listObj[i].index;
    tmpLi.classList.add('et-nav-item');
    tmpLi.appendChild(tmpA);
    fragment.appendChild(tmpLi);
  }

  etNavUl.innerHTML = '';
  etNavUl.appendChild(fragment);
} catch(e) {
  console.log(e);
  console.log("It's on Other Page Or by Error ?");
}


window.onload = (function() {
  var tmp = document.querySelector('.et-nav-v ul');
  tmp.style.height = (window.innerHeight - 81.5) + 'px';
  tmp = document.getElementById('et-overlay');
  setTimeout(() => {
    fadeOut(tmp);
  }, 600);
  // document.getElementById("et-main").style.height = window.innerHeight + "px";
  stroll.bind('.et-nav-v ul');
});

window.onresize = (function() {
  var tmp = document.querySelector('.et-nav-v ul');
  tmp.style.height = (window.innerHeight - 81.5) + 'px';
});