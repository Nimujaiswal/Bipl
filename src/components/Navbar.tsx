import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false); // mobile dropdown

  const navItems = ['About', 'Services', 'Studio', 'Clients', 'Portfolio', 'Contact'];

  const services = [
    { label: 'Production', href: '#production' },
    { label: 'Post Production', href: '#post-production' },
    { label: 'Studio Setup', href: '#studio-setup' },
    { label: 'Live Broadcasting', href: '#broadcast' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img src="/logo.jpg" alt="BIPL Logo" className="h-12 w-auto cursor-pointer" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              if (item === 'Services') {
                return (
                  <div key="Services" className="relative group">
                    {/* Services main link */}
                    <button
                      className="text-gray-300 hover:text-[#FF3131] transition-colors text-sm font-medium tracking-wide"
                    >
                      Services
                    </button>

                    {/* Dropdown */}
                    <div
                      className="absolute left-0 mt-2 w-56 bg-[#0D0D0D] border border-gray-800 rounded-xl
                                 opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                 transition-all duration-200 shadow-lg overflow-hidden z-50"
                    >
                      {services.map((s) => (
                        <a
                          key={s.label}
                          href={s.href}
                          className="block px-4 py-2.5 text-gray-300 hover:bg-[#FF3131] hover:text-black transition-all text-sm"
                        >
                          {s.label}
                        </a>
                      ))}
                    </div>

                    {/* underline effect */}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF3131] group-hover:w-full transition-all duration-300"></span>
                  </div>
                );
              }

              // Route pages
              if (item === 'Clients' || item === 'Contact') {
                return (
                  <Link
                    key={item}
                    to={`/${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-[#FF3131] transition-colors text-sm font-medium tracking-wide relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF3131] group-hover:w-full transition-all duration-300"></span>
                  </Link>
                );
              }

              // Sections
              return (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-[#FF3131] transition-colors text-sm font-medium tracking-wide relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF3131] group-hover:w-full transition-all duration-300"></span>
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-[#FF3131]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0D0D0D] border-t border-gray-800">
          <div className="px-6 py-4 space-y-2">

            {navItems.map((item) => {
              if (item === 'Services') {
                return (
                  <div key="m-Services" className="border-b border-gray-800/60 pb-2">
                    {/* Tap to open Services */}
                    <button
                      className="w-full text-left text-gray-300 hover:text-[#FF3131] text-sm font-medium py-2"
                      onClick={() => setServicesOpen(!servicesOpen)}
                    >
                      Services
                    </button>

                    {/* Mobile Submenu */}
                    {servicesOpen && (
                      <div className="mt-1 pl-3 space-y-1">
                        {services.map((s) => (
                          <a
                            key={s.label}
                            href={s.href}
                            className="block text-gray-300/90 hover:text-[#FF3131] text-sm py-1.5"
                            onClick={() => setIsOpen(false)}
                          >
                            {s.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              // Mobile route items
              if (item === 'Clients' || item === 'Contact') {
                return (
                  <Link
                    key={`m-${item}`}
                    to={`/${item.toLowerCase()}`}
                    className="block text-gray-300 hover:text-[#FF3131] text-sm font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                );
              }

              // Mobile section links
              return (
                <a
                  key={`m-${item}`}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-300 hover:text-[#FF3131] text-sm font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              );
            })}

          </div>
        </div>
      )}
    </nav>
  );
}
