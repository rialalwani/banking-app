import "./Transactions.css";
import { CiSearch } from "react-icons/ci";
function Transactions({Message_2}){
   return(
       <div className="history">
         <h1 className='transactions-heading'>Transactions</h1>
         <div className="searchBar">
         <input placeholder="Search or filter payments" className="search_payments" type="text"></input>
         <div className="search_icon"><CiSearch /></div>
         </div>
         <div className="Message">
          {Object.keys(Message_2).length>0?
            <div className="payment-page">
              {Message_2.map(m=>{return(
                <div className="single-payment">
                <div className="payment_message"><p>{m}</p></div>
                <div className="line_gap"></div></div>)})}
            </div>
          :
          <div className="No_payments">
            <h3>No current Transactions</h3>
            </div>
          }
         </div>
       </div>
   )
}
export default Transactions;