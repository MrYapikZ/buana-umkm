const wrapper = document.querySelector('.scroll-wrapper')

let pressed = false
let startX = 0

wrapper.addEventListener('mousedown', function (e) {
    pressed = true
    startX = e.clientX
    this.style.cursor = 'grabbing'
})

wrapper.addEventListener('mouseleave', function (e) {
    pressed = false
})

window.addEventListener('mouseup', function (e) {
    pressed = false
    wrapper.style.cursor = 'grab'
})

wrapper.addEventListener('mousemove', function (e) {
    if(!pressed) {
        return
    }

    this.scrollLeft += startX - e.clientX
})

function homescroll() {
    window.scrollTo(0,0)
}
function infoscroll() {
    window.scrollTo(0, 1200)
}
function menuscroll() {
    window.scrollTo(0, 2500)
}
function contactscroll() {
    window.scrollTo(0, 4000)
}