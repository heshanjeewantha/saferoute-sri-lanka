import { FileText, Presentation, BookOpen, Download } from "lucide-react";

const publications = [
  {
    icon: BookOpen,
    title: "Research Paper",
    desc: "Real-Time Safety Monitoring System for Public Transport: An AI-Driven Approach",
    status: "Published",
  },
  {
    icon: FileText,
    title: "Final Report",
    desc: "Comprehensive documentation of the research methodology, implementation, and findings",
    status: "Completed",
  },
  {
    icon: Presentation,
    title: "Presentation Slides",
    desc: "Visual summary of key findings for academic conference and viva presentation",
    status: "Available",
  },
];

const PublicationsSection = () => (
  <section id="publications" className="section-padding bg-secondary/50">
    <div className="container mx-auto">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
          Publications & Deliverables
        </p>
        <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
          Research Outputs
        </h2>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-3">
        {publications.map((p) => (
          <div
            key={p.title}
            className="hover-lift flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center shadow-sm"
          >
            <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-4 text-primary">
              <p.icon className="h-8 w-8" />
            </div>
            <h3 className="mb-1 font-display text-lg font-semibold text-card-foreground">
              {p.title}
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">{p.desc}</p>
            <span className="mb-4 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
              {p.status}
            </span>
            <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 hover:scale-105">
              <Download className="h-4 w-4" />
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PublicationsSection;
