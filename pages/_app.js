import GlobalNavBar from "../components/GlobalNavbar";
import Image from "next/image";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <div className='relative'>
            <div className='absolute  w-screen h-screen overflow-clip'>
                <div className='absolute  h-full '>
                    <img
                        src={"/heroBGcopy.jpg"}
                        className='object-none object-center h-full fixed'
                        // fill
                        alt='image'
                    />
                </div>
            </div>
            {/* <GlobalNavBar /> */}
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
