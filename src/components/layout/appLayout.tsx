import Footer from "./Footer";
import Header from "./Header";
import Index from "../../pages";

export default function AppLayout() {
    return (
        <>
            <Header />
                <Index/>
            <Footer />
        </>
    )
}