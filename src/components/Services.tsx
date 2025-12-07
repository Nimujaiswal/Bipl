import { FileText, Video, Camera, Edit, Clapperboard, Sparkles } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: FileText,
      title: 'Pre-Production',
      description: 'Concept development, scriptwriting, storyboarding, and production planning with meticulous attention to detail.',
    },
    {
      icon: Camera,
      title: 'Production',
      description: 'Professional shooting with cinema-grade cameras, expert crew, and technical precision for broadcast quality.',
    },
    {
      icon: Video,
      title: 'Multi-Cam Shoots',
      description: 'Live switching and recording with multiple camera setups for events, shows, and complex productions.',
    },
    {
      icon: Edit,
      title: 'Editing',
      description: 'Creative editing with professional software, color grading, and seamless storytelling techniques.',
    },
    {
      icon: Sparkles,
      title: 'Post Production',
      description: 'VFX, motion graphics, sound design, color correction, and final delivery in all broadcast formats.',
    },
    {
      icon: Clapperboard,
      title: 'Content Creation',
      description: 'End-to-end content production including scripting, shoots, editing suites, and multi-cam workflow.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#1A1A1A] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-0.5 bg-[#FF3131]"></div>
          <span className="text-[#FF3131] text-sm font-mono tracking-widest uppercase">Services</span>
        </div>

        <h2 className="text-5xl font-bold text-white mb-16 leading-tight">
          Full-Spectrum
          <span className="block text-gray-400 text-3xl mt-2">Production Services</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-[#0D0D0D] border border-gray-800 p-8 hover:border-[#FF3131] transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-0 h-0.5 bg-[#FF3131] group-hover:w-full transition-all duration-500"></div>
                <div className="absolute top-0 right-0 w-0.5 h-0 bg-[#FF3131] group-hover:h-full transition-all duration-500 delay-100"></div>
                <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#FF3131] group-hover:w-full transition-all duration-500 delay-200"></div>
                <div className="absolute bottom-0 left-0 w-0.5 h-0 bg-[#FF3131] group-hover:h-full transition-all duration-500 delay-300"></div>

                <Icon className="text-[#FF3131] mb-4 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
