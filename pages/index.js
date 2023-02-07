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
        <div className='w-[100vw] '>
            <Head>
                <title>Matthew Hernandez</title>
                <meta name='description' content='Film & Game Composer' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main className=''>
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

            <footer className='flex w-[100vw] justify-center align-center bg-[rgb(63,10,10)] '>
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
