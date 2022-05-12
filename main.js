window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection()
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '3rem',
  duration: 700
}).reveal(`
  #home, 
  #home img, 
  #home.stats, 
  #services,
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content`)

function showNavOnScroll() {
  if (scrollY > 0) {
    document.querySelector('nav').classList.add('scroll')
  } else {
    document.querySelector('nav').classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 500) {
    document.querySelector('#backToTopButton').classList.add('show')
  } else {
    document.querySelector('#backToTopButton').classList.remove('show')
  }
}

function activateMenuAtCurrentSection() {
  const targetLine = scrollY + innerHeight / 2

  const sections = [...document.querySelectorAll('section')].map(
    item => item.id
  )

  sections.map(section => {
    const sectionTop = document.querySelector(`#${section}`).offsetTop
    const sectionHeight = document.querySelector(`#${section}`).offsetHeight
    const sectionEnd = sectionTop + sectionHeight

    if (sectionTop < targetLine && sectionEnd >= targetLine) {
      document
        .querySelector(`.menu a[href*=${section}]`)
        .classList.add('active')
    } else {
      document
        .querySelector(`.menu a[href*=${section}]`)
        .classList.remove('active')
    }
  })
}
