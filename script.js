let howcontainernumber = document.querySelector(".how_container_number") 
let thankyouresultfour = document.querySelector(".thankyou_result-four ")
let howcontainerbutton = document.querySelector(".how_container_button")
let howcontainer = document.querySelector(".how_container")
let thankyoucontainer = document.querySelector(".thank_you_container")

howcontainernumber.addEventListener("click", (event)=>{
    let  Selecthownumber = event.target.innerText
    thankyouresultfour.innerText = Selecthownumber
    if (Selecthownumber >0 || Selecthownumber <=5){
        howcontainerbutton.addEventListener("click", ()=>{
    howcontainer.style.display = "none"
    thankyoucontainer.style.display = "flex"
})
    }
})

