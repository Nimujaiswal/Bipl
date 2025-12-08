import { JSX, useEffect, useMemo, useState } from "react";
import {
  CheckCircle2, Film, LayoutList, Music2, Clapperboard, Play,
  PlayCircle, Languages, Maximize2, Sparkles, ChevronDown, ChevronUp
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

// --- Types ---
type VideoMeta = { title: string; author: string };
type VideoProject = { url: string; type: string; thumbnail?: string };
type LangList = { heading: string; items: string[] };
type SectionKey = 
  | "serialsTelefilms" 
  | "corporateFilms" 
  | "sportsProgrammes" 
  | "songsJingles" 
  | "documentaries" 
  | "adFilms" 
  | "dubbingProgrammes" 
  | "animation";

type Section = {
  key: SectionKey;
  title: string;
  icon: JSX.Element;
  languages?: LangList[];
  items?: string[];
};

// --- Helpers ---

// Robust YouTube ID extraction
const getYouTubeId = (input: string): string | null => {
  try {
    const idLike = input.trim();
    if (/^[\w-]{11}$/.test(idLike)) return idLike;
    const url = new URL(input);
    const v = url.searchParams.get("v");
    if (v && /^[\w-]{11}$/.test(v)) return v;
    const parts = url.pathname.split("/").filter(Boolean);
    const lastPart = parts[parts.length - 1];
    if (lastPart && /^[\w-]{11}$/.test(lastPart)) return lastPart;
    return null;
  } catch {
    return null;
  }
};

const TAB_PARAM = "tab";

const keyToParam = (k: SectionKey) => ({
  serialsTelefilms: "serials",
  corporateFilms: "corporate",
  sportsProgrammes: "sports",
  songsJingles: "songs",
  documentaries: "documentaries",
  adFilms: "ads",
  dubbingProgrammes: "dubbing",
  animation: "animation"
}[k]);

const paramToKey = (p: string | null): SectionKey | null => {
  if (!p) return null;
  const map: Record<string, SectionKey> = {
    serials: "serialsTelefilms",
    corporate: "corporateFilms",
    sports: "sportsProgrammes",
    songs: "songsJingles",
    documentaries: "documentaries",
    ads: "adFilms",
    dubbing: "dubbingProgrammes",
    animation: "animation"
  };
  return map[p] || null;
};

// --- Components ---

const YouTubeThumbnail = ({ id, alt, fallback }: { id: string; alt: string; fallback?: string }) => {
  const candidates = useMemo(() => [
    `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
    `https://img.youtube.com/vi/${id}/sddefault.jpg`,
    `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
    fallback
  ].filter(Boolean) as string[], [id, fallback]);

  const [index, setIndex] = useState(0);
  const src = candidates[index] || candidates[candidates.length - 1];

  return (
    <img 
      src={src} 
      alt={alt} 
      loading="lazy" 
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
      onError={() => {
        if (index < candidates.length - 1) setIndex(i => i + 1);
      }} 
    />
  );
};

export default function WorkSection() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for mobile dropdown

  // 1. Define Video Projects
  const videoProjects: VideoProject[] = [
    { url: "https://www.youtube.com/watch?v=6FvZ1VqwtKA", type: "Multi-Cam Production", thumbnail: "/thumbnails/sangeet-samrat-tansen-ep10.jpg" },
    { url: "https://youtu.be/7l0h9TR5lEM?si=bmjYgyN62INuq03p", type: "8-Camera Setup", thumbnail: "/thumbnails/aavhaan-ep12.jpg" },
    { url: "https://youtu.be/TLFqtjO-SNU?si=C-kZ9lOjLo2AAvqg", type: "Cinema Camera", thumbnail: "/thumbnails/pankaj-kapur-phatichar-ep1.jpg" },
    { url: "https://youtu.be/TxRxKXPfzw4?si=jv45pH9bikaIzUzj", type: "4K Production", thumbnail: "/thumbnails/rd-burman-interview.jpg" },
  ];

  // 2. Process Videos
  const projectsWithId = useMemo(() => videoProjects.map(p => {
    const id = getYouTubeId(p.url);
    return id ? { ...p, id, canonicalWatch: `https://www.youtube.com/watch?v=${id}` } : null;
  }).filter(Boolean) as Array<VideoProject & { id: string; canonicalWatch: string }>, []);

  // 3. Fetch Metadata
  const [videoData, setVideoData] = useState<Record<string, VideoMeta>>({});

  useEffect(() => {
    projectsWithId.forEach(({ id, canonicalWatch }) => {
      if (videoData[id]) return;
      fetch(`https://www.youtube.com/oembed?url=${encodeURIComponent(canonicalWatch)}&format=json`)
        .then(r => r.json())
        .then(data => setVideoData(prev => ({ ...prev, [id]: { title: data.title, author: data.author_name } })))
        .catch(() => setVideoData(prev => ({ ...prev, [id]: { title: "Video Production", author: "Broadcast Imaging" } })));
    });
  }, [projectsWithId]);

  // 4. Define Content Sections
  const sections: Section[] = useMemo(() => [
    {
      key: "serialsTelefilms", title: "SERIALS / TELEFILMS", icon: <Clapperboard className="w-4 h-4" />,
      languages: [
        { heading: "Hindi", items: ["PHATICHAR – Comedy Serial", "AA BAIL MUJHE MAAR – Comedy Serial", "OH MY GOD – Comedy Serial", "PROFESSOR – Comedy Serial", "SANGEET SAMRAT TANSEN – Costume Drama", "ANMOL RATAN – Serial on famous personalities", "SHARMA JI KE PAANCH SAPOOT – Fiction", "RANG TARANG UMANG – Song Based Antakshri", "SHASTRIYA SANGEET PARICHAY – Musical Programme"] },
        { heading: "Marathi", items: ["AAVHAN – Serial on social evils", "TUMBAD CHE KHOT – Social Serial", "SHUBH VIVAH – Social Serial", "KATHA SAPTRANGI – Social Serial", "YE RE YE RE PAISA – Comedy Serial", "RAJA RAJE – Comedy Serial", "TANDA CHALALA – Serial on Labour Problems of Farmers (Maharashtra)", "CHIMTA KI GAAL GUCHCHA – Children Psychology Talk"] }
      ]
    },
    { key: "corporateFilms", title: "CORPORATE FILMS", icon: <LayoutList className="w-4 h-4" />, items: ["ONGC – Oil & Natural Gas Corporation of India", "• 20 min Film on Bombay Region Activities on ONGC", "• 10 min Documentary on ONGC's Western Region", "• 20 min film on Bassein Field", "• 5 min – Four films on Bassein Safety Briefing", "• 15 min & 7 min film on Bhartiya Kushth Niwarak Sangh", "• Six 30 min in-house Video Magazines \"Vasudhara\"", "IEOT – Indian Engineering & Ocean Technology", "DCI – Dredging Corporation of India", "EDUSAT – Educational Episodes for UTKARSH"] },
    { key: "sportsProgrammes", title: "SPORTS PROGRAMMES", icon: <PlayCircle className="w-4 h-4" />, items: [] },
    { key: "songsJingles", title: "SONGS & JINGLES", icon: <Music2 className="w-4 h-4" />, items: [] },
    { key: "documentaries", title: "DOCUMENTARIES", icon: <Film className="w-4 h-4" />, items: ["Rozabal Shrine Of Srinagar", "Ali Yavar Jung Institute – 25 yrs Film", "MAHARASHTRA CHE DEEP STAMBH", "Film on Sagar Sarhadi", "Film on Tribals – 6 Films", "INTER GOLD – 3 Films", "URMILA", "ASIATIC SOCIETY OF INDIA", "GOA'S RAJ BHAVAN", "CITIES WASTE", "Water Supply", "Elephanta Caves"] },
    { key: "adFilms", title: "AD FILMS", icon: <Sparkles className="w-4 h-4" />, items: [] },
    { key: "dubbingProgrammes", title: "DUBBING PROGRAMMES", icon: <Languages className="w-4 h-4" />, items: [] },
    { key: "animation", title: "ANIMATION", icon: <Sparkles className="w-4 h-4" />, items: [] }
  ], []);

  // 5. Initialize Active State
  const getInitialTab = (): SectionKey => {
    const searchParams = new URLSearchParams(location.search);
    const fromSearch = paramToKey(searchParams.get(TAB_PARAM));
    if (fromSearch) return fromSearch;

    const fromHash = paramToKey(new URLSearchParams(location.hash.replace("#", "")).get(TAB_PARAM));
    return fromHash || "serialsTelefilms";
  };

  const [active, setActive] = useState<SectionKey>(getInitialTab);

  // 6. Handle Tab Changes
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const currentParam = params.get(TAB_PARAM);
    const newParam = keyToParam(active);

    if (currentParam !== newParam) {
      params.set(TAB_PARAM, newParam);
      navigate(`${location.pathname}?${params.toString()}`, { replace: true });
    }
  }, [active, location.pathname, location.search, navigate]);

  // Find active section details for the dropdown label
  const activeSection = sections.find(s => s.key === active) || sections[0];

  return (
    <section id="gallery" className="scroll-mt-24 py-24 bg-[#0D0D0D] relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#EF4444_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-0.5 bg-[#FF3131]" />
          <span className="text-[#FF3131] text-sm font-mono tracking-widest uppercase font-bold">Our Work & Credits</span>
        </div>
        <h2 className="text-5xl font-bold text-white mb-3 leading-tight">Our Work</h2>
        <p className="text-gray-400 text-xl mb-12">1500+ Hours of Content</p>

        {/* Video Grid */}
        <div id="videos" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projectsWithId.map((video, index) => {
            const meta = videoData[video.id];
            return (
              <div 
                key={video.id + index} 
                onClick={() => window.open(video.canonicalWatch, "_blank")} 
                className="group relative aspect-video bg-[#1A1A1A] border border-gray-800 hover:border-[#FF3131] transition-all cursor-pointer overflow-hidden rounded-lg"
              >
                <YouTubeThumbnail id={video.id} alt={meta?.title || "Video Thumbnail"} fallback={video.thumbnail} />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
                <div className="absolute top-4 left-4 flex items-center gap-2 z-20">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-300 font-mono">REC</span>
                </div>
                <div className="absolute top-4 right-4 z-20">
                  <Maximize2 className="text-gray-400 group-hover:text-[#FF3131] transition-colors" size={20} />
                </div>
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-16 h-16 border-2 border-[#FF3131] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform bg-black/20 backdrop-blur-sm">
                    <Play className="text-[#FF3131]" fill="#FF3131" size={24} />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <span className="text-xs text-[#FF3131] font-mono block mb-1">{video.type}</span>
                  <h3 className="text-xl font-bold text-white leading-tight line-clamp-1">{meta?.title || "Loading..."}</h3>
                  <p className="text-gray-400 text-sm mt-1">{meta?.author || "Broadcast Imaging"}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Credits Section */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-0.5 bg-[#FF3131]" />
          <span className="text-[#FF3131] text-sm font-mono tracking-widest uppercase font-bold">Credits</span>
        </div>
        <h3 className="text-4xl font-bold text-white mb-10">Selected Works & Credits</h3>

        {/* MOBILE DROPDOWN (Visible only on small screens) */}
        <div className="md:hidden mb-8 relative">
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full bg-[#1A1A1A] border border-gray-800 text-white px-5 py-4 rounded-xl flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <span className="text-[#FF3131]">{activeSection.icon}</span>
              <span className="font-semibold uppercase tracking-wide text-sm">{activeSection.title}</span>
            </div>
            {isDropdownOpen ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
          </button>
          
          {isDropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-[#1A1A1A] border border-gray-800 rounded-xl overflow-hidden z-30 shadow-2xl">
              {sections.map(s => (
                <button
                  key={s.key}
                  onClick={() => {
                    setActive(s.key);
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full text-left px-5 py-4 border-b border-gray-800 last:border-0 flex items-center gap-2 hover:bg-[#252525] transition-colors ${active === s.key ? "text-[#FF3131]" : "text-gray-300"}`}
                >
                  {s.icon}
                  <span className="text-sm font-semibold tracking-wide uppercase">{s.title}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[280px,1fr] gap-8">
          {/* DESKTOP SIDEBAR (Hidden on mobile) */}
          <aside className="hidden md:block bg-[#111] border border-gray-800 rounded-xl overflow-hidden h-fit">
            {sections.map(s => {
              const isActive = s.key === active;
              return (
                <button 
                  key={s.key} 
                  onClick={() => setActive(s.key)} 
                  className={`w-full text-left px-5 py-4 border-l-2 transition-all flex items-center gap-2 ${
                    isActive 
                      ? "bg-black border-l-[#FF3131] text-white" 
                      : "bg-[#161616] hover:bg-[#131313] border-l-transparent text-gray-300"
                  }`}
                >
                  <span className={`${isActive ? "text-[#FF3131]" : "opacity-80"}`}>{s.icon}</span>
                  <span className="text-sm font-semibold tracking-wide uppercase">{s.title}</span>
                </button>
              );
            })}
          </aside>

          {/* Content Area */}
          <div className="bg-[#111] border border-gray-800 rounded-xl p-6 md:p-8 min-h-[400px]">
            {sections.map(s => s.key === active ? (
              <div key={s.key} className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
                <h4 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3 border-b border-gray-800 pb-4">
                  <span className="text-[#FF3131]">{s.icon}</span>
                  {s.title}
                </h4>
                
                {s.languages && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {s.languages.map(lang => (
                      <div key={lang.heading}>
                        <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-[#FF3131] rounded-full"></span>
                          {lang.heading}
                        </h5>
                        <ul className="space-y-3">
                          {lang.items.map((it, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors">
                              <CheckCircle2 className="w-4 h-4 mt-1 text-[#FF3131] shrink-0" />
                              <span className="leading-relaxed text-sm">{it}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
                
                {s.items && s.items.length > 0 && (
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3">
                    {s.items.map((it, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors">
                        <CheckCircle2 className="w-4 h-4 mt-1 text-[#FF3131] shrink-0" />
                        <span className="leading-relaxed text-sm">{it}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {(!s.languages && (!s.items || s.items.length === 0)) && (
                  <div className="text-gray-500 italic py-10 text-center">
                    More details coming soon...
                  </div>
                )}
              </div>
            ) : null)}
          </div>
        </div>
      </div>
    </section>
  );
}