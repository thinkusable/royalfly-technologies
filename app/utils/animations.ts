// Common animation variants for components
export const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { duration: 0.6, staggerChildren: 0.2 },
	},
};

export const itemVariants = {
	hidden: { y: 50, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: { duration: 0.6 },
	},
};

export const hoverScale = {
	whileHover: { scale: 1.05 },
	whileTap: { scale: 0.95 },
};

export const buttonHoverScale = {
	whileHover: { scale: 1.05 },
	whileTap: { scale: 0.95 },
};

export const sectionWrapperProps = {
	initial: "hidden",
	whileInView: "visible",
	viewport: { once: true, amount: 0.3 },
	variants: containerVariants,
};
