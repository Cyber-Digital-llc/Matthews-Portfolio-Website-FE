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

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Matthew Hernandez</title>
                <meta name='description' content='Film & Game Composer' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main className='flex flex-1 min-h-[100vh] justify-center'>
                <div className=''>
                    <GlobalNavBar />
                    <Header />
                    <About />
                    <Credits />
                    <Music />
                    {/* <Contact /> */}
                    <ContactForm />
                </div>
            </main>

            <footer className='flex justify-center bg-red-900'>
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
