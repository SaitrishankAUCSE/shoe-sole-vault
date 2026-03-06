export const products = [
    {
        id: 1,
        title: "AeroStride Runner",
        slug: "aerostride-runner",
        price: 129.99,
        comparePrice: 159.99,
        description: "Engineered for speed and comfort, the AeroStride Runner features our proprietary FlexFoam™ midsole technology that delivers exceptional energy return with every stride. The breathable mesh upper keeps your feet cool during intense workouts, while the reinforced heel counter provides stability on any terrain.",
        shortDescription: "Lightweight performance running shoe with FlexFoam™ cushioning technology.",
        features: [
            "FlexFoam™ midsole for superior energy return",
            "Breathable engineered mesh upper",
            "Reinforced heel counter for stability",
            "Durable rubber outsole with grip pattern",
            "Reflective details for low-light visibility",
            "Removable cushioned insole"
        ],
        images: ["/images/products/aerostride.png"],
        variants: {
            sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],
            colors: ["Navy/Coral", "Black/White", "Grey/Neon"]
        },
        sku: "SV-AER-001",
        inventory: 150,
        vendor: "SoleVault",
        productType: "Running Shoes",
        tags: ["running", "performance", "mens", "new-arrival", "best-seller"],
        collections: ["all", "mens", "running", "new-arrivals", "best-sellers"],
        shipping: "Free shipping • Processing: 1-2 days • Delivery: 5-7 business days",
        reviews: [
            { author: "Jake M.", rating: 5, text: "Best running shoes I've ever owned. The cushioning is incredible!", date: "2025-12-15" },
            { author: "Sarah K.", rating: 5, text: "So lightweight and comfortable. Perfect for my daily 5K runs.", date: "2025-11-28" },
            { author: "Mike R.", rating: 4, text: "Great shoes overall, slightly narrow for wide feet but amazing cushioning.", date: "2025-11-10" }
        ],
        averageRating: 4.7,
        reviewCount: 142,
        seo: {
            metaTitle: "AeroStride Runner - Premium Running Shoes | SoleVault",
            metaDescription: "Discover the AeroStride Runner with FlexFoam™ technology. Lightweight, breathable, and built for performance. Free shipping on all orders."
        }
    },
    {
        id: 2,
        title: "CloudWalk Comfort",
        slug: "cloudwalk-comfort",
        price: 89.99,
        comparePrice: 119.99,
        description: "Step into cloud-like comfort with the CloudWalk Comfort. Designed for the modern woman who doesn't compromise on style or comfort, these sneakers feature a premium leather upper with a minimalist silhouette, elevated platform sole, and our signature MemoryCloud™ insole that molds to your feet.",
        shortDescription: "Women's premium comfort sneaker with MemoryCloud™ insole technology.",
        features: [
            "MemoryCloud™ memory foam insole",
            "Premium soft leather upper",
            "Elevated platform sole for added height",
            "Minimalist modern design",
            "Cushioned collar for ankle comfort",
            "Easy slip-on design with lace detail"
        ],
        images: ["/images/products/cloudwalk.png"],
        variants: {
            sizes: ["US 5", "US 6", "US 7", "US 8", "US 9", "US 10"],
            colors: ["White/Rose Gold", "Blush Pink", "All Black"]
        },
        sku: "SV-CLW-002",
        inventory: 200,
        vendor: "SoleVault",
        productType: "Lifestyle Shoes",
        tags: ["lifestyle", "comfort", "womens", "best-seller", "casual"],
        collections: ["all", "womens", "lifestyle", "best-sellers"],
        shipping: "Free shipping • Processing: 1-2 days • Delivery: 5-7 business days",
        reviews: [
            { author: "Emma L.", rating: 5, text: "These are the most comfortable shoes I own. I wear them every day!", date: "2025-12-20" },
            { author: "Lisa T.", rating: 5, text: "Beautiful design and so comfy. Got compliments the first day!", date: "2025-12-05" },
            { author: "Rachel P.", rating: 4, text: "Love these! The rose gold accent is gorgeous. Runs slightly large.", date: "2025-11-22" }
        ],
        averageRating: 4.8,
        reviewCount: 218,
        seo: {
            metaTitle: "CloudWalk Comfort - Women's Premium Sneakers | SoleVault",
            metaDescription: "Experience cloud-like comfort with CloudWalk. Premium leather, MemoryCloud™ insole, and elegant design. Perfect for everyday wear."
        }
    },
    {
        id: 3,
        title: "StreetFlex Urban",
        slug: "streetflex-urban",
        price: 149.99,
        comparePrice: 189.99,
        description: "Make a statement with the StreetFlex Urban. This high-top sneaker combines premium materials with bold street-ready design. The chunky sole provides height and impact protection, while the mixed-material upper of leather and suede creates a luxurious tactile experience. Built for those who set trends, not follow them.",
        shortDescription: "Bold urban high-top sneaker with premium leather and suede construction.",
        features: [
            "Premium leather and suede upper",
            "Chunky sculpted sole with shock absorption",
            "High-top design with padded collar",
            "Metal eyelet detailing",
            "Contrast stitching throughout",
            "Street-ready grip outsole"
        ],
        images: ["/images/products/streetflex.png"],
        variants: {
            sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12", "US 13"],
            colors: ["Black/White", "All White", "Desert Sand"]
        },
        sku: "SV-STF-003",
        inventory: 85,
        vendor: "SoleVault",
        productType: "Lifestyle Shoes",
        tags: ["lifestyle", "streetwear", "mens", "high-top", "premium"],
        collections: ["all", "mens", "lifestyle", "new-arrivals"],
        shipping: "Free shipping • Processing: 1-2 days • Delivery: 5-7 business days",
        reviews: [
            { author: "Derek H.", rating: 5, text: "The quality of these is insane. Premium materials all around.", date: "2025-12-18" },
            { author: "Jordan B.", rating: 5, text: "Turned heads at the office. These are fire!", date: "2025-12-01" },
            { author: "Chris A.", rating: 4, text: "Love the design. Takes a day to break in but then they're perfect.", date: "2025-11-14" }
        ],
        averageRating: 4.6,
        reviewCount: 97,
        seo: {
            metaTitle: "StreetFlex Urban - Premium High-Top Sneakers | SoleVault",
            metaDescription: "Stand out with StreetFlex Urban high-tops. Premium leather & suede, chunky sole, and bold design. Free shipping on all orders."
        }
    },
    {
        id: 4,
        title: "SwiftPace Marathon",
        slug: "swiftpace-marathon",
        price: 179.99,
        comparePrice: 219.99,
        description: "The SwiftPace Marathon is engineered for the serious runner who demands peak performance. Featuring our revolutionary CarbonDrive™ plate embedded in a responsive foam stack, these shoes deliver explosive toe-off propulsion. The aerodynamic knit upper reduces drag while providing a locked-in fit that keeps you going mile after mile.",
        shortDescription: "Elite marathon racing shoe with CarbonDrive™ plate technology.",
        features: [
            "CarbonDrive™ carbon fiber plate",
            "Responsive ZoomFoam™ stack height",
            "Aerodynamic engineered knit upper",
            "Ultra-lightweight at 198g",
            "Rocker geometry for efficient stride",
            "Competition-grade rubber outsole"
        ],
        images: ["/images/products/swiftpace.png"],
        variants: {
            sizes: ["US 6", "US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],
            colors: ["Neon Green/Black", "Electric Blue", "Racing Red"]
        },
        sku: "SV-SWP-004",
        inventory: 60,
        vendor: "SoleVault",
        productType: "Running Shoes",
        tags: ["running", "performance", "marathon", "carbon-plate", "unisex"],
        collections: ["all", "running", "best-sellers"],
        shipping: "Free shipping • Processing: 1-2 days • Delivery: 5-7 business days",
        reviews: [
            { author: "Alex T.", rating: 5, text: "Shaved 3 minutes off my marathon PB. Game-changing shoe!", date: "2025-12-22" },
            { author: "Maria S.", rating: 5, text: "The carbon plate makes such a difference. You can feel the propulsion.", date: "2025-12-10" },
            { author: "Tom W.", rating: 5, text: "Worth every penny. These are race-day shoes that deliver.", date: "2025-11-30" }
        ],
        averageRating: 4.9,
        reviewCount: 73,
        seo: {
            metaTitle: "SwiftPace Marathon - Carbon Plate Racing Shoes | SoleVault",
            metaDescription: "Achieve your personal best with SwiftPace Marathon racing shoes. CarbonDrive™ plate technology for explosive performance."
        }
    },
    {
        id: 5,
        title: "VelvetStep Luxe",
        slug: "velvetstep-luxe",
        price: 199.99,
        comparePrice: 249.99,
        description: "Elevate your everyday with the VelvetStep Luxe. Crafted from the finest Italian leather with subtle metallic accents, these sneakers redefine luxury casual footwear. The hand-stitched details and premium finishing make each pair a work of art, while the cushioned sole ensures all-day comfort worthy of their premium status.",
        shortDescription: "Luxury Italian leather sneaker with metallic gold accents.",
        features: [
            "Premium Italian leather construction",
            "Metallic gold accent detailing",
            "Hand-stitched craftsmanship",
            "Cushioned leather-lined interior",
            "Elegant minimal silhouette",
            "Premium leather outsole with rubber insert"
        ],
        images: ["/images/products/velvetstep.png"],
        variants: {
            sizes: ["US 5", "US 6", "US 7", "US 8", "US 9", "US 10"],
            colors: ["Beige/Gold", "Ivory/Silver", "Black/Gold"]
        },
        sku: "SV-VLS-005",
        inventory: 45,
        vendor: "SoleVault",
        productType: "Lifestyle Shoes",
        tags: ["lifestyle", "luxury", "womens", "premium", "leather"],
        collections: ["all", "womens", "lifestyle", "new-arrivals"],
        shipping: "Free shipping • Processing: 1-2 days • Delivery: 5-7 business days",
        reviews: [
            { author: "Sophia R.", rating: 5, text: "These are absolutely stunning. The quality is unmatched.", date: "2025-12-25" },
            { author: "Nicole M.", rating: 5, text: "I feel like I'm walking on air. So elegant yet comfortable!", date: "2025-12-12" },
            { author: "Amanda K.", rating: 4, text: "Beautiful shoes. The leather is butter-soft. My new favorites.", date: "2025-11-29" }
        ],
        averageRating: 4.8,
        reviewCount: 56,
        seo: {
            metaTitle: "VelvetStep Luxe - Italian Leather Luxury Sneakers | SoleVault",
            metaDescription: "Indulge in luxury with VelvetStep Luxe sneakers. Italian leather, gold accents, and hand-stitched details. Free shipping."
        }
    },
    {
        id: 6,
        title: "TrailBlaze X1",
        slug: "trailblaze-x1",
        price: 159.99,
        comparePrice: 199.99,
        description: "Conquer any trail with the TrailBlaze X1. Built for the fearless outdoor enthusiast, these trail runners feature an aggressive multi-directional lug pattern for superior grip on any surface. The waterproof membrane keeps your feet dry in any conditions, while the reinforced toe cap protects against rocks and roots.",
        shortDescription: "Waterproof trail running shoe with aggressive grip technology.",
        features: [
            "Waterproof breathable membrane",
            "Aggressive multi-directional lug outsole",
            "Reinforced toe cap protection",
            "Rock plate for underfoot protection",
            "Quick-dry drainage system",
            "Gaiter-compatible collar"
        ],
        images: ["/images/products/trailblaze.png"],
        variants: {
            sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],
            colors: ["Forest Green/Orange", "Slate Grey", "Earth Brown"]
        },
        sku: "SV-TBX-006",
        inventory: 110,
        vendor: "SoleVault",
        productType: "Running Shoes",
        tags: ["running", "trail", "mens", "waterproof", "outdoor"],
        collections: ["all", "mens", "running", "new-arrivals"],
        shipping: "Free shipping • Processing: 1-2 days • Delivery: 5-7 business days",
        reviews: [
            { author: "Ben C.", rating: 5, text: "Handled a muddy 20-mile trail run like a champ. Incredible grip!", date: "2025-12-19" },
            { author: "Dave L.", rating: 5, text: "Waterproof actually works! Ran through streams with dry feet.", date: "2025-12-03" },
            { author: "Kevin P.", rating: 4, text: "Tough as nails. These can handle anything Mother Nature throws at you.", date: "2025-11-17" }
        ],
        averageRating: 4.7,
        reviewCount: 89,
        seo: {
            metaTitle: "TrailBlaze X1 - Waterproof Trail Running Shoes | SoleVault",
            metaDescription: "Tackle any trail with TrailBlaze X1. Waterproof, aggressive grip, and rock-solid protection. Free shipping on all orders."
        }
    }
];

export const collections = [
    { slug: "all", title: "All Shoes", description: "Browse our complete collection of premium footwear.", image: "/images/products/aerostride.png" },
    { slug: "mens", title: "Men's Collection", description: "Performance and style for the modern man.", image: "/images/products/streetflex.png" },
    { slug: "womens", title: "Women's Collection", description: "Elegance meets comfort in every step.", image: "/images/products/cloudwalk.png" },
    { slug: "running", title: "Running", description: "Engineered for speed, built for distance.", image: "/images/products/swiftpace.png" },
    { slug: "lifestyle", title: "Lifestyle", description: "Everyday sneakers that turn heads.", image: "/images/products/velvetstep.png" },
    { slug: "new-arrivals", title: "New Arrivals", description: "The latest drops from SoleVault.", image: "/images/products/trailblaze.png" },
    { slug: "best-sellers", title: "Best Sellers", description: "Our most popular shoes loved by thousands.", image: "/images/products/aerostride.png" },
    { slug: "sale", title: "Sale", description: "Premium sneakers at unbeatable prices.", image: "/images/products/cloudwalk.png" }
];

export function getProductBySlug(slug) {
    return products.find(p => p.slug === slug);
}

export function getProductsByCollection(collectionSlug) {
    if (collectionSlug === 'all' || collectionSlug === 'sale') return products;
    return products.filter(p => p.collections.includes(collectionSlug));
}

export function getCollectionBySlug(slug) {
    return collections.find(c => c.slug === slug);
}

export function getRelatedProducts(currentSlug, limit = 4) {
    const current = getProductBySlug(currentSlug);
    if (!current) return [];
    return products.filter(p => p.slug !== currentSlug).slice(0, limit);
}

export const discountCodes = {
    "SOLE10": { type: "percentage", value: 10, minOrder: 0, description: "10% off your order" },
    "WELCOME15": { type: "percentage", value: 15, minOrder: 50, description: "15% off orders over $50" },
    "FREESHIP": { type: "free_shipping", value: 0, minOrder: 0, description: "Free shipping on your order" },
    "SAVE20": { type: "fixed", value: 20, minOrder: 100, description: "$20 off orders over $100" }
};

export const testimonials = [
    { name: "James W.", location: "New York, NY", rating: 5, text: "SoleVault has completely changed my shoe game. The quality is unmatched and the customer service is incredible. Will never shop anywhere else!", avatar: "JW" },
    { name: "Ashley M.", location: "Los Angeles, CA", rating: 5, text: "I was skeptical ordering shoes online, but SoleVault exceeded all my expectations. The fit was perfect and they look even better in person.", avatar: "AM" },
    { name: "Ryan D.", location: "Chicago, IL", rating: 5, text: "Fast shipping, beautiful packaging, and the shoes are absolutely premium. The AeroStride Runners are the best running shoes I've ever worn.", avatar: "RD" },
    { name: "Jessica L.", location: "Miami, FL", rating: 5, text: "The VelvetStep Luxe sneakers are a work of art. I get compliments every single time I wear them. Worth every penny!", avatar: "JL" }
];
