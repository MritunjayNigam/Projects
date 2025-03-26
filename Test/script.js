function playMovie(url) {
    let frame = document.getElementById("movieFrame");
    frame.src = url;
    frame.style.display = "block";
}