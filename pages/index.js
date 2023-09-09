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
            <footer className='w-[100vw] flex items-center justify-center align-center bg-[rgb(63,10,10)] '>
                <div className='flex flex-row justify-center items-center'>
                    <a
                        className='flex flex-row justify-center items-center text-[#f5f5f5] text-[.9rem] font-bold hover:text-[#f5f5f5]'
                        href='https://joethernandez.com'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <span className='font-light text-sm'>
                            Created by&nbsp;{" "}
                        </span>
                        <div className='flex'>
                            <h2 className='flex flex-row'>Cyber Digital</h2>
                        </div>
                    </a>
                </div>
            </footer>
            {/* </div> */}
        </div>
    );
}
