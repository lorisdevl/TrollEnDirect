
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('[data-redirect]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      var url = el.getAttribute('data-redirect');
      if (!url) return;
      if (el.tagName.toLowerCase() === 'a' && el.getAttribute('href')) return;
      window.location.href = url;
    });
  });
  window.redirectTo = function (url, delay) {
    delay = delay || 0;
    if (delay > 0) setTimeout(function () { window.location.href = url; }, delay);
    else window.location.href = url;
  };
});
