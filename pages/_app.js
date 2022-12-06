import Header from "../components/Header";
import GlobalNavBar from "../components/GlobalNavbar";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <div>
            {/* <Navbar /> */}
            {/* <GlobalNavBar /> */}
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
