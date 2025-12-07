import { Play, Maximize2 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

/** Safely extract a YouTube video ID from many URL shapes. */
function getYouTubeId(input: string): string | null {
  try {
    // If it's already an ID (11 chars, common charset), accept it.
    const idLike = input.trim();
    if (/^[\w-]{11}$/.test(idLike)) return idLike;

    const url = new URL(input);

    // youtu.be/<id>
    if (url.hostname.includes("youtu.be")) {
      const seg = url.pathname.split("/").filter(Boolean)[0];
      if (seg && /^[\w-]{11}$/.test(seg)) return seg;
    }

    // youtube.com/watch?v=<id>
    const v = url.searchParams.get("v");
    if (v && /^[\w-]{11}$/.test(v)) return v;

    // youtube.com/embed/<id> or /shorts/<id>
    const parts = url.pathname.split("/").filter(Boolean);
    const maybeId = parts[1] || parts[0];
    if (maybeId && /^[\w-]{11}$/.test(maybeId)) return maybeId;

    // Last resort: try to find an 11-char token
    const match = input.match(/([A-Za-z0-9_-]{11})/);
    return match ? match[1] : null;
  } catch {
    // Not a URL; maybe it was just the ID and failed previous test
    const match = input.match(/([A-Za-z0-9_-]{11})/);
    return match ? match[1] : null;
  }
}

/** Thumbnail component that falls back through available sizes automatically. */
function YouTubeThumbnail({ id, alt }: { id: string; alt: string }) {
  const candidates = useMemo(
    () => [
      `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
      `https://img.youtube.com/vi/${id}/sddefault.jpg`,
      `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
      `https://img.youtube.com/vi/${id}/mqdefault.jpg`,
    ],
    [id]
  );

  const [index, setIndex] = useState(0);
  const src = candidates[index] ?? candidates[candidates.length - 1];

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      onError={() => {
        // try next candidate if current fails
        setIndex((i) => Math.min(i + 1, candidates.length - 1));
      }}
    />
  );
}

type VideoMeta = {
  title: string;
  author: string;
};

export default function Portfolio() {
  // 👇 Add/expand freely – any YT link format works (with or without ?si=…)
  const videoProjects = [
    { url: "https://www.youtube.com/watch?v=6FvZ1VqwtKA", type: "Multi-Cam Production" },
    { url: "https://youtu.be/7l0h9TR5lEM?si=bmjYgyN62INuq03p", type: "8-Camera Setup" },
    { url: "https://youtu.be/TLFqtjO-SNU?si=C-kZ9lOjLo2AAvqg", type: "Cinema Camera" },
    { url: "https://youtu.be/TxRxKXPfzw4?si=jv45pH9bikaIzUzj", type: "4K Production" },
    // You can keep adding more:
    // { url: "https://youtube.com/shorts/<id>", type: "Studio Production" },
    // { url: "<just the 11-char ID>", type: "Episodic Series" },
  ];

  // Resolve IDs once
  const projectsWithId = useMemo(() => {
    return videoProjects
      .map((p) => {
        const id = getYouTubeId(p.url);
        return id ? { ...p, id, canonicalWatch: `https://www.youtube.com/watch?v=${id}` } : null;
      })
      .filter(Boolean) as Array<{ url: string; type: string; id: string; canonicalWatch: string }>;
  }, [videoProjects]);

  const [videoData, setVideoData] = useState<Record<string, VideoMeta>>({});

  useEffect(() => {
    // Fetch oEmbed for each unique ID (handles ?si= and other params)
    projectsWithId.forEach(({ id, canonicalWatch }) => {
      // Skip if we already have it (avoid refetch on hot reloads)
      if (videoData[id]) return;

      fetch(`https://www.youtube.com/oembed?url=${encodeURIComponent(canonicalWatch)}&format=json`)
        .then((r) => r.json())
        .then((data) => {
          setVideoData((prev) => ({
            ...prev,
            [id]: { title: data.title, author: data.author_name },
          }));
        })
        .catch(() => {
          setVideoData((prev) => ({
            ...prev,
            [id]: { title: "Video Title", author: "Unknown Channel" },
          }));
        });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectsWithId]);

  return (
    <section id="portfolio" className="py-24 bg-[#0D0D0D] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-0.5 bg-[#FF3131]"></div>
          <span className="text-[#FF3131] text-sm font-mono tracking-widest uppercase">
            Portfolio
          </span>
        </div>

        <h2 className="text-5xl font-bold text-white mb-16 leading-tight">
          Our Work
          <span className="block text-gray-400 text-3xl mt-2">
            1500+ Hours of Content
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsWithId.map((video, index) => {
            const meta = videoData[video.id];
            return (
              <div
                key={video.id + index}
                onClick={() => window.open(video.canonicalWatch, "_blank")}
                className="group relative aspect-video bg-[#1A1A1A] border border-gray-800 hover:border-[#FF3131] transition-all cursor-pointer overflow-hidden"
              >
                {/* Thumbnail with smart fallbacks */}
                <YouTubeThumbnail id={video.id} alt={meta?.title || "Video Thumbnail"} />

                {/* Dark gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>

                {/* REC Indicator */}
                <div className="absolute top-4 left-4 flex items-center gap-2 z-20">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-300 font-mono">REC</span>
                </div>

                {/* Maximize icon */}
                <div className="absolute top-4 right-4 z-20">
                  <Maximize2
                    className="text-gray-400 group-hover:text-[#FF3131] transition-colors"
                    size={20}
                  />
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-16 h-16 border-2 border-[#FF3131] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="text-[#FF3131]" fill="#FF3131" size={24} />
                  </div>
                </div>

                {/* Bottom Title Layer */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <span className="text-xs text-[#FF3131] font-mono block mb-1">
                    {video.type}
                  </span>

                  <h3 className="text-xl font-bold text-white leading-tight">
                    {meta?.title || "Loading..."}
                  </h3>

                  <p className="text-gray-400 text-sm mt-1">
                    {meta?.author || "Fetching channel..."}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => window.open(projectsWithId[0]?.canonicalWatch ?? "#", "_blank")}
            className="px-8 py-4 border border-[#FF3131] text-[#FF3131] hover:bg-[#FF3131] hover:text-black transition-all font-semibold"
          >
            View Full Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}
