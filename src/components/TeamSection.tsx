import { FaGraduationCap, FaAward, FaLinkedin, FaEnvelope } from "react-icons/fa";

const teamData = {
  members: [
    { 
      name: "A.M.S.S Abeykoon", 
      role: "Researcher", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIklI4-UCjA95C7XBS8yNErsEEW6cEkAakYg&s",
      email: "mailto:it22592156@my.sliit.lk"
    },
    { 
      name: "Samarakoon S.M.J.B", 
      role: "Researcher", 
      image: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/480926415_1678764509408963_7863278183128774286_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=53a332&_nc_ohc=g--ynZtAvrwQ7kNvwGrqgyB&_nc_oc=Adp3uw92hGkfjx971joqIdKZB1J6S3pY0S68fUwU0jMjfmWnZRcOVfaKROl6W_wn3GM&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=BPyiKb_JUr97-siGMwCt0Q&_nc_ss=7a3a8&oh=00_Af3sS5PKsioUMtf3e8Yh1ESmmUVOof8_t8nsY0LowmnZ4A&oe=69E00FFB",
      email: "mailto:it22569486@my.sliit.lk"
    },
    { 
      name: "Marasinghe M A S K", 
      role: "Researcher", 
      image: "https://media.licdn.com/dms/image/v2/D5603AQE0KOxxlMXgkg/profile-displayphoto-shrink_400_400/B56ZcFhgnNGoAg-/0/1748144361392?e=2147483647&v=beta&t=0u7cFq5wvnBIRFVa4SvTMpSc21IxZbX4eznyvZ3ntBc",
      email: "mailto:it22579768@my.sliit.lk"
    },
    { 
      name: "Premathilaka I H J", 
      role: "Researcher", 
      image: "src/assets/heshan.png",
      email: "mailto:it22578532@my.sliit.lk"
    },
  ],
  supervisors: [
    { 
      name: "Shayamalee Rajapaksha", 
      role: "Supervisor", 
      image: "https://static.sliit.lk/profile/thisaras-1713715613.jpg",
      linkedin: "https://www.linkedin.com/in/thisara-shyamalee-8b5877193/"
    },
    { 
      name: "Kaushalaya Rajapaksha", 
      role: "Co-Supervisor", 
      image: "https://media.licdn.com/dms/image/v2/D5603AQEDEpS8OvRjQQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1681099803529?e=2147483647&v=beta&t=JI2tckKN8ZQkviMAPwT63FirYgIxjWqRyijAHDAQsnA",
      linkedin: "https://www.linkedin.com/in/kaushalya-rajapakse/"
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
