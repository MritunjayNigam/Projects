
async function quotesGenerator(){
    
    let num = document.querySelector(".container input").value
    if(num==""){
        alert("Enter Quote Number")
        return
    }
    else if(num < 1 || num >1454){
        alert("Enter a positive number till 1454")
        return
    }

    document.querySelector(".board").innerText = "Loading... Please Wait !🙂"

    let url = `https://dummyjson.com/quotes/${num}` 
    let data = await fetch(url);
    let report = await data.json();
    console.log(report)

    let quote = report.quote;
    let aurthor =  report.author;
    let quoteID = report.id;


    let board = document.querySelector(".board");
    //ID
    board.innerHTML = `Quote ID :${quoteID}`;
      
    //QUOTE
    let qu = document.createElement("p");
    qu.innerText = `"${quote}"`
    board.appendChild(qu) 
    //AUTTHOR
    let p =document.createElement("p");  
    p.innerText = `By - "${aurthor}"`;
    board.appendChild(p);
}

async function randomQuotesGenerator() {
     document.querySelector(".board").innerText = "Loading... Please Wait !🙂"

    let num = Math.floor(Math.random() * 1454) + 1;
     
    let url = `https://dummyjson.com/quotes/${num}` 
    let data = await fetch(url);
    let report = await data.json();
    console.log(report);

    let quote = report.quote;
    let aurthor =  report.author;
    let quoteID = report.id;

    let board = document.querySelector(".board");
    //ID
    board.innerHTML = `Quote ID :${quoteID}`;
      
    //QUOTE
    let qu = document.createElement("p");
    qu.innerText = `"${quote}"`
    board.appendChild(qu) 
    //AUTTHOR
    let p =document.createElement("p");  
    p.innerText = `By - "${aurthor}"`;
    board.appendChild(p);

}

document.querySelector(".currentBtn").addEventListener("click", randomQuotesGenerator)
document.querySelector(".btn").addEventListener("click", quotesGenerator)
document.querySelector("nav h1").addEventListener("click", ()=>{
    // window.location.href="index.html" OR
    location.reload()
})


