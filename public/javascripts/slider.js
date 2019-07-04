window.addEventListener("load", showPage, false);

function showPage() {
	document.querySelector(".loading").classList.add("fade");
	const slides = document.querySelectorAll(".slide");
	const nextSlide = () => {
		const active = document.querySelector(".active");
		active.classList.remove("active");
		if (active.nextElementSibling) {
			active.nextElementSibling.classList.add("active");
		} else {
			slides[0].classList.add("active");
		}
	};
	setInterval(nextSlide, 5000);
}
