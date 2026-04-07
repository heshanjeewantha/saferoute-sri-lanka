import { Shield } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card py-10">
    <div className="container mx-auto flex flex-col items-center gap-4 text-center">
      <div className="flex items-center gap-2">
        <Shield className="h-6 w-6 text-accent" />
        <span className="font-display text-lg font-bold text-foreground">SafeTransit</span>
      </div>
      <p className="max-w-md text-sm text-muted-foreground">
        A university research project dedicated to enhancing public transport safety in Sri Lanka through AI-driven real-time monitoring.
      </p>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} SafeTransit Research Team. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
