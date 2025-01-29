"use client";

import React, { useEffect } from "react";

export default function Services() {
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

		document.querySelectorAll(".service-card").forEach((card) => {
			observer.observe(card);
		});
	}, []);

	return (
		<section
			id="services"
			className="py-20 bg-neutral-900"
		>
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-white mb-4 animate__animated animate__fadeInDown">
						Our Services
					</h2>
					<p className="text-neutral-300 max-w-2xl mx-auto animate__animated animate__fadeInUp">
						Comprehensive electronics design and development solutions tailored
						to your needs
					</p>
					<div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					<div className="bg-neutral-800 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp">
						<div className="w-14 h-14 bg-blue-600/20 rounded-lg flex items-center justify-center mb-6">
							<svg
								className="w-8 h-8 text-blue-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
								></path>
							</svg>
						</div>
						<h3 className="text-xl font-semibold text-white mb-3">
							Electronic Product Design
						</h3>
						<p className="text-neutral-400 mb-4">
							End-to-end electronic product design and development solutions
						</p>
						<a
							href="#"
							className="inline-block text-blue-500 hover:text-blue-400"
						>
							Learn More →
						</a>
					</div>

					<div
						className="bg-neutral-800 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp"
						style={{ animationDelay: "0.2s;" }}
					>
						<div className="w-14 h-14 bg-blue-600/20 rounded-lg flex items-center justify-center mb-6">
							<svg
								className="w-8 h-8 text-blue-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
								></path>
							</svg>
						</div>
						<h3 className="text-xl font-semibold text-white mb-3">
							PCB Design & Layout
						</h3>
						<p className="text-neutral-400 mb-4">
							Professional PCB design services with advanced layout capabilities
						</p>
						<a
							href="#"
							className="inline-block text-blue-500 hover:text-blue-400"
						>
							Learn More →
						</a>
					</div>

					<div
						className="bg-neutral-800 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp"
						style={{ animationDelay: "0.4s;" }}
					>
						<div className="w-14 h-14 bg-blue-600/20 rounded-lg flex items-center justify-center mb-6">
							<svg
								className="w-8 h-8 text-blue-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
								></path>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
								></path>
							</svg>
						</div>
						<h3 className="text-xl font-semibold text-white mb-3">
							Firmware Development
						</h3>
						<p className="text-neutral-400 mb-4">
							Custom firmware and embedded software solutions
						</p>
						<a
							href="#"
							className="inline-block text-blue-500 hover:text-blue-400"
						>
							Learn More →
						</a>
					</div>

					<div className="lg:col-span-3 text-center mt-12">
						<a
							href="#"
							className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors animate__animated animate__fadeInUp"
							style={{ animationDelay: "0.6s;" }}
						>
							View All Services
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
