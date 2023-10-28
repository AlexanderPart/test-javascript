const brand = document.getElementById("brand")

const basicColor = document.getElementById("basic-color")
const burntColor = document.getElementById("burnt-color")
const metalicColor = document.getElementById("metalic-color")

const parkingCamera = document.getElementById("parking-camera")
const alloyWheels = document.getElementById("alloy-wheels")
const leatherSeats = document.getElementById("leather-seats")
const tuningAdjustment = document.getElementById("tuning-adjustment")

const result = document.querySelector(".result")
const btn = document.querySelector(".btn")
const budget = document.querySelector(".budget")
const compare = document.querySelector(".compare")

const send = document.getElementById("send")
const email = document.getElementById("email")

btn.addEventListener("click", function(){
    let price = 0

    // Výběr značky vozu
    price = brand.value

    // Výběr barvy
    if(basicColor.checked === true){
        price = brand.value * 1
    }

    if(burntColor.checked === true){
        price = brand.value * 1.05
    }

    if(metalicColor.checked === true){
        price = brand.value * 1.07
    }

    // Dodatečná výbava
    if(parkingCamera.checked === true){
        price = price + 10000
    }

    if(alloyWheels.checked === true){
        price = price + 20000
    }

    if(leatherSeats.checked === true){
        price = price + 50000
    }

    if(tuningAdjustment.checked === true){
        price = price + (brand.value * 1.2 - brand.value)
    }

    result.value = price + " Kč"

    // Porovnání
    if(budget.value >= price){
        compare.value = "Dostačující rozpočet"
    } else if (budget.value === ""){
        compare.value = "Bez rozpočtu"
    } else {
        compare.value = "Nízký rozpočet"
    }
})

// Kontrola zavináče
email.addEventListener("keyup", function(){
    if (email.value.includes("@")){
        send.removeAttribute("disabled")
    } else {
        send.setAttribute("disabled", "")
    }
})
