
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
import PreSanctionList from "./comps/PostSanction/PreSanctionList ";
import SchemeOpeningBalance from "./comps/Finance/SchemeOpeningBalance";
import SchemeMoneyReceived from "./comps/Finance/SchemeMoneyReceived";
import SchemeFinancialPosition from "./comps/Finance/SchemeFinancialPosition";
import ProjectOpeningBalance from "./comps/Finance/ProjectOpeningbalance";
import ProjectFinancialPosition from "./comps/Finance/ProjectFinancialPosition";
import AllocationAndExpenditure from "./comps/Finance/AllocationAndExpenditure";
import BudgetProvision from "./comps/Finance/BudgetProvision";
import FinanceReport from "./comps/Finance/FinanceReport";
import ProjectFundAllocation from "./comps/Finance/ProjectFundAllocation";
import Invoice from "./comps/Others/Invoice";
import Circular from "./comps/Others/Circular";
import Attendance from "./comps/Others/Attendance";
import Issue from "./comps/Others/Issue";
import Demand from "./comps/Others/demand";
import Format from "./comps/Others/Format";
import SOR from "./comps/Setup/Sor";
import NonSOR from "./comps/Setup/NonSor";
import MasterData from "./comps/Setup/MasterData";
import Contractor from "./comps/Others/Contractor";
import Architect from "./comps/Others/Architect";
import Supplier from "./comps/Others/Supplier";
import GanttChart from "./comps/Others/Ganttchart";
import Report from "./comps/Others/Report";
import Municipality from "./comps/MunicipalCorp/Municipality";
import WaterBoard from "./comps/MunicipalCorp/WaterBoard";
import TownPanchayat from "./comps/MunicipalCorp/TownPanchayat";



 function App() {
  return (
    <Router basename="/tafidco">
    <Routes>
      <Route path="/login" element={<SignIn />} />
      <Route path="/navs" element={<VendorMaster />} />
      <Route path="/fileupload" element={<FileUpload />} />
      <Route path="/filelist" element={<FileList />} />
      <Route path="/municipalcorp" element={<MunicipalCorp />} />
      <Route path="/municipality" element={<Municipality />} />
      <Route path="/townpanchayat" element={<TownPanchayat />} />
      <Route path="/waterboard" element={<WaterBoard />} />

      <Route path="/vendormaster" element={<VendorMaster />} />
      <Route path="/presanction" element={<PreSanctionList />} />
      <Route path="/projects" element={<ProjectList />} />
      <Route path="/financialprogress" element={<FinancialProgress />} />
      <Route path="/projectsanction" element={<ProjectSanction />} />
      <Route path="/projectupdation" element={<ProjectUpdation />} />
      <Route path="/financialprogresslist" element={<FinancialProgressList />} />
      <Route path="/users" element={<Users />} />

      <Route path="/schemeopeningbalance" element={<SchemeOpeningBalance />} />
      <Route path="/schememoneyreceived" element={<SchemeMoneyReceived />} />
      <Route path="/schemefinancialposition" element={<SchemeFinancialPosition />} />
      <Route path="/projectopeningbalance" element={<ProjectOpeningBalance />} />
      <Route path="/projectfundallocation" element={<ProjectFundAllocation />} />
      <Route path="/projectfinancialposition" element={<ProjectFinancialPosition />} />
      <Route path="/allocationandexpenditure" element={<AllocationAndExpenditure />} />
      <Route path="/budgetprovision" element={<BudgetProvision />} />
      <Route path="/financereport" element={<FinanceReport />} />
      <Route path="/invoice" element={<Invoice />} />
      <Route path="/demand" element={<Demand />} />
      <Route path="/issue" element={<Issue />} />
      <Route path="/attendance" element={<Attendance />} />
      <Route path="/circular" element={<Circular />} />
      <Route path="/format" element={<Format />} />
      <Route path="/report" element={<Report />} />
      <Route path="/sor" element={<SOR />} />
      <Route path="/nonsor" element={<NonSOR />} />
      <Route path="/masterdata" element={<MasterData />} />
      <Route path="/contractor" element={<Contractor />} />
      <Route path="/architect" element={<Architect />} />
      <Route path="/supplier" element={<Supplier />} />
      <Route path="/ganttchart" element={<GanttChart />} />

      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
  );
}
export default App;



