import GlobalNavBar from "../components/GlobalNavbar";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <div>
            {/* <GlobalNavBar /> */}
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
