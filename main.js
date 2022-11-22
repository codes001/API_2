const open_btn = document.querySelector(".open-btn")
const close_btn = document.querySelector(".close-btn")
const nav = document.querySelector(".nav")

open_btn.addEventListener('click', () => {
    console.log('clicked')
    nav.classList.toggle('visible')
})

close_btn.addEventListener('click', () => nav.classList.toggle ('visible'))
