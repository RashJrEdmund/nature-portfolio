const menuIcon = document.querySelector('.menu-icon')
const sideMenu = document.querySelector('.side-carrier')
const closeIcon = document.querySelector('.close-icon')

menuIcon.addEventListener('click', () => {
  sideMenu.classList.toggle('side-active')
})

closeIcon.addEventListener('click', () => {
  sideMenu.classList.toggle('side-active')
})
