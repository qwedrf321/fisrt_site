function scrollDown() {
    window.scrollTo({top: window.innerHeight, behavior: 'smooth' });
}
let button = document.querySelector('.header_btn')
button.addEventListener('click', scrollDown)