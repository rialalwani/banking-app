import "./customers.css";
import data from "./data";
import { Link } from "react-router-dom";
import {useState,useEffect} from "react";

function Customers({CurrentBalance,SetCurrentBalance,Message_2,SetMessage}){
    var [selectedPerson,SetSelectedPerson]=useState(null);
    useEffect(()=>{
         if(selectedPerson!==null)
        {
            var amount=prompt("Enter amount you want to transfer")
            if(amount!==null)
            {
              if(amount<=CurrentBalance){
                SetCurrentBalance((CurrentBalance-amount))
                var message="Transferred ₹"+amount+" to "+selectedPerson+"\n\n"+"Current Balance: ₹"+(CurrentBalance-amount)
                alert(message)
                const msg="Paid ₹"+amount+" to "+selectedPerson
                SetMessage([...Message_2,msg])
              }
            }
            SetSelectedPerson(null)
        }
    })
    return(
        <div className="page">
            <div className="heading"><h1>Customers</h1></div>
            <div className="container">
            {data.map(m=>{
                return(
                <div className="client">
                 <p>Name: {m.name} </p>
                 <p>UPI ID: {m.upi} </p>
                 <p>Current Balance: {m.balance}</p>
                 <button onClick={()=>{SetSelectedPerson(m.name)}}>Transfer Money</button>
                </div>)}
            )}
            </div>
        </div>
    )
}
export default Customers;
