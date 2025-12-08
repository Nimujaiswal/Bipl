import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Studio from './components/Studio';
import Team from './components/Team';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Clients from './components/Client'; // note: default export name

function HomeLayout() {
  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      <Navbar />
      <Hero />
      <About />
      <Studio />
      <Footer />
    </div>
  );
}

function ClientsLayout() {
  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      <Navbar />
      <Clients />
      <Footer />
    </div>
  );
}

function PortfolioLayout() {
  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      <Navbar />
      <Portfolio />
      <Footer />
    </div>
  );
}

function ContactLayout() {
  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      <Navbar />
      <Contact />
      <Footer />
    </div>
  );
}

function TeamLayout() {
  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      <Navbar />
      <Team />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />} />
      <Route path="/clients" element={<ClientsLayout />} />
      <Route path="/portfolio" element={<PortfolioLayout />} /> {/* ✅ ADDED */}
      <Route path="/contact" element={<ContactLayout />} />
      <Route path="/team" element={<TeamLayout />} />

    </Routes>
  );
}
