interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

//const song = 'New Song';

const { song:anotherSong, songDuration:duration, details } = audioPlayer;
const { author } = details;

//console.log('Song: ', audioPlayer.song); //Sin desestructuracion
console.log('Song: ', anotherSong); //Con desestructuracion
//console.log('Duration: ', audioPlayer.songDuration); //Sin desestructuracion
console.log('Duration: ', duration);
//console.log('Author: ', audioPlayer.details.author); //Sin desestructuracion
console.log('Author: ', author); //Con desestructuracion

const [ , , trunks = 'Not found']: string[] = ['Goku', 'Vegeta', 'Trunks'];

//const trunks = dbz[3] || 'No hay personaje'; //Sin desestructuracion

console.error('Personaje 3', trunks);

export {};