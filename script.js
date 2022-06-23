const hamburgerBtn = document.querySelector("[data-id='btn-hamburger']")
const sideNav = document.querySelector("[data-id='sidenav']")
const body = document.querySelector('body');

hamburgerBtn.addEventListener('click', (e) => {
  sideNav.classList.toggle('toggle-width');
  sideNav.classList.toggle('toggle-transparent-bg');
  hamburgerBtn.classList.toggle('open');
  body.classList.toggle('scroll-toggle');
});

sideNav.querySelectorAll('li').forEach(listItem => {
  listItem.addEventListener('click', (e) => {
    sideNav.classList.toggle('toggle-width');
    sideNav.classList.toggle('toggle-transparent-bg');
    hamburgerBtn.classList.toggle('open');
    body.classList.toggle('scroll-toggle');
  });
});
