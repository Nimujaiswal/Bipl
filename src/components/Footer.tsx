import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* Grid Sections */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          
          {/* Logo + Description */}
          <div>
            <Link to="/">
              <img src="/logo.jpg" alt="BIPL Logo" className="h-10 w-auto mb-4" />
            </Link>
            <p className="text-gray-700 text-sm leading-relaxed">
              Professional broadcast and production solutions with cinema-grade quality.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="hover:text-[#FF3131] transition-colors cursor-pointer">Pre-Production</li>
              <li className="hover:text-[#FF3131] transition-colors cursor-pointer">Production</li>
              <li className="hover:text-[#FF3131] transition-colors cursor-pointer">Post Production</li>
              <li className="hover:text-[#FF3131] transition-colors cursor-pointer">Equipment Rental</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="hover:text-[#FF3131] transition-colors cursor-pointer">About Us</li>
              <li className="hover:text-[#FF3131] transition-colors cursor-pointer">Portfolio</li>
              <li className="hover:text-[#FF3131] transition-colors cursor-pointer">Studio</li>
              <li className="hover:text-[#FF3131] transition-colors cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-800 text-sm">
              <li className="hover:text-[#FF3131] transition-colors cursor-pointer">LinkedIn</li>

              <li className="hover:text-[#FF3131] transition-colors cursor-pointer">
                <a href="https://www.instagram.com/bipl.tv/" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>

              <li className="hover:text-[#FF3131] transition-colors cursor-pointer">
                <a href="https://www.youtube.com/channel/UCVMl7v5gxVWgHnDigIG90Pg" target="_blank" rel="noopener noreferrer">
                  YouTube
                </a>
              </li>

              <li className="hover:text-[#FF3131] transition-colors cursor-pointer">Twitter</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-400 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-800 text-sm">
            © {new Date().getFullYear()} Broadcast Imaging Private Limited. All rights reserved.
          </p>

          {/* Live Indicator */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#FF3131] animate-pulse"></div>
            <span className="text-gray-800 text-xs font-mono">LIVE</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
