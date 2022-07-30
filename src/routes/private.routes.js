import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from "../modules/home/home";
import Login from "../modules/login/Login";
import Register from "../modules/register/register";


const PrivateRouters = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route
            path="*"
            element={<Navigate to="/home" />}
          />
      </Routes>
    </BrowserRouter>
  )
}

export default PrivateRouters;