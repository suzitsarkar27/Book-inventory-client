import logo from "./logo.svg";
import "./App.css";
import Header from "./Pages/Shear/Header/Header";
import Footer from "./Pages/Shear/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Home/Login/Login";
import Home from "./Pages/Home/Home/Home";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
