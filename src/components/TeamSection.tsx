import { GraduationCap, Award } from "lucide-react";

const members = [
  { name: "A.M.S.S Abeykoon", role: "Researcher" },
  { name: "Samarakoon S.M.J.B", role: "Researcher" },
  { name: "Marasinghe M A S K", role: "Researcher" },
  { name: "Premathilaka I H J", role: "Researcher" },
];

const supervisors = [
  { name: "Shayamalee Rajapaksha", role: "Supervisor" },
  { name: "Kaushalaya Rajapaksha", role: "Co-Supervisor" },
];

const getInitials = (name: string) => {
  const parts = name.split(" ");
  return parts.length > 1 ? parts[0][0] + parts[parts.length - 1][0] : parts[0].slice(0, 2);
};

const TeamSection = () => (
  <section id="team" className="section-padding bg-background">
    <div className="container mx-auto">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
          Research Team
        </p>
        <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
          Meet the Team
        </h2>
      </div>

      {/* Members */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {members.map((m) => (
          <div
            key={m.name}
            className="hover-lift flex flex-col items-center rounded-2xl border border-border bg-card p-8 shadow-sm"
          >
            <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-2xl font-bold text-primary-foreground">
              {getInitials(m.name)}
            </div>
            <h3 className="font-display font-semibold text-card-foreground">{m.name}</h3>
            <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
              <GraduationCap className="h-4 w-4" />
              {m.role}
            </p>
          </div>
        ))}
      </div>

      {/* Supervisors */}
      <div className="mx-auto mt-12 grid max-w-2xl gap-6 sm:grid-cols-2">
        {supervisors.map((s) => (
          <div
            key={s.name}
            className="hover-lift flex flex-col items-center rounded-2xl border-2 border-accent/30 bg-card p-8 shadow-sm"
          >
            <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-accent to-primary text-2xl font-bold text-primary-foreground">
              {getInitials(s.name)}
            </div>
            <h3 className="font-display font-semibold text-card-foreground">{s.name}</h3>
            <p className="mt-1 flex items-center gap-1 text-sm font-medium text-accent">
              <Award className="h-4 w-4" />
              {s.role}
            </p>
          </div>
        ))}
      </div>

      {/* Acknowledgements */}
      <div className="mx-auto mt-16 max-w-2xl rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
        <h3 className="mb-3 font-display text-xl font-semibold text-card-foreground">
          Acknowledgements
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          We extend our sincere gratitude to the <strong>Sri Lanka Transport Board (SLTB)</strong>,{" "}
          <strong>National Transport Commission (NTC)</strong>, and the university faculty
          for their invaluable support, guidance, and resources throughout this research.
        </p>
      </div>
    </div>
  </section>
);

export default TeamSection;
