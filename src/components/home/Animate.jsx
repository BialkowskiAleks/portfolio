import React, { useEffect, useRef } from "react";

const Animate = () => {
	const observer = useRef(null);

	useEffect(() => {
		observer.current = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add("show");
				} else {
					entry.target.classList.remove("show");
				}
			});
		});

		const hiddenElements = document.querySelectorAll(
			".hidden, .hidden__right, .hidden__top"
		);
		hiddenElements.forEach(el => observer.current.observe(el));

		return () => {
			observer.current.disconnect();
		};
	}, []);
};

export default Animate;
