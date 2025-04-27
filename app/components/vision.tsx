"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Vision() {
	return (
		<section
			id="vision"
			className="py-20 bg-neutral-900 text-white overflow-hidden"
		>
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl font-bold mb-4">Our Vision</h2>
					<div className="w-20 h-1 bg-blue-600 mx-auto"></div>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{[
						{
							title: "Global Leadership",
							description:
								"To Lead the global electronics industry through innovative products with world-class designs",
							image:
								"https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop",
							icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064",
						},
						{
							title: "Client Empowerment",
							description:
								"To Empower clients with cutting-edge solutions that work for them and Drive Their Business Success",
							image:
								"https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
							icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
						},
						{
							title: "Innovation Focus",
							description:
								"To Develop State-of-the-Art Products That Solve Modern Challenges and Drive Transformative Change",
							image:
								"https://images.unsplash.com/photo-1567177662154-dfeb4c93b6ae?q=80&w=2070&auto=format&fit=crop",
							icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
						},
						{
							title: "Value-Driven Solutions",
							description:
								"Delivering High-Quality, Cost-Effective Solutions That Drive Value for Our Client's Businesses",
							image:
								"https://images.unsplash.com/photo-1627634777217-c864268db30c?q=80&w=2070&auto=format&fit=crop",
							icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
						},
					].map((item, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							className="group relative overflow-hidden rounded-xl bg-neutral-800"
						>
							<div className="relative h-48">
								<Image
									src={item.image}
									alt={item.title}
									fill
									className="object-cover transition-transform duration-300 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-neutral-900/40" />
								<div className="absolute top-4 right-4 w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center">
									<svg
										className="w-6 h-6 text-blue-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d={item.icon}
										></path>
									</svg>
								</div>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-semibold mb-2 text-white">
									{item.title}
								</h3>
								<p className="text-neutral-300">{item.description}</p>
							</div>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="text-center mt-16"
				>
					<div className="relative h-64 rounded-xl overflow-hidden mb-8">
						<Image
							src="https://images.unsplash.com/photo-1591711584791-455de896b1e9?q=80&w=2070&auto=format&fit=crop"
							alt="Team working together"
							fill
							className="object-cover"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-neutral-900/40" />
					</div>
					<p className="text-xl text-neutral-300 max-w-3xl mx-auto">
						&quot;Our vision is to transform the electronics industry through
						innovation, delivering cutting-edge products and designs that make
						advanced technology accessible and beneficial to everyone&quot;
					</p>
				</motion.div>
			</div>
		</section>
	);
}
