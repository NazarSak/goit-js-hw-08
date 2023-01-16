import Player from "@vimeo/player";

const iframe = document.querySelector('iframe');


const player = new Player(iframe);

player.on('play', function() {
    console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});
 
   
const onPlay = function(data) {

};

player.on('timeupdate', onPlay);

const time = +localStorage.getItem(VIDEO_CURRENT_TIME);

player.setCurrentTime(time).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});