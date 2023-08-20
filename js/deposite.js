function getInputValue(inputID){
    const selectInputField = document.getElementById(inputID);
    const newAmmountString = selectInputField.value;
    const newAmmount = parseFloat(newAmmountString);
    return newAmmount;
}

function getTextValue(elementId){
    const previousTextField = document.getElementById(elementId);
    const previousAmmountString = previousTextField.innerText;
    const previousAmmount = parseFloat(previousAmmountString);
    return previousAmmount;

}


document.getElementById('deposite-btn').addEventListener('click', function(){

    // take diposite value and call function to process it
    const newdipositeValue = getInputValue('deposite-form');
    // console.log(newdipositeValue);

    const previousdipositeValue = getTextValue('deposite-amount');
    console.log(previousdipositeValue);


})