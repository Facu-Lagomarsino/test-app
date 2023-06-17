import Navbar from "../../Components/navbar/Navbar";
import { Link } from "react-router-dom";
import "./shop.css";

export default function Shop() {
    return (
        <>
            <Navbar />
            <div className="page-shop">
                <h1>Shop</h1>
                <Link to="/home" className="back">BACK HOME</Link>
            </div>
        </>
    );
};