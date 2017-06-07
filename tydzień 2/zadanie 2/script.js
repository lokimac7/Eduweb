var button = document.getElementById('btn'),
	firstName = document.getElementById('firstName'),
	phone = document.getElementById('phone'),
	mail = document.getElementById('mail'),
	textarea = document.getElementById('textarea'),
	form = document.getElementById('form'),
	checkfirstNameResult = false,
	checkPhoneResult = false,
	checkMailResult = false,
	checkTextareaResult = false;

form.addEventListener('submit', function(e) {
e.preventDefault();

function checkFirstName() {
	if (firstName.value === '') {
		firstName.classList.add('error');
	}	else {
		firstName.classList.remove('error');
	}

	return checkfirstNameResult = firstName.classList.value !== 'error' ? true : false;
}

function checkPhone() {
	if (isNaN(phone.value) || phone.value == '') {
		phone.classList.add('error');
	}	else {
		phone.classList.remove('error');
	}
	return checkPhoneResult = phone.classList.value !== 'error' ? true : false;
}

function checkMail() {
	if (mail.value.indexOf('@') === -1) {
		mail.classList.add('error');
	}	else {
		mail.classList.remove('error');
	}
	return checkMailResult = mail.classList.value !== 'error' ? true : false;
}

function checkTextarea() {
	if (textarea.value === '') {
		textarea.classList.add('error');
	}	else {
		textarea.classList.remove('error');
	}
	return checkTextareaResult = textarea.classList.value !== 'error' ? true : false;
}

checkFirstName();
checkPhone();
checkMail();
checkTextarea();


	if (checkfirstNameResult && checkPhoneResult && checkMailResult && checkTextareaResult) {
		form.submit();
	}	
});
	








