document.querySelector('button').addEventListener('click', submit)

function submit(){
    let newName = document.getElementById('frontCardName').value
    let newCardNum = document.getElementById('frontCardNumber').value
    let newExp = document.getElementById('frontCardExpMonth').value
    let newYr = document.getElementById('frontCardExpYr').value
    let capsNewName = newName.toUpperCase()
    document.querySelector('#cardName').innerText = capsNewName
    document.querySelector('#cardNumber').innerText = newCardNum
    document.querySelector('#cardExp').innerText = newExp 
    document.querySelector('#cardYr').innerText = newYr
}