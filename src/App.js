import logo from "./logo.svg";
import "./App.css";
import { Jobs } from "./components/Jobs";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { DashBoard } from "./components/DashBoard";
import { Admin } from "./components/Admin";
import { Login } from "./components/Login";
import { Home } from "./components/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<DashBoard />}></Route>
        <Route path="/jobs" element={<Jobs />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>
    </div>
  );
}

export default App;
