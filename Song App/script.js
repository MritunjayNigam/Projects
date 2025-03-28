console.log("hello");

let progress = document.getElementById("progress")
let play = document.getElementById("play")
let song = document.getElementById("song")
let vol = document.getElementById("vol");

vol.addEventListener("input", () => {
    song.volume = vol.value
})

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime
}

let mute = document.querySelector("#mute");
let previousVolume = song.volume;
mute.addEventListener("click", () => {
    if (mute.classList.contains("fa-volume-high")) {
        previousVolume = parseFloat(vol.value);
        mute.classList.add("fa-volume-xmark");
        mute.classList.remove("fa-volume-high");
        vol.value = 0;
        song.volume = 0;
    }
    else if (mute.classList.contains("fa-volume-xmark")) {
        mute.classList.add("fa-volume-high");
        mute.classList.remove("fa-volume-xmark")
        vol.value = previousVolume;
        song.volume = previousVolume;
    }
})

if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}
progress.onchange = function () {
    song.currentTime = progress.value;
}

// PAUSE AND PLAY
play.onclick = function () {
    if (play.classList.contains("fa-play")) {
        song.play()
        play.classList.remove("fa-play")
        play.classList.add("fa-pause")
    } else if (play.classList.contains("fa-pause")) {
        song.pause()
        play.classList.remove("fa-pause")
        play.classList.add("fa-play")
    }
}

let ham = document.querySelector("nav .circle:nth-child(2)");
ham.addEventListener("click", () => {
    const list = document.querySelector(".list");
    list.classList.toggle("expand")
})






function data() {
    const storage = [
        {
            name: "",
            singer: "",
            link: "",
            image: ""
        },

        {
            name: "BamBam",
            singer: "Srijan Mishra",
            link: "songs/bambam.mp3",
            image: "images/1img.png"
        },

        {
            name: "Bagar Bam Bam",
            singer: "Aryan Yadav",
            link: "songs/Babam Bam - Paradox 320 Kbps.mp3",
            image: "images/2img.png"
        },

        {
            name: "Holi Mein Rangeele",
            singer: "Mika Singh",
            link: "songs/Holi Mein Rangeele Mika Singh 320 Kbps.mp3",
            image: "images/3img.png"
        },

        {
            name: "Chinta Kis Baat Ki",
            singer: "Sachet Tandon",
            link: "songs/Chinta Kis Baat Ki Sachet Tandon 320 Kbps.mp3",
            image: "images/4img.png"
        },

        {
            name: "Do Me A Favour Lets Play Holi",
            singer: "Utkash Patel",
            link: "songs/Do Me A Favour Lets Play Holi Waqt The Race Against Time 320 Kbps.mp3",
            image: "images/5img.png"
        },

        {
            name: "Holi Mein Dhokha Diya",
            singer: "Bhatar Mera",
            link: "songs/pagalworld.com.mx-Bhatar Mera Holi Mein Dhokha Diya Hai.mp3",
            image: "images/6img.png"
        },

        {
            name: "Rang De Basanti",
            singer: "Daler Mehndi",
            link: "songs/Rang De Basanti Daler Mehndi 320 Kbps.mp3",
            image: "images/7img.png"
        },
        {
            name: "Salwarwa Lale Lal",
            singer: "Pawan Singh",
            link: "songs/Salwarwa Lale Lal Pawan Singh 320 Kbps.mp3",
            image: "images/8img.png"
        },

    ];

    const target = Array.from(document.querySelectorAll(".list ul li"));
    const forward = document.querySelector(".fa-forward");
    const backward = document.querySelector(".fa-backward");
    let currentIndex = 0;

    let back = document.getElementById("back");
    back.addEventListener("click", () => {
        currentIndex = 0
        song.src = "";
        progress.style.display = "none"
        const list = document.querySelector(".list")
        list.classList.remove("expand")
        document.querySelector(".frame").style.backgroundImage = `url('music.png')`;

        play.classList.add("fa-play")
        play.classList.remove("fa-pause")

        document.querySelector("main h1").innerHTML = "Welcome to My Song App"
        document.querySelector("main p").innerHTML = "Enjoy Listening"
    })

    target.forEach((item, index) => {
        if (index < storage.length) {
            item.addEventListener("click", () => {
                progress.style.display = "block"
                currentIndex = index;

                // SONG
                song.src = storage[currentIndex].link;
                play.classList.add("fa-pause");
                play.classList.remove("fa-play");
                song.play();

                // TITLE MAIN
                document.querySelector("main h1").innerHTML = storage[currentIndex].name;

                // SINGER
                document.querySelector("main p").innerHTML = storage[currentIndex].singer;

                // BACKGROUND
                document.querySelector(".frame").style.backgroundImage = `url('${storage[currentIndex].image}')`;
            });

            // SET LIST ITEM TEXT
            item.innerHTML = storage[index].name;
        }
    });

    // Forward Button (Next Song)
    forward.addEventListener("click", () => {
        progress.style.display = "block"
        if (currentIndex < storage.length - 1) {
            currentIndex++;
            target[currentIndex].click(); // Simulate clicking next song
        }
    });

    // Backward Button (Previous Song)
    backward.addEventListener("click", () => {
        progress.style.display = "block"
        if (currentIndex > 1) {
            currentIndex--;
            target[currentIndex].click(); // Simulate clicking previous song
        }
        else {
            alert("This is last song")
        }
    });
}

data();

function hideList() {
    let main = document.querySelector("footer, main");
    main.addEventListener("click", () => {
        const list = document.querySelector(".list")
        list.classList.remove("expand");
    })
}
hideList()



function redGreen() {
    let progress = document.getElementById("progress");
    let play = document.getElementById("play");

    if (play.classList.contains("fa-play")) {
        progress.classList.add("th");
    } else {
        progress.classList.remove("th");
    }
}

// Run `redGreen()` every time `#play` is clicked
document.getElementById("play").addEventListener("click", redGreen);


