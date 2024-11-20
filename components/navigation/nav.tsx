"use client"
import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";

export default function Nav() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const navigationLinks = [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Services",
			href: "/services",
		},
		{
			label: "Pricing",
			href: "/pricing",
		},
		{
			label: "About Us",
			href: "/about",
		},
		{
			label: "Contact",
			href: "/contact",
		}
	];

	return <nav className="flex justify-between items-center max-w-7xl w-full py-10 px-4">
		<div>
			<div>Logo</div>
		</div>
		<button 
			className="lg:hidden"
			onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
		>
			<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				{isMobileMenuOpen ? (
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
				) : (
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
				)}
			</svg>
		</button>
		<div className="hidden lg:block">
			<ul className="flex gap-10 items-center w-full">
				{
					navigationLinks.map((link) => (
						<li key={link.href}>
							<Link href={link.href}>{link.label}</Link>
						</li>
					))
				}
			</ul>
		</div>
		<div className="hidden lg:flex gap-2 items-center">
			<Button variant={"outline"} className="text-sm px-4 py-2">Contact Sales</Button>
			<Button className="text-sm px-4 py-2">Start For Free</Button>
		</div>
		{isMobileMenuOpen && (
			<div className="lg:hidden absolute top-[5rem] left-0 right-0 bg-white shadow-lg p-4">
				<ul className="flex flex-col gap-4">
					{navigationLinks.map((link) => (
						<li key={link.href}>
							<Link href={link.href}>{link.label}</Link>
						</li>
					))}
				</ul>
				<div className="flex flex-col gap-2 mt-4">
					<Button variant={"outline"} className="text-sm px-4 py-2">Contact Sales</Button>
					<Button className="text-sm px-4 py-2">Start For Free</Button>
				</div>
			</div>
		)}
	</nav>;
}
