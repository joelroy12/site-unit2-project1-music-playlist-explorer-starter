document.addEventListener("DOMContentLoaded", () => {

        const playlists = [
        {
            "playlistID": 1,
            "playlist_name": "WOW",
            "playlist_author": "jeffrey",
            "playlist_art": "./assets/img/playlist.png",
            "artist": "Dua Lipa",
            "songs": [
                {"title": "Levitating", "duration": "3:23", "artist": "Dua Lipa"},
                {"title": "Don't Start Now", "duration": "3:03", "artist": "Dua Lipa"},
                {"title": "New Rules", "duration": "3:29", "artist": "Dua Lipa"},
                {"title": "Physical", "duration": "3:13", "artist": "Dua Lipa"},
                {"title": "Break My Heart", "duration": "3:41", "artist": "Dua Lipa"}
            ]
        },
        {
            "playlistID": 2,
            "playlist_name": "NAH",
            "playlist_author": "jeffrey",
            "playlist_art": "./assets/img/playlist.png",
            "artist": "Drake",
            "songs": [
                {"title": "God's Plan", "duration": "3:19", "artist": "Drake"},
                {"title": "Hotline Bling", "duration": "4:27", "artist": "Drake"},
                {"title": "One Dance", "duration": "2:53", "artist": "Drake"},
                {"title": "In My Feelings", "duration": "3:37", "artist": "Drake"},
                {"title": "Nonstop", "duration": "3:58", "artist": "Drake"}
            ]
        },
        {
            "playlistID": 3,
            "playlist_name": "LOOKUP",
            "playlist_author": "jeffrey",
            "playlist_art": "./assets/img/playlist.png",
            "artist": "Billie Eilish",
            "songs": [
                {"title": "Bad Guy", "duration": "3:12", "artist": "Billie Eilish"},
                {"title": "Therefore I Am", "duration": "2:54", "artist": "Billie Eilish"},
                {"title": "Happier Than Ever", "duration": "4:52", "artist": "Billie Eilish"},
                {"title": "Ocean Eyes", "duration": "3:20", "artist": "Billie Eilish"},
                {"title": "bury a friend", "duration": "3:13", "artist": "Billie Eilish"}
            ]
        },
        {
            "playlistID": 4,
            "playlist_name": "TURNAROUND",
            "playlist_author": "jeffrey",
            "playlist_art": "./assets/img/playlist.png",
            "artist": "Harry Styles",
            "songs": [
                {"title": "As It Was", "duration": "2:47", "artist": "Harry Styles"},
                {"title": "Watermelon Sugar", "duration": "2:56", "artist": "Harry Styles"},
                {"title": "Adore You", "duration": "3:27", "artist": "Harry Styles"},
                {"title": "Sign of the Times", "duration": "5:42", "artist": "Harry Styles"},
                {"title": "Golden", "duration": "3:28", "artist": "Harry Styles"}
            ]
        },
        {
            "playlistID": 5,
            "playlist_name": "WATCHOUT",
            "playlist_author": "jeffrey",
            "playlist_art": "./assets/img/playlist.png",
            "artist": "Taylor Swift",
            "songs": [
                {"title": "Anti-Hero", "duration": "3:21", "artist": "Taylor Swift"},
                {"title": "Shake It Off", "duration": "3:39", "artist": "Taylor Swift"},
                {"title": "Blank Space", "duration": "3:51", "artist": "Taylor Swift"},
                {"title": "Cruel Summer", "duration": "2:58", "artist": "Taylor Swift"},
                {"title": "Love Story", "duration": "3:55", "artist": "Taylor Swift"}
            ]
        },
        {
        "playlistID": 6,
        "playlist_name": "FUNKYTIME",
        "playlist_author": "jeffrey",
        "playlist_art": "./assets/img/playlist.png",
        "artist": "The Weeknd",
        "songs": [
            {"title": "Blinding Lights", "duration": "3:21", "artist": "The Weeknd"},
            {"title": "Save Your Tears", "duration": "3:35", "artist": "The Weeknd"},
            {"title": "Starboy", "duration": "3:50", "artist": "The Weeknd"},
            {"title": "Can't Feel My Face", "duration": "3:33", "artist": "The Weeknd"},
            {"title": "In The Night", "duration": "3:55", "artist": "The Weeknd"}
        ]
        },
        {
            "playlistID": 7,
            "playlist_name": "UHOH",
            "playlist_author": "jeffrey",
            "playlist_art": "./assets/img/playlist.png",
            "artist": "Ariana Grande",
            "songs": [
                {"title": "positions", "duration": "2:52", "artist": "Ariana Grande"},
                {"title": "7 rings", "duration": "2:58", "artist": "Ariana Grande"},
                {"title": "thank u, next", "duration": "3:27", "artist": "Ariana Grande"},
                {"title": "Into You", "duration": "4:04", "artist": "Ariana Grande"},
                {"title": "No Tears Left to Cry", "duration": "3:25", "artist": "Ariana Grande"}
            ]
        },
        {
            "playlistID": 8,
            "playlist_name": "WHO",
            "playlist_author": "jeffrey",
            "playlist_art": "./assets/img/playlist.png",
            "artist": "Ed Sheeran",
            "songs": [
                {"title": "Shape of You", "duration": "3:53", "artist": "Ed Sheeran"},
                {"title": "Perfect", "duration": "4:23", "artist": "Ed Sheeran"},
                {"title": "Shivers", "duration": "3:27", "artist": "Ed Sheeran"},
                {"title": "Thinking Out Loud", "duration": "4:41", "artist": "Ed Sheeran"},
                {"title": "Bad Habits", "duration": "3:51", "artist": "Ed Sheeran"}
            ]
        }
    ]
    
        function displayRandom() {
            // const element = document.getElementById('songs-list');
            // console.log(element);
            document.getElementById('songs-list-featured').innerHTML = '';
            const randomPlaylist = playlists[Math.floor(Math.random() * playlists.length)];
            document.getElementById('playlist-name').innerText = randomPlaylist.playlist_name;
            document.getElementById('playlist-author').innerText = randomPlaylist.playlist_author;
            document.getElementById('playlist-art').src = randomPlaylist.playlist_art;

                for (let i = 0; i < randomPlaylist.songs.length; i++) {
                    let songContainer = document.createElement('div');
                    songContainer.className = "song-containers";
                    let albumName = document.createElement('h4');
                    let songName = document.createElement('h3');
                    let authorName = document.createElement('h4');
                    let image = document.createElement('img');
                    let totalContainer = document.createElement('div');

                    albumName.textContent = "Album Name: " + randomPlaylist.playlist_name;
                    songName.textContent = "Song Name: " + randomPlaylist.songs[i].title;
                    authorName.textContent = "Artist: " + randomPlaylist.artist;
                    image.src = randomPlaylist.playlist_art;

                    songContainer.appendChild(songName);
                    totalContainer.appendChild(albumName);
                    totalContainer.appendChild(authorName);
                    totalContainer.appendChild(image);
                    songContainer.appendChild(totalContainer);
                    console.log(albumName.textContent);
                    document.getElementById('songs-list-featured').appendChild(songContainer);

                }
            }
            displayRandom();
});