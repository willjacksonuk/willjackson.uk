// Simple image zoom function
// Source: https://rudnam.com/posts/simple-image-zoom/

function isDesktop() {
	return window.matchMedia("(pointer: fine)").matches;
}

function zoomImage(overlay, img) {
	const overlayImage = overlay.querySelector("img");

	if (!overlayImage) return;

	overlayImage.src = img.currentSrc || img.src;
	overlayImage.alt = img.alt || "";
	overlay.classList.add("active");
	document.body.classList.add("overflow-hidden");
}

function unzoomImage(overlay) {
	const overlayImage = overlay.querySelector("img");

	overlay.classList.remove("active");
	document.body.classList.remove("overflow-hidden");

	if (overlayImage) {
		overlayImage.src = "";
		overlayImage.alt = "";
	}
}

document.addEventListener("click", (event) => {
	if (!isDesktop()) return;

	const overlay = document.querySelector(".zoom-overlay");
	if (!overlay) return;

	const img = event.target.closest(".zoomable-img");

	if (img) {
		zoomImage(overlay, img);
		return;
	}

	if (overlay.classList.contains("active")) {
		unzoomImage(overlay);
	}
});

document.addEventListener("keydown", (event) => {
	if (event.key !== "Escape") return;

	const overlay = document.querySelector(".zoom-overlay");
	if (!overlay) return;

	if (overlay.classList.contains("active")) {
		unzoomImage(overlay);
	}
});