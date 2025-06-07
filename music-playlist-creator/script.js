document.addEventListener("DOMContentLoaded", () => {
  // JavaScript for Opening and Closing the Modal
  const modal = document.getElementById("modal-overlay");
  const span = document.getElementsByClassName("song-card")[0];
  const closeButton = document.querySelector(".close");
  const playlistCards = document.getElementsByClassName("song-card");
  const shuffleBtn = document.getElementById("shuffle-btn");
  deletePlaylist();

  let currPlaylistIndex = 0;

  // remember to add actual song names for the playlists with a minimum of 5
  // to allow shuffle

  const playlists = [
    {
      playlistID: 1,
      playlist_name: "WOW",
      playlist_author: "jeffrey",
      playlist_art: "./assets/img/playlist.png",
      artist: "Dua Lipa",
      songs: [
        { title: "Levitating", duration: "3:23", artist: "Dua Lipa" },
        { title: "Don't Start Now", duration: "3:03", artist: "Dua Lipa" },
        { title: "New Rules", duration: "3:29", artist: "Dua Lipa" },
        { title: "Physical", duration: "3:13", artist: "Dua Lipa" },
        { title: "Break My Heart", duration: "3:41", artist: "Dua Lipa" },
      ],
    },
    {
      playlistID: 2,
      playlist_name: "NAH",
      playlist_author: "jeffrey",
      playlist_art: "./assets/img/playlist.png",
      artist: "Drake",
      songs: [
        { title: "God's Plan", duration: "3:19", artist: "Drake" },
        { title: "Hotline Bling", duration: "4:27", artist: "Drake" },
        { title: "One Dance", duration: "2:53", artist: "Drake" },
        { title: "In My Feelings", duration: "3:37", artist: "Drake" },
        { title: "Nonstop", duration: "3:58", artist: "Drake" },
      ],
    },
    {
      playlistID: 3,
      playlist_name: "LOOKUP",
      playlist_author: "jeffrey",
      playlist_art: "./assets/img/playlist.png",
      artist: "Billie Eilish",
      songs: [
        { title: "Bad Guy", duration: "3:12", artist: "Billie Eilish" },
        { title: "Therefore I Am", duration: "2:54", artist: "Billie Eilish" },
        {
          title: "Happier Than Ever",
          duration: "4:52",
          artist: "Billie Eilish",
        },
        { title: "Ocean Eyes", duration: "3:20", artist: "Billie Eilish" },
        { title: "bury a friend", duration: "3:13", artist: "Billie Eilish" },
      ],
    },
    {
      playlistID: 4,
      playlist_name: "TURNAROUND",
      playlist_author: "jeffrey",
      playlist_art: "./assets/img/playlist.png",
      artist: "Harry Styles",
      songs: [
        { title: "As It Was", duration: "2:47", artist: "Harry Styles" },
        { title: "Watermelon Sugar", duration: "2:56", artist: "Harry Styles" },
        { title: "Adore You", duration: "3:27", artist: "Harry Styles" },
        {
          title: "Sign of the Times",
          duration: "5:42",
          artist: "Harry Styles",
        },
        { title: "Golden", duration: "3:28", artist: "Harry Styles" },
      ],
    },
    {
      playlistID: 5,
      playlist_name: "WATCHOUT",
      playlist_author: "jeffrey",
      playlist_art: "./assets/img/playlist.png",
      artist: "Taylor Swift",
      songs: [
        { title: "Anti-Hero", duration: "3:21", artist: "Taylor Swift" },
        { title: "Shake It Off", duration: "3:39", artist: "Taylor Swift" },
        { title: "Blank Space", duration: "3:51", artist: "Taylor Swift" },
        { title: "Cruel Summer", duration: "2:58", artist: "Taylor Swift" },
        { title: "Love Story", duration: "3:55", artist: "Taylor Swift" },
      ],
    },
    {
      playlistID: 6,
      playlist_name: "FUNKYTIME",
      playlist_author: "jeffrey",
      playlist_art: "./assets/img/playlist.png",
      artist: "The Weeknd",
      songs: [
        { title: "Blinding Lights", duration: "3:21", artist: "The Weeknd" },
        { title: "Save Your Tears", duration: "3:35", artist: "The Weeknd" },
        { title: "Starboy", duration: "3:50", artist: "The Weeknd" },
        { title: "Can't Feel My Face", duration: "3:33", artist: "The Weeknd" },
        { title: "In The Night", duration: "3:55", artist: "The Weeknd" },
      ],
    },
    {
      playlistID: 7,
      playlist_name: "UHOH",
      playlist_author: "jeffrey",
      playlist_art: "./assets/img/playlist.png",
      artist: "Ariana Grande",
      songs: [
        { title: "positions", duration: "2:52", artist: "Ariana Grande" },
        { title: "7 rings", duration: "2:58", artist: "Ariana Grande" },
        { title: "thank u, next", duration: "3:27", artist: "Ariana Grande" },
        { title: "Into You", duration: "4:04", artist: "Ariana Grande" },
        {
          title: "No Tears Left to Cry",
          duration: "3:25",
          artist: "Ariana Grande",
        },
      ],
    },
    {
      playlistID: 8,
      playlist_name: "WHO",
      playlist_author: "jeffrey",
      playlist_art: "./assets/img/playlist.png",
      artist: "Ed Sheeran",
      songs: [
        { title: "Shape of You", duration: "3:53", artist: "Ed Sheeran" },
        { title: "Perfect", duration: "4:23", artist: "Ed Sheeran" },
        { title: "Shivers", duration: "3:27", artist: "Ed Sheeran" },
        { title: "Thinking Out Loud", duration: "4:41", artist: "Ed Sheeran" },
        { title: "Bad Habits", duration: "3:51", artist: "Ed Sheeran" },
      ],
    },
  ];

  function openModal(playlist) {
    document.getElementById("playlist-name").innerText = playlist.playlist_name;
    document.getElementById("playlist-author").innerText =
      playlist.playlist_author;
    document.getElementById("playlist-art").src = playlist.playlist_art;
    modal.style.display = "block";
    console.log(playlist);
    updateSongsList(playlist.songs);

    // I KEPT THIS SO I COULD LEARN FROM IT
    // for (let i = 0; i < playlist.songs.length; i++) {
    //     let songs = document.createElement('div');
    //     songs.className = "song-containers";
    //     let albumName = document.createElement('h4');
    //     let songName = document.createElement('h3');
    //     let authorName = document.createElement('h4');
    //     let image = document.createElement('img');
    //     let totalContainer = document.createElement('div');
    //     albumName.textContent = "Album Name: " + playlist.playlist_name;
    //     songName.textContent = "Song Name: " + playlist.songs[i];
    //     authorName.textContent = "Artist: " + playlist.artist;
    //     image.src = playlist.playlist_art;
    //     songs.appendChild(songName);
    //     totalContainer.appendChild(albumName);
    //     totalContainer.appendChild(authorName);
    //     songs.appendChild(image);
    //     songs.appendChild(totalContainer);
    //     console.log(albumName.textContent);
    //     document.getElementById('songs-list').appendChild(songs);
    // }
  }
  for (let i = 0; i < playlistCards.length; i++) {
    const card = playlistCards[i];
    card.addEventListener("click", () => {
      openModal(playlists[i]);
    });
  }

  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
    document.getElementById("songs-list").innerHTML = "";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
      document.getElementById("songs-list").innerHTML = "";
    }
  });

  // Like button function

  const likeButtons = document.querySelectorAll(".heart-button");

  for (let i = 0; i < likeButtons.length; i++) {
    const button = likeButtons[i];

    let likes = 0;
    const likeCount = document.createElement("p");
    likeCount.classList.add("like-count");
    likeCount.textContent = `${likes} likes`;
    button.parentNode.appendChild(likeCount);

    button.addEventListener("click", () => {
      event.stopPropagation();
      if (button.classList.contains("liked")) {
        button.classList.remove("liked");
        likes--;
        button.textContent = "♡";
      } else {
        button.classList.add("liked");
        likes++;
        button.textContent = "❤️";
      }

      if (likes === 1) {
        likeCount.innerHTML = `${likes} like`;
      } else {
        likeCount.innerHTML = `${likes} likes`;
      }
    });
  }

  // Shuffle button function
  shuffleBtn.addEventListener("click", () => {
    console.log(document.getElementById("songs-list"));
    const newShuffledArray = shuffleArray(playlists[currPlaylistIndex].songs);
    console.log(playlists[currPlaylistIndex]);
    updateSongsList(newShuffledArray);
  });

  function shuffleArray(array) {
    console.log(array);
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    console.log(array);
    return array;
  }

  function updateSongsList(array, playlist) {
    const songsList = document.getElementById("songs-list");
    songsList.innerHTML = "";

    for (let i = 0; i < array.length; i++) {
      let songContainer = document.createElement("div");
      // let totalContainer = document.createElement('img');
      // let image = document.createElement('img');
      let songName = document.createElement("h3");
      // let albumName = document.createElement('h4');
      // let authorName = document.createElement('h4');
      songContainer.className = "song-containers";
      // image.src = playlist.playlist_art;
      songName.textContent =
        "Song Name: " +
        array[i].title +
        "      |      Artist Name: " +
        array[i].artist +
        "      |       Duration: " +
        array[i].duration;
      // authorName.textContent = "Artist: " + playlist.artist;
      // albumName.textContent = "Album Name: " + playlist.playlist_name;
      // totalContainer.appendChild(albumName);
      songContainer.appendChild(songName);
      // totalContainer.appendChild(authorName);
      // songContainer.appendChild(image);
      // songContainer.appendChild(totalContainer);
      document.getElementById("songs-list").appendChild(songContainer);
    }
    console.log(document.getElementById("songs-list"));
  }

  // Delete playlist function

  function deletePlaylist() {
    const deleteBtn = document.querySelectorAll(".delete-button");
    for (let i = 0; i < deleteBtn.length; i++) {
      deleteBtn[i].addEventListener("click", () => {
        event.stopPropagation();
        deleteBtn[i].parentNode.style.display = "none";
      });
    }
  }

  // Create playlist function

//   createPlaylistBtn = document.getElementById("create-playlist-btn");
//   createPlaylistForm = document.getElementById("create-playlist-form");
//   createPlaylistBtn.addEventListener("click", () => {
//     createPlaylistForm.classList.add("show");
//   });

//   document
//     .getElementById("submit-form")
//     .addEventListener("submit", (event) => {
//       event.preventDefault();
//       const playlistName = document.getElementById("playlist-name").value;
//       const coverImage = document.getElementById("cover-image").value;
//       const author = document.getElementById("author").value;
//       console.log(playlistName);
//       console.log(author);


//       createPlaylistForm.classList.remove("show");
//     });
});
