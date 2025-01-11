
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage.page";
import Nav from "@components/navbar.component";
import Contact from "@components/contact.component";
import Cars from "./pages/cars.page";

const CommonRoute = () => {
    return (
        <>
            <Nav />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/cars" element={<Cars />} />
            </Routes>
            <Contact />
        </>
    );
};

export default CommonRoute;
