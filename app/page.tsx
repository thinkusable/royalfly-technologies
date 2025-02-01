"use client";

import About from "./components/about";
import Capabilities from "./components/capabilities";
import Domain from "./components/domain";
import Hero from "./components/hero";
import Industries from "./components/industries";
import Services from "./components/services";
import Vision from "./components/vision";
import Portfolio from "./components/portfolio";
import Testimonial from "./components/testimonial";
import Contact from "./components/contact";

export default function Home() {
	return (
		<div>
			<Hero />
			<About />
			<Vision />
			<Domain />
			<Services />
			<Industries />
			<Capabilities />
			<Portfolio />
			<Testimonial />
			<Contact />
		</div>
	);
}
