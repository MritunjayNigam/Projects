// function boxDetail() {
//     const categories = ["men", "women", "kids", "homes", "beauty", "studio"];

//     categories.forEach(category => {
//         document.querySelector(`.${category}`).addEventListener("mouseover", () => {
//             document.querySelector(`.${category}-box`).style.display = "block";
//         });

//         document.querySelector(`.${category}`).addEventListener("mouseout", () => {
//             document.querySelector(`.${category}-box`).style.display = "none";
//         });
//     });
// }

// boxDetail();



function boxDetail(){
    document.querySelectorAll(".tag").forEach(e =>{
        e.addEventListener("mouseover", ()=>{
            if(e.classList.contains("men")){
                document.querySelector(".men-box").style.display="block"
            }
            else if(e.classList.contains("women")){
                document.querySelector(".women-box").style.display="block"
            }
            else if(e.classList.contains("kids")){
                document.querySelector(".kids-box").style.display="block"
            }
            else if(e.classList.contains("homes")){
                document.querySelector(".homes-box").style.display="block"
            }
            else if(e.classList.contains("beauty")){
                document.querySelector(".beauty-box").style.display="block"
            }
            else if(e.classList.contains("studio")){
                document.querySelector(".studio-box").style.display="block"
            }
            
        })
        e.addEventListener("mouseout", ()=>{
            if(e.classList.contains("men")){
                document.querySelector(".men-box").style.display="none"
            }
            else if(e.classList.contains("women")){
                document.querySelector(".women-box").style.display="none"
            }
            else if(e.classList.contains("kids")){
                document.querySelector(".kids-box").style.display="none"
            }
            else if(e.classList.contains("homes")){
                document.querySelector(".homes-box").style.display="none"
            }
            else if(e.classList.contains("beauty")){
                document.querySelector(".beauty-box").style.display="none"
            }
            else if(e.classList.contains("studio")){
                document.querySelector(".studio-box").style.display="none"
            }
            
        })
        
    })
    document.querySelectorAll(".box").forEach(e =>{
        e.addEventListener("mouseover",()=>{
            e.style.display="block"   
        })
        e.addEventListener("mouseout",()=>{
            e.style.display="none"    
        })
        
    })
}

boxDetail()


