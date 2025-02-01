"use client";

import React from "react";
import { motion } from "framer-motion";
import { itemVariants, hoverScale } from "../utils/animations";

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
				variants={itemVariants}
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

				<div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
					{[
						{
							title: "Electronic Product Design & Development",
							description:
								"End-to-end electronic product design and development solutions",
							icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
						},
						{
							title: "PoC & Prototype Development",
							description: "Rapid prototyping and proof of concept development",
							icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
						},
						{
							title: "Circuit Design",
							description: "Custom circuit design and schematic development",
							icon: "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2",
						},
						{
							title: "PCB Layout Design",
							description: "Professional PCB design and layout services",
							icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
						},
						{
							title: "Components (BoM) Sourcing",
							description: "Strategic component sourcing and BOM management",
							icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
						},
						{
							title: "PCB Fabrication and Assembly",
							description:
								"High-quality PCB manufacturing and assembly services",
							icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
						},
						{
							title: "Enclosure Design & Manufacturing",
							description: "Custom enclosure design and production solutions",
							icon: "M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z",
						},
						{
							title: "Embedded Firmware Development",
							description: "Custom firmware and embedded software solutions",
							icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
						},
						{
							title: "Product Testing & QA/QC",
							description:
								"Comprehensive product testing and quality assurance",
							icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
						},
						{
							title: "Design Verification & Optimisation",
							description:
								"Thorough design verification and performance optimization",
							icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
						},
						{
							title: "Mass Production & Life Cycle Management",
							description:
								"End-to-end production and lifecycle support services",
							icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
						},
						{
							title: "Reverse Engineering & Product Redesign",
							description: "Expert product analysis and redesign services",
							icon: "M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2",
						},
						{
							title: "Mobile App Development",
							description: "Custom mobile application development services",
							icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
						},
						{
							title: "Custom IoT Dashboard Design",
							description: "Tailored IoT dashboard and visualization solutions",
							icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
						},
						{
							title: "Consulting & Technical Advisory",
							description:
								"Expert technical consultation and advisory services",
							icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
						},
					].map((service, index) => (
						<motion.div
							key={index}
							className="bg-neutral-800 p-6 rounded-xl hover:bg-neutral-700 transition-all duration-300"
							{...hoverScale}
						>
							<div className="w-16 h-16 bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
								<svg
									className="w-8 h-8 text-blue-500"
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
							<h3 className="text-xl font-semibold mb-4 text-white">
								{service.title}
							</h3>
							<p className="text-neutral-400">{service.description}</p>
						</motion.div>
					))}
				</div>
			</motion.div>
		</section>
	);
}
