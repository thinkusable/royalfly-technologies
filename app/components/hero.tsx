"use client";

import React from "react";
import { motion } from "framer-motion";
import {
	containerVariants,
	itemVariants,
	buttonHoverScale,
} from "../utils/animations";
import { cn } from "@/lib/utils";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";

export default function Hero() {
	return (
		<section
			id="hero"
			className="relative min-h-screen bg-neutral-900 flex items-center justify-center overflow-hidden"
		>
			<div className="absolute inset-0">
				<div className="relative h-full w-full">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1 }}
						className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-purple-600/30 to-pink-600/30 animate-gradient"
					>
						<InteractiveGridPattern
							height={50}
							width={50}
							squares={[60, 60]}
							className={cn(
								"inset-x-0 inset-y-[-20%] h-[200%] skew-y-12 opacity-50"
							)}
						/>
					</motion.div>
				</div>
			</div>

			<motion.div
				variants={containerVariants}
				initial="hidden"
				animate="visible"
				className="relative z-10 container mx-auto px-4 text-center"
			>
				<motion.h1
					variants={itemVariants}
					className="text-4xl md:text-6xl font-bold text-white mb-6"
				>
					Innovating the Future of Electronics
				</motion.h1>
				<motion.p
					variants={itemVariants}
					className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
				>
					Visakhapatnam&apos;s first electronics product design company,
					delivering end-to-end solutions through R&D-driven innovation
				</motion.p>
				<motion.div
					variants={itemVariants}
					className="flex justify-center gap-4"
				>
					<motion.a
						{...buttonHoverScale}
						href="#contact"
						className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all"
					>
						Get Started
					</motion.a>
					<motion.a
						{...buttonHoverScale}
						href="#services"
						className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-neutral-900 transition-all"
					>
						Our Services
					</motion.a>
				</motion.div>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 1, duration: 0.6 }}
				className="absolute bottom-10 left-0 right-0 flex justify-center gap-8 text-white/50"
			>
				{[
					"IoT Solutions",
					"Embedded Systems",
					"AI Integration",
					"Edge Computing",
				].map((text, index) => (
					<motion.div
						key={index}
						whileHover={{ scale: 1.1 }}
						className="text-sm"
					>
						{text}
					</motion.div>
				))}
			</motion.div>
		</section>
	);
}
