"use client";

import React, { useEffect } from "react";

export default function Portfolio() {
	useEffect(() => {
		// Portfolio filtering functionality
		const filters = document.querySelectorAll(".portfolio-filter");
		filters.forEach((filter) => {
			filter.addEventListener("click", () => {
				filters.forEach((f) => f.classList.remove("bg-blue-600", "text-white"));
				filter.classList.add("bg-blue-600", "text-white");
			});
		});
	}, []);
	return (
		<section
			id="portfolio"
			className="py-20 bg-white"
		>
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-neutral-900 mb-4 animate__animated animate__fadeInDown">
						Our Portfolio
					</h2>
					<p className="text-neutral-600 max-w-2xl mx-auto animate__animated animate__fadeInUp">
						Discover our innovative electronic solutions and successful projects
					</p>
					<div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
				</div>

				<div className="flex justify-center mb-12">
					<div className="inline-flex bg-neutral-100 rounded-lg p-1">
						<button className="px-6 py-2 rounded-lg bg-blue-600 text-white portfolio-filter active">
							All
						</button>
						<button className="px-6 py-2 rounded-lg text-neutral-600 hover:bg-neutral-200 portfolio-filter">
							UMT Products
						</button>
						<button className="px-6 py-2 rounded-lg text-neutral-600 hover:bg-neutral-200 portfolio-filter">
							Open Source
						</button>
						<button className="px-6 py-2 rounded-lg text-neutral-600 hover:bg-neutral-200 portfolio-filter">
							CAD Models
						</button>
					</div>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					<div className="group bg-white rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp">
						<div className="bg-neutral-200 h-48 flex items-center justify-center">
							<svg
								className="w-16 h-16 text-neutral-400"
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
						<div className="p-6">
							<h3 className="text-xl font-semibold mb-2">Smart IoT Gateway</h3>
							<p className="text-neutral-600 mb-4">
								Industrial-grade IoT gateway with advanced processing
								capabilities
							</p>
							<div className="flex flex-wrap gap-2 mb-4">
								<span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
									IoT
								</span>
								<span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
									Embedded
								</span>
								<span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
									Cloud
								</span>
							</div>
							<button className="text-blue-600 hover:text-blue-700 font-medium">
								View Details →
							</button>
						</div>
					</div>

					<div
						className="group bg-white rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp"
						style={{ animationDelay: "0.2s;" }}
					>
						<div className="bg-neutral-200 h-48 flex items-center justify-center">
							<svg
								className="w-16 h-16 text-neutral-400"
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
						<div className="p-6">
							<h3 className="text-xl font-semibold mb-2">Biomedical Monitor</h3>
							<p className="text-neutral-600 mb-4">
								Advanced patient monitoring system with real-time analytics
							</p>
							<div className="flex flex-wrap gap-2 mb-4">
								<span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
									Healthcare
								</span>
								<span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
									ML
								</span>
								<span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
									Sensors
								</span>
							</div>
							<button className="text-blue-600 hover:text-blue-700 font-medium">
								View Details →
							</button>
						</div>
					</div>

					<div
						className="group bg-white rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp"
						style={{ animationDelay: "0.4s;" }}
					>
						<div className="bg-neutral-200 h-48 flex items-center justify-center">
							<svg
								className="w-16 h-16 text-neutral-400"
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
						<div className="p-6">
							<h3 className="text-xl font-semibold mb-2">
								Autonomous Drone Controller
							</h3>
							<p className="text-neutral-600 mb-4">
								High-performance flight control system with GPS integration
							</p>
							<div className="flex flex-wrap gap-2 mb-4">
								<span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
									Drones
								</span>
								<span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
									Control
								</span>
								<span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
									GPS
								</span>
							</div>
							<button className="text-blue-600 hover:text-blue-700 font-medium">
								View Details →
							</button>
						</div>
					</div>
				</div>

				<div className="text-center mt-12">
					<button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors animate__animated animate__fadeInUp">
						Load More Projects
					</button>
				</div>
			</div>
		</section>
	);
}
