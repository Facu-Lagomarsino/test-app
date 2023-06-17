import Navbar from "../../Components/navbar/Navbar";
import { Link } from "react-router-dom";
import "./settings.css";

export default function Settings() {
    return (
        <>
            <Navbar />
            <div className="page-settings">
                <h1>Settings</h1>
                <Link to="/home" className="back">BACK HOME</Link>
            </div>
        </>
    );
};
