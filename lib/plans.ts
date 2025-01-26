export const plans = [
    {
        name: "I'm not sure (I want to find out more)",
        icon: "🤷‍♂️",
        price: "$TBD",
        originalPrice: "$TBD",
        description: "",
        features: ["I'm not sure"],
        popular: false,
        visibleOnPage: false
    },
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
            { text: "$60/month maintenance after the first 12 months", included: false },
        ],
        popular: false,
        visibleOnPage: true
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
            "Minimum 12 month commitment",
        ],
        popular: true,
        visibleOnPage: true
    },
];
