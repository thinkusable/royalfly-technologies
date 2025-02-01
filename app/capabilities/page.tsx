"use client";

import React, { useState } from "react";
import {
	ChevronDown,
	ChevronRight,
	Cpu,
	CircuitBoard,
	Layout,
	Box,
	Hammer,
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
	isOpen,
	onClick,
}: {
	title: string;
	icon: React.ComponentType<React.ComponentProps<"svg">>;
	children: React.ReactNode;
	isOpen: boolean;
	onClick: () => void;
}) => (
	<div className="w-full mb-6 bg-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
		<button
			onClick={onClick}
			className="w-full p-4 flex items-center justify-between text-left hover:bg-gray-50 rounded-t-lg"
		>
			<div className="flex items-center space-x-3">
				<Icon className="w-6 h-6 text-blue-600" />
				<h3 className="text-lg font-semibold text-gray-800">{title}</h3>
			</div>
			{isOpen ? (
				<ChevronDown className="w-5 h-5" />
			) : (
				<ChevronRight className="w-5 h-5" />
			)}
		</button>
		<div
			className={`overflow-hidden transition-all duration-300 ${
				isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
			}`}
		>
			<div className="p-4 bg-gray-50">{children}</div>
		</div>
	</div>
);

const TechCapabilities = () => {
	const [openSection, setOpenSection] = useState<string | null>(null);

	const capabilities = [
		{
			id: "poc",
			title: "PoC & Prototype Development",
			icon: Cpu,
			content: (
				<ul className="space-y-2 list-disc pl-5">
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
				<ul className="space-y-2 list-disc pl-5">
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
				<ul className="space-y-2 list-disc pl-5">
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
				<ul className="space-y-2 list-disc pl-5">
					<li>Global Sourcing & BoM Management</li>
					<li>Lifecycle Management & Risk Assessment</li>
					<li>Compliance & Standards</li>
					<li>Supply Chain Optimization</li>
				</ul>
			),
		},
		{
			id: "enclosure",
			title: "Enclosure Design & Manufacturing",
			icon: Hammer,
			content: (
				<ul className="space-y-2 list-disc pl-5">
					<li>Conceptualization & Mechanical Design</li>
					<li>Rapid Prototyping & 3D Printing</li>
					<li>Sheet Metal Fabrication</li>
					<li>Injection Molding & CNC Machining</li>
				</ul>
			),
		},
		{
			id: "firmware",
			title: "Embedded Firmware Development",
			icon: Code,
			content: (
				<ul className="space-y-2 list-disc pl-5">
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
				<ul className="space-y-2 list-disc pl-5">
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
				<ul className="space-y-2 list-disc pl-5">
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
				<ul className="space-y-2 list-disc pl-5">
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
				<ul className="space-y-2 list-disc pl-5">
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
				<ul className="space-y-2 list-disc pl-5">
					<li>Real-Time Data Visualization</li>
					<li>Seamless Integration with Embedded Systems</li>
					<li>Device Control & Automation</li>
					<li>Multi-User Access & Management</li>
				</ul>
			),
		},
	];

	return (
		<div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-4xl mx-auto">
				<div className="text-center mb-12">
					<h1 className="text-4xl font-bold text-gray-900 mb-4">
						Technical Capabilities
					</h1>
					<p className="text-lg text-gray-600">
						Comprehensive solutions for your hardware and software needs
					</p>
				</div>

				<div className="grid gap-6">
					{capabilities.map((capability) => (
						<CapabilityCard
							key={capability.id}
							title={capability.title}
							icon={capability.icon}
							isOpen={openSection === capability.id}
							onClick={() =>
								setOpenSection(
									openSection === capability.id ? null : capability.id
								)
							}
						>
							{capability.content}
						</CapabilityCard>
					))}
				</div>
			</div>
		</div>
	);
};

export default TechCapabilities;
