const btn = document.querySelector('.mobile-menu-button')
const menu = document.querySelector('.mobile-menu')
const hidden = document.querySelector('hidden')



btn.addEventListener('click', (e) =>{
  menu.classList.toggle('hidden')
})