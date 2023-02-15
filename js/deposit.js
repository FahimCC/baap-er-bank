document.getElementById('deposit-btn').addEventListener('click', function () {
	const newDepositAmount = getNewAmount('new-deposit-amount');

	const previousDepositAmount = getPreviousAmount('deposit-amount');

	const previousBalance = getPreviousAmount('balance');

	// const totalDepositAmount = newDepositAmount + previousDepositAmount;

	// validation
	let totalDepositAmount;
	let totalBalance;
	if (newDepositAmount === -1.0) {
		totalDepositAmount = previousDepositAmount.toString().padStart(2, '0');
		totalBalance = previousBalance;
	} else {
		totalDepositAmount = newDepositAmount + previousDepositAmount;
		totalBalance = previousBalance + totalDepositAmount;
	}

	// const totalBalance = previousBalance + totalDepositAmount;

	setAmount('deposit-amount', totalDepositAmount);

	setTotalBalance('balance', totalBalance);
});
