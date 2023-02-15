document.getElementById('withdraw-btn').addEventListener('click', function () {
	const newWithdrawAmount = getNewAmount('new-withdraw-amount');

	const previousWithdrawAmount = getPreviousAmount('withdraw-amount');

	const previousBalance = getPreviousAmount('balance');

	const totalWithdrawAmount = newWithdrawAmount + previousWithdrawAmount;

	const totalBalance = previousBalance - totalWithdrawAmount;

	setAmount('withdraw-amount', totalWithdrawAmount);

	setTotalBalance('balance', totalBalance);
});
