function getNewAmount(id) {
	const amount = document.getElementById(id).value;
	document.getElementById(id).value = '';

	// validation
	if (parseFloat(amount) < 0.0 || isNaN(parseFloat(amount)) === true) {
		alert('Please enter a valid amount');
		return -1.0;
	} else {
		return parseFloat(amount);
	}
}

function getPreviousAmount(id) {
	return parseFloat(document.getElementById(id).innerText);
}

function setAmount(id, totalAmount) {
	document.getElementById(id).innerText = totalAmount;
}

function setTotalBalance(id, totalBalance) {
	document.getElementById(id).innerText = totalBalance;
}
