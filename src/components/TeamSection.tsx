import { FaGraduationCap, FaAward, FaLinkedin, FaEnvelope } from "react-icons/fa";

const teamData = {
  members: [
    { 
      name: "A.M.S.S Abeykoon", 
      role: "Researcher", 
      image: "https://ui-avatars.com/api/?name=A+A&background=f97316&color=fff&size=150",
      email: "mailto:contact@example.com"
    },
    { 
      name: "Samarakoon S.M.J.B", 
      role: "Researcher", 
      image: "https://ui-avatars.com/api/?name=S+S&background=f97316&color=fff&size=150",
      email: "mailto:contact@example.com"
    },
    { 
      name: "Marasinghe M A S K", 
      role: "Researcher", 
      image: "https://ui-avatars.com/api/?name=M+M&background=f97316&color=fff&size=150",
      email: "mailto:contact@example.com"
    },
    { 
      name: "Premathilaka I H J", 
      role: "Researcher", 
      image: "https://ui-avatars.com/api/?name=P+I&background=f97316&color=fff&size=150",
      email: "mailto:contact@example.com"
    },
  ],
  supervisors: [
    { 
      name: "Shayamalee Rajapaksha", 
      role: "Supervisor", 
      image: "https://ui-avatars.com/api/?name=S+R&background=ea580c&color=fff&size=150",
      linkedin: "#"
    },
    { 
      name: "Kaushalaya Rajapaksha", 
      role: "Co-Supervisor", 
      image: "https://ui-avatars.com/api/?name=K+R&background=ea580c&color=fff&size=150",
      linkedin: "#"
    },
  ]
};

const TeamSection = () => (
  <section id="team" className="section-padding bg-background/50">
    <div className="container mx-auto">
      <div className="mx-auto max-w-3xl text-center flex flex-col items-center">
        <span className="mb-3 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-primary">
          Research Team
        </span>
        <h2 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Meet the Minds Behind
        </h2>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          Our dedicated team of researchers and supervisors working enthusiastically to revolutionize Sri Lanka's public transport safety.
        </p>
      </div>

      {/* Members */}
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {teamData.members.map((m) => (
          <div
            key={m.name}
            className="group hover-lift relative flex flex-col items-center overflow-hidden rounded-2xl border border-border/50 bg-card p-8 shadow-sm transition-all hover:shadow-xl hover:border-primary/30"
          >
            <div className="mb-6 h-28 w-28 overflow-hidden rounded-full ring-4 ring-primary/10 transition-transform duration-500 group-hover:scale-105">
              <img src={m.image} alt={m.name} className="h-full w-full object-cover" />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">{m.name}</h3>
            <p className="mt-2 flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <FaGraduationCap className="text-primary" />
              {m.role}
            </p>
            <a href={m.email} className="mt-4 rounded-full bg-secondary p-2 text-muted-foreground transition-colors hover:bg-primary hover:text-white">
              <FaEnvelope />
            </a>
          </div>
        ))}
      </div>

      {/* Supervisors */}
      <div className="mx-auto mt-16 grid max-w-2xl gap-8 sm:grid-cols-2">
        {teamData.supervisors.map((s) => (
          <div
            key={s.name}
            className="group hover-lift relative flex flex-col items-center overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-b from-card to-primary/5 p-8 shadow-md transition-all hover:shadow-2xl hover:border-primary/50"
          >
            <div className="mb-6 h-32 w-32 overflow-hidden rounded-full ring-4 ring-primary/20 transition-transform duration-500 group-hover:scale-105">
              <img src={s.image} alt={s.name} className="h-full w-full object-cover" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">{s.name}</h3>
            <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-primary">
              <FaAward className="text-primary" />
              {s.role}
            </p>
            {s.linkedin && (
              <a href={s.linkedin} className="mt-5 rounded-full bg-secondary p-2 text-muted-foreground transition-colors hover:bg-[#0077b5] hover:text-white">
                <FaLinkedin size={18} />
              </a>
            )}
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
