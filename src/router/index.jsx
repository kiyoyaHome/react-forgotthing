import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "../components/HomeScreen";

const Rooter = () => {
    retrun(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
            </Routes>
        </BrowserRouter>
    )
}