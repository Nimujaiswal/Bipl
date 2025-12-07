"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-[-6rem] right-[-4rem] w-[28rem] h-[28rem] bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-8rem] left-[-6rem] w-[26rem] h-[26rem] bg-red-900/10 rounded-full blur-3xl pointer-events-none" />

      {/* Soft scanline overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] [background-size:24px_24px] mix-blend-overlay" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center gap-2">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </div>
            <span className="text-red-500 text-sm font-mono tracking-widest uppercase font-bold">
              REC • Contact Us
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT SIDE – DETAILS */}
          <div>
            <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
              Let&apos;s Create
              <span className="block text-red-500 text-3xl mt-2">
                Something Amazing
              </span>
            </h2>
            <p className="text-gray-300 leading-relaxed mb-12 text-lg">
              Ready to bring your project to life? Get in touch with our
              production team to discuss your vision.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-[#1a1a1a] border border-gray-800 group-hover:border-red-500/50 transition-colors flex items-center justify-center rounded-md">
                  <Mail className="text-red-500" size={20} />
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1 font-mono">
                    Email
                  </div>
                  <a
                    href="mailto:info@bipl.tv"
                    className="text-white font-semibold tracking-wide hover:text-red-400 transition-colors"
                  >
                    info@bipl.tv
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-[#1a1a1a] border border-gray-800 group-hover:border-red-500/50 transition-colors flex items-center justify-center rounded-md">
                  <Phone className="text-red-500" size={20} />
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1 font-mono">
                    Phone
                  </div>
                  <a
                    href="tel:+919821026116"
                    className="text-white font-semibold tracking-wide hover:text-red-400 transition-colors"
                  >
                    +91 98210 26116
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-[#1a1a1a] border border-gray-800 group-hover:border-red-500/50 transition-colors flex items-center justify-center rounded-md">
                  <MapPin className="text-red-500" size={20} />
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1 font-mono">
                    Location
                  </div>
                  <a
                    href="https://www.google.com/maps/place/Goregaon+Oshiwara/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white font-semibold tracking-wide hover:text-red-400 transition-colors"
                  >
                    Goregaon Oshiwara, Mumbai, India
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE – WHATSAPP CONTACT BOX */}
          {/* RIGHT SIDE – WHATSAPP + GMAIL CONTACT BOX */}
<div className="bg-[#141414] border border-gray-800 p-8 rounded-xl shadow-2xl flex flex-col items-start justify-center gap-8">

  <h3 className="text-3xl font-bold text-white">
    Contact Us Instantly
  </h3>

  <p className="text-gray-300 leading-relaxed text-lg">
    Choose your preferred way to reach us.
  </p>

  {/* WhatsApp Button */}
  <a
    href="https://wa.me/919821026116"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full py-4 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold tracking-wider rounded-md transition-all flex items-center justify-center gap-3 group shadow-[0_0_20px_rgba(37,211,102,0.28)] hover:shadow-[0_0_34px_rgba(37,211,102,0.45)]"
  >
    {/* WhatsApp Icon */}
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16" className="group-hover:scale-110 transition-transform">
      <path d="M13.601 2.326A7.854 7.854 0 0 0 8.043.002C3.74.002.247 3.495.247 7.798c0 1.386.363 2.737 1.053 3.934L.003 16l4.39-1.278a7.766 7.766 0 0 0 3.65.93h.004c4.303 0 7.796-3.493 7.796-7.796a7.74 7.74 0 0 0-2.242-5.53zM8.048 14.4a6.57 6.57 0 0 1-3.35-.92l-.24-.144-2.604.757.778-2.543-.156-.262A6.542 6.542 0 0 1 1.42 7.8c0-3.626 2.957-6.584 6.624-6.584a6.56 6.56 0 0 1 4.66 1.932 6.518 6.518 0 0 1 1.936 4.65c0 3.625-2.957 6.602-6.592 6.602zm3.676-4.93c-.2-.1-1.178-.578-1.36-.644-.183-.067-.317-.1-.45.1-.133.2-.517.644-.634.777-.117.133-.233.15-.433.05-.2-.1-.85-.314-1.62-1-.6-.536-1.003-1.2-1.12-1.4-.117-.2-.013-.308.088-.408.09-.089.2-.233.3-.35.1-.117.133-.2.2-.333.067-.133.033-.25-.017-.35-.05-.1-.45-1.083-.616-1.484-.163-.392-.33-.34-.45-.345h-.383c-.133 0-.35.05-.533.25-.183.2-.7.683-.7 1.666s.717 1.934.817 2.067c.1.133 1.41 2.15 3.417 3.017.478.206.85.329 1.14.42.48.152.915.131 1.26.08.384-.057 1.178-.482 1.343-.95.167-.467.167-.867.117-.95-.05-.083-.183-.133-.383-.233z" />
    </svg>
    Chat on WhatsApp
  </a>

  {/* Gmail Button */}
  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=info@bipl.tv&su=New%20Inquiry&body=Hi%2C%20I%20would%20like%20to%20discuss..."
    target="_blank"
    rel="noopener noreferrer"
    className="w-full py-4 bg-[#DB4437] hover:bg-[#c23321] text-white font-bold tracking-wider rounded-md transition-all flex items-center justify-center gap-3 group shadow-[0_0_20px_rgba(219,68,55,0.28)] hover:shadow-[0_0_34px_rgba(219,68,55,0.45)]"
  >
    {/* Gmail Icon */}
    <svg
  xmlns="http://www.w3.org/2000/svg"
  width="26"
  height="26"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  viewBox="0 0 24 24"
  className="group-hover:scale-110 transition-transform"
>
  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
  <path d="M22 6l-10 7L2 6"/>
</svg>



    Email Us on Gmail
  </a>
</div>

        </div>

        {/* MAP SECTION (unchanged) */}
        <div className="mt-16 group">
          <div className="relative w-full h-[460px] rounded-2xl overflow-hidden border border-gray-800 bg-[#0f0f0f] shadow-[0_20px_70px_rgba(0,0,0,0.45)]">
            <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5 [box-shadow:inset_0_0_80px_rgba(0,0,0,0.5)]" />

            <iframe
              title="Goregaon Oshiwara Map"
              className="absolute inset-0 w-full h-full"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.33064888035!2d72.835951!3d19.152252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b646f67c82ad%3A0x45b6b44e31efef61!2sGoregaon%20Oshiwara!5e0!3m2!1sen!2sin!4v1733412345678"
            />

            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 backdrop-blur-sm bg-black/35 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div className="flex items-center gap-2 text-gray-200">
                <MapPin size={18} className="text-red-500" />
                <span className="font-mono text-xs tracking-widest uppercase">
                  Location Locked
                </span>
              </div>
              <a
                href="https://www.google.com/maps/place/Goregaon+Oshiwara/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold bg-white/10 hover:bg-white/15 text-white transition-colors"
              >
                Open in Google Maps
              </a>
            </div>

            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-red-500/40 transition" />
          </div>
        </div>
      </div>
    </section>
  );
}
