import Footer from "./Footer";
import Header from "./Header";
import Index from "../../pages/Index";

export default function AppLayout() {
    return (
        <>
            <Header />
                <Index/>
            <Footer />
        </>
    )
}