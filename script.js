document.getElementById('deposite-btn').addEventListener('click', function(){
    //console.log('clicked');
    const depositInputForm = document.getElementById('deposite-form');
    const newDepositeAmmountString = depositInputForm.value;
    const newDepositeAmmount = parseFloat(newDepositeAmmountString);
    // console.log(depositeValue);

    const depositeField = document.getElementById('deposite-amount');
    const previousDepositeAmmountString = depositeField.innerText;
    const previousDepositeAmmount = parseFloat(previousDepositeAmmountString);
    // console.log(previousDepositeAmmount);

    const currentDepositeTotal = previousDepositeAmmount + newDepositeAmmount;
    depositeField.innerText = currentDepositeTotal;

    // add balance 
    const previousBalanceElement = document.getElementById('balance-total');
    const previousBalanceString = previousBalanceElement.innerText;
    const previousBalance = parseFloat(previousBalanceString);

    const totalBalance = previousDepositeAmmount + newDepositeAmmount;
    previousBalanceElement.innerText = totalBalance;

    
    // clear the deposite field
    depositInputForm.value = '';
})

document.getElementById('withdrow-btn').addEventListener('click', function(){
    //console.log('clicked');
    const withdrowInputForm = document.getElementById('withdrow-form');
    const newWithdrowAmmountString = withdrowInputForm.value;
    const newWithdrowAmmount = parseFloat(newWithdrowAmmountString);
    // console.log(depositeValue);

    const withdrowField = document.getElementById('withdrow-amount');
    const previousWithdrowAmmountString = withdrowField.innerText;
    const previousWithdrowAmmount = parseFloat(previousWithdrowAmmountString);
    // console.log(previousDepositeAmmount);

    const currentWithdrowTotal = previousWithdrowAmmount + newWithdrowAmmount;
    withdrowField.innerText = currentWithdrowTotal;

    // add balance 
    const previousBalanceElement = document.getElementById('balance-total');
    const previousBalanceString = previousBalanceElement.innerText;
    const previousBalance = parseFloat(previousBalanceString);

    const totalBalance = previousBalance - newWithdrowAmmount;
    previousBalanceElement.innerText = totalBalance;

    
    // clear the deposite field
    withdrowInputForm.value = '';
})

