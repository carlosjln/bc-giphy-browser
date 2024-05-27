export default {
	mounted(el, binding) {
		function load_image() {
			el.src = binding.value;
		}

		function handle_intersection(entries, observer) {
			entries.forEach(entry => {
				if(entry.isIntersecting) {
					load_image();
					observer.unobserve(el);
				}
			});
		}

		function create_observer() {
			const options = {
				root: null,
				threshold: 0.1,
			};
			const observer = new IntersectionObserver(handle_intersection, options);
			observer.observe(el);
		}

		if(window.IntersectionObserver) {
			create_observer();
		} else {
			load_image(); // Fallback for browsers without IntersectionObserver support
		}
	},
};
