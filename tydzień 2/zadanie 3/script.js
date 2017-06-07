var count = document.getElementById('count');

function countdown(callback) {
  (function test(i) {
    setTimeout(function() {
      if (i >= 0) {
        count.innerHTML = i;
        test(--i);
      } else {
        callback();
      }
    }, 1000);
  })(10);
}

countdown(function() {
  alert('Odliczanie zakończone');
});