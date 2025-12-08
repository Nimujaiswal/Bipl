import { Clock, Award, Users, Tv } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Clock, value: '1500+', label: 'Hours of Content' },
    { icon: Tv, value: '100+', label: 'TV Productions' },
    { icon: Users, value: '50+', label: 'Expert Team' },
    { icon: Award, value: '15+', label: 'Years Experience' },
  ];

  return (
    <section id="about" className="py-24 bg-[#1A1A1A] relative overflow-hidden">
      {/* Background Pattern - Changed green dot logic to red */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#EF4444_1px,transparent_1px)] bg-size-[40px_40px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-6">
          {/* Changed line color to Red */}
          <div className="w-12 h-0.5 bg-[#FF3131]"></div>
          {/* Changed text color to Red */}
          <span className="text-[#FF3131] text-sm font-mono tracking-widest uppercase font-bold">
            About Us
          </span>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-start">
          <div>
            {/* Fixed 'text-red' to 'text-white' for contrast on blue bg */}
            <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
              Broadcast Excellence
              {/* Subheading text changed for better contrast against blue */}
              <span className="block text-white-200 text-3xl mt-2">
                Since Day One
              </span>
            </h2>
          </div>
          
          {/* Changed text-gray-400 to text-blue-50/white for readability */}
          <div className="space-y-4 text-blue-50 text-lg leading-relaxed">
            <p>
              Broadcast Imaging Private Limited (BIPL) is a premier production
              and broadcast solutions company with over 1500 hours of television
              content under our belt.
            </p>
            <p>
              We specialize in end-to-end production services, from initial
              concept development to final delivery. Our team of experienced
              professionals combines creative vision with technical expertise to
              deliver broadcast-quality content that exceeds expectations.
            </p>
            <p>
              With state-of-the-art equipment, cutting-edge post-production
              facilities, and a passion for storytelling, we've become a trusted
              partner for broadcasters, brands, and content creators across the
              industry.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                // Changed BG to white/10 (Glassmorphism) for better blend on Blue
                // Or keep bg-[#1A1A1A] if you strictly want black boxes
                className="bg-[#1A1A1A] border border-blue-900/30 p-6 hover:border-[#EF4444] transition-all group rounded-lg shadow-lg"
              >
                {/* Icon changed to Red */}
                <Icon
                  className="text-[#FF3131] mb-4 group-hover:scale-110 transition-transform"
                  size={32}
                />
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                {/* Label text adjusted for contrast */}
                <div className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}