window.addEventListener('load', flipCard)
var is_touch_device = false

window.addEventListener('touchstart', () => is_touch_device = true)

function flipCard () {
    let feature_cards = document.querySelectorAll('.feature-card')

    for (let card of feature_cards) {
        card.addEventListener('click', function () {
            card.classList.toggle('flipped')
        })
        card.addEventListener('mouseenter', function () {
            if (!is_touch_device) card.classList.add('flipped')
        })
        card.addEventListener('mouseleave', function () {
            if (!is_touch_device) card.classList.remove('flipped')
        })
    }

}
