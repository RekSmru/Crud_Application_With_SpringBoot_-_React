import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useState} from "react";
import HopeSteps from "./components/HopeSteps";
import SignIn from "./components/SignIn";
// import Courses from "./components/Courses";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* Home Page */}
                    <Route path="/" element={<HopeSteps />} />

                    {/* Sign In Page */}
                    <Route path="/signin" element={<SignIn />} />

                    {/* <Route path="/courses" element={<Courses />} /> */}
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
