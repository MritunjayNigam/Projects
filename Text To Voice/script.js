function resizeTextArea(){
    const button = document.querySelector(".fa-solid");
    const textArea = document.querySelector("textarea");
    textArea.style.resize="none";

    button.onclick = function(){
        if(button.classList.contains("fa-toggle-off")){
            textArea.style.resize="both";
            button.classList.remove("fa-toggle-off")
            button.classList.add("fa-toggle-on")
        }
        else{
            textArea.style.resize="none";
            button.classList.remove("fa-toggle-on")
            button.classList.add("fa-toggle-off")
        }
    }
}
resizeTextArea()

let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = ()=>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice,i)=>(
        voiceSelect.options[i] = new Option(voice.name, i)
    ))

    voiceSelect.addEventListener("change", ()=>{
        speech.voice = voices[voiceSelect.value]
    })
}


let speech = new SpeechSynthesisUtterance();

document.querySelector("button").addEventListener("click",()=>{
    console.log("clicked");
    speech.text = document.querySelector("textarea").value;
    console.log(speech.text);
    window.speechSynthesis.speak(speech);
})




