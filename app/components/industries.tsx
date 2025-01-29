"use client";

import React, { useEffect } from "react";

export default function Industries() {
	useEffect(() => {
		// Intersection Observer for animation on scroll
		const observerOptions = {
			threshold: 0.1,
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("animate__animated", "animate__fadeInUp");
					observer.unobserve(entry.target);
				}
			});
		}, observerOptions);

		document.querySelectorAll(".industry-card").forEach((card) => {
			observer.observe(card);
		});
	}, []);
	return (
		<section
			id="industries"
			className="py-20 bg-white"
		>
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-neutral-900 mb-4 animate__animated animate__fadeInDown">
						Industries We Serve
					</h2>
					<p className="text-neutral-600 max-w-2xl mx-auto animate__animated animate__fadeInUp">
						Delivering innovative electronic solutions across diverse sectors
					</p>
					<div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					<div className="group p-6 bg-neutral-50 rounded-xl hover:bg-blue-600 transition-all duration-300 animate__animated animate__fadeInUp">
						<div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-white/20">
							<svg
								className="w-8 h-8 text-blue-600 group-hover:text-white"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
								></path>
							</svg>
						</div>
						<h3 className="text-xl font-semibold mb-3 group-hover:text-white">
							Healthcare
						</h3>
						<p className="text-neutral-600 group-hover:text-white/90">
							Advanced medical device solutions and biomedical signal processing
						</p>
					</div>

					<div
						className="group p-6 bg-neutral-50 rounded-xl hover:bg-blue-600 transition-all duration-300 animate__animated animate__fadeInUp"
						style={{ animationDelay: "0.2s;" }}
					>
						<div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-white/20">
							<svg
								className="w-8 h-8 text-blue-600 group-hover:text-white"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M13 10V3L4 14h7v7l9-11h-7z"
								></path>
							</svg>
						</div>
						<h3 className="text-xl font-semibold mb-3 group-hover:text-white">
							Automotive
						</h3>
						<p className="text-neutral-600 group-hover:text-white/90">
							Smart automotive electronics and control systems
						</p>
					</div>

					<div
						className="group p-6 bg-neutral-50 rounded-xl hover:bg-blue-600 transition-all duration-300 animate__animated animate__fadeInUp"
						style={{ animationDelay: "0.4s;" }}
					>
						<div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-white/20">
							<svg
								className="w-8 h-8 text-blue-600 group-hover:text-white"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
								></path>
							</svg>
						</div>
						<h3 className="text-xl font-semibold mb-3 group-hover:text-white">
							Consumer Electronics
						</h3>
						<p className="text-neutral-600 group-hover:text-white/90">
							Innovative consumer device solutions
						</p>
					</div>

					<div
						className="group p-6 bg-neutral-50 rounded-xl hover:bg-blue-600 transition-all duration-300 animate__animated animate__fadeInUp"
						style={{ animationDelay: "0.6s;" }}
					>
						<div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-white/20">
							<svg
								className="w-8 h-8 text-blue-600 group-hover:text-white"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
								></path>
							</svg>
						</div>
						<h3 className="text-xl font-semibold mb-3 group-hover:text-white">
							Aerospace
						</h3>
						<p className="text-neutral-600 group-hover:text-white/90">
							High-reliability aerospace electronic systems
						</p>
					</div>

					<div
						className="group p-6 bg-neutral-50 rounded-xl hover:bg-blue-600 transition-all duration-300 animate__animated animate__fadeInUp"
						style={{ animationDelay: "0.8s;" }}
					>
						<div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-white/20">
							<svg
								className="w-8 h-8 text-blue-600 group-hover:text-white"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
								></path>
							</svg>
						</div>
						<h3 className="text-xl font-semibold mb-3 group-hover:text-white">
							Defense & Military
						</h3>
						<p className="text-neutral-600 group-hover:text-white/90">
							Mission-critical defense electronics
						</p>
					</div>

					<div
						className="group p-6 bg-neutral-50 rounded-xl hover:bg-blue-600 transition-all duration-300 animate__animated animate__fadeInUp"
						style={{ animationDelay: "1s;" }}
					>
						<div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-white/20">
							<svg
								className="w-8 h-8 text-blue-600 group-hover:text-white"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
								></path>
							</svg>
						</div>
						<h3 className="text-xl font-semibold mb-3 group-hover:text-white">
							Agriculture
						</h3>
						<p className="text-neutral-600 group-hover:text-white/90">
							Smart farming and agricultural automation
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
