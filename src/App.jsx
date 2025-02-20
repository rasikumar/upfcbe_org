// src/App.js
import { Route, Routes, useLocation } from "react-router";
import { useState, useEffect, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";

const IntroSlider = lazy(() => import("./components/IntroSlider"));

const Home = lazy(() => import("./pages/Home/Home"));
const Navbar = lazy(() => import("./components/Navbar"));
const Header = lazy(() => import("./components/Header"));
const Error = lazy(() => import("./components/Error"));
const ScrollToTop = lazy(() => import("./lib/ScrollToTop"));
const Footer = lazy(() => import("./components/Footer"));

const About = lazy(() => import("./pages/Aboutus/About"));
const ScrollToTopButton = lazy(() => import("./components/ScrollToTopButton"));
const Event_NewsHome = lazy(() => import("./pages/events/Event_NewsHome"));
const ContactUs = lazy(() => import("./pages/ContactUs/ContactUs"));
const Menu = lazy(() => import("./pages/Service/Menu"));
const EventsDetailPage = lazy(() => import("./pages/events/EventsDetailPage"));
const NewsDetailPage = lazy(() => import("./pages/events/NewsDetailPage"));
const Donation = lazy(() => import("./pages/Donation/Donation"));
const PrivacyRefundPage = lazy(() => import("./components/PrivacyRefundPage"));

// Admin
const Login = lazy(() => import("./components/Auth/Login"));
const Sidebar = lazy(() => import("./pages/Dashboard/Sidebar"));
const News = lazy(() => import("./pages/Dashboard/News/News"));
const Donations = lazy(() => import("./pages/Dashboard/Donations/Donations"));
const Leads = lazy(() => import("./pages/Dashboard/Leads/Leads"));
// const Profile = lazy(() => import("./pages/Dashboard/Profile/Profile"));
const ProtectedRoute = lazy(() => import("./components/Auth/ProtectedRoute"));
const NotAuthorized = lazy(() => import("./components/NotAuthorized"));
const Events = lazy(() => import("./pages/Dashboard/Events/Events"));
const PaymentResponse = lazy(() => import("./pages/Donation/PaymentResponse"));
const Failure = lazy(() => import("./pages/Donation/Failure"));
const Success = lazy(() => import("./pages/Donation/Success"));
const DashBoardMain = lazy(() =>
  import("./pages/Dashboard/Home/DashBoardMain")
);
const FloatingIcon = lazy(() => import("./components/FloatingIcon"));
const ResetPassword = lazy(() => import("./components/Auth/ResetPassword"));
const UpdatePassword = lazy(() => import("./components/Auth/UpdatePassword"));

const App = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const location = useLocation();
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true); // Update state when animation completes
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const restrictedRoutes = ["/admin", "/dashboard", "/reset-password"];

  const isRestrictedRoute =
    restrictedRoutes.some((route) => location.pathname.startsWith(route)) ||
    location.pathname.match(/^\/update-password\/.+/);

  return (
    <div className="font-NotoSans">
      {/* {!animationComplete ? (
        <IntroSlider onComplete={handleAnimationComplete} />
      ) : ( */}
      <>
        <Toaster />
        {!isRestrictedRoute && (
          <>
            <Header />
            <Navbar />
            <FloatingIcon />
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
          <Route
            path="/events-home/events/:id"
            element={<EventsDetailPage />}
          />
          <Route path="/events-home/news/:id" element={<NewsDetailPage />} />
          <Route path="/privacy-Terms" element={<PrivacyRefundPage />} />

          {/* Admin Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Sidebar />
              </ProtectedRoute>
            }
          >
            <Route index element={<DashBoardMain />} />
            <Route path="home" element={<DashBoardMain />} />
            <Route path="news" element={<News />} />
            <Route path="events" element={<Events />} />
            <Route path="donations" element={<Donations />} />
            <Route path="leads" element={<Leads />} />
            {/* <Route path="profile" element={<Profile />} /> */}
          </Route>
          <Route path="/admin" element={<Login />} />

          {/* uncomment it if you need Reset Password need */}
          
          {/* <Route path="/reset-password" element={<ResetPassword />} /> */}
          {/* <Route path="/update-password/:token" element={<UpdatePassword />} /> */}

          {/* Error Page */}
          <Route path="/not-authorized" element={<NotAuthorized />} />
          <Route path="*" element={<Error />} />
        </Routes>

        {/* Only show Footer if not on restricted routes */}
        {!isRestrictedRoute && <Footer />}

        {showScrollToTop && <ScrollToTopButton />}
      </>
      {/* )} */}
    </div>
  );
};

export default App;
