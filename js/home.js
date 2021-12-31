const play_button = document.querySelector('#play-button-container')

play_button.addEventListener('click', function () {
    let video_modal = document.querySelector('.video-modal')
    video_modal.classList.add('show')
    initYTVideo()
})

document.addEventListener('click', (e) => {
    if (e.target.getAttribute('id') === 'presentation-video-modal') {
        e.target.classList.remove('show')
        let iframe = document.querySelector('iframe')
        iframe.remove()
    }
})

function initYTVideo () {
    let video_container = document.querySelector('#presentation-video-modal')
    const url = "https://www.youtube.com/embed/IHZtEdbQ10M?feature=oembed&amp;start=1&amp;end&amp;wmode=opaque&amp;loop=0&amp;controls=0&amp;mute=0&amp;rel=0&amp;modestbranding=0&amp;autoplay=1"
    let iframe = document.createElement('iframe')
    iframe.setAttribute('src', url)
    video_container.append(iframe)
}

window.addEventListener('scroll', function () {
    
    let elts = document.querySelectorAll('[data-animation-class]')
        
    if (!elts.length === 0) {
        window.removeEventListener('scroll', handleScroll, false)
        return
    }

    for (let elt of elts) {

        if (window.scrollY + window.innerHeight > elt.offsetTop) handleElementAnimation(elt)

    }

})

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