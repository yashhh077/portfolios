import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./assets/Pages/Home";
import About from "./assets/Pages/About";
import Contact from "./assets/Pages/Contact";
import Project from "./assets/Pages/Project";

// Admin
import Admin from "./Admin/admin";
import Dashboard from "./Admin/Dashboard";
import Messages from "./Admin/Message";
import Settings from "./Admin/Setting";
import Addproject from "./Admin/Addproject";
import Login from "./Admin/Login";
import PrivateRoute from "../PrivateRoute";

// Loader component
import PageLoader from "./assets/Component/PageLoader"; // 👈 make sure path is correct

function App() {
  return (
    <BrowserRouter>
      <RouteChangeLoader />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Protected Admin Routes */}
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        >
          <Route index element={<Dashboard />} /> {/* /admin */}
          <Route path="message" element={<Messages />} /> {/* /admin/message */}
          <Route path="setting" element={<Settings />} /> {/* /admin/setting */}
          <Route path="addproject" element={<Addproject />} />
          {/* /admin/addproject */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// ✅ RouteChangeLoader component
function RouteChangeLoader() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Show loader when route changes
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2000); // loader visible for 1 sec
    return () => clearTimeout(timer);
  }, [location]);

  if (loading) return <PageLoader />; // show loader
  return null; // else, show nothing
}

export default App;
