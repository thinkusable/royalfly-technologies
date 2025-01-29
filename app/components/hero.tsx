"use client";

import React, { useEffect } from "react";

export default function Hero() {
	useEffect(() => {
		document.addEventListener("mousemove", (e) => {
			const moveX = e.clientX * 0.005;
			const moveY = e.clientY * 0.005;

			const circuitAnimation = document.querySelector(".circuit-animation");

			if (!circuitAnimation) return;
			(
				circuitAnimation as HTMLElement
			).style.transform = `translate(${moveX}, ${moveY}px)`;
		});
	}, []);

	return (
		<section
			id="hero"
			className="relative min-h-screen bg-neutral-900 flex items-center justify-center overflow-hidden"
		>
			<div className="absolute inset-0">
				<div className="relative h-full w-full">
					<div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
					<div className="circuit-animation absolute inset-0 opacity-20"></div>
				</div>
			</div>

			<div className="relative z-10 container mx-auto px-4 text-center">
				<h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate__animated animate__fadeInDown">
					Innovating the Future of Electronics
				</h1>
				<p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate__animated animate__fadeInUp animate__delay-1s">
					Visakhapatnam&apos;s first electronics product design company,
					delivering end-to-end solutions through R&D-driven innovation
				</p>
				<div className="flex justify-center gap-4 animate__animated animate__fadeInUp animate__delay-2s">
					<a
						href="#contact"
						className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105"
					>
						Get Started
					</a>
					<a
						href="#services"
						className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-neutral-900 transition-all transform hover:scale-105"
					>
						Our Services
					</a>
				</div>
			</div>

			<div className="absolute bottom-10 left-0 right-0 flex justify-center gap-8 text-white/50 animate__animated animate__fadeInUp animate__delay-3s">
				<div className="text-sm">IoT Solutions</div>
				<div className="text-sm">Embedded Systems</div>
				<div className="text-sm">AI Integration</div>
				<div className="text-sm">Edge Computing</div>
			</div>
		</section>
	);
}
