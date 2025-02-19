// src/App.js
import { Route, Routes, useLocation } from "react-router";
import { useState, useEffect } from "react";
import IntroSlider from "./components/IntroSlider";
import { Toaster } from "@/components/ui/toaster";

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
import Menu from "./pages/Service/Menu";
import EventsDetailPage from "./pages/events/EventsDetailPage";
import NewsDetailPage from "./pages/events/NewsDetailPage";
import Donation from "./pages/Donation/Donation";

// admin
import Login from "./components/Auth/Login";
import Sidebar from "./pages/Dashboard/Sidebar";
import News from "./pages/Dashboard/News/News";
import Donations from "./pages/Dashboard/Donations/Donations";
import Leads from "./pages/Dashboard/Leads/Leads";
// import Profile from "./pages/Dashboard/Profile/Profile";
import ProtectedRoute from "./components/Auth/ProtectedROute";
import NotAuthorized from "./components/NotAuthorized";
import Events from "./pages/Dashboard/Events/Events";
import PaymentResponse from "./pages/Donation/PaymentResponse";
import Failure from "./pages/Donation/Failure";
import Success from "./pages/Donation/Success";
import DashBoardMain from "./pages/Dashboard/Home/DashBoardMain";

const App = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const location = useLocation();
  const [animationComplete, setAnimationComplete] = useState(false);

  // const handleAnimationComplete = () => {
  //   setAnimationComplete(true); // Update state when animation completes
  // };
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
      {/* {!animationComplete ? (
        <IntroSlider onComplete={handleAnimationComplete} />
      ) : (
        <> */}
      <Toaster />
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
        <Route path="/services" element={<Menu />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/paymentresponse" element={<PaymentResponse />} />
        <Route path="/success" element={<Success />} />
        <Route path="/failure" element={<Failure />} />
        <Route path="/events-home/events/:id" element={<EventsDetailPage />} />
        <Route path="/events-home/news/:id" element={<NewsDetailPage />} />

        {/* Admin Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Sidebar />
            </ProtectedRoute>
          }
        >
          <Route index path="home" element={<DashBoardMain />} />
          <Route path="news" element={<News />} />
          <Route path="events" element={<Events />} />
          <Route path="donations" element={<Donations />} />
          <Route path="leads" element={<Leads />} />
          {/* <Route path="profile" element={<Profile />} /> */}
        </Route>
        <Route path="/admin" element={<Login />} />

        {/* Error Page */}
        <Route path="/not-authorized" element={<NotAuthorized />} />
        <Route path="*" element={<Error />} />
      </Routes>

      {/* Only show Footer if not on restricted routes */}
      {!isRestrictedRoute && <Footer />}

      {showScrollToTop && <ScrollToTopButton />}
      {/* </>
      )} */}
    </div>
  );
};

export default App;
