import Section from "@/components/sections/section";
import { Typography } from "@/components/common/typography";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Outright",
    icon: "🎁",
    price: "$3,500",
    originalPrice: "$5,000",
    description: "/outright with 12 months included changes",
    features: [
      "Negotiable terms",
      "Standard 5 page website (contact us for pricing for larger websites)",
      ".com.au domain name",
      "Australian web hosting",
      "Made by Australian developers",
      "Included ongoing changes and maintenance",
      "Generate and capture leads",
    ],
    optionalFeatures: [
      { text: "$60/month maintenance after the first 12 months", included: false }
    ],
    popular: false,
  },
  {
    name: "Monthly",
    icon: "💎",
    price: "$150",
    originalPrice: "$250",
    description: "/month with included ongoing changes",
    features: [
      "$0 up-front, risk free",
      "Standard 5 page website (contact us for pricing for larger websites)",
      ".com.au domain name", 
      "Australian web hosting",
      "Made by Australian developers",
      "Included ongoing changes and maintenance",
      "Generate and capture leads",
      "Included free maintenance & changes",
      "Minimum 12 month commitment"
    ],
    popular: true,
  }
];

export function PricingPlans() {
  return (
    <Section variant="light">
      <div className="text-center space-y-4 mb-12">
        <Badge variant="secondary" className="bg-[#E8F5E9] text-[#4CAF50]">
          A Package Fit For Everyone
        </Badge>
        <Typography variant="h2" className="max-w-3xl mx-auto">
          We Have Exactly What You Need To Help Your Business Grow
        </Typography>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "rounded-2xl p-8 space-y-6",
              plan.popular ? "bg-primary text-white shadow-lg" : "bg-white shadow"
            )}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{plan.icon}</span>
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                {plan.popular && (
                  <Badge className="ml-auto bg-white/20 text-white">
                    Most Popular
                  </Badge>
                )}
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-2xl line-through text-gray-400">
                  {plan.originalPrice}
                </span>
              </div>
              <p className="text-sm opacity-80">{plan.description}</p>
            </div>

            <Button 
              className={cn(
                "w-full",
                plan.popular ? "bg-white text-primary hover:bg-white/90" : ""
              )}
            >
              Get Started Now
            </Button>

            <ul className="space-y-4">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-3 items-start">
                  <Check className="w-5 h-5 shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
              {plan.optionalFeatures?.map((feature) => (
                <li key={feature.text} className="flex gap-3 items-start opacity-60">
                  <X className="w-5 h-5 shrink-0 mt-0.5" />
                  <span className="text-sm">{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
} 