function navInfo(){
    let a = document.querySelectorAll(".bar");
    a.forEach(e=>{
        if (e.classList.contains("home")) {
            e.addEventListener("mouseover",()=>{
                document.querySelector(".home-box").style.display="block"
            })
            e.addEventListener("mouseout",()=>{
                document.querySelector(".home-box").style.display="none"
            })
        }
        else if (e.classList.contains("about")) {
            e.addEventListener("mouseover",()=>{
                document.querySelector(".about-box").style.display="block"
            })
            e.addEventListener("mouseout",()=>{
                document.querySelector(".about-box").style.display="none"
            })
        }
        if (e.classList.contains("contact")) {
            e.addEventListener("mouseover",()=>{
                document.querySelector(".contact-box").style.display="block"
            })
            e.addEventListener("mouseout",()=>{
                document.querySelector(".contact-box").style.display="none"
            })
        }
    })

}
navInfo()


key = "ema_live_dPRQf5XUe9uPBgnlAox1HinzNNM9z2Ty9ZADWNH8"
let url = "https://api.emailvalidation.io/v1/info?apikey=${key}&email=&{email}"

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
let str = ""
for(let key of Object.keys(result)){
    str = str + `<p>${key}: ${result[key]}</p>`
}
resultCont.innerHTML =  str

