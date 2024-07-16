import "./text.css";
import image from "./logo.jpeg";
import {Link} from "react-router-dom";
function Text(){
    return(
       <div className="content">
        <h1>Welcome to<br/> Humara National Bank</h1>
         <img src={image} alt="HNB logo"></img><br/><br/>
         <div className="text1">
         <h2>Hasslefree Transactions</h2>
         <h2>Fast Payments</h2>
         <h2>Safe and Protected Payments</h2>
         <p style={{marginTop:"4rem"}}>HNB is a banking website where you can make easy, protected and fast payments.</p>
         <p>In HNB, you can track your transactions, current balance and transfer money to our authorized clients.</p>
         </div>
         <div className="btn">
           <p>Click to see all the customers.</p>
          <Link to="../Customers/customers.jsx"><button>View All Customers</button></Link>
          </div>
       </div>
    )
}
export default Text;