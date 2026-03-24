import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { BackToTop } from "./components/BackToTop";
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { ContactUs } from "./pages/ContactUs";
import { MannedGuarding } from "./pages/MannedGuarding";
import { EventSecurity } from "./pages/EventSecurity";
import { KeyHolding } from "./pages/KeyHolding";
import { MobilePatrols } from "./pages/MobilePatrols";
import { SecurityReception } from "./pages/SecurityReception";
import { ConstructionGuarding } from "./pages/ConstructionGuarding";
import { EventsFestivals } from "./pages/EventsFestivals";
import { RetailSecurity } from "./pages/RetailSecurity";
import { Accreditations } from "./pages/Accreditations";
import { Vacancies } from "./pages/Vacancies";
import { TrainingPortal } from "./pages/TrainingPortal";
const navigationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SiteNavigationElement",
      "@id": "#primary-navigation",
      "name": "Home",
      "url": "https://www.zarkoon-security.co.uk/"
    },
    {
      "@type": "SiteNavigationElement",
      "@id": "#primary-navigation",
      "name": "About Us",
      "url": "https://www.zarkoon-security.co.uk/about"
    },
    {
      "@type": "SiteNavigationElement",
      "@id": "#primary-navigation",
      "name": "Contact Us",
      "url": "https://www.zarkoon-security.co.uk/contact-us"
    },
    {
      "@type": "SiteNavigationElement",
      "@id": "#primary-navigation",
      "name": "Manned Guarding",
      "url": "https://www.zarkoon-security.co.uk/manned-guarding"
    },
    {
      "@type": "SiteNavigationElement",
      "@id": "#primary-navigation",
      "name": "Mobile Patrols",
      "url": "https://www.zarkoon-security.co.uk/mobile-patrols"
    },
    {
      "@type": "SiteNavigationElement",
      "@id": "#primary-navigation",
      "name": "Accreditations",
      "url": "https://www.zarkoon-security.co.uk/accreditations"
    },
    {
      "@type": "SiteNavigationElement",
      "@id": "#primary-navigation",
      "name": "Careers",
      "url": "https://www.zarkoon-security.co.uk/careers"
    }
  ]
};

import { Policies } from "./pages/Policies";
import { Helmet } from "react-helmet-async";

/** Shared layout: Header + page content + Footer */
function MainLayout() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(navigationSchema)}
        </script>
      </Helmet>
      <Header />
      <Outlet />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>

        {/* ── Main site layout ── */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/contact-us/" element={<ContactUs />} />
          <Route path="/manned-guarding" element={<MannedGuarding />} />
          <Route path="/event-security" element={<EventSecurity />} />
          <Route path="/key-holding" element={<KeyHolding />} />
          <Route path="/mobile-patrols" element={<MobilePatrols />} />
          <Route path="/security-reception" element={<SecurityReception />} />
          <Route path="/construction-guarding" element={<ConstructionGuarding />} />
          <Route path="/events-festivals" element={<EventsFestivals />} />
          <Route path="/retail-security" element={<RetailSecurity />} />
          <Route path="/accreditations" element={<Accreditations />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/careers" element={<Vacancies />} />
          <Route path="/careers/" element={<Vacancies />} />
          <Route path="/training-portal" element={<TrainingPortal />} />
        </Route>
      </Routes>
    </Router>
  );
}
