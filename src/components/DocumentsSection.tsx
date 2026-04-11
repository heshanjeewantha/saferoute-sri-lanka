import { motion } from "framer-motion";
import { FaFileAlt, FaDownload, FaExternalLinkAlt, FaFilePdf, FaFileWord, FaLock } from "react-icons/fa";

type DocStatus = "Available" | "Pending" | "Restricted";

interface DocItem {
  id: string;
  title: string;
  subtitle: string;
  type: "pdf" | "word" | "link";
  status: DocStatus;
  link?: string;
  size?: string;
}

interface DocGroup {
  category: string;
  docs: DocItem[];
}

const docGroups: DocGroup[] = [
  {
    category: "Project Proposal",
    docs: [
      {
        id: "charter",
        title: "Project Charter",
        subtitle: "Formal agreement defining project scope, team roles, and supervisor sign-off.",
        type: "pdf",
        status: "Available",
        link: "#",
        size: "1.2 MB",
      },
      {
        id: "proposal-doc",
        title: "Proposal Document",
        subtitle: "Full proposal including literature review, methodology overview, and Gantt chart.",
        type: "pdf",
        status: "Available",
        link: "#",
        size: "3.8 MB",
      },
    ],
  },
  {
    category: "Check List Documents",
    docs: [
      {
        id: "checklist-pp",
        title: "Proposal Checklist",
        subtitle: "Supervisor-signed assessment checklist for the project proposal submission.",
        type: "pdf",
        status: "Available",
        link: "#",
        size: "0.4 MB",
      },
      {
        id: "checklist-p1",
        title: "Progress Presentation 1 Checklist",
        subtitle: "Evaluation checklist for PP1 panel assessment.",
        type: "pdf",
        status: "Available",
        link: "#",
        size: "0.4 MB",
      },
      {
        id: "checklist-p2",
        title: "Progress Presentation 2 Checklist",
        subtitle: "Evaluation checklist for PP2 panel assessment.",
        type: "pdf",
        status: "Available",
        link: "#",
        size: "0.4 MB",
      },
    ],
  },
  {
    category: "Final Document",
    docs: [
      {
        id: "final-main",
        title: "Main Thesis Document",
        subtitle: "Complete research thesis covering all components and consolidated findings.",
        type: "pdf",
        status: "Pending",
        size: "TBD",
      },
      {
        id: "final-vol1",
        title: "Volume 1 – Driver Behavior Monitoring",
        subtitle: "Individual component thesis: CNN-based driver drowsiness and distraction detection.",
        type: "pdf",
        status: "Pending",
        size: "TBD",
      },
      {
        id: "final-vol2",
        title: "Volume 2 – Road-Rule Violation Detection",
        subtitle: "Individual component thesis: GPS-based speed zone enforcement and route compliance.",
        type: "pdf",
        status: "Pending",
        size: "TBD",
      },
      {
        id: "final-vol3",
        title: "Volume 3 – Predictive Bus Tracking",
        subtitle: "Individual component thesis: LSTM-based arrival prediction and anomaly detection.",
        type: "pdf",
        status: "Pending",
        size: "TBD",
      },
      {
        id: "final-vol4",
        title: "Volume 4 – Safety-Speed Estimation",
        subtitle: "Individual component thesis: Accelerometer fusion for road-specific speed thresholds.",
        type: "pdf",
        status: "Pending",
        size: "TBD",
      },
    ],
  },
];

const statusConfig: Record<DocStatus, { label: string; color: string; bg: string }> = {
  Available:  { label: "Available",  color: "text-emerald-700", bg: "bg-emerald-50 border-emerald-200" },
  Pending:    { label: "Pending",    color: "text-amber-700",   bg: "bg-amber-50 border-amber-200"     },
  Restricted: { label: "Restricted", color: "text-red-700",     bg: "bg-red-50 border-red-200"         },
};

const TypeIcon = ({ type }: { type: DocItem["type"] }) => {
  if (type === "pdf")  return <FaFilePdf  className="text-[#ff4b12] text-xl" />;
  if (type === "word") return <FaFileWord className="text-blue-500 text-xl" />;
  return <FaFileAlt className="text-gray-400 text-xl" />;
};

const DocumentsSection = () => (
  <section id="documents" className="bg-gray-50 py-24 sm:py-32">
    <div className="container mx-auto px-6 lg:px-16">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
        {/* Left label */}
        <div className="w-full lg:w-48 shrink-0">
          <span className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#ff4b12]">
            DOCUMENTS
          </span>
        </div>

        {/* Right content */}
        <div className="flex-1 w-full">
          <h2 className="font-display text-[2.5rem] font-bold tracking-tight text-[#111] md:text-[3.5rem] lg:text-[4rem] leading-[1.1]">
            Project Documents
          </h2>
          <p className="mt-4 text-[17px] font-medium leading-[1.8] text-gray-500 max-w-2xl">
            All produced and pending project documents. Click "Download" to access available files,
            or check back for documents still in progress.
          </p>

          {/* Document groups */}
          <div className="mt-12 space-y-12">
            {docGroups.map((group, gi) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: gi * 0.1 }}
              >
                {/* Category header */}
                <div className="flex items-center gap-4 mb-6">
                  <h3 className="font-display text-xl font-bold text-[#111]">{group.category}</h3>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>

                {/* Doc cards */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {group.docs.map((doc, di) => {
                    const sc = statusConfig[doc.status];
                    return (
                      <motion.div
                        key={doc.id}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: di * 0.08 }}
                        className="group flex flex-col bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg hover:border-[#ff4b12]/20 transition-all"
                      >
                        {/* Top row */}
                        <div className="flex items-start justify-between gap-3 mb-4">
                          <div className="h-12 w-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 group-hover:bg-orange-50 transition-colors">
                            <TypeIcon type={doc.type} />
                          </div>
                          <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${sc.bg} ${sc.color}`}>
                            {sc.label}
                          </span>
                        </div>

                        {/* Title + subtitle */}
                        <h4 className="font-bold text-[14px] text-[#111] leading-snug mb-2">
                          {doc.title}
                        </h4>
                        <p className="text-[13px] text-gray-500 font-medium leading-relaxed flex-1">
                          {doc.subtitle}
                        </p>

                        {/* Footer row */}
                        <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                          {doc.size && (
                            <span className="text-[12px] text-gray-400 font-medium">{doc.size}</span>
                          )}
                          {doc.status === "Available" && doc.link ? (
                            <a
                              href={doc.link}
                              id={`doc-download-${doc.id}`}
                              className="ml-auto flex items-center gap-2 rounded-full bg-[#ff4b12] hover:bg-[#e04310] text-white px-4 py-2 text-[11px] font-bold uppercase tracking-wide transition-all hover:scale-105 shadow-sm"
                            >
                              <FaDownload className="text-xs" />
                              Download
                            </a>
                          ) : doc.status === "Pending" ? (
                            <span className="ml-auto flex items-center gap-1.5 text-[11px] text-amber-600 font-bold">
                              <FaLock className="text-xs" /> Coming Soon
                            </span>
                          ) : (
                            <a
                              href={doc.link}
                              id={`doc-view-${doc.id}`}
                              className="ml-auto flex items-center gap-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 text-[11px] font-bold uppercase tracking-wide transition-all"
                            >
                              <FaExternalLinkAlt className="text-xs" />
                              View
                            </a>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default DocumentsSection;
