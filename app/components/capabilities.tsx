import React from "react";

export default function Capabilities() {
	return (
		<section
			id="capabilities"
			className="py-20 bg-neutral-900 text-white"
		>
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold mb-4 animate__animated animate__fadeInDown">
						Technical Capabilities
					</h2>
					<div className="w-20 h-1 bg-blue-600 mx-auto"></div>
				</div>

				<div className="grid md:grid-cols-2 gap-12 mb-20">
					<div className="animate__animated animate__fadeInLeft">
						<h3 className="text-2xl font-semibold mb-6">Our Expertise</h3>
						<div className="space-y-6">
							<div className="bg-neutral-800 p-6 rounded-lg">
								<div className="flex justify-between items-center mb-2">
									<span>PCB Design Accuracy</span>
									<span className="text-blue-500">98%</span>
								</div>
								<div className="w-full bg-neutral-700 rounded-full h-2">
									<div
										className="bg-blue-600 rounded-full h-2"
										style={{ width: "98%" }}
									></div>
								</div>
							</div>

							<div className="bg-neutral-800 p-6 rounded-lg">
								<div className="flex justify-between items-center mb-2">
									<span>Firmware Optimization</span>
									<span className="text-blue-500">95%</span>
								</div>
								<div className="w-full bg-neutral-700 rounded-full h-2">
									<div
										className="bg-blue-600 rounded-full h-2"
										style={{ width: "95%" }}
									></div>
								</div>
							</div>

							<div className="bg-neutral-800 p-6 rounded-lg">
								<div className="flex justify-between items-center mb-2">
									<span>IoT Integration</span>
									<span className="text-blue-500">92%</span>
								</div>
								<div className="w-full bg-neutral-700 rounded-full h-2">
									<div
										className="bg-blue-600 rounded-full h-2"
										style={{ width: "92%" }}
									></div>
								</div>
							</div>
						</div>
					</div>

					<div className="animate__animated animate__fadeInRight">
						<h3 className="text-2xl font-semibold mb-6">Core Competencies</h3>
						<div className="grid grid-cols-2 gap-4">
							<div className="bg-neutral-800 p-6 rounded-lg text-center">
								<div className="text-4xl font-bold text-blue-500 mb-2">
									150+
								</div>
								<div>Projects Completed</div>
							</div>
							<div className="bg-neutral-800 p-6 rounded-lg text-center">
								<div className="text-4xl font-bold text-blue-500 mb-2">10+</div>
								<div>Years Experience</div>
							</div>
							<div className="bg-neutral-800 p-6 rounded-lg text-center">
								<div className="text-4xl font-bold text-blue-500 mb-2">50+</div>
								<div>Team Members</div>
							</div>
							<div className="bg-neutral-800 p-6 rounded-lg text-center">
								<div className="text-4xl font-bold text-blue-500 mb-2">99%</div>
								<div>Client Satisfaction</div>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-20">
					<h3 className="text-2xl font-semibold text-center mb-12 animate__animated animate__fadeInUp">
						Product Development Process
					</h3>
					<div className="relative">
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
									<p className="text-neutral-400">
										Manufacturing and deployment
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
