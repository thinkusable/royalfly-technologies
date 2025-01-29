import React from "react";

export default function Careers() {
	return (
		<section
			id="careers"
			className="py-20 bg-white"
		>
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-neutral-900 mb-4 animate__animated animate__fadeInDown">
						Join Our Team
					</h2>
					<p className="text-neutral-600 max-w-2xl mx-auto animate__animated animate__fadeInUp">
						Be part of the innovation revolution in electronics design and
						development
					</p>
					<div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
				</div>

				<div className="grid md:grid-cols-2 gap-12 mb-20">
					<div className="animate__animated animate__fadeInLeft">
						<h3 className="text-2xl font-bold mb-6">Our Culture</h3>
						<div className="space-y-4">
							<div className="flex items-start">
								<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
									<svg
										className="w-6 h-6 text-blue-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
										></path>
									</svg>
								</div>
								<div className="ml-4">
									<h4 className="text-xl font-semibold mb-2">
										Collaborative Environment
									</h4>
									<p className="text-neutral-600">
										Work with passionate professionals in a dynamic setting
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
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M13 10V3L4 14h7v7l9-11h-7z"
										></path>
									</svg>
								</div>
								<div className="ml-4">
									<h4 className="text-xl font-semibold mb-2">
										Innovation First
									</h4>
									<p className="text-neutral-600">
										Drive technological advancement with cutting-edge solutions
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="animate__animated animate__fadeInRight">
						<h3 className="text-2xl font-bold mb-6">Benefits</h3>
						<div className="grid grid-cols-2 gap-4">
							<div className="p-4 bg-neutral-50 rounded-lg">
								<h4 className="font-semibold">Health Insurance</h4>
								<p className="text-neutral-600 text-sm">
									Comprehensive medical coverage
								</p>
							</div>
							<div className="p-4 bg-neutral-50 rounded-lg">
								<h4 className="font-semibold">Professional Growth</h4>
								<p className="text-neutral-600 text-sm">
									Learning and development opportunities
								</p>
							</div>
							<div className="p-4 bg-neutral-50 rounded-lg">
								<h4 className="font-semibold">Work-Life Balance</h4>
								<p className="text-neutral-600 text-sm">
									Flexible working hours
								</p>
							</div>
							<div className="p-4 bg-neutral-50 rounded-lg">
								<h4 className="font-semibold">Stock Options</h4>
								<p className="text-neutral-600 text-sm">
									Employee equity programs
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="mb-20">
					<h3 className="text-2xl font-bold mb-8 text-center">
						Current Openings
					</h3>
					<div className="space-y-4">
						<div className="bg-neutral-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
							<div className="flex justify-between items-start">
								<div>
									<h4 className="text-xl font-semibold mb-2">
										Senior Embedded Systems Engineer
									</h4>
									<p className="text-neutral-600 mb-4">
										5+ years experience in embedded systems development
									</p>
									<div className="flex gap-2">
										<span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
											Full-time
										</span>
										<span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
											Visakhapatnam
										</span>
									</div>
								</div>
								<button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
									Apply Now
								</button>
							</div>
						</div>

						<div className="bg-neutral-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
							<div className="flex justify-between items-start">
								<div>
									<h4 className="text-xl font-semibold mb-2">
										IoT Software Developer
									</h4>
									<p className="text-neutral-600 mb-4">
										Experience in IoT protocols and cloud platforms
									</p>
									<div className="flex gap-2">
										<span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
											Full-time
										</span>
										<span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
											Visakhapatnam
										</span>
									</div>
								</div>
								<button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
									Apply Now
								</button>
							</div>
						</div>
					</div>
				</div>

				<div className="text-center">
					<p className="text-xl mb-4">
						Don&apos;t see a position that matches your skills?
					</p>
					<button className="bg-neutral-900 text-white px-8 py-3 rounded-full hover:bg-neutral-800 transition-colors">
						Send Spontaneous Application
					</button>
				</div>
			</div>
		</section>
	);
}
