import Navbar from "../../Components/navbar/Navbar";
import { Link } from "react-router-dom";
import "./notification.css";

export default function Notification() {
    return (
        <>
            <Navbar />
            <div className="page-notification">
                <h1>Notification</h1>
                <Link to="/home" className="back">BACK HOME</Link>
            </div>
        </>
    );
};