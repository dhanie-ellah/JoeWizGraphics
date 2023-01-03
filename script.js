const links = document.getElementById('links')
const menu = document.getElementById('menu')
const close = document.getElementById('close')
const navLinks = document.querySelectorAll('.nav-link')
var x = window.matchMedia("(max-width: 800px)")

menu.addEventListener('click', () => {
  links.style.display = 'flex'
  menu.style.display = 'none'
  close.style.display = 'block'
})

close.addEventListener('click', () => {
  links.style.display = 'none'
  menu.style.display = 'block'
  close.style.display = 'none'
})

if (x.matches) {
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      links.style.display = 'none'
      menu.style.display = 'block'
      close.style.display = 'none'
    })
  })
}