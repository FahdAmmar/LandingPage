import { Camera } from "lucide-react";
import { AlarmClock } from "lucide-react";
import { Smartphone } from "lucide-react";
import { Lock } from "lucide-react";
import { Video } from "lucide-react";
import { Cloud } from "lucide-react";

export const testimonials = [
    {
        user: "Sarah Thompson",
        company: "SecureLiving Inc.",
        image: "",
        text: "The peace of mind this system provides is incredible. After installation, I can monitor my home from anywhere with perfect reliability.",
    },
    {
        user: "Michael Chen",
        company: "UrbanSafe Properties",
        image: "",
        text: "Professional installation and seamless integration with my existing smart home. The intrusion detection has already prevented two potential break-ins.",
    },
    {
        user: "Roberta Garcia",
        company: "Family First Security",
        image: "",
        text: "As a single parent, home security is my top priority. This system's real-time alerts and easy mobile access give me confidence when I'm away.",
    },
    {
        user: "James Wilson",
        company: "TechSafe Solutions",
        image: "",
        text: "The 24/7 monitoring service responded within 30 seconds when my motion sensors triggered. Their professionalism saved my property from significant damage.",
    },
    {
        user: "Priya Patel",
        company: "Global Business Secure",
        image: "",
        text: "We've secured three office locations with this system. The centralized management and detailed activity logs have revolutionized our security protocol.",
    },
    {
        user: "David Kim",
        company: "Luxury Estates Management",
        image: "",
        text: "From gated communities to individual villas, this scalable solution adapts perfectly. Our clients report zero security breaches since implementation.",
    },
];

export const features = [
    {
        icon: <Camera />,
        text: "24/7 HD Monitoring",
        description:
            "Crystal clear 4K surveillance with night vision and motion tracking for complete property coverage day and night.",
    },
    {
        icon: <AlarmClock />,
        text: "Instant Intrusion Alerts",
        description:
            "Real-time notifications sent directly to your phone the moment any suspicious activity is detected.",
    },
    {
        icon: <Smartphone />,
        text: "Mobile Access & Control",
        description:
            "Arm/disarm your system, view live feeds, and manage settings from anywhere using our intuitive mobile app.",
    },
    {
        icon: <Lock />,
        text: "Smart Lock Integration",
        description:
            "Seamlessly connect with your existing smart locks for automated locking and remote access management.",
    },
    {
        icon: <Video />,
        text: "Cloud Video Storage",
        description:
            "30-day encrypted cloud storage for all surveillance footage with instant playback and download capabilities.",
    },
    {
        icon: <Cloud />,
        text: "Professional Monitoring",
        description:
            "24/7 professional security team monitoring with direct emergency services dispatch when needed.",
    },
];

export const checklistItems = [
    {
        title: "Instant emergency response",
        description:
            "Professional monitoring team contacts you and dispatches emergency services within seconds of alarm activation.",
    },
    {
        title: "Smart home automation",
        description:
            "Integrates with lights, thermostats, and other smart devices to create lived-in patterns when you're away.",
    },
    {
        title: "AI-powered threat detection",
        description:
            "Advanced algorithms distinguish between pets, people, and vehicles to reduce false alarms by 95%.",
    },
    {
        title: "Professional installation included",
        description:
            "Certified technicians handle complete setup and training, ensuring optimal camera placement and system configuration.",
    },
];

export const pricingOptions = [
    {
        title: "Basic",
        price: "$29/mo",
        features: [
            "24/7 Self Monitoring",
            "2 HD Security Cameras",
            "3-Day Video History",
            "Mobile App Access",
            "Email & App Alerts",
        ],
    },
    {
        title: "Professional",
        price: "$49/mo",
        features: [
            "24/7 Professional Monitoring",
            "4 HD Security Cameras",
            "30-Day Video History",
            "Smart Home Integration",
            "Police/Fire Dispatch",
            "Priority Support",
        ],
    },
    {
        title: "Enterprise",
        price: "$199/mo",
        features: [
            "Dedicated Security Team",
            "Unlimited Cameras",
            "90-Day Video History",
            "Advanced Analytics Dashboard",
            "Custom Integration API",
            "On-site Security Assessment",
            "24/7 Phone Support",
        ],
    },
];

export const resourcesLinks = [
    { href: "#", text: "Installation Guide" },
    { href: "#", text: "Technical Documentation" },
    { href: "#", text: "Video Tutorials" },
    { href: "#", text: "API Reference" },
    { href: "#", text: "Security Whitepapers" },
];

export const platformLinks = [
    { href: "#", text: "Camera Systems" },
    { href: "#", text: "Supported Devices" },
    { href: "#", text: "System Requirements" },
    { href: "#", text: "Mobile Apps" },
    { href: "#", text: "Release Updates" },
];

export const communityLinks = [
    { href: "#", text: "Safety Workshops" },
    { href: "#", text: "Neighborhood Watch" },
    { href: "#", text: "Security Conferences" },
    { href: "#", text: "Certification Programs" },
    { href: "#", text: "Career Opportunities" },
];


export const navitems = [
    { text: "Features", href: "#" },
    { text: "Workflow", href: "#" },
    { text: "Pricing", href: "#" },
    { text: "Testimonials", href: "#" },
];
