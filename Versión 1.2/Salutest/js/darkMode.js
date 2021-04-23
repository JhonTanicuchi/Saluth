const btnSwitch = document.getElementById("switch")

console.log(btnSwitch)

btnSwitch.addEventListener('click', function() {
	document.body.classList.toggle('dark');
	btnSwitch.classList.toggle('active');
});

