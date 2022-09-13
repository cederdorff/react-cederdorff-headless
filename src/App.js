import "./styles.css";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ScrollToTopBtn from "./components/ScollToTopBtn";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
            <ScrollToTopBtn />
        </>
    );
}

export default App;
