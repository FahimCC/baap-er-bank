document.getElementById('withdraw-btn').addEventListener('click', function () {
	const newWithdrawAmount = getNewAmount('new-withdraw-amount');

	const previousWithdrawAmount = getPreviousAmount('withdraw-amount');

	const previousBalance = getPreviousAmount('balance');

	// const totalWithdrawAmount = newWithdrawAmount + previousWithdrawAmount;

	// validation
	let totalWithdrawAmount;
	if (newWithdrawAmount === -1.0) {
		totalWithdrawAmount = previousWithdrawAmount.toString().padStart(2, '0');
	} else {
		totalWithdrawAmount = newWithdrawAmount + previousWithdrawAmount;
	}

	const totalBalance = previousBalance - totalWithdrawAmount;

	setAmount('withdraw-amount', totalWithdrawAmount);

	setTotalBalance('balance', totalBalance);
});
