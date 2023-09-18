import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);



const updateLocalStorage = throttle(function(currentTime) {
    localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000); 

player.on('timeupdate', function(data) {
    const currentTime = data.seconds;
    updateLocalStorage(currentTime);
});

document.addEventListener('DOMContentLoaded', function() {
    const savedTime = localStorage.getItem('videoplayer-current-time');
            try {
            const seconds = player.setCurrentTime(savedTime);   
        } catch (error) {
            console.error('Error setting video playback time:', error);
        }
    });