
import Sign from "./comps/signin";
import Home from "./comps/Home";
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import VendorMaster from "./comps/VendorMaster";
import Sidebar from "./comps/navContainer";
import SignIn from "./comps/signin";

export default function App() {
  return (
    <BrowserRouter>
      <SignIn/>
     <Routes>
        <Route  path="/" element={<Home />}/>
        <Route path="/vendorMaster" element={<VendorMaster />} />
      </Routes>
    </BrowserRouter>
  );
}




