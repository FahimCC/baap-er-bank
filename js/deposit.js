document.getElementById('deposit-btn').addEventListener('click', function () {
	const newDepositAmount = getNewAmount('new-deposit-amount');

	const previousDepositAmount = getPreviousAmount('deposit-amount');

	const previousBalance = getPreviousAmount('balance');

	// const totalDepositAmount = newDepositAmount + previousDepositAmount;

	// validation
	let totalDepositAmount;
	if (newDepositAmount === -1.0) {
		totalDepositAmount = previousDepositAmount.toString().padStart(2, '0');
	} else {
		totalDepositAmount = newDepositAmount + previousDepositAmount;
	}

	const totalBalance = previousBalance + totalDepositAmount;

	setAmount('deposit-amount', totalDepositAmount);

	setTotalBalance('balance', totalBalance);
});
