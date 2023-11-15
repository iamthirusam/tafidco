
import Sign from "./comps/signin";
import Home from "./comps/Home";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import VendorMaster from "./comps/VendorMaster";
import Sidebar from "./comps/navContainer";
import SignIn from "./comps/signin";
import FileList from "./comps/Administrative/FileList";
import FileUpload from "./comps/Administrative/FileUpload";
import MunicipalCorp from "./comps/MunicipalCorp/MunicipalCorporation/MunicipalCorp";
import ProjectUpdation from "./comps/PhysicalProgress/ProjectUpdation";
import ProjectList from "./comps/PostSanction/ProjectList"
import ProjectSanction from "./comps/PostSanction/ProjectSanction";
import FinancialProgressList from "./comps/FinancialProgress/FinancialProgressList";
import FinancialProgress from "./comps/FinancialProgress/FinancialProgress";
import Users from "./comps/Users/Users";



 function App() {
  return (
    <Router basename="/tufidco">
    <Routes>
      <Route path="/login" element={<SignIn />} />
      <Route path="/navs" element={<VendorMaster />} />
      <Route path="/fileupload" element={<FileUpload />} />
      <Route path="/filelist" element={<FileList />} />
      <Route path="/municipalcorp" element={<MunicipalCorp />} />
      <Route path="/vendormaster" element={<VendorMaster />} />
      <Route path="/presanction" element={<ProjectList />} />
      <Route path="/projects" element={<ProjectList />} />
      <Route path="/financialprogress" element={<FinancialProgress />} />
      <Route path="/projectsanction" element={<ProjectSanction />} />
      <Route path="/projectupdation" element={<ProjectUpdation />} />
      <Route path="/financialprogresslist" element={<FinancialProgressList />} />
      <Route path="/users" element={<Users />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
  );
}
export default App;



