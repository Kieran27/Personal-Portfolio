const hamburgerBtn = document.querySelector("[data-id='btn-hamburger']")
const sideNav = document.querySelector("[data-id='sidenav']")

hamburgerBtn.addEventListener('click', (e) => {
  sideNav.classList.toggle('toggle-width')
  document.querySelector('body').classList.toggle('body-toggle')
})
