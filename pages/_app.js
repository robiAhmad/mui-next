import "../styles/globals.css";
import AppBar from "@/commons/appBar";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <AppBar />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
