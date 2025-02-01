import React, { useEffect } from "react";

export default function Testimonial() {
	useEffect(() => {
		const track = document.querySelector(".testimonials-track") as HTMLElement;
		const slides = document.querySelectorAll(".testimonials-track > div");
		const nextButton = document.querySelector(".next-testimonial");
		const prevButton = document.querySelector(".prev-testimonial");
		let currentIndex = 0;

		function updateSlidePosition() {
			const slideWidth = (slides[0] as HTMLElement).offsetWidth;
			track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
		}

		nextButton?.addEventListener("click", () => {
			currentIndex = (currentIndex + 1) % slides.length;
			updateSlidePosition();
		});

		prevButton?.addEventListener("click", () => {
			currentIndex = (currentIndex - 1 + slides.length) % slides.length;
			updateSlidePosition();
		});

		window.addEventListener("resize", updateSlidePosition);

		// Auto-play
		setInterval(() => {
			currentIndex = (currentIndex + 1) % slides.length;
			updateSlidePosition();
		}, 5000);
	}, []);
	return (
		<section
			id="testimonials"
			className="py-20 bg-neutral-900"
		>
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-white mb-4 animate__animated animate__fadeInDown">
						Client Testimonials
					</h2>
					<p className="text-neutral-400 max-w-2xl mx-auto animate__animated animate__fadeInUp">
						What our clients say about our electronic design and development
						services
					</p>
					<div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
				</div>

				<div className="testimonial-slider relative max-w-5xl mx-auto">
					<div className="overflow-hidden">
						<div className="testimonials-track flex transition-transform duration-500">
							<div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
								<div className="bg-neutral-800 p-8 rounded-xl h-full">
									<div className="flex items-center mb-6">
										<div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
											A
										</div>
										<div className="ml-4">
											<h4 className="text-white font-semibold">
												Alex Thompson
											</h4>
											<p className="text-neutral-400">CTO, TechCorp</p>
										</div>
									</div>
									<p className="text-neutral-300">
										&quot;RoyalFly Technologies delivered exceptional results
										for our IoT project. Their expertise in embedded systems and
										commitment to quality is outstanding.&quot;
									</p>
									<div className="flex text-yellow-400 mt-4">★★★★★</div>
								</div>
							</div>

							<div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
								<div className="bg-neutral-800 p-8 rounded-xl h-full">
									<div className="flex items-center mb-6">
										<div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
											S
										</div>
										<div className="ml-4">
											<h4 className="text-white font-semibold">Sarah Chen</h4>
											<p className="text-neutral-400">
												Product Manager, InnovateMed
											</p>
										</div>
									</div>
									<p className="text-neutral-300">
										&quot;Their expertise in medical device development helped
										us bring our innovative healthcare solution to market faster
										than expected.&quot;
									</p>
									<div className="flex text-yellow-400 mt-4">★★★★★</div>
								</div>
							</div>

							<div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
								<div className="bg-neutral-800 p-8 rounded-xl h-full">
									<div className="flex items-center mb-6">
										<div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
											R
										</div>
										<div className="ml-4">
											<h4 className="text-white font-semibold">Raj Patel</h4>
											<p className="text-neutral-400">Founder, DroneX</p>
										</div>
									</div>
									<p className="text-neutral-300">
										&quot;The team&apos;s knowledge in drone technology and
										control systems is remarkable. They turned our concept into
										a working prototype efficiently.&quot;
									</p>
									<div className="flex text-yellow-400 mt-4">★★★★★</div>
								</div>
							</div>
						</div>
					</div>

					<button
						title="Previous Testimonial"
						className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-600 p-3 rounded-full text-white hover:bg-blue-700 transition-colors -ml-6 prev-testimonial"
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M15 19l-7-7 7-7"
							></path>
						</svg>
					</button>
					<button
						title="Next Testimonial"
						className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-600 p-3 rounded-full text-white hover:bg-blue-700 transition-colors -mr-6 next-testimonial"
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M9 5l7 7-7 7"
							></path>
						</svg>
					</button>
				</div>
			</div>
		</section>
	);
}
