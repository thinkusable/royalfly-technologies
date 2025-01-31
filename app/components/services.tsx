"use client";

import React from "react";
import { motion } from "framer-motion";
import {
	containerVariants,
	itemVariants,
	hoverScale,
} from "../utils/animations";

export default function Services() {
	return (
		<section
			id="services"
			className="py-20 bg-neutral-900"
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
					<h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
					<p className="text-neutral-300 max-w-2xl mx-auto">
						Comprehensive electronics design and development solutions tailored
						to your needs
					</p>
					<div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{[
						{
							title: "Electronic Product Design",
							description:
								"End-to-end electronic product design and development solutions",
							icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
						},
						{
							title: "PCB Design & Layout",
							description:
								"Professional PCB design services with advanced layout capabilities",
							icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
						},
						{
							title: "Firmware Development",
							description: "Custom firmware and embedded software solutions",
							icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
						},
					].map((service, index) => (
						<motion.div
							key={index}
							variants={itemVariants}
							className="bg-neutral-800 rounded-xl p-6 hover:transform transition-all duration-300"
							{...hoverScale}
						>
							<div className="w-14 h-14 bg-blue-600/20 rounded-lg flex items-center justify-center mb-6">
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
										d={service.icon}
									></path>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-white mb-3">
								{service.title}
							</h3>
							<p className="text-neutral-400 mb-4">{service.description}</p>
							<motion.a
								href="#"
								className="inline-block text-blue-500 hover:text-blue-400"
								whileHover={{ x: 5 }}
								whileTap={{ scale: 0.95 }}
							>
								Learn More →
							</motion.a>
						</motion.div>
					))}
				</div>

				<motion.div
					className="lg:col-span-3 text-center mt-12"
					variants={itemVariants}
				>
					<motion.a
						href="#"
						className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
						{...hoverScale}
					>
						View All Services
					</motion.a>
				</motion.div>
			</motion.div>
		</section>
	);
}
