
document.querySelector('.nav-burger ').addEventListener('click', toggleMenu)

function toggleMenu () {
    let menu = document.querySelector('#nav .links')
    if (menu.classList.contains('active')) {
        menu.classList.add('fadeOut')
        window.setTimeout(menu.classList.remove('fadeOut', 'active'), 600)
    } else {
        menu.classList.add('active')
    }
}