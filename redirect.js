// redirect.js
// Usage:
// - Add attribute data-redirect="Page/trollGta.html" on any element (button, div, a)
// - Or call redirectTo('/Page/trollGta.html') from other scripts

document.addEventListener('DOMContentLoaded', function () {
  // attach click handler to any element with data-redirect
  document.querySelectorAll('[data-redirect]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      var url = el.getAttribute('data-redirect');
      if (!url) return;
      // if element is an <a> with href, let it behave normally
      if (el.tagName.toLowerCase() === 'a' && el.getAttribute('href')) return;
      window.location.href = url;
    });
  });

  // helper: programmatic redirect
  window.redirectTo = function (url, delay) {
    delay = delay || 0;
    if (delay > 0) setTimeout(function () { window.location.href = url; }, delay);
    else window.location.href = url;
  };
});
