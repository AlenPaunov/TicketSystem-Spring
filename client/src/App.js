import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import UserTickets from "./pages/UserTickets";
import ProtectedRouth from "./components/ProtectedRouth";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Main />}>
                <Route path="" element={<Home />} />
                <Route path="profile" element={<Profile />} />
                <Route path="user-tickets" element={<UserTickets />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    );
}

export default App;
