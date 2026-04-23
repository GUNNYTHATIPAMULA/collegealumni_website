import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Loginpage from "./pages/Loginpage";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ❌ No Layout */}
       

        {/* ✅ With Layout */}
        <Route path="/" element={<MainLayout />}>
          <Route index  element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
           <Route path="/login" element={<Loginpage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;