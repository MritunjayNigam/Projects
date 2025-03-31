
async function dictionary() {

    word = document.getElementById("word").value;
    if(word === ""){
        alert("Enter a word");
        return;
    } 
    document.querySelector(".output").style.display="none"
    document.querySelector(".welcome").style.display="none"
    document.querySelector(".loading").style.display="flex"
    // document.querySelector("a").style.display="flex"
    

    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    let data = await fetch(url);
    let res = await data.json();
    console.log(res);

    
    document.querySelector(".loading").style.display="none"
    // document.querySelector("a").style.display="none"

    if (res[0]) {

        document.querySelector(".output").style.display="block"
        

        // WORD
        let w = res[0].word;
        document.querySelector(".word").innerHTML = `Word : ${w}`;

        // AUDIO
        // let audioSrc = res[0].phonetics[0].audio;
        // if (audioSrc) {
        //     console.log(audioSrc);
        // } else {
        //     console.log("No audio available");
        // }


        // URL

        try {
            let link = res[0]?.sourceUrls?.[0];
            let anchor = document.querySelector("a");
            anchor.href = link;
        } catch (error) {
            console.log("Error:", error);
        }



        // DEFINITION 

        let d = res[0]?.meanings.flatMap(e => e.definitions.map(d => d.definition))
        .filter(Boolean)
        .slice(0,5)
        .map(def => `<li>${def}</li>`).join("")

        document.querySelector(".definition").innerHTML = `<ol>${d}</ol>`

        // console.log(res[0]?.meanings[0]?.definitions[0]?.definition || "Not Found");
        // console.log(res[0]?.meanings[1]?.definitions[0]?.definition || "Not Found");
        // console.log(res[0]?.meanings[2]?.definitions[0]?.definition || "Not Found");
        // console.log(res[0]?.meanings[2]?.definitions[1]?.definition || "Not Found");
        // console.log(res[0]?.meanings[2]?.definitions[2]?.definition || "Not Found");
        // console.log(res[0]?.meanings[2]?.definitions[3]?.definition || "Not Found");

        // EXAMPLES

        let eg = res[0]?.meanings
            .flatMap(m => m.definitions
                .map(e => e.example))
            .filter(Boolean)
            .slice(0,5)
            .map(example => `<li>${example}</li>`)
            .join("")

        document.querySelector(".sentences").innerHTML = `<ol>${eg}</ol>`

        // console.log(res[0]?.meanings[2]?.definitions[0]?.example || "Not Found");
        // console.log(res[0]?.meanings[2]?.definitions[1]?.example || "Not Found");
        // console.log(res[0]?.meanings[2]?.definitions[2]?.example || "Not Found");
        // console.log(res[0]?.meanings[2]?.definitions[3]?.example || "Not Found");

    }
    else {
        alert("Enter a valid world")
        document.querySelector(".loading").style.display="none"
        document.querySelector(".welcome").style.display="flex"
    }




}

document.querySelector("button").addEventListener("click", () => {
    dictionary()
})
document.querySelector("nav input").addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        dictionary();
    }
})

