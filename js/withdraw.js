document.getElementById('withdraw-btn').addEventListener('click', function () {
	const newWithdrawAmount = getNewAmount('new-withdraw-amount');

	const previousWithdrawAmount = getPreviousAmount('withdraw-amount');

	const previousBalance = getPreviousAmount('balance');

	// const totalWithdrawAmount = newWithdrawAmount + previousWithdrawAmount;

	// validation
	let totalWithdrawAmount;
	let totalBalance;
	if (newWithdrawAmount === -1.0) {
		totalWithdrawAmount = previousWithdrawAmount.toString().padStart(2, '0');
		totalBalance = previousBalance;
	} else {
		totalWithdrawAmount = newWithdrawAmount + previousWithdrawAmount;
		totalBalance = previousBalance - totalWithdrawAmount;
	}

	// const totalBalance = previousBalance - totalWithdrawAmount;

	setAmount('withdraw-amount', totalWithdrawAmount);

	setTotalBalance('balance', totalBalance);
});
