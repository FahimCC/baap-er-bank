function getNewAmount(id) {
	const amount = document.getElementById(id).value;
	document.getElementById(id).value = '';
	return parseFloat(amount);
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
