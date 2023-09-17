import Player from '@vimeo/player'

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', function(data) {
    const currentTime = data.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime);
});

document.addEventListener('DOMContentLoaded', function() {
    const savedTime = localStorage.getItem('videoplayer-current-time');
    if (savedTime !== null) {
        try {
            const seconds = player.setCurrentTime(savedTime);
            console.log(`Video playback started at ${seconds} seconds`);
            player.play();
        } catch (error) {
            console.error('Error setting video playback time:', error);
        }
    }
});