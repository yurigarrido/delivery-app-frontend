import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Login from "../modules/login/Login";
import Register from "../modules/register/register";

const PublicRouters = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route
            path="*"
            element={<Navigate to="/login" />}
          />
      </Routes>
    </BrowserRouter>
  )
}

export default PublicRouters;