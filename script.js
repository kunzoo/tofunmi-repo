const menuToggle = document.querySelector('.menu-toggle');


const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', function() {

  menuToggle.classList.toggle('active');


  menu.classList.toggle('active');
});
