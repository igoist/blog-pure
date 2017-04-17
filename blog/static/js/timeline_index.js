(function() {

  var listObj = [];

  try {
    var xhr = new XMLHttpRequest();
    xhr.open("get", "http://127.0.0.1:8000/timeline/api/", false);
    // xhr.setRequestHeader('accept', 'egoist');
    xhr.send(null);

    listObj = JSON.parse(xhr.responseText);
    listObj.reverse();
  }  catch(e) {
    console.log(e);
    console.log("It's on Other Page Or by Error ?");
    listObj = [{
      time: '2017.04.05',
      div_class: '',
      h2: 'Mine Awesome Headline',
      p: 'CSS 字体模块字体<br/>基础知识CSS 字体模块字体基础知识CSS 字体模块字体基础知识CSS 字体模块字体基础知识CSS 字体模块字体基础知识CSS 字体模块字体基础知识CSS 字体模块字体基础知识CSS 字体模块字体基础知识CSS 字体模块字体基础知识CSS 字体模块字体基础知识CSS 字体模块字体基础',
      a: 'Call to action',
      a_href: '###',
      img_url: ''
    }];
  }

  var etTLUL = document.querySelector('section.et-timeline ul');
  var fragment = document.createDocumentFragment();
  var tmpLi = null;
  var tmpDiv1 = null;
  var tmpDiv2 = null;
  var tmpDiv3 = null;
  var tmpDiv4 = null;
  var tmpT = null;
  var tmpH2 = null;
  var tmpA = null;
  var tmpP = null;

  // <li>
  //   <div class="et-timeline-item-wrap">
  //     <time>1934</time>
  //     <div class="card et-timeline-card-transition">
  //       <h2 class="et-timeline-card-transition">Awesome Headline</h2>
  //       <p>Aenean lacinia bibendum nulla sed consectetur. Donec ullamcorper nulla non metus auctor fringilla.</p>
  //       <div class="cta-container et-timeline-card-transition"><a href="#" class="cta">Call to action</a></div>
  //       <div class="card_circle et-timeline-card-transition"></div>
  //     </div>
  //   </div>
  // </li>

  for(let i = 0; i < listObj.length; i++) {
    tmpT = document.createElement('time');
    tmpT.appendChild(document.createTextNode(listObj[i].time));

    tmpH2 = document.createElement('h2');
    tmpH2.classList.add('et-timeline-card-transition');
    tmpH2.appendChild(document.createTextNode(listObj[i].h2));

    tmpP = document.createElement('p');
    tmpP.appendChild(document.createTextNode(listObj[i].p));

    tmpA = document.createElement('a');
    tmpA.href = listObj[i].a_href;
    tmpA.classList.add('cta');
    tmpA.appendChild(document.createTextNode(listObj[i].a));

    tmpDiv3 = document.createElement('div');
    tmpDiv3.classList.add('cta-container');
    tmpDiv3.classList.add('et-timeline-card-transition');
    tmpDiv3.appendChild(tmpA);

    tmpDiv4 = document.createElement('div');
    tmpDiv4.classList.add('card_circle');
    tmpDiv4.classList.add('et-timeline-card-transition');

    tmpDiv2 = document.createElement('div');
    tmpDiv2.classList.add('card');
    tmpDiv2.classList.add('et-timeline-card-transition');
    tmpDiv2.appendChild(tmpH2);
    tmpDiv2.appendChild(tmpP);
    tmpDiv2.appendChild(tmpDiv3);
    tmpDiv2.appendChild(tmpDiv4);

    tmpDiv1 = document.createElement('div');
    tmpDiv1.classList.add('et-timeline-item-wrap');
    tmpDiv1.appendChild(tmpT);
    tmpDiv1.appendChild(tmpDiv2);

    tmpLi = document.createElement('li');
    tmpLi.appendChild(tmpDiv1);
    fragment.appendChild(tmpLi);
  }

  etTLUL.innerHTML = "";
  etTLUL.appendChild(fragment);

})();