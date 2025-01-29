import React from "react";

export default function Contact() {
	return (
		<section
			id="contact"
			className="py-16 bg-neutral-900"
		>
			<div className="container mx-auto px-4">
				<h2 className="text-4xl font-bold text-center text-white mb-12">
					Contact Us
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
					<div className="bg-neutral-800 p-8 rounded-lg shadow-xl">
						<form className="space-y-6">
							<div>
								<label
									htmlFor="name"
									className="block text-white mb-2"
								>
									Name
								</label>
								<input
									type="text"
									id="name"
									className="w-full px-4 py-2 rounded bg-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
									required
								/>
							</div>
							<div>
								<label
									htmlFor="email"
									className="block text-white mb-2"
								>
									Email
								</label>
								<input
									type="email"
									id="email"
									className="w-full px-4 py-2 rounded bg-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
									required
								/>
							</div>
							<div>
								<label
									htmlFor="phone"
									className="block text-white mb-2"
								>
									Phone
								</label>
								<input
									type="tel"
									id="phone"
									className="w-full px-4 py-2 rounded bg-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
									required
								/>
							</div>
							<div>
								<label
									htmlFor="message"
									className="block text-white mb-2"
								>
									Message
								</label>
								<textarea
									id="message"
									rows={4}
									className="w-full px-4 py-2 rounded bg-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
									required
								></textarea>
							</div>
							<button
								type="submit"
								className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
							>
								Send Message
							</button>
						</form>
					</div>

					<div className="space-y-8">
						<div className="bg-neutral-800 p-8 rounded-lg shadow-xl">
							<h3 className="text-2xl font-semibold text-white mb-6">
								Contact Information
							</h3>
							<div className="space-y-4">
								<div className="flex items-start space-x-4">
									<svg
										className="w-6 h-6 text-blue-500 mt-1"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
										/>
									</svg>
									<div>
										<p className="text-white font-medium">Email</p>
										<a
											href="mailto:royalfly.india@gmail.com"
											className="text-gray-300 hover:text-blue-500 transition"
										>
											royalfly.india@gmail.com
										</a>
									</div>
								</div>
								<div className="flex items-start space-x-4">
									<svg
										className="w-6 h-6 text-blue-500 mt-1"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
										/>
									</svg>
									<div>
										<p className="text-white font-medium">Phone</p>
										<a
											href="tel:+919703764266"
											className="text-gray-300 hover:text-blue-500 transition"
										>
											+91-9703764266
										</a>
									</div>
								</div>
								<div className="flex items-start space-x-4">
									<svg
										className="w-6 h-6 text-blue-500 mt-1"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
										/>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
										/>
									</svg>
									<div>
										<p className="text-white font-medium">Address</p>
										<p className="text-gray-300">
											Flat 303, SRC Residency, Madhuranagar, Visakhapatnam,
											Andhra Pradesh, India
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="bg-neutral-800 p-8 rounded-lg shadow-xl">
							<h3 className="text-2xl font-semibold text-white mb-6">
								Connect With Us
							</h3>
							<div className="flex space-x-4">
								<a
									href="#"
									className="text-gray-300 hover:text-blue-500 transition"
								>
									<svg
										className="w-6 h-6"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
									</svg>
								</a>
								<a
									href="#"
									className="text-gray-300 hover:text-blue-500 transition"
								>
									<svg
										className="w-6 h-6"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
									</svg>
								</a>
								<a
									href="#"
									className="text-gray-300 hover:text-blue-500 transition"
								>
									<svg
										className="w-6 h-6"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
