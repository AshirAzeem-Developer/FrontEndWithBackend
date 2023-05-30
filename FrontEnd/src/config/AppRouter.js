import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Login from "./../components/LoginSignup/Login";
// import Admindashbord from "../pages/Admin/admindashbord";
// import Studenddashbord from "../pages/Student/studenddashbord";
// import Institutedashbord from "../pages/Teacher/institutedashbord";
// import Signup from "../components/LoginSignup/Signup";
// import ProtectedRoute from "./firebase/ProtectedRoute";
import Home from "../Screens/ReduxScreens/Home";
import Login from "../Screens/ReduxScreens/Login";
import Products from "../Screens/ReduxScreens/Products";
import Cart from "../Screens/ReduxScreens/Cart";
import TestScreen from "../Screens/TestScreen";
import AdminDashboard from "../AdminDashboard";


export default function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="admindashbord/*" element={<ProtectedRoute Component={Admindashbord} />} />
          <Route path="institutedashbord/*" Component={Institutedashbord} />
          <Route path="studenddashbord/*" Component={Studenddashbord} /> */}
          <Route path="home" element={ <Home /> } />
          <Route path="admin/*" element={ <AdminDashboard /> } />
          <Route path="login" element={ <Login /> } />
          <Route path="products" element={ <Products /> } />
          <Route path="cart" element={ <Cart /> } />
          <Route path="/" element={ <TestScreen /> } />

        </Routes>
      </BrowserRouter>
    </>
  );
}
