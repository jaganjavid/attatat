import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Home from "./pages/Home";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AuthProvider from "./context/auth";
import { AuthContext } from "./context/auth";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="/auth/register" element={<Register/>}/>
          <Route path="/auth/login" element={<Login/>}/>
      </Routes>
      <ToastContainer/>
      </BrowserRouter>
     </AuthProvider>
  )
}

export default App;
