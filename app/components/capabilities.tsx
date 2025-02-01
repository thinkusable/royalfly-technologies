"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
	Cpu,
	CircuitBoard,
	Layout,
	Box,
	Code,
	TestTube,
	Cog,
	Repeat,
	Phone,
	Globe,
} from "lucide-react";

const CapabilityCard = ({
	title,
	icon: Icon,
	children,
}: {
	title: string;
	icon: React.ComponentType<React.ComponentProps<"svg">>;
	children: React.ReactNode;
}) => (
	<motion.div
		className="w-full mb-6 bg-neutral-800 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
		initial={{ opacity: 0, y: 20 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true }}
	>
		<div className="p-4">
			<div className="flex items-center space-x-3 mb-4">
				<Icon className="w-6 h-6 text-blue-600" />
				<h3 className="text-lg font-semibold text-white">{title}</h3>
			</div>
			<div className="p-4">{children}</div>
		</div>
	</motion.div>
);

export default function Capabilities() {
	const [openSection, setOpenSection] = useState<string | null>(null);

	const capabilities = [
		{
			id: "poc",
			title: "PoC & Prototype Development",
			icon: Cpu,
			content: (
				<ul className="space-y-2 list-disc pl-5 text-left  text-neutral-300">
					<li>Proof of Concept Development</li>
					<li>Prototype Development</li>
					<li>Iterative Development & Feedback</li>
					<li>PoC & Prototype to Production Transition</li>
				</ul>
			),
		},
		{
			id: "circuit",
			title: "Circuit Design",
			icon: CircuitBoard,
			content: (
				<ul className="space-y-2 list-disc pl-5 text-left  text-neutral-300">
					<li>Schematic Design & Component Selection</li>
					<li>Power Supply Design & Signal Integrity Analysis</li>
					<li>Analog & Digital Circuit Design</li>
					<li>EMI/EMC Compliance & Thermal Management</li>
				</ul>
			),
		},
		{
			id: "pcb",
			title: "PCB Layout Design",
			icon: Layout,
			content: (
				<ul className="space-y-2 list-disc pl-5 text-left text-neutral-300">
					<li>Multi-Layer PCB Design & High-Speed Design</li>
					<li>Mixed-signal, RF, HDI PCB designs</li>
					<li>Ultra-low power & high voltage designs</li>
					<li>Design for Manufacturability (DFM) & Testability (DFT)</li>
				</ul>
			),
		},
		{
			id: "components",
			title: "Components (BoM) Sourcing",
			icon: Box,
			content: (
				<ul className="space-y-2 list-disc pl-5 text-left  text-neutral-300">
					<li>Global Sourcing & BoM Management</li>
					<li>Lifecycle Management & Risk Assessment</li>
					<li>Compliance & Standards</li>
					<li>Supply Chain Optimization</li>
				</ul>
			),
		},
		{
			id: "firmware",
			title: "Embedded Firmware Development",
			icon: Code,
			content: (
				<ul className="space-y-2 list-disc pl-5 text-left  text-neutral-300">
					<li>Embedded Software Development</li>
					<li>Real-Time & Low-Power Optimization</li>
					<li>Secure Boot & Firmware Updates</li>
					<li>Communication & Networking Protocols</li>
				</ul>
			),
		},
		{
			id: "testing",
			title: "Product Testing & QA/QC",
			icon: TestTube,
			content: (
				<ul className="space-y-2 list-disc pl-5 text-left  text-neutral-300">
					<li>In-House Testing</li>
					<li>External Validation & Certification</li>
					<li>Environmental & Reliability Testing</li>
					<li>Regulatory Compliance & Certification Testing</li>
				</ul>
			),
		},
		{
			id: "production",
			title: "Mass Production & Lifecycle Management",
			icon: Cog,
			content: (
				<ul className="space-y-2 list-disc pl-5 text-left  text-neutral-300">
					<li>Production Readiness & Supply Chain Coordination</li>
					<li>Quality Assurance & Control</li>
					<li>Product Lifecycle Management (PLM)</li>
					<li>Sustainability & Environmental Considerations</li>
				</ul>
			),
		},
		{
			id: "reverse",
			title: "Reverse Engineering & Product Redesign",
			icon: Repeat,
			content: (
				<ul className="space-y-2 list-disc pl-5 text-left  text-neutral-300">
					<li>Component Analysis & 3D Scanning</li>
					<li>Design Improvement & Optimization</li>
					<li>Firmware & Software Redesign</li>
					<li>Product Upgrade & Feature Enhancement</li>
				</ul>
			),
		},
		{
			id: "mobile",
			title: "Mobile App Development",
			icon: Phone,
			content: (
				<ul className="space-y-2 list-disc pl-5 text-left  text-neutral-300">
					<li>Bluetooth Low Energy (BLE) Mobile Apps</li>
					<li>Wi-Fi & Internet-Based Mobile Apps</li>
					<li>Embedded System Data Integration</li>
					<li>Multi-Platform Development</li>
				</ul>
			),
		},
		{
			id: "iot",
			title: "Custom IoT Dashboard",
			icon: Globe,
			content: (
				<ul className="space-y-2 list-disc pl-5 text-left  text-neutral-300">
					<li>Real-Time Data Visualization</li>
					<li>Seamless Integration with Embedded Systems</li>
					<li>Device Control & Automation</li>
					<li>Multi-User Access & Management</li>
				</ul>
			),
		},
	];

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
					className="text-center mb-20"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={containerVariants}
				>
					<motion.h2
						className="text-4xl font-bold mb-4"
						variants={itemVariants}
					>
						Technical Capabilities
					</motion.h2>
					<motion.p
						className="text-neutral-400 max-w-2xl mx-auto mb-6"
						variants={itemVariants}
					>
						Comprehensive solutions for your hardware and software needs
					</motion.p>
					<motion.div
						className="w-20 h-1 bg-blue-600 mx-auto mb-12"
						variants={itemVariants}
					></motion.div>
					<div className="grid md:grid-cols-3 gap-6 mx-auto">
						{capabilities.map((capability) => (
							<CapabilityCard
								key={capability.id}
								title={capability.title}
								icon={capability.icon}
							>
								{capability.content}
							</CapabilityCard>
						))}
					</div>
				</motion.div>
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
