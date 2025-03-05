document.querySelector(".cross").addEventListener("click", () =>{
    document.querySelector(".slidebar").classList.add("hide")
    document.querySelector(".ham").style.display="block"
})

document.querySelector(".ham").addEventListener("click", ()=>{
    document.querySelector(".slidebar").classList.remove("hide")
    document.querySelector(".ham").style.display="none"
})