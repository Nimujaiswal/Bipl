import { Building2, Radio, Clapperboard, Briefcase, UserRound, Quote } from "lucide-react";

export default function Clients() {
  // ——— Data mapped from https://bipl.tv/clients/ categories ———
  // GOVERNMENT ORGANISATIONS
  const government = [
    { name: "Children’s Film Society of India (CFSI)" },
    { name: "Directorate of Advertising & Visual Publicity (DAVP / CBC)" },
    { name: "Doordarshan Kendra" },
    { name: "Maharashtra State Government" },
  ];

  // TELEVISION CHANNELS (mentioned across BIPL’s site/projects)
  const television = [
    { name: "TV18" },
    { name: "UTV" },
    { name: "Star News" },
    { name: "Times Now" },
    { name: "Republic TV" },
    { name: "Zee Network" },
    { name: "DD National" },
    { name: "CNBC TV18" },
  ];

  // FILMMAKERS / CORPORATES / PRIVATE PRODUCERS (add as needed)
  const filmmakers: { name: string }[] = [
    // { name: "Producer / Director Name" },
  ];
  const corporates: { name: string }[] = [
    // { name: "Corporate Brand Name" },
  ];
  const privateProducers: { name: string }[] = [
    // { name: "Studio / Producer Name" },
  ];

  const sections: {
    title: string;
    icon: any;
    items: { name: string }[];
  }[] = [
    { title: "Government Organisations", icon: Building2, items: government },
    { title: "Television Channels", icon: Radio, items: television },
    { title: "Filmmakers", icon: Clapperboard, items: filmmakers },
    { title: "Corporates", icon: Briefcase, items: corporates },
    { title: "Private Producers", icon: UserRound, items: privateProducers },
  ];

  return (
    <section id="clients" className="py-24 bg-[#0D0D0D] relative overflow-hidden">
      {/* red glow accents (same as your Studio section) */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#FF3131] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF3131] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-0.5 bg-[#FF3131]"></div>
          <span className="text-[#FF3131] text-sm font-mono tracking-widest uppercase">Our Clients</span>
        </div>

        {/* heading + copy */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
              Partners Across
              <span className="block text-gray-400 text-3xl mt-2">Government, Broadcast & Industry</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              From public service programming and government campaigns to live multi-camera broadcast
              events and brand films, we collaborate with organizations that demand premium quality,
              rock-solid reliability, and on-time execution.
            </p>
            <div className="bg-[#1A1A1A] border border-gray-800 p-6">
              <div className="flex items-start gap-3">
                <Quote className="text-[#FF3131] shrink-0 mt-1" />
                <p className="text-gray-300 text-sm leading-relaxed">
                  “BIPL delivered broadcast-ready outputs under tight timelines without compromising
                  on quality—seamless crew coordination and control-room workflow.”
                </p>
              </div>
            </div>
          </div>

          {/* compact highlight grid */}
          <div className="grid grid-cols-1 gap-6">
            {sections.slice(0, 2).map(({ title, icon: Icon, items }, i) => (
              <div key={i} className="bg-[#1A1A1A] border border-gray-800 p-6 hover:border-[#FF3131] transition-all group">
                <div className="flex items-start gap-4">
                  <div className="shrink w-12 h-12 bg-[#0D0D0D] border border-gray-800 flex items-center justify-center group-hover:border-[#FF3131] transition-all">
                    <Icon className="text-[#FF3131]" size={24} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {items.map((c, j) => (
                        <span
                          key={`${title}-${j}`}
                          className="text-gray-300 text-xs bg-black/30 border border-gray-800 px-2 py-1"
                          title={c.name}
                        >
                          {c.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* one more card combining the remaining categories if empty */}
            <div className="bg-[#1A1A1A] border border-gray-800 p-6 hover:border-[#FF3131] transition-all group">
              <div className="flex items-start gap-4">
                <div className="shrink w-12 h-12 bg-[#0D0D0D] border border-gray-800 flex items-center justify-center group-hover:border-[#FF3131] transition-all">
                  <Clapperboard className="text-[#FF3131]" size={24} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-white mb-2">Filmmakers, Corporates & Producers</h3>
                  <div className="flex flex-wrap gap-2">
                    {[...filmmakers, ...corporates, ...privateProducers].length === 0 ? (
                      <span className="text-gray-500 text-xs">
                        Add names here (kept flexible to match the Clients page taxonomy).
                      </span>
                    ) : (
                      [...filmmakers, ...corporates, ...privateProducers].map((c, j) => (
                        <span
                          key={`misc-${j}`}
                          className="text-gray-300 text-xs bg-black/30 border border-gray-800 px-2 py-1"
                          title={c.name}
                        >
                          {c.name}
                        </span>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* full categorized grids */}
        <div className="mt-16 space-y-10">
          {sections.map(({ title, items }, i) => (
            <div key={`sec-${i}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-0.5 bg-[#FF3131]" />
                <h3 className="text-white/90 tracking-wide uppercase text-sm">{title}</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {items.length === 0 ? (
                  <div className="col-span-full text-gray-500 text-sm">
                    Add entries for “{title}” in the arrays above.
                  </div>
                ) : (
                  items.map((c, j) => (
                    <div
                      key={`${title}-${j}`}
                      className="bg-[#1A1A1A] border border-gray-800 hover:border-[#FF3131]/70 transition-all p-5 flex items-center justify-center text-center"
                      title={c.name}
                    >
                      <div className="text-gray-300 text-sm leading-snug">{c.name}</div>
                    </div>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
