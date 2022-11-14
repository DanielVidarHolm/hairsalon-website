
// Making the navbar reactive to the mouse and changing background when mouse hovers
const items = document.querySelectorAll('li')
items.forEach(item => {
    item.addEventListener('mouseenter', changeBackground)
    item.addEventListener('mouseleave', changeBackground)
})
function changeBackground(e){
    e.target.classList.toggle('highlight-dark')
}
