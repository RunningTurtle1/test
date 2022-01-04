window.addEventListener('load', flipCard)

function flipCard () {
    let feature_cards = document.querySelectorAll('.feature-card')
    feature_cards.forEach(elt => elt.addEventListener('click', function () {
        elt.classList.toggle('flipped')
    }))
}
