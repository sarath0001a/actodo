import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import { useState } from "react";



 export default function App() {

    const [user, setuser] = useState(
        [
            {
                username: "sarath",
                password: "123" 
            }
        ]
    )

    return (
        <>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login user={user} setuser={setuser} />}></Route>
                    <Route path="/signup" element={<Signup user={user} setuser={setuser} />}></Route>
                    <Route path="/landing" element={<Landing />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

