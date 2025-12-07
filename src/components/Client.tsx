import {
  Building2,
  Radio,
  Clapperboard,
  Briefcase,
  UserRound,
  Quote,
  Check,
} from "lucide-react";

// helper: split into 2 near-equal columns
function twoCols<T>(arr: T[]) {
  const mid = Math.ceil(arr.length / 2);
  return [arr.slice(0, mid), arr.slice(mid)];
}

export default function Clients() {
  // ——— GOVERNMENT (from earlier screenshot) ———
  const government = [
    { name: "CHILDREN’S FILM SOCIETY OF INDIA (CFSI)" },
{ name: "DIRECTORATE OF ADVERTISING & VISUAL PUBLICITY (DAVP / CBC)" },
{ name: "DOORDARSHAN KENDRA" },
{ name: "FILMS DIVISION" },
{ name: "MADHYA PRADESH MADHYAM" },
{ name: "MAHARASHTRA STATE GOVERNMENT" },
{ name: "MAULANA AZAD NATIONAL URDU UNIVERSITY (MANUU)" },
{ name: "NFDC (NATIONAL FILM DEVELOPMENT CORPORATION)" },
{ name: "TRIBAL RESEARCH & TRAINING INSTITUTE" },
{ name: "VIGYAN PRASAR" },
  ];

  // ——— TELEVISION CHANNELS (exactly from your TV list screenshot) ———
  const television = [
    { name: "BENNETT COLEMAN & CO LTD" },
    { name: "BUSINESS BROADCAST NEWS PVT LTD" },
    { name: "ESPN" },
    { name: "INDIA NEWS/ INFORMATION TV PVT LTD" },
    { name: "INX MEDIA/NEWS PVT LTD" },
    { name: "MAHARASHTRA ONE / FEARLESS MEDIA PVT LTD" },
    { name: "MI MARATHI MEDIA LTD" },
    { name: "MAAY MARATHI" },
    { name: "NETWORK 18" },
    { name: "NDTV" },
    { name: "REPUBLIC TV / ARG OUTLIER MEDIA PVT LTD" },
    { name: "ZEE TELEFILMS" },
    { name: "WALT DISNEY COMPANY (INDIA) PVT LTD" }, // corrected spelling
    { name: "STAR PLUS" },
    { name: "STAR NEWS / ABP NEWS" },
    { name: "SONY TELEVISION" },
    { name: "SAB TV" },
    { name: "SAHARA TELEVISION NETWORK" },
    { name: "SAHARA ONE TELEVISION NETWORK" },
    { name: "TURNER INTERNATIONAL PVT LTD" },
    { name: "TIMES GLOBAL BROADCASTING LTD" },
    { name: "UTV TELEVISION NETWORK" },
    { name: "VIACOM 18 MEDIA PVT LTD – COLORS" },
    { name: "ZOOM ENTERTAINMENT NETWORK LTD" },
    { name: "ZEE MEDIA" },
    { name: "ZEE NEWS" },
  ];

  // ——— FILMMAKERS (exact from screenshot) ———
  const filmmakers = [
    { name: "AAMIR KHAN PRODUCTIONS" },
    { name: "ASHUTOSH GOVARIKAR PRODUCTIONS" },
    { name: "ASA FILMS" },
    { name: "BANG BANG FILMS PVT LTD" },
    { name: "BALAJI MOTION PICTURES LTD" },
    { name: "CINEVISTAAS" },
    { name: "CINEYUG FILMS" },
    { name: "EROS INTERNATIONAL MEDIA LTD" },
    { name: "EYE CANDY FILMS PVT LTD" },
    { name: "ESSEL VISION PRODUCTION LTD" },
    { name: "KUNDAN SHAH FILMS" },
    { name: "KIRAN RAO PRODUCTION" },
    { name: "MARIEGOLD FILMS" },
    { name: "PERFECT MAGIC" },
    { name: "RAJSHRI PRODUCTIONS" },
    { name: "SAGAR ARTS" },
    { name: "TRIMURTI FILMS PVT LTD" },
    { name: "UTV" },
    { name: "VENUS" },
    { name: "VINOD CHOPRA PRODUCTIONS" },
  ];

  // ——— CORPORATES (exact from screenshot) ———
  const corporates = [
    { name: "ALIYAVARJUNG INSTITUTE FOR THE HEARING HANDICAP" },
    { name: "CAIRN ENERGY INDIA" },
    { name: "DREDGING CORPORATION OF INDIA" },
    { name: "HAMMER PLUS JEWELLERY LTD" },
    { name: "INDIAN OIL CORPORATION" },
    { name: "IEOT" },
    { name: "KHADI & VILLAGE INDS. COMMISSION (KVIC)" },
    { name: "LVMH WATCH & JEWELLERY" },
    { name: "OIL AND NATURAL GAS CORPORATION (ONGC)" },
    { name: "URMILA TRANSPORT" },
  ];

  // ——— PRIVATE PRODUCERS (exact from screenshot) ———
  const privateProducers = [
    { name: "ADLABS FILMS PRODUCTION" },
    { name: "B.A.G FILMS" },
    { name: "BIG MUSIC & HOME ENTERTAINMENT" },
    { name: "CREATIVE EYE" },
    { name: "CINEVISTAAS" },
    { name: "CINEMA VISION INDIA" },
    { name: "COPPER COIN PRODUCTION HOUSE" },
    { name: "CAB FILMS" },
    { name: "COLOSCEUM MEDIA PVT LTD" },
    { name: "DJ’S" },
    { name: "DREAM SELLER FILMS" },
    { name: "DUX CONSULTING SERVICES" },
    { name: "FBC MEDIA PVT LTD" },
    { name: "FRANTIC FILMS" },
    { name: "PERCEPT D’MARK" },
    { name: "PAUL MOVIES" },
    { name: "PLAN MAN MARCOM" },
    { name: "PROCAM INTERNATIONAL" },
    { name: "OUT OF HOME MEDIA" },
    { name: "RAA MEDIA" },
    { name: "RAMESH DEO PRODUCTION PVT LTD" },
    { name: "RELIANCE COMMUNICATION" },
    { name: "ROSE MOVIES PRODUCTION" },
    { name: "R & N TV PRODUCTIONS" },
    { name: "RAJSHRI PRODUCTION PVT LTD" },
    { name: "RAJSHRI MEDIA PVT LTD" },
    { name: "RELIANCE INDUSTRIES" },
    { name: "SANSKRUTI VISTARAK SANGH" },
  ];

  // collage images per section (update src if you use different filenames)
  const collages: Record<
    "government" | "television" | "filmmakers" | "corporates" | "private",
    { src: string; alt: string }
  > = {
    government: {
      src: "/public/gov-collage.jpg", // or /clients/mix_logo-1.jpg
      alt:
        "Government logos: MANUU, NFDC, Doordarshan, CFSI, Maharashtra State Govt, etc.",
    },
    television: {
      src: "/public/Collage.jpg", // or /clients/mix-logo2.jpg
      alt:
        "Television logos: ABP News, Network18, NDTV, Sony, Star Plus, Viacom18, ESPN, Sony SAB",
    },
    filmmakers: {
      src: "/public/film-collage.jpg", // or /clients/mix-logo3.jpg
      alt:
        "Filmmakers logos: Venus, Eros, EsselVision, Trimurti, Aamir Khan, UTV, Rajshri",
    },
    corporates: {
      src: "/public/corp-collage.jpg", // or /clients/mix-logo4.jpg
      alt:
        "Corporate logos: LVMH, Cairn, KVIC, DCI, ONGC, IndianOil",
    },
    private: {
      src: "/public/pp-collage.jpg", // or /clients/mix-logo5.jpg
      alt:
        "Private producers logos: IL&FS, Colosceum, Cinema Vision, Reliance, 120 Media, Old Monk, Optimystix, NHK, etc.",
    },
  };

  // UI sections in the order you want to display
  const sections = [
    {
      key: "government" as const,
      title: "Government Organisations",
      icon: Building2,
      items: government,
    },
    {
      key: "television" as const,
      title: "Television Channels",
      icon: Radio,
      items: television,
    },
    {
      key: "filmmakers" as const,
      title: "Filmmakers",
      icon: Clapperboard,
      items: filmmakers,
    },
    {
      key: "corporates" as const,
      title: "Corporates",
      icon: Briefcase,
      items: corporates,
    },
    {
      key: "private" as const,
      title: "Private Producers",
      icon: UserRound,
      items: privateProducers,
    },
  ];

  return (
    <section id="clients" className="py-24 bg-[#0D0D0D] relative overflow-hidden">
      {/* red glow accents */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#FF3131] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF3131] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* eyebrow */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-12 h-0.5 bg-[#FF3131]" />
          <span className="text-[#FF3131] text-sm font-mono tracking-widest uppercase">
            Our Clients
          </span>
        </div>

        {/* iterate all sections with same hero-like symmetric layout */}
        {sections.map(({ key, title, icon: Icon, items }, idx) => {
          const [colA, colB] = twoCols(items);
          const collage = collages[key];
          return (
            <div
              key={key}
              className={`grid lg:grid-cols-12 gap-10 items-start ${
                idx !== 0 ? "mt-20" : ""
              }`}
            >
              {/* left: title + two-column checklist */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-6">
                  
                  <h2 className="text-white/90 tracking-wide uppercase text-sm flex items-center gap-2">
                    <Icon size={16} className="text-[#FF3131]" />
                    {title}
                  </h2>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {title}
                </h3>

                <div className="grid sm:grid-cols-2 gap-x-10">
                  {[colA, colB].map((col, cIdx) => (
                    <ul key={cIdx} className="space-y-4">
                      {col.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-200">
                          <span className="mt-0.5 inline-flex w-6 h-6 items-center justify-center rounded-full bg-[#282828] border border-gray-700 shrink-0">
                            <Check size={14} className="text-[#FF3131]" />
                          </span>
                          <span className="leading-snug">{item.name}</span>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>

                
              </div>

              {/* right: collage */}
              <div className="lg:col-span-5">
                <div className="bg-[#1A1A1A] border border-gray-800 p-6">
                  <img
                    src={collage.src}
                    alt={collage.alt}
                    className="w-full h-auto object-contain"
                    loading="lazy"
                  />
                  
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
