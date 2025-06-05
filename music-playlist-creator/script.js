document.addEventListener("DOMContentLoaded", () => {

    // JavaScript for Opening and Closing the Modal
    const modal = document.getElementById("modal-overlay");
    const span = document.getElementsByClassName("song-card")[0];
    const closeButton = document.querySelector(".close");
    const playlistCards = document.getElementsByClassName("song-card");

    // remember to add actual song names for the playlists with a minimum of 5
    // to allow shuffle

    const playlists = [
        {
            "playlistID": 1,
            "playlist_name": "WOW",
            "playlist_author": "jeffrey",
            "playlist_art": "./assets/img/playlist.png",
            "artist": "Dua Lipa",
            "songs": ["Levitating", "Don't Start Now", "New Rules", "Physical", "Break My Heart"]
        },
        {
            "playlistID": 2,
            "playlist_name": "NAH",
            "playlist_author": "jeffrey",
            "playlist_art": "./assets/img/playlist.png",
            "artist": "Drake",
            "songs": ["God's Plan", "Hotline Bling", "One Dance", "In My Feelings", "Nonstop"]
        },
        {
            "playlistID": 3,
            "playlist_name": "LOOKUP",
            "playlist_author": "jeffrey",
            "playlist_art": "./assets/img/playlist.png",
            "artist": "Billie Eilish",
            "songs": ["Bad Guy", "Therefore I Am", "Happier Than Ever", "Ocean Eyes", "bury a friend"]
        },
        {
            "playlistID": 4,
            "playlist_name": "TURNAROUND",
            "playlist_author": "jeffrey",
            "playlist_art": "./assets/img/playlist.png",
            "artist": "Harry Styles",
            "songs": ["As It Was", "Watermelon Sugar", "Adore You", "Sign of the Times", "Golden"]
        },
        {
            "playlistID": 5,
            "playlist_name": "WATCHOUT",
            "playlist_author": "jeffrey",
            "playlist_art": "./assets/img/playlist.png",
            "artist": "Taylor Swift",
            "songs": ["Anti-Hero", "Shake It Off", "Blank Space", "Cruel Summer", "Love Story"]
        },
        {
            "playlistID": 6,
            "playlist_name": "FUNKYTIME",
            "playlist_author": "jeffrey",
            "playlist_art": "./assets/img/playlist.png",
            "artist": "The Weeknd",
            "songs": ["Blinding Lights", "Save Your Tears", "Starboy", "Can't Feel My Face", "In The Night"]
        },
        {
            "playlistID": 7,
            "playlist_name": "UHOH",
            "playlist_author": "jeffrey",
            "playlist_art": "./assets/img/playlist.png",
            "artist": "Ariana Grande",
            "songs": ["positions", "7 rings", "thank u, next", "Into You", "No Tears Left to Cry"]
        },
        {
            "playlistID": 8,
            "playlist_name": "WHO",
            "playlist_author": "jeffrey",
            "playlist_art": "./assets/img/playlist.png",
            "artist": "Ed Sheeran",
            "songs": ["Shape of You", "Perfect", "Shivers", "Thinking Out Loud", "Bad Habits"]
        }
    ]

    function openModal(playlist) {
        document.getElementById('playlist-name').innerText = playlist.playlist_name;
        document.getElementById('playlist-author').innerText = playlist.playlist_author;
        document.getElementById('playlist-art').src = playlist.playlist_art;
        modal.style.display = "block";
        console.log(playlist);
        for (let i = 0; i < playlist.songs.length; i++) {
            var songs = document.createElement('div');
            songs.className = "song-containers";
            var albumName = document.createElement('h4');
            var songName = document.createElement('h3');
            var authorName = document.createElement('h4');
            var image = document.createElement('img');
            var totalContainer = document.createElement('div');
            albumName.textContent = "Album Name: " + playlist.playlist_name;
            songName.textContent = "Song Name: " + playlist.songs[i];
            authorName.textContent = "Artist: " + playlist.artist;
            image.src = playlist.playlist_art;
            totalContainer.appendChild(songName);
            totalContainer.appendChild(albumName);
            totalContainer.appendChild(authorName);
            songs.appendChild(image);
            songs.appendChild(totalContainer);
            console.log(albumName.textContent);
            document.getElementById('songs-list').appendChild(songs);
        }
    }
    for (let i = 0; i < playlistCards.length; i++) {
        const card = playlistCards[i];
        card.addEventListener('click', () => {
            openModal(playlists[i]);
        })
    }

    closeButton.addEventListener('click',() => {
        modal.style.display = "none";
        document.getElementById('songs-list').innerHTML = '';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
            document.getElementById('songs-list').innerHTML = '';
        }
    });


    // Like button function

    const likeButtons = document.querySelectorAll('.heart-button');

    for (let i = 0; i < likeButtons.length; i++) {
        const button = likeButtons[i];
    
        let likes = 0;
        const likeCount = document.createElement('p');
        likeCount.classList.add('like-count');
        likeCount.textContent = `${likes} likes`;
        button.parentNode.appendChild(likeCount);

        button.addEventListener('click', () => {
            event.stopPropagation();
            if(button.classList.contains('liked')) {
                button.classList.remove('liked');
                likes--;
                button.textContent = '♡';
            } else {
                button.classList.add('liked');
                likes++;
                button.textContent = '❤️';
            }
            
            if (likes === 1) {
            likeCount.innerHTML = `${likes} like`;
            }
            else {
                likeCount.innerHTML = `${likes} likes`;
            }
        });
    }

    // Shuffle button function
    function shuffleArray(playlist) {
        for (let i = Array.length -1; i > 0; i--) {
            const j = Math.floor(Math.random()*(i+1));
            [playlist[i],playlist[j]] = [playlist[j],playlist[i]];
        }
    }

});