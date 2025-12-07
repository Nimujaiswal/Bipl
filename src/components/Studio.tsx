import { MonitorPlay, Mic2, Settings, Lightbulb } from 'lucide-react';

export default function Studio() {
  const capabilities = [
    {
      icon: MonitorPlay,
      title: 'Professional Studio Space',
      description: 'Climate-controlled studio with adjustable lighting and acoustic treatment for optimal recording conditions.',
    },
    {
      icon: Lightbulb,
      title: 'Advanced Lighting Grid',
      description: 'Professional LED and tungsten lighting systems with DMX control for any visual style or mood.',
    },
    {
      icon: Mic2,
      title: 'Audio Recording',
      description: 'Soundproof recording booths with high-end microphones and audio processing equipment.',
    },
    {
      icon: Settings,
      title: 'Control Room',
      description: 'State-of-the-art control room with live switching, monitoring, and instant playback capabilities.',
    },
  ];

  return (
    <section id="studio" className="py-24 bg-[#0D0D0D] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#FF3131] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF3131] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-0.5 bg-[#FF3131]"></div>
          <span className="text-[#FF3131] text-sm font-mono tracking-widest uppercase">Our Studio</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
              State-of-the-Art
              <span className="block text-gray-400 text-3xl mt-2">Production Facility</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Our broadcast studio is equipped with cutting-edge technology and professional-grade equipment. From multi-camera setups to advanced lighting systems, we provide a complete production environment that meets the highest industry standards.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Whether you're shooting a talk show, commercial, or corporate video, our flexible studio space adapts to your creative vision with seamless technical support throughout production.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div
                  key={index}
                  className="bg-[#1A1A1A] border border-gray-800 p-6 hover:border-[#FF3131] transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink w-12 h-12 bg-[#0D0D0D] border border-gray-800 flex items-center justify-center group-hover:border-[#FF3131] transition-all">
                      <Icon className="text-[#FF3131]" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{capability.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{capability.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
