const menuIcon = document.querySelector('.menu-icon')
const sideMenu = document.querySelector('.side-carrier')
const closeIcon = document.querySelector('.close-icon')
const overlay = document.getElementById('nav_overlay')

menuIcon.addEventListener('click', () => {
  sideMenu.classList.toggle('side-active')
  overlay.classList.add('active_nav_overlay')
})

closeIcon.addEventListener('click', () => {
  sideMenu.classList.toggle('side-active')
  overlay.classList.remove('active_nav_overlay')
})

overlay.addEventListener('click', () => {
  overlay.classList.remove('active_nav_overlay')
  sideMenu.classList.remove('side-active')
})
