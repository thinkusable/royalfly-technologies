"use client";

import React from "react";
import { motion } from "framer-motion";
import { itemVariants, hoverScale } from "../utils/animations";

export default function Domain() {
	return (
		<section
			id="domains"
			className="py-20 bg-white"
		>
			<motion.div
				className="container mx-auto px-4"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.3 }}
				variants={itemVariants}
			>
				<motion.div
					className="text-center mb-16"
					variants={itemVariants}
				>
					<h2 className="text-4xl font-bold text-neutral-900 mb-4">
						Our Expertise
					</h2>
					<div className="w-20 h-1 bg-blue-600 mx-auto"></div>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{[
						{
							title: "Embedded Systems Design",
							description:
								"Custom embedded solutions for complex electronic systems",
							icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
						},
						{
							title: "Wireless Communication",
							description:
								"Advanced wireless connectivity solutions and protocols",
							icon: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0",
						},
						{
							title: "IoT Solutions",
							description: "Connected device ecosystems and smart solutions",
							icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
						},
						{
							title: "Edge Computing",
							description: "Optimized edge processing and computing solutions",
							icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
						},
						{
							title: "AI & ML Integration",
							description:
								"Smart systems with artificial intelligence capabilities",
							icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
						},
						{
							title: "Wearable Electronics",
							description: "Innovative wearable device solutions",
							icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
						},
						{
							title: "Signal Processing",
							description:
								"Transforming audio, video, and biomedical signal data into actionable insights",
							icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
						},
						{
							title: "Robotics",
							description:
								"Redefining automation with autonomous systems for drones, rovers",
							icon: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z",
						},
					].map((domain, index) => (
						<motion.div
							key={index}
							className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-100"
							{...hoverScale}
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
										d={domain.icon}
									></path>
								</svg>
							</div>
							<h3 className="text-xl font-semibold mb-4">{domain.title}</h3>
							<p className="text-neutral-600">{domain.description}</p>
						</motion.div>
					))}
				</div>

				<motion.div
					className="mt-12 text-center"
					variants={itemVariants}
				>
					<motion.button
						className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
						{...hoverScale}
					>
						Explore Our Solutions
					</motion.button>
				</motion.div>
			</motion.div>
		</section>
	);
}
