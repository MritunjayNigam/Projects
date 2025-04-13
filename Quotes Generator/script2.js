function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function ownQuote() {
    let own = document.querySelector(".own");
    let area = document.querySelector(".board");

    own.addEventListener("click", async () => {
        area.innerText = "please wait !";
        await delay(500); // Now works correctly

        let inp = document.getElementById("enterQuote").value;
        if (inp.trim() === "") {
            alert("Pehle kuch likho to box me");
            return;
        }

        area.innerHTML = `"${inp}"`;
        let userName = document.createElement("p");
        userName.innerText = "By : Ayushi";
        area.appendChild(userName);

        // Show and set WhatsApp share link
        let forward = document.querySelector(".container a");
        forward.style.display = "block";
        forward.href = `https://wa.me/?text=${encodeURIComponent(`"${inp}"\n\nBy_ Ayushi`)}`;
    });
}

ownQuote();


