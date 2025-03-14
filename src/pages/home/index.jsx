"use client";

import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star, Users, FileText, Sparkles, ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useUser, UserButton } from "@clerk/clerk-react";

function Home() {
    const { user } = useUser();
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    // Custom hook for animations on scroll
    const useScrollAnimation = () => {
        const [elements, setElements] = useState([]);

        useEffect(() => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add("animate-in")
                            observer.unobserve(entry.target)
                        }
                    })
                },
                { threshold: 0.1 },
            );

            const animatedElements = document.querySelectorAll(".animate-on-scroll")
            animatedElements.forEach((el) => observer.observe(el));
            setElements(animatedElements);

            return () => {
                animatedElements.forEach((el) => observer.unobserve(el));
            }
        }, []);

        return elements;
    };

    useScrollAnimation();

    const faqItems = [
        {
            question: "How does the AI resume builder work?",
            answer:
                "Our AI resume builder analyzes your input information and generates professionally formatted resumes tailored to your industry. It uses advanced algorithms to optimize content and layout for ATS compatibility and readability.",
        },
        {
            question: "Can I customize my resume template?",
            answer:
                "Yes! We offer multiple customization options including various templates, color schemes, font styles, and section arrangements to help your resume stand out while maintaining professional standards.",
        },
        {
            question: "Is my data secure?",
            answer:
                "Absolutely. We use industry-standard encryption and security practices to protect your personal information. We never share your data with third parties without your explicit consent.",
        },
        {
            question: "How many resumes can I create?",
            answer:
                "With our free plan, you can create up to 2 resumes. Our premium plans offer unlimited resume creation along with additional features like AI optimization and expert feedback.",
        },
        {
            question: "Can I download my resume in different formats?",
            answer:
                "Yes, you can download your resume in PDF, DOCX, and TXT formats to ensure compatibility with various application systems and employer preferences.",
        },
    ];

    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemFadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    const scaleUp = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.5 },
        },
    };

    // Text animation for hero section
    const [displayText, setDisplayText] = useState("");
    const fullText = "Create AI-Powered Resumes That Get You Hired";
    const coloredText = "AI-Powered";
    const coloredIndex = fullText.indexOf(coloredText);

    useEffect(() => {
        let i = 0
        const typingInterval = setInterval(() => {
            if (i < fullText.length) {
                setDisplayText(fullText.substring(0, i + 1))
                i++
            } else {
                clearInterval(typingInterval)
            }
        }, 50);

        return () => clearInterval(typingInterval);
    }, []);

    return (
        <div className="w-screen bg-gradient-to-b from-slate-50 to-slate-100">
            {/* Navigation */}
            <motion.nav
                className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <motion.div
                            className="flex items-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <span className="text-3xl font-bold text-indigo-600">ResumeMint</span>
                        </motion.div>
                        <motion.div
                            className="hidden md:flex items-center space-x-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <a href="#features" className="text-slate-600 hover:text-indigo-600 transition-colors">
                                Features
                            </a>
                            <a href="#how-it-works" className="text-slate-600 hover:text-indigo-600 transition-colors">
                                How It Works
                            </a>
                            <a href="#pricing" className="text-slate-600 hover:text-indigo-600 transition-colors">
                                Pricing
                            </a>
                            <a href="#faq" className="text-slate-600 hover:text-indigo-600 transition-colors">
                                FAQ
                            </a>
                        </motion.div>
                        <motion.div
                            className="flex items-center space-x-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            { !user ?
                            <div>
                                <Link to="/dashboard" className="text-indigo-600 hover:text-indigo-800 transition-colors">
                                    Sign In
                                </Link>
                                <Link
                                    to="/auth/sign-up"
                                    className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
                                >
                                    Get Started
                                </Link>
                            </div>
                            : <UserButton /> }
                        </motion.div>
                    </div>
                </div>
            </motion.nav>

            {/* Hero Section */}
            <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            className="space-y-8"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                                {displayText.substring(0, coloredIndex)}
                                <span className="text-indigo-600">
                                    {displayText.substring(coloredIndex, coloredIndex + coloredText.length)}
                                </span>
                                {displayText.substring(coloredIndex + coloredText.length)}
                                <span className="animate-pulse">|</span>
                            </h1>
                            <motion.p
                                className="text-lg text-slate-600 max-w-xl"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.7, delay: 0.5 }}
                            >
                                Our intelligent resume builder uses AI to help you craft the perfect resume tailored to your industry,
                                experience, and target job. Stand out from the competition with professionally designed templates.
                            </motion.p>
                            <motion.div
                                className="flex flex-col sm:flex-row gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.7 }}
                            >
                                <Link
                                    to="/dashboard"
                                    className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-center hover:bg-indigo-700 flex items-center justify-center gap-2 shadow-lg shadow-indigo-200 hover:shadow-xl hover:-translate-y-1 transform transition-all"
                                >
                                    Build Your Resume <ArrowRight size={18} />
                                </Link>
                                <a
                                    href="#how-it-works"
                                    className="bg-white text-indigo-600 border border-indigo-200 px-6 py-3 rounded-lg text-center hover:bg-indigo-50 hover:-translate-y-1 transform transition-all"
                                >
                                    Learn More
                                </a>
                            </motion.div>
                            <motion.div
                                className="flex items-center gap-2 text-slate-600"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.7, delay: 0.9 }}
                            >
                                <div className="flex -space-x-2">
                                    {[...Array(4)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="w-8 h-8 rounded-full bg-indigo-100 border-2 border-white flex items-center justify-center text-xs font-medium text-indigo-600"
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: 0.9 + i * 0.1 }}
                                        >
                                            {String.fromCharCode(65 + i)}
                                        </motion.div>
                                    ))}
                                </div>
                                <span>
                                    Join <b>10,000+</b> professionals using our platform
                                </span>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                        >
                            <motion.div
                                className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-100 rounded-full opacity-70"
                                animate={{
                                    scale: [1, 1.05, 1],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Number.POSITIVE_INFINITY,
                                    repeatType: "reverse",
                                }}
                            ></motion.div>
                            <motion.div
                                className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-100 rounded-full opacity-70"
                                animate={{
                                    scale: [1, 1.1, 1],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Number.POSITIVE_INFINITY,
                                    repeatType: "reverse",
                                    delay: 0.5,
                                }}
                            ></motion.div>
                            <div className="relative bg-white rounded-2xl shadow-2xl shadow-slate-200 overflow-hidden border border-slate-100">
                                <motion.img
                                    src="/landingpage.jpeg?height=600&width=800"
                                    alt="AI Resume Builder Preview"
                                    className="w-full h-auto"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.7 }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/20 to-transparent"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Trusted By */}
            <motion.section
                className="py-12 bg-white border-y border-slate-200"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-slate-500 mb-8">Trusted by professionals from companies like</p>
                    <motion.div
                        className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {["Google", "Microsoft", "Amazon", "Apple", "Meta"].map((company, index) => (
                            <motion.div
                                key={company}
                                className="text-slate-400 font-semibold text-xl"
                                variants={itemFadeIn}
                                custom={index}
                            >
                                {company}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            {/* Features */}
            <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="container mx-auto max-w-7xl">
                    <motion.div
                        className="text-center mb-16 animate-on-scroll"
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Powerful Features</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Our AI-powered platform offers everything you need to create professional, ATS-friendly resumes that help
                            you land interviews.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {[
                            {
                                icon: <Sparkles className="w-10 h-10 text-indigo-600" />,
                                title: "AI Content Generation",
                                description:
                                    "Our AI analyzes your experience and skills to suggest powerful bullet points and achievements that resonate with hiring managers.",
                            },
                            {
                                icon: <FileText className="w-10 h-10 text-indigo-600" />,
                                title: "ATS-Optimized Templates",
                                description:
                                    "All our templates are designed to pass through Applicant Tracking Systems while maintaining a professional, modern look.",
                            },
                            {
                                icon: <Users className="w-10 h-10 text-indigo-600" />,
                                title: "Industry-Specific Guidance",
                                description:
                                    "Get tailored recommendations based on your industry, job level, and target positions to maximize your chances.",
                            },
                            {
                                icon: <CheckCircle className="w-10 h-10 text-indigo-600" />,
                                title: "Real-Time Feedback",
                                description:
                                    "Receive instant feedback on your resume's completeness, impact, and optimization opportunities.",
                            },
                            {
                                icon: <Star className="w-10 h-10 text-indigo-600" />,
                                title: "Multiple Export Formats",
                                description:
                                    "Download your resume in PDF, DOCX, or plain text formats to suit any application requirement.",
                            },
                            {
                                icon: <ArrowRight className="w-10 h-10 text-indigo-600" />,
                                title: "One-Click Apply",
                                description:
                                    "Connect your resume directly to job boards and apply with a single click to streamline your job search.",
                            },
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-2 hover:border-indigo-100"
                                variants={itemFadeIn}
                                whileHover={{
                                    scale: 1.03,
                                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                                }}
                            >
                                <motion.div
                                    className="mb-4 bg-indigo-50 w-16 h-16 rounded-lg flex items-center justify-center"
                                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {feature.icon}
                                </motion.div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                                <p className="text-slate-600">{feature.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* How It Works */}
            <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
                <div className="container mx-auto max-w-7xl">
                    <motion.div
                        className="text-center mb-16"
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Creating a professional resume has never been easier. Follow these simple steps to get started.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {[
                            {
                                step: "1",
                                title: "Create an Account",
                                description: "Sign up for free and set up your profile with basic information about your career goals.",
                            },
                            {
                                step: "2",
                                title: "Input Your Information",
                                description:
                                    "Enter your work experience, education, skills, and achievements, or import from LinkedIn.",
                            },
                            {
                                step: "3",
                                title: "Generate & Customize",
                                description:
                                    "Our AI will generate a tailored resume that you can customize with different templates and styles.",
                            },
                        ].map((item, index) => (
                            <motion.div key={index} className="relative" variants={itemFadeIn}>
                                <motion.div
                                    className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm h-full"
                                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                                >
                                    <motion.div
                                        className="absolute -top-5 left-8 bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg"
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ type: "spring", stiffness: 200, delay: 0.2 + index * 0.1 }}
                                    >
                                        {item.step}
                                    </motion.div>
                                    <h3 className="text-xl font-bold text-slate-900 mt-4 mb-3">{item.title}</h3>
                                    <p className="text-slate-600">{item.description}</p>
                                </motion.div>
                                {index < 2 && (
                                    <motion.div
                                        className="hidden md:block absolute top-1/2 -right-8 transform -translate-y-1/2 z-10"
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 + index * 0.2 }}
                                    >
                                        <ArrowRight className="w-8 h-8 text-indigo-300" />
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="mt-16 text-center"
                        variants={scaleUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <Link
                            to="/auth/sign-up"
                            className="bg-indigo-600 text-white px-8 py-3 rounded-lg inline-flex items-center gap-2 hover:bg-indigo-700 shadow-lg shadow-indigo-100 hover:shadow-xl hover:-translate-y-1 transform transition-all"
                        >
                            Get Started Now <ArrowRight size={18} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="container mx-auto max-w-7xl">
                    <motion.div
                        className="text-center mb-16"
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">What Our Users Say</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Thousands of job seekers have found success using our AI Resume Builder. Here are some of their stories.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {[
                            {
                                name: "Sarah Johnson",
                                role: "Marketing Manager",
                                image: "/placeholder.svg?height=100&width=100",
                                quote:
                                    "The AI suggestions helped me highlight achievements I would have otherwise overlooked. I received interview calls from 3 companies within a week of updating my resume!",
                            },
                            {
                                name: "Michael Chen",
                                role: "Software Engineer",
                                image: "/placeholder.svg?height=100&width=100",
                                quote:
                                    "As a developer, I was skeptical about AI writing my resume, but I was blown away by how well it understood technical skills and presented them. Highly recommended!",
                            },
                            {
                                name: "Jessica Williams",
                                role: "Healthcare Professional",
                                image: "/placeholder.svg?height=100&width=100",
                                quote:
                                    "The industry-specific templates were perfect for my healthcare background. The resume I created helped me land my dream job at a top hospital.",
                            },
                        ].map((testimonial, index) => (
                            <motion.div
                                key={index}
                                className="bg-slate-50 rounded-xl p-6 border border-slate-100"
                                variants={itemFadeIn}
                                whileHover={{
                                    y: -10,
                                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                                    borderColor: "rgb(224, 231, 255)", // Light indigo border
                                }}
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <motion.img
                                        src={testimonial.image || "/placeholder.svg"}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                        whileHover={{ scale: 1.1 }}
                                    />
                                    <div>
                                        <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                                        <p className="text-slate-500 text-sm">{testimonial.role}</p>
                                    </div>
                                </div>
                                <motion.div
                                    className="mb-4"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={{
                                        hidden: { opacity: 0 },
                                        visible: {
                                            opacity: 1,
                                            transition: {
                                                staggerChildren: 0.1,
                                            },
                                        },
                                    }}
                                >
                                    {[...Array(5)].map((_, i) => (
                                        <motion.span
                                            key={i}
                                            variants={{
                                                hidden: { opacity: 0, y: 10 },
                                                visible: { opacity: 1, y: 0 },
                                            }}
                                        >
                                            <Star className="w-5 h-5 text-yellow-400 inline-block" fill="#FBBF24" />
                                        </motion.span>
                                    ))}
                                </motion.div>
                                <p className="text-slate-600 italic">"{testimonial.quote}"</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Pricing */}
            <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
                <div className="container mx-auto max-w-7xl">
                    <motion.div
                        className="text-center mb-16"
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Choose the plan that fits your needs. All plans include access to our AI-powered resume builder.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {[
                            {
                                name: "Free",
                                price: "$0",
                                period: "forever",
                                description: "Perfect for trying out our platform",
                                features: ["Create up to 2 resumes", "Basic templates", "PDF downloads", "AI content suggestions"],
                                cta: "Get Started",
                                highlight: false,
                            },
                            {
                                name: "Pro",
                                price: "$12",
                                period: "per month",
                                description: "Everything you need for your job search",
                                features: [
                                    "Unlimited resumes",
                                    "All premium templates",
                                    "Multiple export formats",
                                    "Advanced AI optimization",
                                    "Cover letter generator",
                                    "LinkedIn profile optimization",
                                ],
                                cta: "Get Pro",
                                highlight: true,
                            },
                            {
                                name: "Enterprise",
                                price: "$29",
                                period: "per month",
                                description: "For serious career advancement",
                                features: [
                                    "All Pro features",
                                    "Priority support",
                                    "Expert resume review",
                                    "Interview preparation",
                                    "Career coaching session",
                                    "Job application tracking",
                                ],
                                cta: "Get Enterprise",
                                highlight: false,
                            },
                        ].map((plan, index) => (
                            <motion.div
                                key={index}
                                className={`rounded-xl p-8 border ${plan.highlight
                                        ? "border-indigo-200 bg-white shadow-xl shadow-indigo-100 relative overflow-hidden"
                                        : "border-slate-200 bg-white"
                                    }`}
                                variants={itemFadeIn}
                                whileHover={{
                                    y: -10,
                                    boxShadow: plan.highlight
                                        ? "0 25px 50px -12px rgba(79, 70, 229, 0.25)"
                                        : "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                                }}
                            >
                                {plan.highlight && (
                                    <motion.div
                                        className="absolute top-0 right-0"
                                        initial={{ x: 100 }}
                                        whileInView={{ x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ type: "spring", stiffness: 100 }}
                                    >
                                        <div className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                                            MOST POPULAR
                                        </div>
                                    </motion.div>
                                )}
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                                <div className="mb-4">
                                    <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                                    <span className="text-slate-500">/{plan.period}</span>
                                </div>
                                <p className="text-slate-600 mb-6">{plan.description}</p>
                                <motion.ul
                                    className="space-y-3 mb-8"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={{
                                        hidden: { opacity: 0 },
                                        visible: {
                                            opacity: 1,
                                            transition: {
                                                staggerChildren: 0.1,
                                            },
                                        },
                                    }}
                                >
                                    {plan.features.map((feature, i) => (
                                        <motion.li
                                            key={i}
                                            className="flex items-start gap-2"
                                            variants={{
                                                hidden: { opacity: 0, x: -10 },
                                                visible: { opacity: 1, x: 0 },
                                            }}
                                        >
                                            <CheckCircle className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                                            <span className="text-slate-600">{feature}</span>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                                <motion.button
                                    className={`w-full py-3 rounded-lg font-medium ${plan.highlight
                                            ? "bg-indigo-600 text-white hover:bg-indigo-700"
                                            : "bg-slate-100 text-slate-800 hover:bg-slate-200"
                                        } transition-colors`}
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {plan.cta}
                                </motion.button>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        className="text-center mb-16"
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Find answers to common questions about our AI Resume Builder.
                        </p>
                    </motion.div>

                    <motion.div
                        className="space-y-4"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {faqItems.map((item, index) => (
                            <motion.div
                                key={index}
                                className={`border ${activeAccordion === index ? "border-indigo-200 bg-indigo-50/30" : "border-slate-200"} rounded-lg overflow-hidden`}
                                variants={itemFadeIn}
                            >
                                <motion.button
                                    className="flex justify-between items-center w-full p-4 text-left font-medium text-slate-900"
                                    onClick={() => toggleAccordion(index)}
                                    whileHover={{ backgroundColor: activeAccordion === index ? "" : "rgba(243, 244, 246, 0.7)" }}
                                >
                                    {item.question}
                                    <motion.div animate={{ rotate: activeAccordion === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                                        {activeAccordion === index ? (
                                            <ChevronUp className="w-5 h-5 text-indigo-600" />
                                        ) : (
                                            <ChevronDown className="w-5 h-5 text-slate-400" />
                                        )}
                                    </motion.div>
                                </motion.button>
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{
                                        height: activeAccordion === index ? "auto" : 0,
                                        opacity: activeAccordion === index ? 1 : 0,
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-4 pt-0 text-slate-600 border-t border-slate-100">{item.answer}</div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <motion.section
                className="py-20 px-4 sm:px-6 lg:px-8 bg-indigo-600"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <div className="container mx-auto max-w-5xl text-center">
                    <motion.h2
                        className="text-3xl sm:text-4xl font-bold text-white mb-6"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Ready to Build Your Professional Resume?
                    </motion.h2>
                    <motion.p
                        className="text-indigo-100 max-w-2xl mx-auto mb-8"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Join thousands of job seekers who have successfully landed their dream jobs using our AI Resume Builder.
                    </motion.p>
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Link
                            to="/auth/sign-up"
                            className="bg-white text-indigo-600 px-8 py-3 rounded-lg inline-flex items-center gap-2 hover:bg-indigo-50 font-medium hover:shadow-lg hover:-translate-y-1 transform transition-all"
                        >
                            Get Started for Free <ArrowRight size={18} />
                        </Link>
                        <motion.p
                            className="text-indigo-200 mt-4 text-sm"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            No credit card required
                        </motion.p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Footer */}
            <footer className="bg-slate-900 text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-4 gap-8"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <motion.div variants={itemFadeIn}>
                            <h3 className="text-white font-bold text-lg mb-4">AI Resume Builder</h3>
                            <p className="mb-4">Creating professional resumes with the power of artificial intelligence.</p>
                            <div className="flex space-x-4">
                                {["Twitter", "LinkedIn", "Facebook", "Instagram"].map((social) => (
                                    <motion.a
                                        key={social}
                                        href="#"
                                        className="text-slate-400 hover:text-white transition-colors"
                                        whileHover={{ y: -3 }}
                                    >
                                        {social[0]}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div variants={itemFadeIn}>
                            <h4 className="text-white font-bold mb-4">Product</h4>
                            <ul className="space-y-2">
                                {["Features", "Pricing", "Templates", "Examples", "Testimonials"].map((item) => (
                                    <motion.li key={item} whileHover={{ x: 3 }}>
                                        <a href="#" className="hover:text-white transition-colors">
                                            {item}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div variants={itemFadeIn}>
                            <h4 className="text-white font-bold mb-4">Resources</h4>
                            <ul className="space-y-2">
                                {["Blog", "Career Tips", "Resume Guide", "Interview Prep", "Help Center"].map((item) => (
                                    <motion.li key={item} whileHover={{ x: 3 }}>
                                        <a href="#" className="hover:text-white transition-colors">
                                            {item}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div variants={itemFadeIn}>
                            <h4 className="text-white font-bold mb-4">Company</h4>
                            <ul className="space-y-2">
                                {["About Us", "Careers", "Contact", "Privacy Policy", "Terms of Service"].map((item) => (
                                    <motion.li key={item} whileHover={{ x: 3 }}>
                                        <a href="#" className="hover:text-white transition-colors">
                                            {item}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="border-t border-slate-800 mt-12 pt-8 text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <p>© {new Date().getFullYear()} AI Resume Builder. All rights reserved.</p>
                    </motion.div>
                </div>
            </footer>
        </div>
    )
}

export default Home;