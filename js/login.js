document.getElementById('user-btn').addEventListener('click', function () {
	const userEmail = document.getElementById('user-email').value;
	const userPassword = document.getElementById('user-password').value;
	console.log(userEmail, userPassword);

	if (
		(userEmail === 'ffnasif@gmail.com' && userPassword === '1234') ||
		(userEmail === 'nurenabha@gmail.com' && userPassword === '1234')
	) {
		window.location.href = 'bank.html';
	} else {
		alert('Please give valid email & password');
	}
});
