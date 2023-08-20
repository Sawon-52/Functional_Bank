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
