import {
    FaTruckFast,
    FaGaugeHigh,
    FaListCheck,
    FaBox,
    FaClock,
    FaGlobe,
    FaHandshake,
    FaEnvelope,
    FaPhone,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
    FaFacebook
} from "react-icons/fa6";

import { FaMapMarkerAlt } from "react-icons/fa";

export const miniCards = [
    {
        id: 1,
        icon: FaTruckFast,
        title: "Fast Delivery",
        text: "Get your packages delivered quickly and on time."
    },
    {
        id: 2,
        icon: FaGaugeHigh,
        title: "Real-Time Updates",
        text: "Track your package every step of the way with live updates."
    },
    {
        id: 3,
        icon: FaListCheck,
        title: "Accurate Information",
        text: "Reliable status updates straight from our logistics team."
    }
];

export const trackingInfo = {
    data: [
        {
            tracking_code: "NGA100001ab",
            current_status: ["In Transit", "In custody", "In preparation"],
            estimated_delivery: "2025-08-03T18:00:00Z",
            origin: "Lagos",
            destination: "Abuja",
            events: [
                {
                    id: 1,
                    status: "Picked Up",
                    location: "Lagos",
                    datetime: "2025-08-01T10:00:00Z",
                    icon: "🟢"
                },
                {
                    id: 2,
                    status: "In Transit",
                    location: "On the way to Abuja",
                    datetime: "2025-08-01T18:00:00Z",
                    icon: "🟡"
                },
                {
                    id: 3,
                    status: "Arrived at Abuja Depot",
                    location: "Abuja",
                    datetime: null,
                    icon: "⚪",
                    note: "Pending..."
                }
            ],
            created_at: "2025-08-01T09:30:00Z",
            last_updated: "2025-08-01T18:05:00Z"
        }
    ]
};

export const serviceHighlights = [
    {
        title: "Document & Parcel Shipping",
        subtitle: "For Everyone",
        description:
            "From important documents to valuable parcels, we’ve got you covered. With fast and flexible shipping options, your items are always in safe hands.",
        services: [
            "Same-Day or Next-Day Delivery",
            "Nationwide Pick-up & Drop-off",
            "Business & Personal Shipping Plans",
            "Insurance & Special Handling Options"
        ],
        img: "/undraw_deliveries_qutl.svg"
    },
    {
        title: "Cargo & Bulk Shipping",
        subtitle: "For Businesses",
        description:
            "Need to move larger goods or bulk cargo? Our logistics solutions ensure your shipments arrive on time, no matter the size.",
        services: [
            "Road & Air Freight globally",
            "International Sea & Air Freight",
            "Warehousing & Distribution",
            "Custom Clearance Support"
        ],
        img: "/undraw_container-ship_t6yx.svg"
    }
];

export const trustHighlights = [
    {
        title: "50,000+ Deliveries",
        description: "Packages safely delivered across the world.",
        icon: FaBox,
        style: "text-blue-600 text-4xl absolute rounded-full -top-5 p-2 bg-gray-100 left-[35%]"
    },
    {
        title: "95% On-Time Rate",
        description: "We pride ourselves on timely and reliable shipping.",
        icon: FaClock,
        style: "text-green-600 text-4xl absolute rounded-full -top-5 p-2 bg-gray-100 left-[35%]"
    },
    {
        title: "24/7 Tracking",
        description:
            "Track your package anytime, anywhere with real-time updates.",
        icon: FaGlobe,
        style: "text-yellow-600 text-4xl absolute rounded-full -top-5 p-2 bg-gray-100 left-[35%]"
    },
    {
        title: "10+ Years Experience",
        description: "Trusted by individuals and businesses nationwide.",
        icon: FaHandshake,
        style: "text-purple-600 text-4xl absolute rounded-full -top-5 p-2 bg-gray-100 left-[35%]"
    }
];

export const contactSection = {
    headline: "Get in Touch",
    subtitle:
        "We’re here to help with your shipping and tracking needs. Reach out anytime.",
    contacts: [
        {
            type: "Email",
            value: "support@Track_Bug.com",
            icon: FaEnvelope
        },
        {
            type: "Phone",
            value: "+111 800 123 4567",
            icon: FaPhone
        },
        {
            type: "Location",
            value: "45 Mainland Avenue, Lagos, Nigeria",
            icon: FaMapMarkerAlt
        }
    ]
};

export const footer = {
    company: "Track_Bug",
    year: new Date().getFullYear(),
    description:
        "From local parcels to international shipments, we deliver every package with speed, accuracy, and care.",

    socials: [
        {
            platform: "Facebook",
            href: "https://facebook.com/yourlogistics",
            icon: FaFacebook
        },
        {
            platform: "Twitter",
            href: "https://twitter.com/yourlogistics",
            icon: FaTwitter
        },
        {
            platform: "LinkedIn",
            href: "https://linkedin.com/company/yourlogistics",
            icon: FaLinkedin
        },
        {
            platform: "Instagram",
            href: "https://instagram.com/yourlogistics",
            icon: FaInstagram
        }
    ]
};
