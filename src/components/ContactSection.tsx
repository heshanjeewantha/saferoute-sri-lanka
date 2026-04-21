import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      alert("Email service is not configured yet. Please set EmailJS environment variables.");
      return;
    }

    setIsSending(true);
    setStatus("idle");

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        {
          publicKey,
        },
      );

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
      alert("Failed to send message. Please try again in a moment.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
            Get in Touch
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Contact Us
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-2">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-card p-8 shadow-sm"
          >
            <div className="mb-5">
              <label className="mb-1.5 block text-sm font-medium text-card-foreground">
                Name
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/20"
                placeholder="Your name"
              />
            </div>
            <div className="mb-5">
              <label className="mb-1.5 block text-sm font-medium text-card-foreground">
                Email
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/20"
                placeholder="you@email.com"
              />
            </div>
            <div className="mb-6">
              <label className="mb-1.5 block text-sm font-medium text-card-foreground">
                Message
              </label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/20 resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              disabled={isSending}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:opacity-90 hover:scale-[1.02]"
            >
              <Send className="h-4 w-4" />
              {isSending ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="mt-4 text-sm text-green-600">Message sent successfully. Thank you!</p>
            )}

            {status === "error" && (
              <p className="mt-4 text-sm text-red-600">Unable to send message right now.</p>
            )}
          </form>

          {/* Info */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <div className="mb-3 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="mb-1 font-display font-semibold text-card-foreground">Email</h3>
              <p className="text-sm text-muted-foreground">research@safetransit.lk</p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <div className="mb-3 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="mb-1 font-display font-semibold text-card-foreground">
                University Address
              </h3>
              <p className="text-sm text-muted-foreground">
                Faculty of Computing<br />
                Sri Lanka Institute of Information Technology<br />
                Malabe, Sri Lanka
              </p>
            </div>

            {/* Map embed */}
            <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
              <iframe
                title="University Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.2!2d79.97!3d6.91!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTQnMzYuMCJOIDc5wrA1OCcxMi4wIkU!5e0!3m2!1sen!2slk!4v1234567890"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
