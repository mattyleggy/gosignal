import Header from "@/components/header/header";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

export default function Home() {
	return (
		<>
			<Header
				badge="#1 Australian Website Designers for tradies"
				title={
					<>
						Tradies with modern websites get <span className="text-primary inline leading-none">30% more customers</span>
					</>
				}
				subTitle="With over 15 years of experience, we deliver affordable and high quality websites to help you get more customers."
				buttons={
					<>
						<Button variant="dropShadow">
							Get Started
						</Button>
						<Button variant="outline">
							Contact Us <ArrowRightIcon className="w-4 h-4" />
						</Button>
					</>
				}
			/>
		</>
	);
}
