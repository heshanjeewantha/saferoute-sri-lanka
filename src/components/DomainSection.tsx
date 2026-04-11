import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBookOpen, FaSearch, FaExclamationCircle, FaBullseye,
  FaProjectDiagram, FaMicrochip,
} from "react-icons/fa";
import {
  SiTensorflow, SiPython, SiFlutter, SiNodedotjs, SiMongodb,
  SiRaspberrypi, SiOpencv, SiFirebase,
} from "react-icons/si";

const tabs = [
  {
    id: "literature",
    label: "Literature Survey",
    icon: FaBookOpen,
    content: {
      heading: "Literature Survey",
      body: [
        "Existing research on public transport safety highlights significant limitations in current monitoring systems. Studies from SLTB and NTC reveal that over 60% of accidents in Sri Lanka involve driver fatigue or distracted driving, yet real-time monitoring remains minimal.",
        "Prior work includes basic CCTV installations reviewed only post-incident, and manual inspections that provide no predictive capability. International solutions such as Mobileye and DriveCam offer partial functionality but are prohibitively expensive and lack localization for Sri Lanka's road network.",
        "Research into CNN-based drowsiness detection (Viola-Jones, DeepFace) and LSTM-based temporal analysis provide foundational models for our driver monitoring module. IoT frameworks such as MQTT and edge-computing paradigms on Raspberry Pi hardware have been validated as cost-effective alternatives to full cloud processing.",
        "GPS-based geofencing and speed-zone enforcement studies demonstrate the feasibility of automated route compliance checking, while fog-computing architectures prove compatible with real-time alerting under low-bandwidth rural conditions common in Sri Lanka.",
      ],
    },
  },
  {
    id: "gap",
    label: "Research Gap",
    icon: FaSearch,
    content: {
      heading: "Research Gap",
      body: [
        "Despite growing awareness of public transport hazards, a fully integrated, real-time, AI-driven safety monitoring system tailored for Sri Lanka's unique operating environment does not exist.",
        "Current systems are either reactive (post-incident CCTV review) or siloed (single-sensor approaches), with no unified framework combining driver behavior monitoring, road-rule violation detection, predictive bus tracking, and safety-speed estimation in one platform.",
        "Existing international products are cost-prohibitive for SLTB fleets and do not account for local road conditions, traffic patterns, or regulatory requirements. There is also a critical gap in real-time alerting and driver feedback loops to enable preemptive intervention.",
        "Furthermore, no publicly available dataset exists for Sri Lankan driving behavior, creating a data scarcity challenge that necessitates a custom data collection and annotation pipeline as part of this research.",
      ],
    },
  },
  {
    id: "problem",
    label: "Research Problem",
    icon: FaExclamationCircle,
    content: {
      heading: "Research Problem",
      body: [
        "How can an integrated, AI-driven, IoT-based safety monitoring system be designed and deployed to detect, classify, and respond to unsafe driving behaviors and road-rule violations in Sri Lankan public transport vehicles in real time?",
        "Sub-problems addressed by this research:",
      ],
      bullets: [
        "How can on-board Edge AI accurately detect driver fatigue, distraction, and non-compliance within constrained compute budgets?",
        "How can GPS telemetry and geospatial analytics be used to enforce speed-zone compliance and map high-risk road segments?",
        "How can multi-sensor data fusion improve the reliability and reduce false-positive rates of safety alerts?",
        "How can a cost-effective hardware architecture be designed for deployment across a diverse public bus fleet?",
      ],
    },
  },
  {
    id: "objectives",
    label: "Research Objectives",
    icon: FaBullseye,
    content: {
      heading: "Research Objectives",
      objectives: [
        {
          num: "01",
          title: "Driver Behavior Monitoring",
          desc: "Design and implement a real-time CNN-based system to detect driver drowsiness, phone usage, yawning, and seat belt non-compliance using on-board camera feeds.",
        },
        {
          num: "02",
          title: "Road-Rule Violation Detection",
          desc: "Develop a GPS-integrated module to monitor vehicle speed against dynamic speed-zone maps and detect route deviations or unauthorized stops.",
        },
        {
          num: "03",
          title: "Predictive Bus Tracking",
          desc: "Build an LSTM-based model to predict bus arrival times and detect schedule anomalies, improving commuter information accuracy.",
        },
        {
          num: "04",
          title: "Safety-Speed Estimation",
          desc: "Create an accelerometer-fusion algorithm to estimate safe cornering and braking thresholds specific to Sri Lankan road profiles.",
        },
        {
          num: "05",
          title: "Centralized Dashboard",
          desc: "Develop a web-based ops dashboard for fleet supervisors integrating live alerts, historical analytics, incident replay, and driver scoring.",
        },
      ],
    },
  },
  {
    id: "methodology",
    label: "Methodology",
    icon: FaProjectDiagram,
    content: {
      heading: "Methodology",
      steps: [
        { phase: "Phase 1", title: "Data Collection & Annotation", desc: "Deploy prototype devices on 5 SLTB buses; collect 200+ hours of driver video, GPS tracks, and accelerometer logs. Annotate for drowsiness, phone use, and over-speed events." },
        { phase: "Phase 2", title: "Model Development", desc: "Train CNN models (MobileNetV3) for driver monitoring and LSTM networks for temporal anomaly detection; optimize for Raspberry Pi 4 deployment via TFLite quantization." },
        { phase: "Phase 3", title: "Edge Integration", desc: "Package models into a Docker-based edge runtime on Raspberry Pi 4 + Coral TPU; implement MQTT-based telemetry pipeline to the central cloud server." },
        { phase: "Phase 4", title: "Dashboard & Alerting", desc: "Build the Fleet Ops Dashboard using React + Node.js, integrating live WebSocket alerts, Leaflet.js geo-maps, and Recharts analytics." },
        { phase: "Phase 5", title: "Evaluation & Testing", desc: "Conduct a 6-week pilot on live routes; measure detection accuracy, alert latency, false-positive rates, and driver score delta against baseline." },
      ],
    },
  },
  {
    id: "technologies",
    label: "Technologies Used",
    icon: FaMicrochip,
    content: {
      heading: "Technologies Used",
      technologies: [
        { Icon: SiTensorflow, name: "TensorFlow / TFLite", category: "AI/ML" },
        { Icon: SiPython, name: "Python 3.10", category: "Backend AI" },
        { Icon: SiRaspberrypi, name: "Raspberry Pi 4", category: "Edge Hardware" },
        { Icon: SiOpencv, name: "OpenCV", category: "Computer Vision" },
        { Icon: SiNodedotjs, name: "Node.js", category: "Backend API" },
        { Icon: SiMongodb, name: "MongoDB", category: "Database" },
        { Icon: SiFlutter, name: "Flutter", category: "Mobile App" },
        { Icon: SiFirebase, name: "Firebase", category: "Cloud / Auth" },
      ],
    },
  },
];

const DomainSection = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section id="domain" className="bg-gray-50 py-24 sm:py-32">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          <div className="w-full lg:w-48 shrink-0">
            <span className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#ff4b12]">
              DOMAIN
            </span>
          </div>
          <div className="flex-1 w-full">
            <h2 className="font-display text-[2.5rem] font-bold tracking-tight text-[#111] md:text-[3.5rem] lg:text-[4rem] leading-[1.1]">
              Research Domain
            </h2>
            <p className="mt-4 text-[17px] font-medium leading-[1.8] text-gray-500 max-w-2xl">
              Explore the academic foundation, identified gaps, problem statement, objectives,
              methodology, and technology stack powering SafeRoute Sri Lanka.
            </p>

            {/* Tab Bar */}
            <div className="mt-12 flex flex-wrap gap-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab.id === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-[12px] font-bold uppercase tracking-[0.08em] transition-all duration-200 ${
                      isActive
                        ? "bg-[#ff4b12] text-white shadow-lg shadow-orange-200"
                        : "bg-white text-gray-500 border border-gray-200 hover:border-[#ff4b12]/30 hover:text-gray-800"
                    }`}
                  >
                    <Icon className={isActive ? "text-white" : "text-[#ff4b12]"} />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Tab Content */}
            <div className="mt-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35 }}
                  className="bg-white rounded-[2.5rem] border border-gray-200 shadow-xl p-10 sm:p-14"
                >
                  <h3 className="font-display text-2xl lg:text-3xl font-bold text-[#111] mb-8">
                    {activeTab.content.heading}
                  </h3>

                  {/* Body paragraphs */}
                  {"body" in activeTab.content && activeTab.content.body && (
                    <div className="space-y-4">
                      {activeTab.content.body.map((para, i) => (
                        <p key={i} className="text-[15px] leading-[1.85] text-gray-600 font-medium">
                          {para}
                        </p>
                      ))}
                    </div>
                  )}

                  {/* Bullets (Research Problem sub-questions) */}
                  {"bullets" in activeTab.content && activeTab.content.bullets && (
                    <ul className="mt-6 space-y-3">
                      {activeTab.content.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-3 text-[15px] text-gray-600 font-medium">
                          <span className="mt-1.5 h-2 w-2 rounded-full bg-[#ff4b12] shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Objectives numbered list */}
                  {"objectives" in activeTab.content && activeTab.content.objectives && (
                    <div className="space-y-6">
                      {activeTab.content.objectives.map((obj) => (
                        <div key={obj.num} className="flex gap-6 items-start">
                          <span className="text-[2rem] font-black text-gray-100 select-none leading-none shrink-0 pt-1">
                            {obj.num}
                          </span>
                          <div>
                            <h4 className="font-bold text-[#111] text-lg mb-1">{obj.title}</h4>
                            <p className="text-[15px] leading-[1.8] text-gray-600 font-medium">{obj.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Methodology phases */}
                  {"steps" in activeTab.content && activeTab.content.steps && (
                    <div className="space-y-0">
                      {activeTab.content.steps.map((step, i) => (
                        <div key={i} className="flex gap-6 items-start py-6 border-b border-gray-100 last:border-0">
                          <div className="shrink-0 flex flex-col items-center">
                            <div className="h-10 w-10 rounded-full bg-[#ff4b12] text-white flex items-center justify-center text-[11px] font-black">
                              {i + 1}
                            </div>
                            {i < (activeTab.content as any).steps.length - 1 && (
                              <div className="w-px flex-1 bg-gray-200 mt-2 min-h-[2rem]" />
                            )}
                          </div>
                          <div className="flex-1 pb-2">
                            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#ff4b12]">
                              {step.phase}
                            </span>
                            <h4 className="font-bold text-[#111] text-lg mt-1 mb-2">{step.title}</h4>
                            <p className="text-[15px] leading-[1.8] text-gray-600 font-medium">{step.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Technologies grid */}
                  {"technologies" in activeTab.content && activeTab.content.technologies && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                      {activeTab.content.technologies.map(({ Icon, name, category }) => (
                        <div
                          key={name}
                          className="group flex flex-col items-center gap-3 p-6 rounded-2xl border border-gray-200 bg-gray-50 hover:border-[#ff4b12]/40 hover:bg-white hover:shadow-lg transition-all"
                        >
                          <Icon className="text-4xl text-[#ff4b12] group-hover:scale-110 transition-transform" />
                          <div className="text-center">
                            <p className="text-[13px] font-bold text-[#111]">{name}</p>
                            <p className="text-[11px] text-gray-400 font-medium mt-0.5">{category}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DomainSection;
