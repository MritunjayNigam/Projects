function navInfo(){
    let a = document.querySelectorAll(".bar");
    a.forEach(e=>{
        if (e.classList.contains("home")) {
            e.addEventListener("mouseover",()=>{
                document.querySelector(".home-box").classList.add("expand")
            })
            e.addEventListener("mouseout",()=>{
                document.querySelector(".home-box").classList.remove("expand")
            })
        }
        else if (e.classList.contains("about")) {
            e.addEventListener("mouseover",()=>{
                document.querySelector(".about-box").classList.add("expand")
            })
            e.addEventListener("mouseout",()=>{
                document.querySelector(".about-box").classList.remove("expand")
            })
        }
        if (e.classList.contains("contact")) {
            e.addEventListener("mouseover",()=>{
                document.querySelector(".contact-box").classList.add("expand")
            })
            e.addEventListener("mouseout",()=>{
                document.querySelector(".contact-box").classList.remove("expand")
            })
        }
    })
    document.querySelector(".box")
}
navInfo()


let result = {
    "tag": "",
    "free": false,
    "role": false,
    "user": "nilera3891",
    "email": "nilera3891@bankrau.com",
    "score": 0.8,
    "state": "deliverable",
    "domain": "bankrau.com",
    "reason": "valid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": true,
    "did_you_mean": "",
    "format_valid": true
}

async function emailValidation() {
    let email = document.getElementById("email").value;
    // let email = "mritunjaynigam700@gmail.com";
    let key = "ema_live_dPRQf5XUe9uPBgnlAox1HinzNNM9z2Ty9ZADWNH8"
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    const report = await fetch(url);
    const result = await report.json()
    console.log(result)
    let str = ""
    for(let key of Object.keys(result)){
        str = str + `<h2>${key}:</h2> <p> ${result[key]}</p>`
    }
    resultCont.innerHTML =  str
}
document.getElementById("btn").onclick = emailValidation;


