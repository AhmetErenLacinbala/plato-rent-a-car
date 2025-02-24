
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage.page";
import Nav from "@components/navbar.component";
import Contact from "@components/contact.component";
import Cars from "./pages/cars.page";
import CookieConsent from "@components/consent.component";
import PrivacyPolicy from "./pages/privacy";

const CommonRoute = () => {
    return (
        <>
            <Nav />
            <CookieConsent />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/cars" element={<Cars />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
            </Routes>
            <Contact />
        </>
    );
};

export default CommonRoute;
