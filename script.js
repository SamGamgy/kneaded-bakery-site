/*
 * Handles the contact form submission on the Kneaded Bakery site.
 * When the form is submitted, prevent the default browser behaviour,
 * display a thank‑you message and reset the form fields. This script
 * runs after the page content loads.
 */

document.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector('.contact-form form');
  if (!form) return;
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var msg = document.getElementById('response-msg');
    if (msg) {
      msg.style.display = 'block';
    }
    form.reset();
  });
});
