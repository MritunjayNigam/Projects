document.querySelectorAll(".ulist li").forEach(e=>{
    e.addEventListener("mouseover", ()=>{
        e.classList.add("hov");
        e.style.transform = "scale(1.2)"; // Increase size smoothly
        e.style.transition = "transform 0.3s ease-in-out";
    });
    e.addEventListener("mouseout", ()=>{
        e.classList.remove("hov");
        e.style.transform = "scale(1)"; // Reset size
    });
    
})

var icon = document.getElementById("moon")
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")){
        icon.src= "sun.png"
    }
    else{
        icon.src = "moon.png"
    }
}