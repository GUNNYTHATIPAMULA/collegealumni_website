import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Loginpage from "./pages/Loginpage";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AlumniLayout from "./layout/AlumniLayout";
import Alumni_Dashboard from "./pages/alumni/Alumni_Dashboard";
import All_Alumni from "./pages/alumni/All_Alumni";
import Alumni_Profile from "./pages/alumni/Alumni_Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/alumnidashboard" element={<AlumniLayout />}  >
          <Route index element={<Alumni_Dashboard />} />
          <Route path="alumnidirectory" element={<All_Alumni />} />
          <Route path="profile" element={<Alumni_Profile />} />

        </Route>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Loginpage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;