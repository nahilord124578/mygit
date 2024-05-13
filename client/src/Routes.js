import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Dashboard } from './Dashboard';
// import Login from './Login';

import HomePage from "./main-page/Home-page.js";


// import Signup from './Signup';
import Signup from "./Login/Authentication/Signup";
import Login from "./Login/Authentication/Login";
import ForgotPassword from "./Login/Authentication/ForgotPassword";
import VerifyOtp from "./Login/Authentication/VeifyOtp";
import ChangePassword from "./Login/Authentication/ChangePassword";
import Home from "./Login/Temp/SampleHome";
import PatientDashboard from "./Login/Temp/SamplePatientDashboard";
import DoctorDashboard from "./Login/Temp/SampleDoctorDashboard";
// import Loginapp from './Login/Login/Loginapp.js';
// import Signup from './Login/Signup.js';

import Feedback from "./PatientPage/Feedback";
import Patient from "./PatientPage/PatientPage";

import AppMash from "./PatientPage/AppMash";
import New from "./PatientPage/New";
import Reschedule from "./PatientPage/Reschedule";

import Cancel from "./PatientPage/Cancel";
import MedicalRecord from "./PatientPage/MedicalRecord.js";
import Medical from "./PatientPage/medication/Medication.jsx";
import Profile from "./PatientPage/Profile";

import MedicationTracking from "./PatientPage/MedicationTracking.js";

//Docctor Routes

import PatientInformation from "./DoctorPage/App1.js";
import DoctorPage from "./DoctorPage/DoctorPage.js";
import LaboratoryRequest from "./DoctorPage/LabTestRequestPage.js";
import ImagingRequest from "./DoctorPage/MedicalImagingRequest";
import Campaign from "./Manager/Campaign";
import Content from "./Manager/Content";
import Employees from "./Manager/Employees.jsx";
import Finance from "./Manager/Finance";
import Manager from "./Manager/Home.jsx";
import KPIPage from "./Manager/KPI.jsx";
import NotificationCenter from "./Manager/NotificationCenter";
import Notifications from "./Manager/Notifications.jsx";
import PatientAdmission from "./Manager/PatientAdmission";
import Manager_Feedback from "./Manager/Feedback.jsx";
import Resorse from "./Manager/Resorse";
import Staffoverveiw from "./Manager/Staffoverveiw";
import Upcome from "./Manager/Upcome.jsx";
import Prescription from "./DoctorPage/PrescriptionFormPage.js";
import ReferralForm from "./DoctorPage/ReferralForm.js";
//LabTechincian

import LabTechnician from "./LabTech/LabTechnician.js";
import ResultReporting from "./LabTech/ResultReporting.js";

// Manager

import Acount from "./Manager/Acount.jsx";

// Admin
import EmployeecontextProvider from "./Componenet/EmployeeMain/Context/Employeecontext.js";
import Employee from "./pages/employee";
// import FinancePage from './pages/FinancePage.js';
<<<<<<< HEAD
import HomeAdmin from "./pages/Home";
import Hr from "./pages/Hr.js";
import JobApplicationsList from "./Componenet/hr/JobApplicantView.js";
=======
import HomeAdmin from './pages/Home';
import Hr from './pages/Hr.js';

// pharmacist Routes start
import HomeToDo from './Pharmacy/HomeToDo.jsx';
import Medicine from './Pharmacy/Medicine.jsx';
import ProfilePharma from './Pharmacy/ProfilePharma.jsx';
import PharmaHome from './Pharmacy/PharmaHome.jsx';
// end



>>>>>>> 3b398118144b51150ec294deb8d7688b9144192c
import EmployeeTable from "../src/Componenet/Finance/EmployeeTable.jsx";
import Expense from "../src/Componenet/Finance/Expense";
import HospitalService from "../src/Componenet/Finance/HospitalService";
import PaidSalary from "../src/Componenet/Finance/PaidSalary";
import PayExpense from "../src/Componenet/Finance/PayExpense";
import Revenue from "../src/Componenet/Finance/Revenue";
import SoldProduct from "../src/Componenet/Finance/SoldProduct";
import FireEmployee from "../src/Componenet/hr/Fire.js";
import ForPhoto from "../src/Componenet/hr/ForPhoto.js";
import HireForm from "../src/Componenet/hr/HireForm.js";
import AnnounceVacancy from "../src/Componenet/hr/VacancyForm.js";
import VacancyPage from "../src/Componenet/hr/VacancyPage.js";
import EmployeeDetail from "./Componenet/EmployeeMain/EmployeeDetail/EmployeDetail.js";
import FinancePage from "./pages/FinancePage.js";

import ContentA from "./content/Content.js";
import ContentArchive from "./content/Component/ContentArchive.js";
import Radiologist from "./Radiology/Home.js";
import Reception from "./Reception/App.js";
function Routess() {
  return (
    <EmployeecontextProvider>
      <BrowserRouter>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/loginapp" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/verifyOtp" element={<VerifyOtp />} />
          <Route path="/changePassword" element={<ChangePassword />} />
          <Route path="/dashboard/patient" element={<PatientDashboard />} />
          <Route path="/dashboard/doctor" element={<DoctorDashboard />} />
          <Route path="/" element={<HomePage />} />

          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/patient" element={<Patient />} />
          <Route path="manager/feedback" element={<Feedback></Feedback>} />
          <Route path="/make-appointment" element={<AppMash></AppMash>} />
          <Route path="/bookappointment/new" element={<New></New>} />
          <Route path="/bookappointment/cancel" element={<Cancel></Cancel>} />
          <Route
            path="/bookappointment/reschedule"
            element={<Reschedule></Reschedule>}
          />
          <Route path="/profile" element={<Profile></Profile>} />
          <Route path="/medical-info" element={<Medical></Medical>} />
          <Route path="/medical" element={<MedicalRecord></MedicalRecord>} />
          <Route
            path="/medication-tracking"
            element={<MedicationTracking></MedicationTracking>}
          />
          <Route path="/doctor" element={<DoctorPage></DoctorPage>} />

          <Route
            path="/App1"
            element={<PatientInformation></PatientInformation>}
          />
          <Route
            path="/LabTestRequestPage"
            element={<LaboratoryRequest></LaboratoryRequest>}
          />
          <Route path="/Medical" element={<ImagingRequest></ImagingRequest>} />
          <Route
            path="/PrescriptionFormPage"
            element={<Prescription></Prescription>}
          />
          <Route path="/ReferralForm" element={<ReferralForm></ReferralForm>} />
          <Route path="/labtechnician">
            <Route index element={<LabTechnician />} />
            <Route path="news" element={<h1>news</h1>} />
            <Route path="result" element={<ResultReporting />} />
          </Route>
          <Route path="/patient-addmision" element={<PatientAdmission />} />
          <Route path="/manager-feedback" element={<Manager_Feedback />} />          
          <Route path="/staff" element={<Staffoverveiw />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/content" element={<Content />} />
          <Route path="/content-archive" element={<ContentArchive />} />
          <Route path="/campaign" element={<Campaign />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/account" element={<Acount />} />
          <Route path="/patient" element={<PatientAdmission />} />
          <Route path="/staff" element={<Staffoverveiw />} />
          <Route path="/kpi" element={<KPIPage />} />
          <Route path="/events" element={<Upcome />} />
          <Route
            path="/JobApplicationsList"
            element={<JobApplicationsList />}
          />
          <Route path="/res" element={<Resorse />} />
          <Route path="/not" element={<NotificationCenter />} />

<<<<<<< HEAD
          <Route path="/manager" element={<Manager></Manager>}></Route>
          <Route path="/employees" element={<Employees />} />
=======
                    <Route path="/App1" element={<PatientInformation></PatientInformation>} />
                    <Route path="/LabTestRequestPage" element={<LaboratoryRequest></LaboratoryRequest>} />
                    <Route path="/Medicalimagingrequest" element={<ImagingRequest></ImagingRequest>} />
                    <Route path="/PrescriptionFormPage" element={<Prescription></Prescription>} />
                    <Route path="/ReferralForm" element={<ReferralForm></ReferralForm> } />
                    
                    <Route path="/patient-addmision" element={<PatientAdmission />} />
                    <Route path="/staff" element={<Staffoverveiw />} />
                    <Route path="/notifications" element={<Notifications />} />
                    <Route path="/employees" element={<Employees />} />
                    <Route path="/finance" element={<Finance />} />
                    <Route path="/content" element={<Content />} />
                    <Route path="/campaign" element={<Campaign />} />
                    <Route path="/feedback" element={<Feedback />} />
                    <Route path="/account" element={<Acount />} />
                    <Route path="/patient" element={<PatientAdmission />} />
                    <Route path="/staff" element={<Staffoverveiw />} />
                    <Route path="/kpi" element={<KPIPage />} />
                    <Route path="/events" element={<Upcome />} />
                    <Route path="/res" element={<Resorse />} />
                    <Route path="/not" element={<NotificationCenter />} />
>>>>>>> 3b398118144b51150ec294deb8d7688b9144192c

          <Route path="/admin" element={<HomeAdmin />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/Financee" element={<FinancePage />} />
          <Route path="/HRM" element={<Hr />}></Route>
          <Route path="/Employee" element={<Employee />}></Route>
          <Route path="/Employee">
            <Route path=":EmployeeId" element={<EmployeeDetail />}></Route>
          </Route>
          <Route path="/salary-payment" element={<EmployeeTable />} />
          <Route path="/sold-products" element={<SoldProduct />} />
          <Route path="/pay-expense" element={<PayExpense />} />

<<<<<<< HEAD
          <Route path="/hospitalservice" element={<HospitalService />} />
          <Route path="/paidsalary" element={<PaidSalary />} />
          <Route path="/expense" element={<Expense />} />
          <Route path="/revenue" element={<Revenue />} />
          <Route path="/photo" element={<ForPhoto />} />
          <Route path="/fireEmployee" element={<FireEmployee />} />
          <Route path="/hireForm" element={<HireForm />} />
          <Route path="/announceVacancy" element={<AnnounceVacancy />} />
          <Route path="/VacancyPage" element={<VacancyPage />} />
          <Route path="/receptionist" element={<Reception></Reception>} />
          <Route
            path="/content-creatorModule"
            element={<ContentA></ContentA>}
          />
          <Route path="/radiologist" element={<Radiologist></Radiologist>} />
        </Routes>
      </BrowserRouter>
    </EmployeecontextProvider>
  );
}
export default Routess;
=======


                    <Route path="/manager" element={<Manager></Manager>}></Route>
                    <Route path="/employees" element={<Employees />} />






                    <Route path="/admin" element={<HomeAdmin />} />

                    <Route path="/profile" element={<Profile />} />
                    <Route path="/Financee" element={<FinancePage />} />
                    <Route path="/HRM" element={<Hr />}></Route>
                    <Route path="/Employee" element={<Employee />}></Route>
                    <Route path="/Employee">
                        <Route path=":EmployeeId" element={<EmployeeDetail />}>

                        </Route>
                    </Route>
                    <Route path="/salary-payment" element={<EmployeeTable />} />
                    <Route path="/sold-products" element={<SoldProduct />} />
                    <Route path="/pay-expense" element={<PayExpense />} />

                    <Route path="/hospitalservice" element={<HospitalService />} />
                    <Route path="/overview" element={<Overview />} />
                    <Route path="/expense" element={<Expense />} />
                    <Route path="/revenue" element={<Revenue />} />
                    <Route path="/photo" element={<ForPhoto />} />
                    <Route path="/fireEmployee" element={<FireEmployee />} />
                    <Route path="/hireForm" element={<HireForm />} />
                    <Route path="/announceVacancy" element={<AnnounceVacancy />} />






                    <Route path="/receptionist" element={<Reception></Reception>} />
                    <Route path="/content-creatorModule" element={<ContentA></ContentA>} />
                    <Route path="/radiologist" element={<Radiologist></Radiologist>} />
                    <Route path="/LabTechnician" element={<ResultReporting></ResultReporting>} />
                    <Route path="/ResultReporting" element={<ResultReporting></ResultReporting>} />

                    {/* pharmacist paths */}
                   <Route path="/pharmacy" element={<PharmaHome />} />
                   <Route path="/HomeToDo" element={<HomeToDo />} />
                   <Route path="/Medicine" element={<Medicine  />} />
                   <Route path="/ProfilePharma" element={<ProfilePharma />} />
                </Routes>
            </BrowserRouter>
        </EmployeecontextProvider>
    );
};
export default Routess
>>>>>>> 3b398118144b51150ec294deb8d7688b9144192c
