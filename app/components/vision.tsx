import React from "react";

export default function Vision() {
	return (
		<section
			id="vision"
			className="py-20 bg-neutral-900 text-white overflow-hidden"
		>
			<div className="container mx-auto px-4">
				<div className="text-center mb-16 animate__animated animate__fadeInDown">
					<h2 className="text-4xl font-bold mb-4">Our Vision</h2>
					<div className="w-20 h-1 bg-blue-600 mx-auto"></div>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					<div className="bg-neutral-800 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp">
						<div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mb-6 mx-auto">
							<svg
								className="w-8 h-8 text-blue-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
								></path>
							</svg>
						</div>
						<h3 className="text-xl font-semibold text-center mb-4">
							Global Leadership
						</h3>
						<p className="text-neutral-300 text-center">
							Aspiring to become a global leader in electronics innovation and
							product development
						</p>
					</div>

					<div className="bg-neutral-800 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp animate__delay-1s">
						<div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mb-6 mx-auto">
							<svg
								className="w-8 h-8 text-blue-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
								></path>
							</svg>
						</div>
						<h3 className="text-xl font-semibold text-center mb-4">
							Client Empowerment
						</h3>
						<p className="text-neutral-300 text-center">
							Enabling our clients to achieve their technological aspirations
							through innovative solutions
						</p>
					</div>

					<div className="bg-neutral-800 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp animate__delay-2s">
						<div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mb-6 mx-auto">
							<svg
								className="w-8 h-8 text-blue-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
								></path>
							</svg>
						</div>
						<h3 className="text-xl font-semibold text-center mb-4">
							Innovation Focus
						</h3>
						<p className="text-neutral-300 text-center">
							Continuously pushing boundaries through research and development
							excellence
						</p>
					</div>

					<div className="bg-neutral-800 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp animate__delay-3s">
						<div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mb-6 mx-auto">
							<svg
								className="w-8 h-8 text-blue-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								></path>
							</svg>
						</div>
						<h3 className="text-xl font-semibold text-center mb-4">
							Cost-effective Solutions
						</h3>
						<p className="text-neutral-300 text-center">
							Delivering high-quality solutions while maintaining optimal cost
							efficiency
						</p>
					</div>
				</div>

				<div className="text-center mt-16 animate__animated animate__fadeInUp animate__delay-4s">
					<p className="text-xl text-neutral-300 max-w-3xl mx-auto">
						&quot;Our vision is to revolutionize the electronics industry
						through innovative design and development, making cutting-edge
						technology accessible to businesses worldwide.&quot;
					</p>
				</div>
			</div>
		</section>
	);
}
