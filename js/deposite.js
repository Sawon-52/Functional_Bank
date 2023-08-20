function getInputValue(inputID){
    const selectInputField = document.getElementById(inputID);
    const newAmmountString = selectInputField.value;
    const newAmmount = parseFloat(newAmmountString);
    selectInputField.value ='';
    return newAmmount;
}

function getTextValue(elementId){
    const previousTextField = document.getElementById(elementId);
    const previousAmmountString = previousTextField.innerText;
    const previousAmmount = parseFloat(previousAmmountString);
    return previousAmmount;
}

function setTotalValue(position, newValue){
    const textPosition = document.getElementById(position);
    textPosition.innerText = newValue;
}

document.getElementById('deposite-btn').addEventListener('click', function(){

    // take diposite value and call function to process it
    const newDipositeValue = getInputValue('deposite-form');
    // console.log(newDipositeValue);

    const previousDipositeValue = getTextValue('deposite-amount');
    // console.log(previousDipositeValue);
    
    // total diposite amount
    const totalDiposite = previousDipositeValue + newDipositeValue;
    // console.log(totalDiposite);

    // set the new ammount in deposite field
    const displayDiposite = setTotalValue('deposite-amount',totalDiposite);


    // add blance 
    const previousBalance = getTextValue('balance-total');
    // calculate total Balanch
    const totalBalance = previousBalance + newDipositeValue;

    // set balanced

    const displayBalance = setTotalValue('balance-total',totalBalance);


     
})