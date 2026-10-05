const musicItems = document.querySelectorAll('.music');
const mainAudio = document.getElementById('main-audio-player');
const mainAudioTitle = document.getElementById('main-audio-title');

musicItems.forEach(item => {
    item.addEventListener('click', () => {
        const audioSrc = item.getAttribute('data-src');
        const audioTitle = item.getAttribute('data-title');

        mainAudio.src = audioSrc;

        if (mainAudioTitle) {
            mainAudioTitle.textContent = audioTitle;
        }

        mainAudio.play();
    });
});