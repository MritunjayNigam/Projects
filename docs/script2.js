
function ownQuote(){
    let own = document.querySelector(".own");
    let area = document.querySelector(".board");

    own.addEventListener("click",()=>{
        let inp = document.getElementById("enterQuote").value;
        if(inp==""){
            alert("Phele kuch likho to box me");
            return;
        }
        area.innerHTML = `"${inp}"`;
        let userName = document.createElement("p");
        userName.innerText="By : Ayushi"
        area.appendChild(userName)
        
        // FORWARD
        let forward = document.querySelector(".container a");
        forward.style.display = "block"
        forward.href = `https://wa.me/?text=${encodeURIComponent(`"${inp}"\n\nBy_ Ayushi`)}`;
    })
}
ownQuote()
