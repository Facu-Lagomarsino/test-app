import Navbar from "../../Components/navbar/Navbar";
import { Link } from "react-router-dom";
import "./message.css";

export default function Message() {
    return (
        <>
            <Navbar />
            <div className="page-message">
                <h1>Message</h1>
                <Link to="/home" className="back">BACK HOME</Link>
            </div>
        </>
    );
};