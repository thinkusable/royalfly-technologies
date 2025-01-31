"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
	containerVariants,
	itemVariants,
	hoverScale,
} from "../utils/animations";

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
			<motion.div
				className="container mx-auto px-4"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.3 }}
				variants={containerVariants}
			>
				<motion.div
					className="text-center mb-16"
					variants={itemVariants}
				>
					<h2 className="text-4xl font-bold text-neutral-900 mb-4">
						Our Portfolio
					</h2>
					<p className="text-neutral-600 max-w-2xl mx-auto">
						Discover our innovative electronic solutions and successful projects
					</p>
					<div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
				</motion.div>

				<motion.div
					className="flex justify-center mb-12"
					variants={itemVariants}
				>
					<div className="inline-flex bg-neutral-100 rounded-lg p-1">
						{[
							{ text: "All", active: true },
							{ text: "UMT Products", active: false },
							{ text: "Open Source", active: false },
							{ text: "CAD Models", active: false },
						].map((filter, index) => (
							<motion.button
								key={index}
								className={`px-6 py-2 rounded-lg portfolio-filter ${
									filter.active
										? "bg-blue-600 text-white"
										: "text-neutral-600 hover:bg-neutral-200"
								}`}
								{...hoverScale}
							>
								{filter.text}
							</motion.button>
						))}
					</div>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{[
						{
							title: "Smart IoT Gateway",
							description:
								"Industrial-grade IoT gateway with advanced processing capabilities",
							tags: ["IoT", "Embedded", "Cloud"],
						},
						{
							title: "Biomedical Monitor",
							description:
								"Advanced patient monitoring system with real-time analytics",
							tags: ["Healthcare", "ML", "Sensors"],
						},
						{
							title: "Autonomous Drone Controller",
							description:
								"High-performance flight control system with GPS integration",
							tags: ["Drones", "Control", "GPS"],
						},
					].map((project, index) => (
						<motion.div
							key={index}
							variants={itemVariants}
							className="group bg-white rounded-xl shadow-lg overflow-hidden"
							{...hoverScale}
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
										d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
									></path>
								</svg>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-semibold mb-2">{project.title}</h3>
								<p className="text-neutral-600 mb-4">{project.description}</p>
								<div className="flex flex-wrap gap-2 mb-4">
									{project.tags.map((tag, tagIndex) => (
										<motion.span
											key={tagIndex}
											className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full"
											whileHover={{ scale: 1.1 }}
										>
											{tag}
										</motion.span>
									))}
								</div>
								<motion.button
									className="text-blue-600 hover:text-blue-700 font-medium"
									whileHover={{ x: 5 }}
									whileTap={{ scale: 0.95 }}
								>
									View Details →
								</motion.button>
							</div>
						</motion.div>
					))}
				</div>

				<motion.div
					className="text-center mt-12"
					variants={itemVariants}
				>
					<motion.button
						className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
						{...hoverScale}
					>
						Load More Projects
					</motion.button>
				</motion.div>
			</motion.div>
		</section>
	);
}
