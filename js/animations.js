window.addEventListener('load', animateElements)
window.addEventListener('scroll', animateElements)

function animateElements () {
    let elts = document.querySelectorAll('[data-animation-class]')
    for (let elt of elts) {

        if (window.scrollY + window.innerHeight > elt.offsetTop) handleElementAnimation(elt)

    }
}

function handleElementAnimation (elt) {

    if (elt.dataset.triggered) return

    const animation_duration = elt.dataset.animationDuration || 700
    const animation_class = elt.dataset.animationClass
    elt.dataset.trigerred = true

    elt.classList.add(animation_class)

    window.setTimeout(function () {
        delete elt.dataset.animationClass
        delete elt.dataset.animationDuration
        delete elt.dataset.trigerred
    }, animation_duration)

}