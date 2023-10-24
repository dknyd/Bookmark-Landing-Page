const navbar = document.querySelector('.navbar');
const navbarNav = document.querySelector('#navbarNav');
const navbarToggler = document.querySelector('.navbar-toggler');


navbarToggler.addEventListener('click', function() {
	if (navbarNav.classList.contains('show') === false) {
		navbar.style.backgroundColor = 'var(--Very-Dark-Blue)'
	}
})


//Making red underline on tab selectors after clicking
const tabSelect1 = document.querySelector('.container3AInner');
const tabSelect2 = document.querySelector('.container3BInner');
const tabSelect3 = document.querySelector('.container3CInner');
const tabSelects = [tabSelect1, tabSelect2, tabSelect3];
tabSelects.forEach(tab => tab.addEventListener('click', function() {
	tabSelects.forEach(otherTab => {
		if (otherTab !== tab) {
			otherTab.classList.remove('clicked');
		}
	});
	tab.classList.add('clicked');
}));


//Change between tabs
const tab1 = document.querySelector('.tab1');
const tab2 = document.querySelector('.tab2');
const tab3 = document.querySelector('.tab3');
const tabs = [tab1, tab2, tab3];


//Tab1 show/hide
tabSelect1.addEventListener('click', function() {
	tab1.classList.remove('hidden');
	if (!tab2.classList.contains('hidden')) {
		tab2.classList.add('hidden')
	}
	if (!tab3.classList.contains('hidden')) {
		tab3.classList.add('hidden')
	}
})


//Tab2 show/hide
tabSelect2.addEventListener('click', function() {
	tab2.classList.remove('hidden');
	if (!tab1.classList.contains('hidden')) {
		tab1.classList.add('hidden')
	}
	if (!tab3.classList.contains('hidden')) {
		tab3.classList.add('hidden')
	}
})


//Tab3 show/hide
tabSelect3.addEventListener('click', function() {
	tab3.classList.remove('hidden');
	if (!tab1.classList.contains('hidden')) {
		tab1.classList.add('hidden')
	}
	if (!tab2.classList.contains('hidden')) {
		tab2.classList.add('hidden')
	}
})


//Error message at wrong email
const buttonContactUs = document.querySelector('.buttonContactUs');
const errorDiv = document.querySelector('#errorDiv')
const iconError = document.querySelector('.iconError')
function validateEmail() {
	// Get the input element
	const inputEmail = document.querySelector('.inputEmail');
	// Get the entered email address
	const email = inputEmail.value.trim();
	console.log(email)
	// Regular expression for a valid email address
	const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	
	if (emailRegex.test(email)) {
		// Valid email, clear any previous error
		document.getElementById('errorDiv').textContent = '';
		// You can proceed with your "Contact Us" logic here
		alert('Email is valid! You can proceed with contacting us.');
	  } else {
		// Invalid email, display an error message
		document.getElementById('errorDiv').textContent = "Whoops, make sure it's an email";
		errorDiv.classList.remove('hidden')
		inputEmail.style.border = '2px solid var(--Soft-Red)'
		iconError.classList.remove('hidden')
	  }
	
  }

buttonContactUs.addEventListener('click', validateEmail)



//Rotate arrow when opening accordion (in a shitty, non-DRY way...)

//For accordion 1
const collapseButton1 = document.querySelector('.btn1');
const iconArrow1 = document.querySelector('.iconArrow1');

collapseButton1.addEventListener('click', function () {
	if (collapseButton1.classList.contains('collapsed')){
		iconArrow1.src = 'images/icon-arrow-reverse.svg'
	} else {
		iconArrow1.src = 'images/icon-arrow.svg'
	}
})

//For accordion 2
const collapseButton2 = document.querySelector('.btn2');
const iconArrow2 = document.querySelector('.iconArrow2');

collapseButton2.addEventListener('click', function () {
	if (collapseButton2.classList.contains('collapsed')){
		iconArrow2.src = 'images/icon-arrow-reverse.svg'
	} else {
		iconArrow2.src = 'images/icon-arrow.svg'
	}
})

//For accordion 3
const collapseButton3 = document.querySelector('.btn3');
const iconArrow3 = document.querySelector('.iconArrow3');

collapseButton3.addEventListener('click', function () {
	if (collapseButton3.classList.contains('collapsed')){
		iconArrow3.src = 'images/icon-arrow-reverse.svg'
	} else {
		iconArrow3.src = 'images/icon-arrow.svg'
	}
})

//For accordion 4
const collapseButton4 = document.querySelector('.btn4');
const iconArrow4 = document.querySelector('.iconArrow4');

collapseButton4.addEventListener('click', function () {
	if (collapseButton4.classList.contains('collapsed')){
		iconArrow4.src = 'images/icon-arrow-reverse.svg'
	} else {
		iconArrow4.src = 'images/icon-arrow.svg'
	}
})