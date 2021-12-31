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
        iframe.setAttribute('src', '')
    }
})

function initYTVideo () {
    const url = "https://www.youtube.com/embed/IHZtEdbQ10M?feature=oembed&amp;start=1&amp;end&amp;wmode=opaque&amp;loop=0&amp;controls=0&amp;mute=0&amp;rel=0&amp;modestbranding=0&amp;autoplay=1"
    let iframe = document.querySelector('iframe')
    if (!iframe.getAttribute('src')) iframe.setAttribute('src', url)
}