import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaCheckCircle, FaClock, FaCalendarAlt, FaTrophy } from "react-icons/fa";

type Status = "Completed" | "Upcoming" | "Pending";

interface Milestone {
  id: string;
  title: string;
  date: string;
  marks: string;
  status: Status;
  description: string;
  deliverables: string[];
}

const milestones: Milestone[] = [
  {
    id: "PP",
    title: "Project Proposal",
    date: "September 2025",
    marks: "Marks Allocated: 6%",
    status: "Completed",
    description:
      "The project proposal marks the formal beginning of the research. The team presented the problem domain, motivation, preliminary literature review, proposed solution outline, and project plan to the panel.",
    deliverables: [
      "Proposal document (≈ 10 pages)",
      "Proposal presentation slides",
      "Project charter",
      "Gantt chart & timeline",
    ],
  },
  {
    id: "P1",
    title: "Progress Presentation 1",
    date: "January 2026",
    marks: "Marks Allocated: 15%",
    status: "Completed",
    description:
      "The first progress presentation demonstrated the completion of the literature survey, finalized methodology, initial prototype hardware setup, and preliminary model training results for the driver drowsiness detection component.",
    deliverables: [
      "Progress report – Volume 1",
      "PP1 presentation slides",
      "Initial CNN model (v0.1)",
      "Hardware prototype documentation",
    ],
  },
  {
    id: "P2",
    title: "Progress Presentation 2",
    date: "March 2026",
    marks: "Marks Allocated: 18%",
    status: "Completed",
    description:
      "The second progress presentation showcased fully integrated sub-systems: the edge-deployed driver monitoring module, GPS-based speed enforcement, and a functional beta of the Fleet Ops Dashboard with live data streaming.",
    deliverables: [
      "Progress report – Volume 2",
      "PP2 presentation slides",
      "Integrated prototype (v1.0)",
      "Dashboard beta demo video",
    ],
  },
  {
    id: "FA",
    title: "Final presentation",
    date: "April 2026",
    marks: "Marks Allocated: 30%",
    status: "Upcoming",
    description:
      "The final assessment covers the complete, evaluated research system. All four research components must be fully functional, tested on live bus routes, and documented in the final thesis volume. The panel evaluates innovation, technical depth, and real-world impact.",
    deliverables: [
      "Final thesis document (4 volumes + main)",
      "Final presentation slides",
      "Complete system demo",
      "Published research paper (or draft)",
    ],
  },
  {
    id: "VV",
    title: "Viva",
    date: "April 2026",
    marks: "Marks Allocated: 10%",
    status: "Pending",
    description:
      "The viva is an individual oral examination where each researcher defends their specific contribution to the project. The panel assesses depth of technical understanding, individual contribution, and ability to handle critical questions.",
    deliverables: [
      "Individual contribution summary",
      "Viva preparation notes",
      "Component-level demo",
    ],
  },
];

const statusConfig: Record<Status, { color: string; bg: string; icon: React.ElementType; label: string }> = {
  Completed: { color: "text-emerald-700", bg: "bg-emerald-50 border-emerald-200", icon: FaCheckCircle, label: "Completed" },
  Upcoming:  { color: "text-amber-700",   bg: "bg-amber-50 border-amber-200",   icon: FaClock,        label: "Upcoming"  },
  Pending:   { color: "text-gray-500",    bg: "bg-gray-50 border-gray-200",     icon: FaCalendarAlt,  label: "Pending"   },
};

const MilestonesSection = () => {
  const [openId, setOpenId] = useState<string | null>("PP");

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section id="milestones" className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          {/* Left label */}
          <div className="w-full lg:w-48 shrink-0">
            <span className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#ff4b12]">
              MILESTONES
            </span>
          </div>

          {/* Right content */}
          <div className="flex-1 w-full">
            <h2 className="font-display text-[2.5rem] font-bold tracking-tight text-[#111] md:text-[3.5rem] lg:text-[4rem] leading-[1.1]">
              Project Milestones
            </h2>
            <p className="mt-4 text-[17px] font-medium leading-[1.8] text-gray-500 max-w-2xl">
              A structured timeline of all research assessments — including dates, marks allocation,
              deliverables, and current status. Click any milestone to expand details.
            </p>

            {/* Summary badges */}
            <div className="mt-8 flex flex-wrap gap-4">
              {(["Completed", "Upcoming", "Pending"] as Status[]).map((s) => {
                const cfg = statusConfig[s];
                const Icon = cfg.icon;
                const count = milestones.filter((m) => m.status === s).length;
                return (
                  <div key={s} className={`flex items-center gap-2 px-4 py-2 rounded-full border text-[12px] font-bold ${cfg.bg} ${cfg.color}`}>
                    <Icon className="text-sm" />
                    {count} {cfg.label}
                  </div>
                );
              })}
            </div>

            {/* Timeline + Accordion */}
            <div className="mt-12 relative">
              {/* Vertical line */}
              <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-200 hidden sm:block" />

              <div className="space-y-4">
                {milestones.map((m, idx) => {
                  const cfg = statusConfig[m.status];
                  const StatusIcon = cfg.icon;
                  const isOpen = openId === m.id;

                  return (
                    <div key={m.id} className="relative sm:pl-16">
                      {/* Timeline dot */}
                      <div className={`absolute left-0 top-6 h-10 w-10 rounded-full border-2 hidden sm:flex items-center justify-center shadow-md z-10 ${
                        m.status === "Completed" ? "bg-[#ff4b12] border-[#ff4b12] text-white" :
                        m.status === "Upcoming"  ? "bg-amber-400 border-amber-400 text-white" :
                                                   "bg-white border-gray-300 text-gray-400"
                      }`}>
                        {m.status === "Completed" ? <FaTrophy className="text-sm" /> : <span className="text-[11px] font-black">{String(idx + 1).padStart(2,"0")}</span>}
                      </div>

                      {/* Card */}
                      <div className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                        isOpen ? "border-[#ff4b12]/30 shadow-xl shadow-orange-50" : "border-gray-200 shadow-sm hover:shadow-md"
                      }`}>
                        {/* Header – always visible, acts as dropdown trigger */}
                        <button
                          id={`milestone-btn-${m.id}`}
                          aria-expanded={isOpen}
                          onClick={() => toggle(m.id)}
                          className="w-full flex items-center justify-between gap-4 p-6 text-left bg-white hover:bg-gray-50/50 transition-colors"
                        >
                          <div className="flex items-center gap-4 flex-1 min-w-0">
                            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[11px] font-bold shrink-0 ${cfg.bg} ${cfg.color}`}>
                              <StatusIcon className="text-xs" />
                              {cfg.label}
                            </div>
                            <div className="min-w-0">
                              <h3 className="font-display font-bold text-lg text-[#111] leading-snug truncate">
                                {m.title}
                              </h3>
                              <div className="flex flex-wrap items-center gap-3 mt-1">
                                <span className="text-[12px] text-gray-400 font-medium flex items-center gap-1">
                                  <FaCalendarAlt className="text-[#ff4b12]" /> {m.date}
                                </span>
                                <span className="text-[12px] text-gray-400 font-medium">·</span>
                                <span className="text-[12px] text-gray-500 font-semibold">{m.marks}</span>
                              </div>
                            </div>
                          </div>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.25 }}
                            className="shrink-0 text-gray-400"
                          >
                            <FaChevronDown />
                          </motion.div>
                        </button>

                        {/* Expanded content */}
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              key="content"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.35, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-8 border-t border-gray-100 pt-6 bg-white">
                                <p className="text-[15px] leading-[1.85] text-gray-600 font-medium mb-6">
                                  {m.description}
                                </p>
                                <h4 className="text-[12px] font-extrabold uppercase tracking-[0.15em] text-[#ff4b12] mb-3">
                                  Key Deliverables
                                </h4>
                                <ul className="grid sm:grid-cols-2 gap-2">
                                  {m.deliverables.map((d, i) => (
                                    <li key={i} className="flex items-start gap-2 text-[14px] text-gray-700 font-medium">
                                      <FaCheckCircle className={`mt-0.5 shrink-0 ${m.status === "Completed" ? "text-emerald-500" : "text-gray-300"}`} />
                                      {d}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MilestonesSection;
