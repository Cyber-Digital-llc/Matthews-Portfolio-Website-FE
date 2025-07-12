import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import Credits from "../components/Credits";
import Music from "../components/Music";
import GlobalNavBar from "../components/GlobalNavbar";
import ContactForm from "../components/ContactForm";
import MobileNav from "../components/MobileNav";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function Home() {
    return (
        <div className="relative min-h-screen bg-black overflow-x-hidden">
            <Head>
                <title>Matthew Hernandez - Film & Game Composer</title>
                <meta name="description" content="Matthew Hernandez is a promising young composer from Los Angeles, specializing in film and game music composition." />
                <meta name="keywords" content="composer, film music, game music, Matthew Hernandez, Los Angeles" />
                <meta name="author" content="Matthew Hernandez" />
                <meta property="og:title" content="Matthew Hernandez - Film & Game Composer" />
                <meta property="og:description" content="Crafting immersive musical experiences for visual storytelling" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </Head>

            {/* Navigation */}
            <MobileNav />
            {/* <GlobalNavBar /> */}

            {/* Main Content */}
            <main className="relative">
                <Header />
                <About />
                <Credits />
                <Music />
                <ContactForm />
            </main>

            {/* Scroll to top button */}
            <ScrollToTopButton />

            {/* Premium Footer */}
            <footer className="relative bg-gradient-to-r from-burgundy-950 to-black py-8 border-t border-burgundy-950/30">
                <div className="max-w-6xl mx-auto px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-center md:text-left">
                            <p className="font-body text-cream/70 text-sm">
                                © 2025 Matthew Hernandez. All rights reserved.
                            </p>
                        </div>
                        
                        <div className="flex items-center space-x-6">
                            <a
                                href="https://joethernandez.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center space-x-2 text-cream/70 hover:text-cream transition-colors duration-300"
                            >
                                <span className="font-body text-sm">Created by</span>
                                <span className="font-body font-medium text-cream group-hover:text-burgundy-950 transition-colors duration-300">
                                    Cyber Digital
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
