import Link from "next/link";
import { Button } from "../ui/button";

export default function Nav() {
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

	return <nav className="flex justify-between items-center max-w-7xl w-full py-10">
		<div>
			<div>Logo</div>
		</div>
		<div className="">
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
		<div className="flex gap-2 items-center">
			<Button variant={"outline"} className="text-sm px-4 py-2">Contact Sales</Button>
			<Button className="text-sm px-4 py-2">Start For Free</Button>
		</div>
	</nav>;
}
