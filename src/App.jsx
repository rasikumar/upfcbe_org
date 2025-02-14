// src/App.js
import { Route, Routes, useLocation } from "react-router";
import { useState, useEffect } from "react";

import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Error from "./components/Error";
import ScrollToTop from "./lib/ScrollToTop";
import Footer from "./components/Footer";
import About from "./pages/Aboutus/About";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Event_NewsHome from "./pages/events/Event_NewsHome";
import ContactUs from "./pages/ContactUs/ContactUs";

// admin
import Login from "./components/Auth/Login";
import Sidebar from "./pages/Dashboard/Sidebar";
import NewsEvents from "./pages/Dashboard/Events_News/News&Events";
import Donations from "./pages/Dashboard/Donations/Donations";
import Leads from "./pages/Dashboard/Leads/Leads";
import Profile from "./pages/Dashboard/Profile/Profile";

const App = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Define routes where Navbar, Header, and Footer should NOT appear
  const restrictedRoutes = ["/admin", "/dashboard"];

  const isRestrictedRoute = restrictedRoutes.some(
    (route) =>
      location.pathname === route || location.pathname.startsWith("/dashboard")
  );

  return (
    <div className="font-NotoSans">
      {/* Only show Header & Navbar if not on restricted routes */}
      {!isRestrictedRoute && (
        <>
          <Header />
          <Navbar />
        </>
      )}

      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/events-home" element={<Event_NewsHome />} />
        <Route path="/contact-us" element={<ContactUs />} />

        {/* Admin Routes */}
        <Route path="/dashboard" element={<Sidebar />}>
          <Route index path="news-events" element={<NewsEvents />} />
          <Route path="donations" element={<Donations />} />
          <Route path="leads" element={<Leads />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/admin" element={<Login />} />

        {/* Error Page */}
        <Route path="*" element={<Error />} />
      </Routes>

      {/* Only show Footer if not on restricted routes */}
      {!isRestrictedRoute && <Footer />}

      {showScrollToTop && <ScrollToTopButton />}
    </div>
  );
};

export default App;
