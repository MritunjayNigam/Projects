//DECLARATION
let image = document.querySelector(".container img");
let box = document.querySelector(".container");
let refresh = document.querySelector(".fa-rotate-right");
let target = document.querySelector(".container input");

//REFRESH
refresh.addEventListener("click", () => {
    
    refresh.classList.add("rotate")
    setTimeout(()=>{
        refresh.classList.remove("rotate")
    }, 500);
    
    if (window.innerWidth <= 425) {
        box.style.height = "150px"
    } else {
        box.style.height = "144px"
    }
    
    image.style.display = "none";
    
    target.value = "";
    
})


//MAIN
async function genereteQR() {
    let target = document.querySelector(".container input").value;
    if (target == "") {
        alert("Box Khali Na Chordo!")
        return
    }

    let url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${target}`

    image.src = url

    async function setHeight() {
        await new Promise(resolve => {
            if (window.innerWidth <= 425) {
                box.style.height = "380px"
            } else {
                box.style.height = "374px"
            }
            setTimeout(resolve, 500)
        });
    }
    await setHeight()

    image.style.display = "block"
}


//CALLING
document.querySelector(".btn").addEventListener("click", () => {
    genereteQR()
})
target.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
        genereteQR()
    }
})
