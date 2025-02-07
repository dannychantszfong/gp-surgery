import "./styles.scss";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import AppointmentTable from "./AppointmentTable";
import Confirmation from "./Confirmation";
import Footer from "./footer";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Start from "./Start";
import Appointment from "./Appointment";
import AppointmentBooking from "./AppointmentBooking";


import { useContext } from "react";
import { UserContext } from "./UserContext";
import Header from "./Header";
import HeaderPatient from "./HeaderPatient";
import HeaderDoctor from "./HeaderDoctor";
import HeaderAdmin from "./HeaderAdmin";
import ProfilePatient from "./ProfilePatient";
import ProfileDoctor from "./ProfileDoctor";
import ProfileAdmin from "./ProfileAdmin";
import MedicalRecords from "./MedicalRecords";

function App() {
  const { isLoggedIn, userType, accountNumber, login, logout } =
    useContext(UserContext);

  return (
    <Router>
      {/* {loggedIn ? <Header2 /> : <Header />}
      <Header />
      <main className="govuk-width-container govuk-!-margin-top-7 govuk-!-margin-bottom-7">
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="confirmation" element={<Confirmation />} />
          <Route path="home" element={<Home />} />
          <Route path="booking" element={<AppointmentBooking />} />
          <Route path="changepatientrecord" element={<ChangeMedicalRecord />} />
          <Route path="viewpatientrecords" element={<ViewPatientRecords />} />

          <Route path="patient-appointment" element={<AppointmentTable />} />
          <Route path="admin-appointment" element={<Appointment />} />
        </Routes>
      </main> */}

      {!isLoggedIn ? (
        <Header />
      ) : userType === "Patient" ? (
        <HeaderPatient />
      ) : userType === "Doctor" ? (
        <HeaderDoctor />
      ) : userType === "Admin" ? (
        <HeaderAdmin />
      ) : (
        <Header />
      )}
      <main className="govuk-width-container govuk-!-margin-top-7 govuk-!-margin-bottom-7">
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="confirmation" element={<Confirmation />} />
          <Route path="home" element={<Home />} />
          {isLoggedIn && userType === "Patient" && (
            <>
              <Route
                path="patient-appointment"
                element={<AppointmentTable />}
              />
              <Route path="booking" element={<AppointmentBooking />} />
              <Route path="patient-profile" element={<ProfilePatient />} />
              <Route
                path="patient-medical-records"
                element={<MedicalRecords />}
              />
            </>
          )}
          {isLoggedIn && userType === "Doctor" && (
            <>
              {/* <Route
                path="patient-appointment"
                element={<AppointmentTable />}
              /> */}
              {/* <Route path="booking" element={<AppointmentBooking />} /> */}
              <Route path="doctor-profile" element={<ProfileDoctor />} />
            </>
          )}
          {isLoggedIn && userType === "Admin" && (
            <>
              <Route path="admin-appointment" element={<Appointment />} />
              <Route path="admin-profile" element={<ProfileAdmin />} />
            </>
          )}

          <Route
            path="*"
            element={<Navigate to={isLoggedIn ? "/home" : "/"} />}
          />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
