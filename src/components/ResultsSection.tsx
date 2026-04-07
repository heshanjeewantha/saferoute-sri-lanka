import { useEffect, useRef, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const accuracyData = [
  { name: "Fatigue Detection", value: 94 },
  { name: "Speed Monitoring", value: 98 },
  { name: "Harsh Braking", value: 91 },
  { name: "Overall System", value: 95 },
];

const pieData = [
  { name: "True Positives", value: 87 },
  { name: "True Negatives", value: 8 },
  { name: "False Positives", value: 3 },
  { name: "False Negatives", value: 2 },
];

const PIE_COLORS = [
  "hsl(214, 80%, 52%)",
  "hsl(25, 95%, 55%)",
  "hsl(210, 20%, 80%)",
  "hsl(0, 70%, 60%)",
];

const AnimatedCounter = ({ target, suffix = "%" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const step = target / 40;
          const interval = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(interval);
            } else {
              setCount(Math.floor(start));
            }
          }, 30);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="font-display text-4xl font-bold text-primary md:text-5xl">
      {count}
      {suffix}
    </span>
  );
};

const ResultsSection = () => (
  <section id="results" className="section-padding bg-background">
    <div className="container mx-auto">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
          Results & Findings
        </p>
        <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
          Performance Metrics
        </h2>
      </div>

      {/* Animated counters */}
      <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
        {accuracyData.map((d) => (
          <div key={d.name} className="text-center">
            <AnimatedCounter target={d.value} />
            <p className="mt-2 text-sm font-medium text-muted-foreground">{d.name}</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h3 className="mb-4 font-display text-lg font-semibold text-card-foreground">
            Detection Accuracy (%)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={accuracyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 20%, 90%)" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis domain={[80, 100]} tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="value" fill="hsl(214, 80%, 52%)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h3 className="mb-4 font-display text-lg font-semibold text-card-foreground">
            Classification Distribution
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={4}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {pieData.map((_, i) => (
                  <Cell key={i} fill={PIE_COLORS[i]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Comparison table */}
      <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-primary/5">
            <tr>
              <th className="px-6 py-4 text-left font-display font-semibold text-card-foreground">Metric</th>
              <th className="px-6 py-4 text-center font-display font-semibold text-card-foreground">Before System</th>
              <th className="px-6 py-4 text-center font-display font-semibold text-card-foreground">After System</th>
              <th className="px-6 py-4 text-center font-display font-semibold text-accent">Improvement</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {[
              ["Fatigue-related incidents", "12/month", "2/month", "83% ↓"],
              ["Overspeeding violations", "45/month", "8/month", "82% ↓"],
              ["Response time to alerts", "15 min", "< 30 sec", "97% faster"],
              ["Driver safety score avg.", "62%", "89%", "44% ↑"],
            ].map(([metric, before, after, imp]) => (
              <tr key={metric} className="hover:bg-muted/50 transition-colors">
                <td className="px-6 py-4 font-medium text-card-foreground">{metric}</td>
                <td className="px-6 py-4 text-center text-muted-foreground">{before}</td>
                <td className="px-6 py-4 text-center text-muted-foreground">{after}</td>
                <td className="px-6 py-4 text-center font-semibold text-accent">{imp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default ResultsSection;
