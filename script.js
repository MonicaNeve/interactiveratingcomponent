let howContainerNumber = document.querySelector(".how_container_number") 
let thankYouResultFour = document.querySelector(".thankyou_result-four ")
let howContainerButton = document.querySelector(".how_container_button")
let howContainer = document.querySelector(".how_container")
let thankYouContainer = document.querySelector(".thank_you_container")

howContainerNumber.addEventListener("click", (event)=>{
    let  SelecThowNumber = event.target.innerText
    thankYouResultFour.innerText = SelecThowNumber
    if (SelecThowNumber >0 || SelecThowNumber <=5){
        howContainerButton.addEventListener("click", ()=>{
    howContainer.style.display = "none"
    thankYouContainer.style.display = "flex"
})
    }
})

