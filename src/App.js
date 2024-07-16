import './App.css';
import Navbar from "./Components/navbar/navbar.jsx";
import Text from "./Pages/Homepage/text.jsx";
import Transactions from './Pages/Transactions/Transactions.jsx';
import Customers from './Pages/Customers/customers.jsx';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Profile from "./Pages/Profile/Profile.jsx";
import {useState} from "react";
function App() {
  const [CurrentBalance,SetCurrentBalance]=useState(10000);
  const [Message_2,SetMessage]=useState([]);
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
          <Route path="/" element={<Text/>}></Route>
          <Route path="/Profile/Profile.jsx" element={<Profile CurrentBalance={CurrentBalance}/>}></Route>
          <Route path="/Transactions/Transactions.jsx" element={<Transactions Message_2={Message_2}/>}></Route>
          <Route path="/Customers/customers.jsx" element={<Customers CurrentBalance={CurrentBalance}
          SetCurrentBalance={SetCurrentBalance} Message_2={Message_2} SetMessage={SetMessage}/>}></Route>
      </Routes>
    </Router>
      
  );
}
export default App;