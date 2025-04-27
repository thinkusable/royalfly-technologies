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
import Image from "next/image";
// import { BackgroundBeams } from "./ui/background-beams";

export default function Hero() {
	return (
		<section
			id="hero"
			className="relative min-h-screen bg-neutral-900 flex items-center justify-center overflow-hidden"
		>
			<div className="absolute inset-0">
				<Image
					src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
					alt="Technology background"
					fill
					className="object-cover opacity-20"
					priority
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 to-neutral-900/40" />
			</div>

			<div className="relative z-10 container mx-auto px-4 text-center">
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-4xl md:text-6xl font-bold text-white mb-6"
				>
					Shaping the Future with Smarter Electronics
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
				>
					Royal Fly is an electronic product design and development company
					offering end-to-end services powered by R&D-driven innovation.
				</motion.p>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="flex justify-center gap-4"
				>
					<a
						href="#about"
						className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300"
					>
						Get Started
					</a>
					<a
						href="#services"
						className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-neutral-900 transition-colors duration-300"
					>
						Our Services
					</a>
				</motion.div>
			</div>

			<div className="absolute bottom-10 left-0 right-0 flex justify-center gap-8 text-white/50">
				{[
					"IoT Solutions",
					"Embedded Systems",
					"AI Integration",
					"Edge Computing",
				].map((text, index) => (
					<div
						key={index}
						className="text-sm hover:text-white transition-colors duration-300"
					>
						{text}
					</div>
				))}
			</div>
		</section>
	);
}
