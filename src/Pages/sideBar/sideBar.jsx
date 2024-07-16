import {Link} from "react-router-dom";
import "./sideBar.css";
import { CiHome } from "react-icons/ci";
import { GrTransaction } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
function SideBar({SetShowSideBar}){
    return(
        <div className="SideBarContainer" onClick={e=>SetShowSideBar(false)}>
            <div className="SideBarContent">
            <ul>
                    <li>
                       <CiHome size={24} style={{marginTop:"1.6rem"}} className="sideBar-logo"/>
                       <Link to="/" style={{marginTop:"1.6rem"}}>Home</Link>
                    </li>
                    <li>
                        <GrTransaction size={24} className="sideBar-logo"/>
                        <Link to="./Transactions/Transactions.jsx">Transactions</Link>
                    </li>
                    <li>
                        <CgProfile size={24} className="sideBar-logo"/>
                        <Link to="./Profile/Profile.jsx">Profile</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default SideBar;