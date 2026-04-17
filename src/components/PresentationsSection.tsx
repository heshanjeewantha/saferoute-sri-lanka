import { motion } from "framer-motion";
import {
  FaFilePowerpoint, FaExternalLinkAlt, FaCalendarAlt, FaLock,
  FaLayerGroup,
} from "react-icons/fa";

type PresentationStatus = "Available" | "Upcoming" | "Pending";

interface Presentation {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  slides: string;
  status: PresentationStatus;
  link?: string;
  thumbnail?: string;
  tags: string[];
}

const presentations: Presentation[] = [
  {
    id: "pres-proposal",
    title: "Proposal Presentation",
    subtitle:
      "Initial research pitch covering the problem domain, proposed solution, preliminary literature review, and project plan.",
    date: "March 2024",
    slides: "28 Slides",
    status: "Available",
    link: "https://canva.link/9htjvs5oygdz9gv",
    thumbnail: "src/assets/proposalprese.png",
    tags: ["Problem Statement", "Methodology", "Project Plan"],
  },
  {
    id: "pres-pp1",
    title: "Progress Presentation 1",
    subtitle:
      "Showcase of completed literature survey, finalized architecture, preliminary CNN model results, and hardware prototype demonstration.",
    date: "June 2024",
    slides: "34 Slides",
    status: "Available",
    link: "https://canva.link/bmecy6rw27vah7j",
    thumbnail: "src/assets/pp1_thum.png",
    tags: ["CNN Results", "Edge Prototype", "System Architecture"],
  },
  {
    id: "pres-pp2",
    title: "Progress Presentation 2",
    subtitle:
      "Demonstration of the fully integrated system: on-board driver monitoring, GPS enforcement, and live dashboard beta with real data.",
    date: "September 2024",
    slides: "41 Slides",
    status: "Available",
    link: "https://canva.link/2dd45qu3rsz7zgm",
    thumbnail: "src/assets/pp21.png",
    tags: ["End-to-End Demo", "Live Dashboard", "Accuracy Results"],
  },
  {
    id: "pres-final",
    title: "Final Presentation",
    subtitle:
      "Complete research presentation: evaluated system performance, pilot results from live bus routes, conclusions, and future work.",
    date: "November 2024",
    slides: "TBD",
    status: "Upcoming",
    thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    tags: ["Final Evaluation", "Pilot Results", "Conclusions"],
  },
];

const statusConfig: Record<PresentationStatus, { label: string; color: string; bg: string }> = {
  Available: { label: "Available", color: "text-emerald-700", bg: "bg-emerald-50 border-emerald-200" },
  Upcoming:  { label: "Upcoming",  color: "text-amber-700",   bg: "bg-amber-50 border-amber-200"     },
  Pending:   { label: "Pending",   color: "text-gray-500",    bg: "bg-gray-50 border-gray-200"        },
};

const PresentationsSection = () => (
  <section id="slides" className="bg-white py-24 sm:py-32">
    <div className="container mx-auto px-6 lg:px-16">
      {/* Header */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
        <div className="w-full lg:w-48 shrink-0">
          <span className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#ff4b12]">
            SLIDES
          </span>
        </div>

        <div className="flex-1 w-full">
          <h2 className="font-display text-[2.5rem] font-bold tracking-tight text-[#111] md:text-[3.5rem] lg:text-[4rem] leading-[1.1]">
            Presentations
          </h2>
          <p className="mt-4 text-[17px] font-medium leading-[1.8] text-gray-500 max-w-2xl">
            Slides used in all past and upcoming research presentations. Access available decks
            or check back for future presentations as the project progresses.
          </p>

          {/* Cards grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {presentations.map((pres, i) => {
              const sc = statusConfig[pres.status];
              return (
                <motion.div
                  key={pres.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group flex flex-col rounded-[2rem] border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:border-[#ff4b12]/20 transition-all"
                >
                  {/* Thumbnail */}
                  <div className="relative h-44 w-full overflow-hidden bg-gray-100">
                    {pres.thumbnail && (
                      <img
                        src={pres.thumbnail}
                        alt={pres.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    {/* Status badge on image */}
                    <span className={`absolute top-4 right-4 text-[11px] font-bold px-3 py-1.5 rounded-full border ${sc.bg} ${sc.color}`}>
                      {sc.label}
                    </span>
                    {/* PowerPoint icon */}
                    <div className="absolute bottom-4 left-4 h-10 w-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md">
                      <FaFilePowerpoint className="text-[#ff4b12] text-lg" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-7">
                    <h3 className="font-display font-bold text-xl text-[#111] leading-snug mb-2">
                      {pres.title}
                    </h3>
                    <p className="text-[14px] text-gray-500 font-medium leading-relaxed flex-1 mb-5">
                      {pres.subtitle}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {pres.tags.map((tag) => (
                        <span key={tag} className="text-[11px] font-bold bg-gray-100 text-gray-500 px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Footer meta + CTA */}
                    <div className="flex items-center justify-between gap-3 pt-4 border-t border-gray-100">
                      <div className="flex flex-col gap-1">
                        <span className="flex items-center gap-1.5 text-[12px] text-gray-400 font-medium">
                          <FaCalendarAlt className="text-[#ff4b12]" /> {pres.date}
                        </span>
                        <span className="flex items-center gap-1.5 text-[12px] text-gray-400 font-medium">
                          <FaLayerGroup className="text-[#ff4b12]" /> {pres.slides}
                        </span>
                      </div>

                      {pres.status === "Available" && pres.link ? (
                        <a
                          href={pres.link}
                          id={`slides-view-${pres.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 rounded-full bg-[#111] hover:bg-[#ff4b12] text-white px-5 py-2.5 text-[11px] font-bold uppercase tracking-wide transition-all hover:scale-105 shadow-sm"
                        >
                          <FaExternalLinkAlt className="text-xs" />
                          View Slides
                        </a>
                      ) : (
                        <span className="flex items-center gap-1.5 text-[12px] text-amber-600 font-bold">
                          <FaLock className="text-xs" />
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PresentationsSection;
