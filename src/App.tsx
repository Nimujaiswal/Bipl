import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Studio from './components/Studio';
import Equipment from './components/Equipment';
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
      <Services />
      <Studio />
      <Equipment />
      <Portfolio />
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

function ContactLayout() {
  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      <Navbar />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />} />
      <Route path="/clients" element={<ClientsLayout />} />
      <Route path="/contact" element={<ContactLayout />} />
    </Routes>
  );
}

export default App;