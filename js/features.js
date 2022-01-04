window.addEventListener('load', flipCard)

function flipCard () {
    let feature_cards = document.querySelectorAll('.feature-card')

    for (let card of feature_cards) {
        card.addEventListener('click', () => card.classList.toggle('flipped'))
        card.addEventListener('mouseenter', () => card.classList.add('flipped'))
        card.addEventListener('mouseleave', () => card.classList.remove('flipped'))
    }

}
