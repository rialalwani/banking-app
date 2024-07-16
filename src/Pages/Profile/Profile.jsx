import "./Profile.css";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdCurrencyRupee } from "react-icons/md";
function Profile({CurrentBalance})
{
    return(
        <div className="profile">
        <div className="details">
            <IoPersonCircleOutline size={35} className="person-logo"/>
            <p>Name:Ria Lalwani</p>
            <p>Gmail-Id: rialalwani2003@gmail.com</p>
            <p>UPI-ID: rialalwani20@oksbi.com</p>
            <p>Current Balance:<MdCurrencyRupee className="rupee-logo"/>{CurrentBalance}</p>
        </div>
        </div>
    )
}
export default Profile;