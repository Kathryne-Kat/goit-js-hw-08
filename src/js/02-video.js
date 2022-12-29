import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (data) {
    //console.log(data);
    localStorage.setItem('videoplayer-current-time', data.seconds);
    //console.log('played the video!');
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
