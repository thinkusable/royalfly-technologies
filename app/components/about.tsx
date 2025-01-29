import React from "react";

export default function About() {
	return (
		<section
			id="about"
			className="py-20 bg-white"
		>
			<div className="container mx-auto px-4">
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div className="animate__animated animate__fadeInLeft">
						<h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
							Pioneering Electronics Innovation in Visakhapatnam
						</h2>
						<div className="w-20 h-1 bg-blue-600 mb-8"></div>
						<div className="space-y-6">
							<div className="flex items-start space-x-4">
								<div className="flex-shrink-0">
									<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
										<svg
											className="w-4 h-4 text-blue-600"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
											></path>
										</svg>
									</div>
								</div>
								<div>
									<h3 className="text-xl font-semibold mb-2">
										First in Visakhapatnam
									</h3>
									<p className="text-neutral-600">
										Proud to be the city&apos;s first electronics product design
										company, setting new standards in innovation.
									</p>
								</div>
							</div>

							<div className="flex items-start space-x-4">
								<div className="flex-shrink-0">
									<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
										<svg
											className="w-4 h-4 text-blue-600"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
											></path>
										</svg>
									</div>
								</div>
								<div>
									<h3 className="text-xl font-semibold mb-2">
										R&D-Driven Approach
									</h3>
									<p className="text-neutral-600">
										Our foundation is built on continuous research and
										development, pushing the boundaries of what&apos;s possible.
									</p>
								</div>
							</div>

							<div className="flex items-start space-x-4">
								<div className="flex-shrink-0">
									<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
										<svg
											className="w-4 h-4 text-blue-600"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M13 10V3L4 14h7v7l9-11h-7z"
											></path>
										</svg>
									</div>
								</div>
								<div>
									<h3 className="text-xl font-semibold mb-2">
										End-to-End Solutions
									</h3>
									<p className="text-neutral-600">
										Comprehensive electronics product development services from
										concept to manufacturing.
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="grid grid-cols-2 gap-8 animate__animated animate__fadeInRight">
						<div className="bg-neutral-50 p-8 rounded-lg text-center">
							<div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
							<div className="text-neutral-600">Projects Completed</div>
						</div>
						<div className="bg-neutral-50 p-8 rounded-lg text-center">
							<div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
							<div className="text-neutral-600">Happy Clients</div>
						</div>
						<div className="bg-neutral-50 p-8 rounded-lg text-center">
							<div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
							<div className="text-neutral-600">Years Experience</div>
						</div>
						<div className="bg-neutral-50 p-8 rounded-lg text-center">
							<div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
							<div className="text-neutral-600">Technical Support</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
