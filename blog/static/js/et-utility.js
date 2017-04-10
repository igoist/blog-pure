function fadeOut(el, delay=500) {
  el.style.opacity = 1;
  el.style.display="";

  var last = +new Date();
  var tick = function() {
    el.style.opacity = +el.style.opacity - (new Date() - last) / delay;
    last = +new Date();

    if (+el.style.opacity >0) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
      setTimeout(() => {
        el.style.display = 'none';
      }, 100);
    }
  };
  tick();
}

// export default fadeOut;