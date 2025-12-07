import { Clock, Award, Users, Tv } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Clock, value: '1500+', label: 'Hours of Content' },
    { icon: Award, value: '40+', label: 'Years Experience' },
    { icon: Users, value: '50+', label: 'Expert Team' },
    { icon: Tv, value: '100+', label: 'TV Productions' },
  ];

  const team = [
    {
      name: 'Mr. Ved Prakash',
      role: 'Founder & Technology Head',
      image: '/Head.jpeg',
      bio: 'Completed course in TV Technology and Programming from FTII Pune. Deep understanding of technology with expertise in mitigating risks of rapid technological change in broadcast industry. Heads all technology-related decisions.',
    },
    {
      name: 'Mrs. Ved Prakash',
      role: 'Partner & Software Department Head',
      image: '/Wife.jpeg',
      bio: 'Wife of Mr. Ved Prakash, partner since the company’s inception, heads the software department with deep expertise in TV programming processes, enabling her to efficiently understand client requirements and ensure their satisfaction.',
    },
    {
      name: 'Ms. Preeti Prakash',
      role: 'Director',
      image: '/Preeti.jpeg',
      bio: 'Ms. Preeti Prakash, Director of BIPL, brings 17 years of expertise in office administration, HR, and client servicing, ensuring top-quality service delivery through her extensive experience in the entertainment industry.',
    },
    {
      name: 'Ms. Dipikka Prakaash',
      role: 'Director & Financial Head',
      image: '/Dipikka.jpeg',
      bio: 'Ms. Dipikka Prakaash, Director and Financial Head of BIPL, oversees all financial and accounting operations, manages daily cash flow, drives cost control, implements financial systems for compliance and accountability, and acts as the key liaison with banks and financial institutions.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#1A1A1A] relative overflow-hidden">
      {/* Background Pattern - Changed green dot logic to red */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#EF4444_1px,transparent_1px)] bg-[size:40px_40px]"></div>
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
              Originally founded as Video Vision Corporation in 1984, Broadcast Imaging Private Limited (BIPL) has evolved into a premier production and broadcast solutions company with over 1500 hours of television content and 40+ years of industry excellence.
            </p>
            <p>
              We specialize in end-to-end production services including television serials, corporate videos, documentary-style storytelling, product launches, and training content. Our comprehensive offerings span from script writing and storyboarding to location scouting, production management, and post-production.
            </p>
            <p>
              With state-of-the-art equipment including ARRI ALEXA, RED cameras, multiple HD setups, and cutting-edge post-production facilities with Final Cut Pro suites, we've become a trusted partner for major broadcasters like TV18, UTV, STAR NEWS, TIMES NOW, REPUBLIC, and ZEE NEWS.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-[#1A1A1A] border border-blue-900/30 p-6 hover:border-[#EF4444] transition-all group rounded-lg shadow-lg"
              >
                <Icon
                  className="text-[#FF3131] mb-4 group-hover:scale-110 transition-transform"
                  size={32}
                />
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Team Section */}
        <div className="mt-20">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-0.5 bg-[#FF3131]"></div>
            <span className="text-[#FF3131] text-sm font-mono tracking-widest uppercase font-bold">
              Our Leadership
            </span>
          </div>

          <h3 className="text-4xl font-bold text-white mb-12">
            Meet The Team Behind BIPL
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] border border-blue-900/30 rounded-lg overflow-hidden hover:border-[#EF4444] transition-all group"
              >
                <div className="aspect-[3/4] bg-gradient-to-br from-[#FF3131]/20 to-transparent overflow-hidden relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      ((e.target as HTMLImageElement).nextSibling as HTMLElement).style.display = 'flex';
                    }}
                  />
                  <div className="absolute inset-0 hidden items-center justify-center text-white/30 text-6xl font-bold bg-gradient-to-br from-[#FF3131]/20 to-transparent">
                    {member.name.charAt(0)}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-2">
                    {member.name}
                  </h4>
                  <p className="text-[#FF3131] text-sm font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}