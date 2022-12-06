import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import Credits from "../components/Credits";
import Music from "../components/Music";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";

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
                    <Navbar />
                    <Header />
                    <About />
                    <Credits />
                    <Music />
                    <Contact />
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
                        <h2>CYBER DIGITAL, llc</h2>
                    </span>
                </a>
            </footer>
        </div>
    );
}
