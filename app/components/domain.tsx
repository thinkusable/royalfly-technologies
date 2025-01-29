"use client";

import React, { useEffect } from "react";

export default function Domain() {
	useEffect(() => {
		const domainCards = document.querySelectorAll(".domain-card");
		domainCards.forEach((card) => {
			card.addEventListener("mouseenter", () => {
				card.classList.add("transform", "scale-105");
			});
			card.addEventListener("mouseleave", () => {
				card.classList.remove("transform", "scale-105");
			});
		});
	}, []);

	return (
		<section
			id="domains"
			className="py-20 bg-white"
		>
			<div className="container mx-auto px-4">
				<div className="text-center mb-16 animate__animated animate__fadeInDown">
					<h2 className="text-4xl font-bold text-neutral-900 mb-4">
						Our Expertise Domains
					</h2>
					<div className="w-20 h-1 bg-blue-600 mx-auto"></div>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					<div className="domain-card bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-100 animate__animated animate__fadeInUp">
						<div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
							<svg
								className="w-8 h-8 text-blue-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
								></path>
							</svg>
						</div>
						<h3 className="text-xl font-semibold mb-4">
							Embedded Systems Design
						</h3>
						<p className="text-neutral-600">
							Custom embedded solutions for complex electronic systems
						</p>
					</div>

					<div
						className="domain-card bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-100 animate__animated animate__fadeInUp"
						style={{ animationDelay: "0.2s" }}
					>
						<div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
							<svg
								className="w-8 h-8 text-blue-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
								></path>
							</svg>
						</div>
						<h3 className="text-xl font-semibold mb-4">
							Wireless Communication
						</h3>
						<p className="text-neutral-600">
							Advanced wireless connectivity solutions and protocols
						</p>
					</div>

					<div
						className="domain-card bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-100 animate__animated animate__fadeInUp"
						style={{ animationDelay: "0.4s" }}
					>
						<div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
							<svg
								className="w-8 h-8 text-blue-600"
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
						<h3 className="text-xl font-semibold mb-4">IoT Solutions</h3>
						<p className="text-neutral-600">
							Connected device ecosystems and smart solutions
						</p>
					</div>

					<div
						className="domain-card bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-100 animate__animated animate__fadeInUp"
						style={{ animationDelay: "0.6s" }}
					>
						<div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
							<svg
								className="w-8 h-8 text-blue-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
								></path>
							</svg>
						</div>
						<h3 className="text-xl font-semibold mb-4">Edge Computing</h3>
						<p className="text-neutral-600">
							Optimized edge processing and computing solutions
						</p>
					</div>

					<div
						className="domain-card bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-100 animate__animated animate__fadeInUp"
						style={{ animationDelay: "0.8s" }}
					>
						<div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
							<svg
								className="w-8 h-8 text-blue-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								></path>
							</svg>
						</div>
						<h3 className="text-xl font-semibold mb-4">AI & ML Integration</h3>
						<p className="text-neutral-600">
							Smart systems with artificial intelligence capabilities
						</p>
					</div>

					<div
						className="domain-card bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-100 animate__animated animate__fadeInUp"
						style={{ animationDelay: "0.1s" }}
					>
						<div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
							<svg
								className="w-8 h-8 text-blue-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
								></path>
							</svg>
						</div>
						<h3 className="text-xl font-semibold mb-4">Wearable Electronics</h3>
						<p className="text-neutral-600">
							Innovative wearable device solutions
						</p>
					</div>
				</div>

				<div className="mt-12 text-center">
					<button
						className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors animate__animated animate__fadeInUp"
						style={{ animationDelay: "1.2s" }}
					>
						Explore Our Solutions
					</button>
				</div>
			</div>
		</section>
	);
}
