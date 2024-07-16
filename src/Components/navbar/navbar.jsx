import "./navbar.css";
import logo from "./logo.jpeg";
import {Link} from "react-router-dom";
import SideBar from "../../Pages/sideBar/sideBar";
import {useState} from "react";
function Navbar() {
    const [ShowSideBar,SetShowSideBar]=useState(false);
    return(
        <div className="nav">
            <div className="logo">
                <img src={logo} alt="HNB logo"></img>
            </div>
            <nav className="nav1">
                <ul>
                    <li>
                       <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="./Transactions/Transactions.jsx">Transactions</Link>
                    </li>
                    <li>
                        <Link to="./Profile/Profile.jsx">Profile</Link>
                    </li>
                </ul>
            </nav>
            <div className="settings" onClick={e=>SetShowSideBar(true)}>
                <div className="black_lines"></div>
                <div className="black_lines"></div>
                <div className="black_lines"></div>
            </div>
            <div>
            {ShowSideBar&&
                  <SideBar SetShowSideBar={SetShowSideBar}/>
            }
            </div>
        </div>
    )
}
export default Navbar;