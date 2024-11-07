import Number from "./screen/Number/number.jsx"
import AccType from"./screen/AccountType/accountTypee.jsx"
import Verf from "./screen/verfication/verfication.jsx"
import Info from "./screen/info/info.jsx"
import { Routes, Route, BrowserRouter } from "react-router-dom";
function App() {


  return (
      <div>
 <BrowserRouter>
                
          <Routes>
                <Route path="/" element={<AccType/>} />
                <Route path="/phoneNumber" element={<Number/>} />
                <Route path="/verfication" element={<Verf/>} />
                <Route path="/information" element={<Info/>} />
            </Routes>
            </BrowserRouter>


      </div>
     
  )
}

export default App
