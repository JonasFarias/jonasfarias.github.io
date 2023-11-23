let trilho = document.getElementById('trilho')
let nav = document.querySelector('nav')
let header = document.querySelector('header')
let body = document.querySelector('body')
let secondary__title = document.querySelector('secondary__title')


trilho.addEventListener('click', ()=>{
    body.classList.toggle('dark')
    trilho.classList.toggle('dark')
    nav.classList.toggle('dark')
    hearder.classList.toggle('dark')
    secondary__title.classList.toggle('dark')
    
})