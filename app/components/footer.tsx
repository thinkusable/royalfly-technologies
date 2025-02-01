import React from "react";

export default function Footer() {
	return (
		<footer
			id="footer"
			className="bg-neutral-900 text-white"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div className="space-y-4">
						<h3 className="text-xl font-bold">RoyalFly Technologies LLP</h3>
						<p className="text-gray-400 text-sm">
							First electronics product design company in Visakhapatnam,
							specializing in end-to-end electronics product development
							services.
						</p>
						<div className="flex space-x-4">
							<a
								href="#"
								className="text-gray-400 hover:text-white"
							>
								<span className="sr-only">LinkedIn</span>
								<svg
									className="h-6 w-6"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
								</svg>
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-white"
							>
								<span className="sr-only">Twitter</span>
								<svg
									className="h-6 w-6"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
								</svg>
							</a>
						</div>
					</div>

					<div>
						<h3 className="text-lg font-semibold mb-4">Quick Links</h3>
						<ul className="space-y-2">
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-white"
								>
									Home
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-white"
								>
									Our Services
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-white"
								>
									Capabilities
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-white"
								>
									Portfolio
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-white"
								>
									Careers
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-lg font-semibold mb-4">Services</h3>
						<ul className="space-y-2">
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-white"
								>
									Product Design
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-white"
								>
									PCB Design
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-white"
								>
									IoT Solutions
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-white"
								>
									Embedded Systems
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-white"
								>
									Consulting
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-lg font-semibold mb-4">Contact</h3>
						<div className="space-y-2 text-gray-400">
							<p>Flat 303, SRC Residency</p>
							<p>Madhuranagar, Visakhapatnam</p>
							<p>Andhra Pradesh, India</p>
							<p className="mt-4">Email: royalfly.india@gmail.com</p>
							<p>Phone: +91-9703764266</p>
						</div>
					</div>
				</div>

				<div className="border-t border-gray-800 mt-12 pt-8">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<p className="text-gray-400 text-sm">
							© 2024 RoyalFly Technologies LLP. All rights reserved.
						</p>
						<div className="flex space-x-6 mt-4 md:mt-0">
							<a
								href="#"
								className="text-gray-400 hover:text-white text-sm"
							>
								Privacy Policy
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-white text-sm"
							>
								Terms of Service
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-white text-sm"
							>
								Cookie Policy
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
