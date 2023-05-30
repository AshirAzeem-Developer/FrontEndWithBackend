
import { Link, Outlet, Route, Routes } from "react-router-dom";
import Admindashboard from "../Screens/Dashbordscreens/admindashbord";
import TeachersDashboard from "../Screens/Dashbordscreens/teachersDashboard";
import InstituteDashbord from '../Screens/Dashbordscreens/instituteDashbord';
import { useState } from "react";




function  AdminRouter() {
  const [menuList,setMenuList] = useState([
    {
      name: "Admin Dashboard",
      route: "adminDashboard",
    },
    {
      name: "Institute Dashbord",
      route: "instituteDashbord",
    },
    {
      name: "Teachers Dashboard",
      route: "teachersDashboard",
    },
  ]);

  return (
    <>
      <nav>
      <Link to="adminDashboard">Admin Dashboard</Link>
          &nbsp; &nbsp; &nbsp;
          <Link to="instituteDashbord">Institute Dashbord</Link>
          &nbsp; &nbsp; &nbsp;
          <Link to="teachersDashboard">Teachers Dashboard</Link>
          &nbsp; &nbsp; &nbsp;
      </nav>
        <Routes>
          <Route path="adminDashboard/" element={<Admindashboard />} />
          <Route path="instituteDashbord/*" element={<InstituteDashbord />} />
          <Route path="teachersDashboard/*" element={<TeachersDashboard />} />
          <Outlet/>
          {/* <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signu />} /> */}
        </Routes>
    </>
  );
}
export default AdminRouter;