import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const inter = Inter({
	subsets: ["latin"],
	fallback: ["Montserrat"],
});

export const metadata: Metadata = {
	title: "Royalfly Technologies",
	description: "Royalfly Technologies",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} antialiased text-gray-800 min-h-screen flex flex-col`}
			>
				<header className="relative z-50 bg-white dark:bg-gray-900">
					<Navbar />
				</header>
				<main
					id="main-content"
					className="flex-1 relative "
				>
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
