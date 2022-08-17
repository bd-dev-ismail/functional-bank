/*
1.Add event handler in withdraw button
2.GEt withdraw amount by using getInputValueById function
3.Previous withdraw amount by using getTextElementById function
4.Calculate newwithdraw total & set the value
5.Set newWithdraw total by using setTextElementValueById function
6.GEt previous balance total
6.5-Calculate new balance total amount
7.set total balance
*/
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputValueById('withdraw-field');
    const previousWithdrawTotal = getTextElementById('withdraw-total');
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('withdraw-total', newWithdrawTotal);
    const previousBalanceTotal = getTextElementById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawTotal;
    setTextElementValueById('balance-total', newBalanceTotal);
});