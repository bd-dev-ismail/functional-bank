
document.getElementById('btn-deposit').addEventListener('click', function(){
    const newDepositAmount = getInputValueById('deposit-field');
    //Get previous total by id
    const previousDepositTotal = getTextElementById('deposit-total');
    //calculate new deposit
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    //set deposit total value
    setTextElementValueById('deposit-total', newDepositTotal);
    //get previous balance total by id
    const previousBalanceTotal = getTextElementById('balance-total');
    //Calculate new balance
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    //set balance total value
    setTextElementValueById('balance-total', newBalanceTotal);
});