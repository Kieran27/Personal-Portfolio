const hamburgerBtn = document.querySelector("[data-id='btn-hamburger']")
const sideNav = document.querySelector("[data-id='sidenav']")

hamburgerBtn.addEventListener('click', (e) => {
  sideNav.classList.toggle('toggle-width')
  hamburgerBtn.classList.toggle('open')
  document.querySelector('body').classList.toggle('body-toggle')
})

sideNav.querySelectorAll('li').forEach(listItem => {
  listItem.addEventListener('click', (e) => {
    sideNav.classList.toggle('toggle-width')
    hamburgerBtn.classList.toggle('open')
    document.querySelector('body').classList.toggle('body-toggle')
  })
})
