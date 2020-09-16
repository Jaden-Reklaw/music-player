//Select DOM Elements
const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

//Music Array could be a database
const songs = [
    {
        name: 'jacinto-1',
        displayName: 'Electric Chill Machine',
        artist: 'Jacinto Design',
    },
    {
        name: 'jacinto-2',
        displayName: 'Seven Nation Army (Remix)',
        artist: 'Jacinto Design',
    },
    {
        name: 'jacinto-3',
        displayName: 'Goodnight, Disco Queen',
        artist: 'Jacinto Design',
    },{
        name: 'metric-1',
        displayName: 'Front Row (Remix)',
        artist: 'Metric/Jacinto Design',
    }
];

// Checking if Playing
let isPlaying = false;

// Play function
const playSong = () => {
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

// Pause Function
const pauseSong = () => {
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

// Play or Pause Event Listener
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

// Update DOM
function loadSong(song) {
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    image.src = `/img/${song.name}.jpg`;
}

let songIndex = 0;

// On Load - Select First Song
loadSong(songs[songIndex]);

// Next Song
const nextSong = () => {
    songIndex++;
    if(songIndex > songs.length -1) {
        songIndex = 0;
    }
    console.log(songIndex);
    loadSong(songs[songIndex]);
    playSong();
}

// Previous Song
const prevSong = () => {
    songIndex--;
    if(songIndex < 0) {
        songIndex = songs.length - 1;
    }
    console.log(songIndex);
    loadSong(songs[songIndex]);
    playSong();
}
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);