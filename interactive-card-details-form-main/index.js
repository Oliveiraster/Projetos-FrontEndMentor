// Card Name input
const inName = document.querySelector("#card_name")
const wiName = document.querySelector("#name_card")
var cardName

inName.addEventListener("input", function(e){
    wiName.textContent = e.target.value.toUpperCase()
    cardName = wiName.textContent
    verificarName(cardName, inName)
})

function verificarName(i, item) {
    let regx = /^[a-zA-z\s]{4,}$/;
    if (regx.test(i)) {
      item.classList.add("ok")
      item.classList.remove("error")
    } else if(i.length ==0){
        item.classList.remove("ok")
        item.classList.remove("error")
        wiName.textContent = 'JANE APPLESEED' 
    }
    else {
        item.classList.remove("ok")
        item.classList.add("error")
    }
  }

// Card Number input
const inNumber = document.querySelector("#number_card")
const cardNumber1 = document.querySelector("#card1")
const cardNumber2 = document.querySelector("#card2")
const cardNumber3 = document.querySelector("#card3")
const cardNumber4 = document.querySelector("#card4")
const cardNumber = document.querySelector("#n_card")
var cardNumberC


function verificarNumber(i, item){

    if(!isNaN(i) && item == inNumber && i.length == 16){
        item.classList.add("ok")
        item.classList.remove("error")

    } else if(!isNaN(i) && item == inCvc && i.length == 3){
        item.classList.add("ok")
        item.classList.remove("error")

    } else if(!isNaN(i) && item == inYear && i.length == 2){
        item.classList.add("ok")
        item.classList.remove("error")

    } else if(i.length == 0){
        item.classList.remove("ok")
        item.classList.remove("error")

        if(item == inNumber){
            cardNumber1.textContent = '0000'
            cardNumber2.textContent = '0000'
            cardNumber3.textContent = '0000'
            cardNumber4.textContent = '0000'

        } else if(item == inCvc){
            outCvc.textContent = '000'

        } else if(item == inYear){
            outYear.textContent = '00'
        }

    }else{
        item.classList.remove("ok")
        item.classList.add("error")
    }
}

inNumber.addEventListener("keyup", function(e){
    cardNumber1.textContent = e.target.value.slice(0,4)
    cardNumber2.textContent = e.target.value.slice(4,8)
    cardNumber3.textContent = e.target.value.slice(8,12)
    cardNumber4.textContent = e.target.value.slice(12,16)
    var cardNumberC = cardNumber1.textContent + 
    cardNumber2.textContent + 
    cardNumber3.textContent + 
    cardNumber4.textContent
    verificarNumber(cardNumberC, inNumber)
})

// card cvc input
const inCvc = document.querySelector("#cvc")
const outCvc = document.querySelector("#code_s")
var cvc 
inCvc.addEventListener("keyup", function(e){
    outCvc.textContent = e.target.value
    cvc = outCvc.textContent
    verificarNumber(cvc, inCvc)
})

// card data input
const inYear = document.querySelector("#year")
const inMonth = document.querySelector("#month")
const outYear = document.querySelector("#ano")
const outMonth = document.querySelector("#mes")
var year
var month
inYear.addEventListener("keyup", function(e){
    outYear.textContent = e.target.value 
    year = outYear.textContent
    verificarNumber(year, inYear)
})
inMonth.addEventListener("keyup", function(e){
    outMonth.textContent = e.target.value 
    month = outMonth.textContent
    if(isNaN(month)){
        inMonth.classList.remove("ok")
        inMonth.classList.add("error")
    }else {
        if(inMonth.value < 13 && inMonth.value > 0 && month.length == 2 ){
            inMonth.classList.add("ok")
            inMonth.classList.remove("error")
        } else if(month.length == 0){
            inMonth.classList.remove("ok")
            inMonth.classList.remove("error")
            outMonth.textContent = '00'
        } else{
            inMonth.classList.remove("ok")
            inMonth.classList.add("error")
        }
    }
    
})
//confimation
const form = document.querySelector("#form")
const thank = document.querySelector("#thank")
function check(){
        if( inMonth.classList == "ok" && inCvc.classList == "ok" && inYear.classList == "ok" 
        && inName.classList == "ok" && inNumber.classList == "ok"){
            form.classList.add("hide")
            thank.classList.remove("hide")
        } else{
        
        }
}

