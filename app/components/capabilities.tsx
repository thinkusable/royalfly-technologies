import React from "react";
import { motion } from "framer-motion";

export default function Capabilities() {
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
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
			},
		},
	};

	return (
		<section
			id="capabilities"
			className="py-20 bg-neutral-900 text-white"
		>
			<div className="container mx-auto px-4">
				<motion.div
					className="text-center mb-16"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={containerVariants}
				>
					<motion.h2
						className="text-4xl font-bold mb-4"
						variants={itemVariants}
					>
						Product Development Process
					</motion.h2>
					<motion.p
						className="text-neutral-400 max-w-2xl mx-auto mb-6"
						variants={itemVariants}
					>
						Our systematic approach ensures efficient and reliable product
						development from concept to deployment
					</motion.p>
					<motion.div
						className="w-20 h-1 bg-blue-600 mx-auto"
						variants={itemVariants}
					></motion.div>
				</motion.div>

				<div className="relative mt-20">
					<div className="absolute left-0 right-0 top-1/2 h-1 bg-blue-600 transform -translate-y-1/2 hidden md:block"></div>
					<div className="grid md:grid-cols-4 gap-8">
						<div className="relative bg-neutral-800 p-6 rounded-lg animate__animated animate__fadeInUp">
							<div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold absolute -top-6 left-1/2 transform -translate-x-1/2">
								1
							</div>
							<div className="pt-8">
								<h4 className="text-xl font-semibold mb-2">Concept</h4>
								<p className="text-neutral-400">
									Initial design and feasibility analysis
								</p>
							</div>
						</div>

						<div
							className="relative bg-neutral-800 p-6 rounded-lg animate__animated animate__fadeInUp"
							style={{ animationDelay: "0.2s;" }}
						>
							<div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold absolute -top-6 left-1/2 transform -translate-x-1/2">
								2
							</div>
							<div className="pt-8">
								<h4 className="text-xl font-semibold mb-2">Design</h4>
								<p className="text-neutral-400">
									Detailed engineering and prototyping
								</p>
							</div>
						</div>

						<div
							className="relative bg-neutral-800 p-6 rounded-lg animate__animated animate__fadeInUp"
							style={{ animationDelay: "0.4s;" }}
						>
							<div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold absolute -top-6 left-1/2 transform -translate-x-1/2">
								3
							</div>
							<div className="pt-8">
								<h4 className="text-xl font-semibold mb-2">Testing</h4>
								<p className="text-neutral-400">
									Quality assurance and validation
								</p>
							</div>
						</div>

						<div
							className="relative bg-neutral-800 p-6 rounded-lg animate__animated animate__fadeInUp"
							style={{ animationDelay: "0.6s;" }}
						>
							<div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold absolute -top-6 left-1/2 transform -translate-x-1/2">
								4
							</div>
							<div className="pt-8">
								<h4 className="text-xl font-semibold mb-2">Production</h4>
								<p className="text-neutral-400">Manufacturing and deployment</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
