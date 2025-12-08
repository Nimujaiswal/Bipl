import {
  CheckCircle2,
  GraduationCap,
  Trophy,
  BriefcaseBusiness,
  Quote,
} from "lucide-react";

export default function Team() {
  // ——— Director: achievements ———
  const vedAchievements: string[] = [
    "Producer In-charge for World Cup Hockey, Mumbai (1981).",
    "Producer In-charge for Commonwealth Table Tennis (1981–82).",
    "One of the main producers in the Asian Games.",
    "100+ Outside Broadcasts of Cricket Tests, ODIs, sports & cultural programs.",
    "All Test Matches 1973–1985: ~50 major matches covered live / multi-camera.",
    "Davis Cup Tennis: ~20 matches produced live with multi-camera coverage.",
  ];

  const vedTraining: string[] = [
    "Trained at Film & Television Institute of India (FTII) – Pune.",
    "Attended Los Angeles 1984 Olympic Games (production study).",
    "Workshop on Color Television Programme.",
    "Production exposure in West Berlin, Germany.",
    "A.I.B.D Workshop for Television Programme.",
  ];

  const vedSummary =
    "In 1989, he pivoted from government service to entrepreneurship—building independent production and broadcast capabilities for TV producers, ad filmmakers, and satellite channels. An FTII-certified specialist in TV Technology & Programming, he continues to lead BIPL’s technology strategy, mitigating fast tech obsolescence with pragmatic, future-proof decisions.";

  // ——— Leadership grid ———
  const team = [
    {
      name: "Mrs. Ved Prakash",
      role: "Partner & Software Department Head",
      image: "/Wife.jpeg",
      bio: "Partner since inception; translates complex client requirements into efficient TV programming workflows and consistently drives high client satisfaction.",
    },
    {
      name: "Ms. Preeti Prakash",
      role: "Director",
      image: "/Preeti.jpeg",
      bio: "17+ years across administration, HR, and client servicing in entertainment—championing smooth delivery and elevated stakeholder experiences.",
    },
    {
      name: "Ms. Dipikka Prakaash",
      role: "Director & Financial Head",
      image: "/Dipikka.jpeg",
      bio: "Owns finance, compliance, and cost control. Primary liaison to banks—ensuring fiscal discipline, accountability, and operational clarity.",
    },
  ];

  return (
    <section id="team" className="relative overflow-hidden bg-[#0F0F0F]">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#EF4444_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-6xl xl:max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* HERO */}
        <header className="pt-20 md:pt-24 pb-10 text-center">
          <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono tracking-[0.25em] text-[#FF5A5A] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#FF3131]" />
            Our Team
          </span>

          <h1 className="mt-4 text-[2rem] sm:text-[2.5rem] md:text-[3.25rem] lg:text-[3.75rem] font-extrabold text-white leading-[1.1]">
            People who turn{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3131] to-[#FF8A8A]">
              vision into broadcast
            </span>
          </h1>

          <p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-white/80">
            Decades of craft, relentless innovation, and the humility to keep
            learning—this is the team behind BIPL.
          </p>

          {/* Quote */}
          <div className="mt-6 inline-flex items-start gap-3 text-white/70">
            <Quote className="mt-1" size={18} />
            <p className="max-w-2xl text-sm sm:text-base">
              Excellence is not a single event—it’s the discipline of delivering
              under pressure, again and again.
            </p>
          </div>
        </header>

        {/* DIRECTOR SPOTLIGHT */}
        <section className="mt-6 mb-16">
          <div className="grid gap-8 lg:gap-10 lg:grid-cols-[minmax(260px,340px)_1fr] xl:grid-cols-[minmax(300px,380px)_1fr] items-start">
            
            {/* Director Image */}
            <div className="bg-[#111111] border border-white/10 rounded-2xl overflow-hidden shadow-xl">
  <div className="relative w-full max-h-[600px] overflow-hidden rounded-t-2xl">
    <img
      src="/Head.jpeg"
      alt="Mr. Ved Prakash"
      className="w-full h-auto object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
  </div>

  <div className="p-6">
    <h3 className="text-xl sm:text-2xl font-bold text-white">
      Mr. Ved Prakash (M.Sc., B.Ed.)
    </h3>
    <p className="mt-1 text-[#FF6B6B] font-semibold">
      Director • Founder & Technology Head
    </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                    <Trophy size={14} /> Asian Games Producer
                  </span>
                  <span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                    <BriefcaseBusiness size={14} /> 100+ OBs
                  </span>
                  <span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                    <GraduationCap size={14} /> FTII, Pune
                  </span>
                </div>
              </div>
            </div>

            {/* Director Details */}
            <div className="space-y-8">
              {/* Achievements */}
              <div className="bg-[#111111] border border-white/10 rounded-2xl p-6">
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-4">
                  Key Assignments & Coverage
                </h4>
                <ul className="space-y-3">
                  {vedAchievements.map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <CheckCircle2 className="shrink-0 mt-0.5 text-[#FF3131]" size={18} />
                      <span className="text-gray-300 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Training */}
              <div className="bg-[#111111] border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="text-[#FF3131]" size={20} />
                  <h4 className="text-lg sm:text-xl font-semibold text-white">
                    Professional Training
                  </h4>
                </div>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {vedTraining.map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <CheckCircle2 className="shrink-0 mt-0.5 text-[#FF3131]" size={18} />
                      <span className="text-gray-300 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Summary */}
              <div className="bg-[#111111] border border-white/10 rounded-2xl p-6">
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  Career Summary
                </h4>
                <p className="text-gray-300 leading-relaxed">{vedSummary}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ——— PERFECT CENTERED 3-CARD LEADERSHIP GRID ——— */}
        <section className="pb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-[#FF3131]" />
            <span className="text-[#FF5A5A] text-sm font-mono tracking-widest uppercase font-bold">
              Leadership
            </span>
          </div>

          <h2 className="text-[1.75rem] sm:text-4xl font-bold text-white mb-8 text-center">
            Meet the People Who Raise the Bar
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto items-stretch">
            {team.map((member, index) => (
              <article
                key={index}
                className="group h-full flex flex-col bg-[#111111] border border-white/10 rounded-2xl overflow-hidden hover:border-[#EF4444] hover:shadow-[0_0_0_1px_rgba(239,68,68,0.25)] transition-all"
              >
                <div className="relative w-full overflow-hidden rounded-t-2xl">
  <img
    src={member.image}
    alt={member.name}
    className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-500"
    onError={(e) => {
      const img = e.target as HTMLImageElement;
      img.style.display = "none";
      (img.nextSibling as HTMLElement).style.display = "flex";
    }}
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
</div>

                <div className="p-6 flex flex-col grow">
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {member.name}
                  </h3>
                  <p className="text-[#FF6B6B] text-sm font-semibold mt-1">
                    {member.role}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed mt-3">
                    {member.bio}
                  </p>

                  <div className="mt-auto pt-4" />
                </div>
              </article>
            ))}
          </div>

          {/* Closing CTA */}
          <div className="mt-14 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-7 sm:p-8 text-center max-w-5xl mx-auto">
            <p className="text-white/90 text-base sm:text-lg md:text-xl">
              Inspired teams make iconic work. If you’re driven by craft and
              curiosity, you’ll feel at home with us.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}
