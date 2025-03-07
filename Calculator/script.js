let string = ""
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((item)=>{
    item.addEventListener("click", (e)=>{
        if(e.target.innerHTML == "="){
            string = eval(string);
            document.querySelector("input").value = string
        }
        else if(e.target.innerHTML === "C" || e.target.innerHTML === "AC" ){
            string = ""
            document.querySelector("input").value = string
        }
        else if(e.target.innerHTML === "x"){
            string = string.slice(0, -1);
            document.querySelector("input").value = string
        }
        else if(e.target.innerHTML === "%"){
            string = (parseFloat(string)/100).toString();
            document.querySelector("input").value = string
        }
        else if(e.target.innerHTML == "X"){
            string = string + "*"
            document.querySelector("input").value = string
        }
        else{
            string = string + e.target.innerHTML;
            document.querySelector("input").value = string
        }
    })
})

let textArea = document.querySelector("input")

buttons.forEach((item) => {
    item.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "lime"
    });
    item.addEventListener("mouseout", (e)=>{
        e.target.style.backgroundColor = ""
    })
    item.addEventListener("mousedown", (e)=>{
        textArea.style.backgroundColor="cyan"
    })
    item.addEventListener("mouseup", (e)=>{
        textArea.style.backgroundColor=""
    })
});


