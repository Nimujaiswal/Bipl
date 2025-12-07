import { Camera, Film } from "lucide-react";
import { Link } from "react-router-dom";   // ✅ Add this

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">

      {/* 🔥 Background Video */}
      <video
        src="/Bgvideo.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      {/* Dark Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0D0D0D]/80 to-[#1A1A1A]/90"></div>

      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF3131] to-transparent opacity-50"></div>
      <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-[#FF3131] to-transparent opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-[#FF3131] to-transparent opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center mb-8 space-x-3">
          <div className="w-2 h-2 rounded-full bg-[#FF3131] animate-pulse"></div>
          <span className="text-[#FF3131] text-sm font-mono tracking-widest uppercase">
            Live Production
          </span>
          <div className="w-2 h-2 rounded-full bg-[#FF3131] animate-pulse"></div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight leading-none">
          End-to-End Production
          <span className="block text-gray-400">& Broadcast Solutions</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Professional broadcast services with cinema-grade quality and technical excellence
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

          <button className="group relative px-8 py-4 bg-transparent border border-[#FF3131] text-[#FF3131] font-semibold rounded-none overflow-hidden transition-all hover:bg-[#FF3131] hover:text-black">
            <span className="relative z-10 flex items-center gap-2">
              <Film size={20} />
              Our Work
            </span>
          </button>

          {/* ✅ Contact Button Linked (UI unchanged) */}
          <Link to="/contact">
            <button className="px-8 py-4 bg-white text-black font-semibold rounded-none hover:bg-gray-200 transition-all flex items-center gap-2">
              <Camera size={20} />
              Contact Us
            </button>
          </Link>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-[#FF3131] rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
