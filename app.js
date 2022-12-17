document.getElementById('submitButton').addEventListener('click', submit)



function submit(){
    console.log('submit')
    // the following lines of code declare the variables that will be put into the card
let newName = document.getElementById('frontCardName').value
let newCardNum = document.getElementById('frontCardNumber').value
let newExp = document.getElementById('frontCardExpMonth').value
let newYr = document.getElementById('frontCardExpYr').value
let newCvc = document.getElementById('frontCardCvc').value
let capsNewName = newName.toUpperCase()
let x = document.getElementById('formId')
const element = document.querySelector('.formSectionBorder')
let formComplete = document.getElementById('formComplete')

// these lines of code will be actually replacing the default characters in the card
    document.querySelector('#cardName').innerText = capsNewName
    document.querySelector('#cardNumber').innerText = newCardNum
    document.querySelector('#cardExp').innerText = newExp 
    document.querySelector('#cardYr').innerText = newYr
    document.querySelector('#cvc').innerText = newCvc
    x.classList.add('hidden')
    formComplete.classList.toggle('hidden')
    
}

