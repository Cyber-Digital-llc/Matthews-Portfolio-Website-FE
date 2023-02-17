import heroBG from "../public/heroBGcopy.jpg";
import Image from "next/image";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <div className=''>
            <div className='fixed h-full w-full z-0'>
                <Image
                    src={heroBG}
                    className='object-cover h-screen'
                    alt='image'
                />
            </div>

            {/* <GlobalNavBar /> */}
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
