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
export default function Home() {
    return (
        <div className='w-full min-h-max relative mx-auto px-0 py-0 max-w-[2000px]'>
            <Head>
                <title>Matthew Hernandez</title>
                <meta name='description' content='Film & Game Composer' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main className='flex w-full flex-1 min-h-[100vh] justify-center'>
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

            <footer className='flex justify-center bg-[rgb(63,10,10)] '>
                <a
                    href='https://cyberdigitalllc.com'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Created by{" "}
                    <span className={styles.logo}>
                        <h2>Cyber Digital, llc</h2>
                    </span>
                </a>
            </footer>
        </div>
    );
}
