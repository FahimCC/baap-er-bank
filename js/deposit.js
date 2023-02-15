document.getElementById('deposit-btn').addEventListener('click', function () {
	const newDepositAmount = getNewAmount('new-deposit-amount');

	const previousDepositAmount = getPreviousAmount('deposit-amount');

	const previousBalance = getPreviousAmount('balance');

	const totalDepositAmount = newDepositAmount + previousDepositAmount;

	const totalBalance = previousBalance + totalDepositAmount;

	setAmount('deposit-amount', totalDepositAmount);

	setTotalBalance('balance', totalBalance);
});
