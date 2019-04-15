(function() {
	console.log("fired");

	var burgerCon = document.querySelector("#burgerMenu");


	function hamMenu() {
		burgerCon.classList.toggle("slideToggle");
		button.classList.toggle("expanded");
	}

	button.addEventListener("click", hamMenu, false);

})();

