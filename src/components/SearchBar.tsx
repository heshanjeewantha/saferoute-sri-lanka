import { useState, useRef, useEffect, useCallback } from "react";
import { FaSearch, FaTimes, FaArrowRight } from "react-icons/fa";

/* ─────────────────────────────────────────────
   Search Index — every piece of site content
   ───────────────────────────────────────────── */
interface SearchEntry {
  id: string;
  title: string;
  description: string;
  section: string;
  href: string;
  category: string;
}

const SEARCH_INDEX: SearchEntry[] = [
  // ── Sections ────────────────────────────────
  { id: "s-home",       title: "Home",           description: "Welcome to SafeTransit Sri Lanka – real-time AI-driven public transport safety.", section: "Home",          href: "#home",       category: "Section" },
  { id: "s-domain",     title: "Research Domain",description: "Explore literature survey, research gap, problem statement, objectives, methodology and tech stack.", section: "Domain", href: "#domain",     category: "Section" },
  { id: "s-milestones", title: "Milestones",     description: "Project timeline: proposal, progress presentations, final assessment and viva.",  section: "Milestones",    href: "#milestones", category: "Section" },
  { id: "s-documents",  title: "Documents",      description: "Download project documents, research papers, proposals and thesis volumes.",       section: "Documents",     href: "#documents",  category: "Section" },
  { id: "s-slides",     title: "Presentations",  description: "View slides from all research presentations including proposal, PP1, PP2 and final.", section: "Slides",    href: "#slides",     category: "Section" },
  { id: "s-team",       title: "About Us / Team","description": "Meet the researchers and supervisors behind SafeTransit Sri Lanka.",            section: "Team",          href: "#team",       category: "Section" },
  { id: "s-contact",    title: "Contact Us",     description: "Get in touch with the SafeTransit research team.",                                section: "Contact",       href: "#contact",    category: "Section" },

  // ── Domain tabs ─────────────────────────────
  { id: "d-literature",  title: "Literature Survey",    description: "SLTB/NTC accidents, CNN drowsiness detection, MQTT IoT, GPS geofencing research review.", section: "Domain", href: "#domain", category: "Domain" },
  { id: "d-gap",         title: "Research Gap",         description: "No unified real-time AI safety system for Sri Lanka's public transport exists.", section: "Domain",       href: "#domain", category: "Domain" },
  { id: "d-problem",     title: "Research Problem",     description: "Designing an integrated AI-IoT safety monitoring system for Sri Lankan buses.", section: "Domain",       href: "#domain", category: "Domain" },
  { id: "d-objectives",  title: "Research Objectives",  description: "Driver monitoring, road-rule violation detection, bus tracking, safety-speed estimation, dashboard.", section: "Domain", href: "#domain", category: "Domain" },
  { id: "d-methodology", title: "Methodology",          description: "5 phases: data collection, model development, edge integration, dashboard, evaluation.", section: "Domain", href: "#domain", category: "Domain" },
  { id: "d-tech",        title: "Technologies Used",    description: "TensorFlow, Python, Raspberry Pi 4, OpenCV, Node.js, React Native, Firebase.", section: "Domain",        href: "#domain", category: "Domain" },

  // ── Milestones ──────────────────────────────
  { id: "m-pp",  title: "Project Proposal",         description: "Completed – September 2025 · 6% marks. Proposal document, presentation slides, project charter, Gantt chart.", section: "Milestones", href: "#milestones", category: "Milestone" },
  { id: "m-p1",  title: "Progress Presentation 1",  description: "Completed – January 2026 · 15% marks. Literature survey, CNN model v0.1, hardware prototype.", section: "Milestones",                 href: "#milestones", category: "Milestone" },
  { id: "m-p2",  title: "Progress Presentation 2",  description: "Completed – March 2026 · 18% marks. Edge-deployed driver monitoring, GPS enforcement, dashboard beta.", section: "Milestones",          href: "#milestones", category: "Milestone" },
  { id: "m-fa",  title: "Final Presentation",        description: "Upcoming – May 2026 · 30% marks. Final thesis, complete system demo, research paper.", section: "Milestones",                          href: "#milestones", category: "Milestone" },
  { id: "m-vv",  title: "Viva",                      description: "Pending – May 2026 · 10% marks. Individual oral examination defending each component.", section: "Milestones",                          href: "#milestones", category: "Milestone" },

  // ── Documents ───────────────────────────────
  { id: "doc-taf",    title: "TAF Document",                        description: "Topic Assessment Form – Available (2 MB PDF).", section: "Documents", href: "#documents", category: "Document" },
  { id: "doc-paper",  title: "Research Paper",                      description: "Real-Time Safety Monitoring System for Public Transport: An AI-Driven Approach – Available PDF.", section: "Documents", href: "#documents", category: "Document" },
  { id: "doc-pv1",   title: "Proposal Vol 1 – Driver Monitoring",   description: "CNN-based driver drowsiness and distraction detection – Available PDF.", section: "Documents", href: "#documents", category: "Document" },
  { id: "doc-pv2",   title: "Proposal Vol 2 – Road-Rule Violation", description: "GPS-based speed zone enforcement and route compliance – Available PDF.", section: "Documents", href: "#documents", category: "Document" },
  { id: "doc-pv3",   title: "Proposal Vol 3 – Bus Tracking",        description: "LSTM-based arrival prediction and anomaly detection – Available PDF.", section: "Documents", href: "#documents", category: "Document" },
  { id: "doc-pv4",   title: "Proposal Vol 4 – Safety-Speed",        description: "Accelerometer fusion for road-specific speed thresholds – Available PDF.", section: "Documents", href: "#documents", category: "Document" },
  { id: "doc-fmain", title: "Final Thesis – Main Document",         description: "Complete research thesis covering all components – Pending.", section: "Documents", href: "#documents", category: "Document" },

  // ── Presentations ───────────────────────────
  { id: "pres-proposal", title: "Proposal Presentation",   description: "28 slides – September 2025. Problem domain, proposed solution, literature, project plan.", section: "Slides", href: "#slides", category: "Presentation" },
  { id: "pres-pp1",      title: "Progress Presentation 1", description: "34 slides – January 2026. CNN results, edge prototype, system architecture.", section: "Slides",           href: "#slides", category: "Presentation" },
  { id: "pres-pp2",      title: "Progress Presentation 2", description: "41 slides – March 2026. End-to-end demo, live dashboard, accuracy results.", section: "Slides",            href: "#slides", category: "Presentation" },
  { id: "pres-final",    title: "Final Presentation",      description: "TBD slides – May 2026. Final evaluation, pilot results, conclusions.", section: "Slides",                   href: "#slides", category: "Presentation" },

  // ── Team ────────────────────────────────────
  { id: "team-sandarau",   title: "Sandarau Abeykoon",     description: "Researcher – Road-Rule Violation Detection component.", section: "Team", href: "#team", category: "Team" },
  { id: "team-jayaisuru",  title: "Jayaisuru Bandara",     description: "Researcher – Predictive Bus Tracking component.", section: "Team",       href: "#team", category: "Team" },
  { id: "team-sachith",    title: "Sachith Kavishka",      description: "Researcher – Safety-Speed Estimation component.", section: "Team",        href: "#team", category: "Team" },
  { id: "team-heshan",     title: "Heshan Jeewantha",      description: "Researcher – Driver Behavior Monitoring component.", section: "Team",      href: "#team", category: "Team" },
  { id: "team-thisara",    title: "Thisara Shyamalee",     description: "Supervisor of SafeTransit Sri Lanka research project.", section: "Team",  href: "#team", category: "Team" },
  { id: "team-kaushalaya", title: "Kaushalaya Rajapaksha", description: "Co-Supervisor of SafeTransit Sri Lanka research project.", section: "Team", href: "#team", category: "Team" },
];

/* ─────────────────────────────────────────────
   Category colour mapping
   ───────────────────────────────────────────── */
const CATEGORY_STYLES: Record<string, { bg: string; text: string }> = {
  Section:      { bg: "bg-blue-50",   text: "text-blue-700"   },
  Domain:       { bg: "bg-purple-50", text: "text-purple-700" },
  Milestone:    { bg: "bg-amber-50",  text: "text-amber-700"  },
  Document:     { bg: "bg-red-50",    text: "text-red-700"    },
  Presentation: { bg: "bg-emerald-50",text: "text-emerald-700"},
  Team:         { bg: "bg-pink-50",   text: "text-pink-700"   },
};

/* ─────────────────────────────────────────────
   Fuzzy search helper
   ───────────────────────────────────────────── */
function searchEntries(query: string): SearchEntry[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return SEARCH_INDEX.filter((e) => {
    const haystack = `${e.title} ${e.description} ${e.section} ${e.category}`.toLowerCase();
    return haystack.includes(q);
  }).slice(0, 8);
}

/* ─────────────────────────────────────────────
   Component
   ───────────────────────────────────────────── */
interface SearchBarProps {
  onClose?: () => void;
}

const SearchBar = ({ onClose }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchEntry[]>([]);
  const [focused, setFocused] = useState(false);
  const [highlighted, setHighlighted] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropRef = useRef<HTMLDivElement>(null);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    setResults(searchEntries(val));
    setHighlighted(-1);
  }, []);

  const handleSelect = useCallback((entry: SearchEntry) => {
    setQuery("");
    setResults([]);
    setFocused(false);
    onClose?.();
    // Smooth scroll to section
    const target = document.querySelector(entry.href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [onClose]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!results.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlighted((h) => Math.min(h + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlighted((h) => Math.max(h - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (highlighted >= 0) handleSelect(results[highlighted]);
      else if (results.length > 0) handleSelect(results[0]);
    } else if (e.key === "Escape") {
      setQuery("");
      setResults([]);
      setFocused(false);
      inputRef.current?.blur();
    }
  }, [results, highlighted, handleSelect]);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dropRef.current && !dropRef.current.contains(e.target as Node) &&
        inputRef.current && !inputRef.current.contains(e.target as Node)
      ) {
        setFocused(false);
        setResults([]);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const showDrop = focused && query.length > 0;

  return (
    <div className="relative w-full max-w-sm" role="search">
      {/* Input */}
      <div
        className={`flex items-center gap-2.5 rounded-full border px-4 py-2.5 bg-white/90 backdrop-blur-xl transition-all duration-200 ${
          focused
            ? "border-[#ff4b12]/60 shadow-lg shadow-orange-100 bg-white"
            : "border-gray-200/70 shadow-md hover:border-gray-300"
        }`}
      >
        <FaSearch className={`h-3.5 w-3.5 shrink-0 transition-colors ${focused ? "text-[#ff4b12]" : "text-gray-400"}`} />
        <input
          id="global-search-input"
          ref={inputRef}
          type="search"
          autoComplete="off"
          spellCheck={false}
          placeholder="Search anything…"
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setFocused(true)}
          aria-label="Search site"
          aria-autocomplete="list"
          aria-expanded={showDrop}
          className="flex-1 bg-transparent text-[13px] font-medium text-gray-800 placeholder-gray-400 outline-none min-w-0"
        />
        {query && (
          <button
            type="button"
            aria-label="Clear search"
            onClick={() => { setQuery(""); setResults([]); inputRef.current?.focus(); }}
            className="shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <FaTimes className="h-3 w-3" />
          </button>
        )}
      </div>

      {/* Dropdown */}
      {showDrop && (
        <div
          ref={dropRef}
          role="listbox"
          id="search-results-listbox"
          className="absolute left-0 top-[calc(100%+8px)] w-[min(480px,90vw)] rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-black/10 overflow-hidden z-[200] animate-in fade-in slide-in-from-top-2 duration-150"
        >
          {results.length > 0 ? (
            <>
              <div className="px-4 pt-3 pb-1 text-[11px] font-extrabold uppercase tracking-[0.15em] text-gray-400">
                {results.length} result{results.length !== 1 ? "s" : ""}
              </div>
              <ul className="max-h-[420px] overflow-y-auto py-2">
                {results.map((entry, i) => {
                  const cs = CATEGORY_STYLES[entry.category] ?? { bg: "bg-gray-50", text: "text-gray-600" };
                  const isHighlighted = i === highlighted;
                  return (
                    <li key={entry.id} role="option" aria-selected={isHighlighted}>
                      <button
                        type="button"
                        onMouseDown={(e) => { e.preventDefault(); handleSelect(entry); }}
                        onMouseEnter={() => setHighlighted(i)}
                        className={`w-full flex items-start gap-3 px-4 py-3 text-left transition-colors duration-100 ${
                          isHighlighted ? "bg-orange-50" : "hover:bg-gray-50"
                        }`}
                      >
                        {/* Category pill */}
                        <span
                          className={`mt-0.5 shrink-0 rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${cs.bg} ${cs.text}`}
                        >
                          {entry.category}
                        </span>
                        {/* Text */}
                        <div className="flex-1 min-w-0">
                          <p className="text-[13px] font-bold text-gray-900 leading-snug">{entry.title}</p>
                          <p className="text-[12px] text-gray-400 font-medium mt-0.5 leading-snug line-clamp-1">
                            {entry.description}
                          </p>
                        </div>
                        {/* Arrow */}
                        <FaArrowRight
                          className={`shrink-0 mt-1 h-3 w-3 transition-colors ${isHighlighted ? "text-[#ff4b12]" : "text-gray-300"}`}
                        />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </>
          ) : (
            <div className="px-6 py-8 text-center">
              <FaSearch className="mx-auto h-6 w-6 text-gray-300 mb-3" />
              <p className="text-[13px] font-bold text-gray-500">No results for "<span className="text-gray-700">{query}</span>"</p>
              <p className="text-[12px] text-gray-400 mt-1">Try searching "milestones", "CNN", or a team member name.</p>
            </div>
          )}

          {/* Footer hint */}
          {results.length > 0 && (
            <div className="px-4 py-2.5 border-t border-gray-100 flex items-center gap-3 text-[11px] text-gray-400 font-medium">
              <span className="flex items-center gap-1"><kbd className="rounded border border-gray-200 bg-gray-50 px-1.5 py-0.5 text-[10px] font-mono">↑↓</kbd> navigate</span>
              <span className="flex items-center gap-1"><kbd className="rounded border border-gray-200 bg-gray-50 px-1.5 py-0.5 text-[10px] font-mono">↵</kbd> jump</span>
              <span className="flex items-center gap-1"><kbd className="rounded border border-gray-200 bg-gray-50 px-1.5 py-0.5 text-[10px] font-mono">Esc</kbd> close</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
