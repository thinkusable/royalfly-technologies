"use client";

import { motion } from "framer-motion";

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, x: -20 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.5,
		},
	},
};

const rightItemVariants = {
	hidden: { opacity: 0, x: 20 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.5,
		},
	},
};

export default function About() {
	return (
		<section
			id="about"
			className="py-20 bg-white"
		>
			<div className="container mx-auto px-4">
				<div className="grid md:grid-cols-2 gap-12 items-start">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={containerVariants}
					>
						<motion.h2
							className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6"
							variants={itemVariants}
						>
							Building Intelligent Solutions for Modern Needs
						</motion.h2>
						<motion.div
							className="w-20 h-1 bg-blue-600 mb-8"
							variants={itemVariants}
						></motion.div>
						<motion.div
							className="bg-neutral-50 p-8 rounded-lg space-y-6"
							variants={itemVariants}
						>
							{/* Features content */}
							<div className="flex items-start">
								<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
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
											d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
										></path>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
										></path>
									</svg>
								</div>
								<div className="ml-4">
									<h3 className="text-xl font-semibold mb-2">
										First in Visakhapatnam
									</h3>
									<p className="text-neutral-600">
										Proud to be the first electronic product design company in
										the IT hub of Andhra Pradesh
									</p>
								</div>
							</div>

							<div className="flex items-start">
								<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
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
											d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
										></path>
									</svg>
								</div>
								<div className="ml-4">
									<h3 className="text-xl font-semibold mb-2">
										Unlocking Potential with R&D
									</h3>
									<p className="text-neutral-600">
										Our foundation is built on continuous research and
										development, pushing the boundaries of what&apos;s possible.
									</p>
								</div>
							</div>

							<div className="flex items-start">
								<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
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
											d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
										></path>
									</svg>
								</div>
								<div className="ml-4">
									<h3 className="text-xl font-semibold mb-2">
										Turning Ideas into Products
									</h3>
									<p className="text-neutral-600">
										We handle every stage of product development, from initial
										concept to final manufacturing
									</p>
								</div>
							</div>
						</motion.div>
					</motion.div>

					<motion.div
						className="grid grid-cols-2 gap-6 content-start h-full grid-rows-3"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={rightItemVariants}
					>
						{[
							{ number: "10+", text: "Years of Experience" },
							{ number: "50+", text: "Happy Clients" },
							{ number: "70+", text: "Successful Partnerships" },
							{ number: "100+", text: "Projects Completed" },
							{ number: "150+", text: "Workshops Conducted" },
							{ number: "100%", text: "On-time Delivery" },
						].map((item, index) => (
							<motion.div
								key={index}
								className="bg-neutral-50 p-6 rounded-lg text-center hover:bg-blue-600 hover:text-white transition-all duration-300 group"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<h3 className="text-4xl font-bold mb-2 text-blue-600 group-hover:text-white">
									{item.number}
								</h3>
								<p className="text-neutral-600 group-hover:text-white/90">
									{item.text}
								</p>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
}
