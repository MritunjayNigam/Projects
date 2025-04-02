
async function quotesGenerator(){
    document.querySelector(".board").innerText = "Loading... Please Wait !🙂"
    
    let num = document.querySelector(".container input").value
    if(num==""){
        alert("Enter any Number")
    }
    else if(num < 1 && num >1454){
        alert("Enter a Number between 1-1450")
    }

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





document.querySelector(".currentBtn").addEventListener("click", randomQuotesGenerator)
document.querySelector(".btn").addEventListener("click", quotesGenerator)

