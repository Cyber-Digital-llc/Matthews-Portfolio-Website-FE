import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import Credits from "../components/Credits";
import Music from "../components/Music";
// import Contact from "../components/Contact";
import GlobalNavBar from "../components/GlobalNavbar";
import ContactForm from "../components/ContactForm";
import MobileNav from "../components/MobileNav";
import ScrollToTopButton from "../components/ScrollToTopButton";
import heroBG from "../public/heroBGcopy.jpg";

// relative px-10 bg-no-repeat bg-fit bg-fixed bg-cover h-auto lg:bg-cover 2xl:bg-cover bg-center bg-headerBGI md:bg-fixed w-[100vw] mx-auto flex items-center justify-center flex-col scrollbar-hide  overflow-y-auto overflow-x-hidden md:overflow-x-visible md:overflow-y-visible

export default function Home() {
    return (
        <div className=' relative px-10 bg-no-repeat bg-fit bg-fixed bg-cover h-auto lg:bg-cover 2xl:bg-cover bg-center md:bg-fixed w-[100vw] mx-auto flex items-center justify-center flex-col scrollbar-hide  overflow-y-auto overflow-x-hidden md:overflow-x-visible md:overflow-y-visible'>
            {/* <div className='static z-20'> */}
            <Head>
                <title>Matthew Hernandez</title>
                <meta name='description' content='Film & Game Composer' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main className='relative z-[2]'>
                <div className=''>
                    <MobileNav />
                    {/* <GlobalNavBar /> */}
                    <Header />
                    <About />
                    <Credits />
                    <Music />
                    {/* <Contact /> */}
                    <ContactForm />
                </div>
            </main>
            <ScrollToTopButton />
            <footer className='full flex items-center justify-center align-center bg-[rgb(63,10,10)] '>
                <a
                    href='https://cyberdigitalllc.com'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Created by{" "}
                    <div className='flex'>
                        <h2 className='flex flex-row'>Cyber Digital, llc</h2>
                    </div>
                </a>
            </footer>
            {/* </div> */}
        </div>
    );
}
