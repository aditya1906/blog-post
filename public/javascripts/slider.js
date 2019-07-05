window.addEventListener("load", showPage, false);

function showPage() {
	const loading = document.querySelector(".loading");
	loading.classList.add("fade");
	setTimeout(() => {
		loading.parentNode.removeChild(loading);
	}, 1000);
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
