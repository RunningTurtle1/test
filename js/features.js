window.addEventListener('load', flipCard)

function flipCard () {
    let feature_cards = document.querySelectorAll('.feature-card')

    for (let card of feature_cards) {
        card.addEventListener('touchend', function () {
            card.classList.toggle('flipped')
        })
        if (!("touchstart" in document.documentElement)) card.addEventListener('mouseenter', function () {
            card.classList.add('flipped')
        })
        if (!("touchstart" in document.documentElement)) card.addEventListener('mouseleave', function () {
            card.classList.remove('flipped')
        })
    }

}
