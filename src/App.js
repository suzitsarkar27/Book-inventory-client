import logo from "./logo.svg";
import "./App.css";
import Header from "./Pages/Shear/Header/Header";
import Footer from "./Pages/Shear/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Home/Login/Login";
import Home from "./Pages/Home/Home/Home";
import SingUp from "./Pages/Home/SingUp/SingUp";
import RequriteAuth from "./Pages/RequrieAuth/RequriteAuth";
import ManageItems from "./Pages/ManageItems/ManageItems";
import AddItems from "./Pages/AddItems/AddItems";
import MyItems from "./Pages/MyItems/MyItems";
import Manage from "./Pages/Home/Manage/Manage";
import NotFund from "./Pages/Home/NotFound/NotFund";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/product/:productId" element={<Manage></Manage>}></Route>
        <Route
          path="/manageitems"
          element={
            <RequriteAuth>
              <ManageItems></ManageItems>
            </RequriteAuth>
          }
        ></Route>
        <Route
          path="additems"
          element={
            <RequriteAuth>
              <AddItems></AddItems>
            </RequriteAuth>
          }
        ></Route>
        <Route
          path="myitems"
          element={
            <RequriteAuth>
              <MyItems></MyItems>
            </RequriteAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/singup" element={<SingUp></SingUp>}></Route>
        <Route path="*" element={<NotFund></NotFund>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
