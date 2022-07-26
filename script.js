const hamburgerBtn = document.querySelector("[data-id='btn-hamburger']")
const sideNav = document.querySelector("[data-id='sidenav']")
const bioShort = document.querySelector("[data-id='bio-short']")
const bioLong = document.querySelector("[data-id='bio-long']")
const body = document.querySelector('body');
const bioShortBtn = document.querySelector("[data-id='btn-bio-short']")
const bioLongBtn = document.querySelector("[data-id='btn-bio-long']")

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

bioShortBtn.addEventListener('click', () => {
  bioShort.classList.toggle("toggle-display");
  bioLong.classList.toggle("toggle-display");
})

bioLongBtn.addEventListener('click', () => {
  bioShort.classList.toggle("toggle-display");
  bioLong.classList.toggle("toggle-display");
})


// Function to determine scroll related animations
const reveal = () => {
  const reveals = document.querySelectorAll(".reveal");
  for (let i=0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("revealed");
    } else {
      reveals[i].classList.remove("revealed");
    }
  }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();