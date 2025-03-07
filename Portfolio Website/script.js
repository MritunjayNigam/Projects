document.querySelector(".cross").addEventListener("click", () =>{
    document.querySelector(".slidebar").classList.add("hide")
    if (document.querySelector(".slidebar").classList.contains("hide")) {
        document.querySelector(".ham").style.display = "block"
    } else {
        document.querySelector(".ham").style.display = "none"
    }
})

document.querySelector(".ham").addEventListener("click", ()=>{
    document.querySelector(".slidebar").classList.remove("hide")
    if (document.querySelector(".slidebar").classList.contains("hide")) {
        document.querySelector(".ham").style.display = "block"
    } else {
        document.querySelector(".ham").style.display = "none"
    }
})

function defaultHideSlidebar(){
    const ham = document.querySelector(".slidebar");
    ham.classList.add("hide")
}
defaultHideSlidebar()

function hideHam(){
    const ham = document.querySelector(".ham")
    const slidebar = document.querySelector(".slidebar")
    if(slidebar.classList.contains("hide")){
        ham.style.display="block"
    }
    else{
        ham.style.display="none"
    }
}
hideHam()
window.addEventListener("resize", hideHam)



// function widthNav(){
//     const element = document.querySelector(".slidebar")
//     const ham = document.querySelector(".ham");

//     if(window.innerWidth <= 768){
//         element.classList.add("hide")
//         ham.style.display="block"
//     }
//     else{
//         element.classList.remove("hide")
//     }
// }
// widthNav()
// window.addEventListener('resize', widthNav);// whenever someone changes width or height of window, run widthNav function


