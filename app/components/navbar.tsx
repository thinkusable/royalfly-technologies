"use client";
import React, { useEffect } from "react";

export default function Navbar() {
	useEffect(() => {
		// Mobile menu functionality
		const mobileMenuButton = document.querySelector(".mobile-menu-button");
		const mobileMenu = document.querySelector(".mobile-menu");
		const openIcon = document.querySelector(".open");
		const closeIcon = document.querySelector(".close");

		mobileMenuButton?.addEventListener("click", () => {
			mobileMenu?.classList.toggle("hidden");
			openIcon?.classList.toggle("hidden");
			closeIcon?.classList.toggle("hidden");
		});

		// Close mobile menu when clicking a link
		const mobileLinks = document.querySelectorAll(".mobile-menu a");
		mobileLinks.forEach((link) => {
			link.addEventListener("click", () => {
				mobileMenu?.classList.add("hidden");
				openIcon?.classList.remove("hidden");
				closeIcon?.classList.add("hidden");
			});
		});

		// Navbar scroll effect
		window.addEventListener("scroll", () => {
			const navbar = document.getElementById("navbar");
			if (window.scrollY > 50) {
				navbar?.classList.add("shadow-lg");
			} else {
				navbar?.classList.remove("shadow-lg");
			}
		});
	}, []);

	return (
		<nav
			id="navbar"
			className="fixed w-full z-50 bg-neutral-900 text-white"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<div className="flex items-center">
						<div className="text-xl font-bold">RoyalFly Technologies</div>
					</div>

					<div className="hidden md:block">
						<div className="ml-10 flex items-baseline space-x-4">
							<a
								href="#hero"
								className="px-3 py-2 rounded-md text-sm font-medium hover:bg-neutral-700 transition-colors"
							>
								Home
							</a>
							<a
								href="#services"
								className="px-3 py-2 rounded-md text-sm font-medium hover:bg-neutral-700 transition-colors"
							>
								Services
							</a>
							<a
								href="#capabilities"
								className="px-3 py-2 rounded-md text-sm font-medium hover:bg-neutral-700 transition-colors"
							>
								Capabilities
							</a>
							<a
								href="#portfolio"
								className="px-3 py-2 rounded-md text-sm font-medium hover:bg-neutral-700 transition-colors"
							>
								Portfolio
							</a>
							<a
								href="#contact"
								className="px-3 py-2 rounded-md text-sm font-medium hover:bg-neutral-700 transition-colors"
							>
								Contact
							</a>
							<a
								href="#careers"
								className="px-3 py-2 rounded-md text-sm font-medium hover:bg-neutral-700 transition-colors"
							>
								Careers
							</a>
						</div>
					</div>

					<div className="md:hidden">
						<button
							type="button"
							className="mobile-menu-button inline-flex items-center justify-center p-2 rounded-md hover:bg-neutral-700 focus:outline-none"
							aria-label="Toggle mobile menu"
						>
							<svg
								className="h-6 w-6"
								stroke="currentColor"
								fill="none"
								viewBox="0 0 24 24"
							>
								<path
									className="open"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16M4 18h16"
								></path>
								<path
									className="close hidden"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M6 18L18 6M6 6l12 12"
								></path>
							</svg>
						</button>
					</div>
				</div>
			</div>

			<div className="mobile-menu hidden md:hidden">
				<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-neutral-900">
					<a
						href="#hero"
						className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-700"
					>
						Home
					</a>
					<a
						href="#services"
						className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-700"
					>
						Services
					</a>
					<a
						href="#capabilities"
						className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-700"
					>
						Capabilities
					</a>
					<a
						href="#portfolio"
						className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-700"
					>
						Portfolio
					</a>
					<a
						href="#contact"
						className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-700"
					>
						Contact
					</a>
					<a
						href="#careers"
						className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-700"
					>
						Careers
					</a>
				</div>
			</div>
		</nav>
	);
}
