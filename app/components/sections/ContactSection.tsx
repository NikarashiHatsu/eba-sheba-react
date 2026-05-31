import { motion, AnimatePresence } from "framer-motion";
import { useState, type FormEvent } from "react";
import { FaCheck, FaImdb, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Button } from "~/components/ui/Button";
import { contactEmail, socialLinks } from "~/data/site";
import {
  SectionHeading,
  SectionWrapper,
} from "~/components/layout/SectionWrapper";

const projectTypes = [
  "General Inquiry",
  "Commercial Booking",
  "Production Inquiry",
  "Bridal",
  "Editorial",
  "Film & Television",
];

const iconMap = {
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  imdb: FaImdb,
};

export function ContactSection() {
  const [projectType, setProjectType] = useState("General Inquiry");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", message: "" });
      setProjectType("General Inquiry");
    }, 4000);
  };

  return (
    <SectionWrapper id="contact">
      <SectionHeading
        title="Let's Create Something Extraordinary"
        subtitle="For bookings, collaborations, and production inquiries"
      />

      <div className="mx-auto max-w-3xl">
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          <Button
            variant={projectType === "General Inquiry" ? "primary" : "outline"}
            onClick={() => setProjectType("General Inquiry")}
          >
            Email Inquiry
          </Button>
          <Button
            variant={
              projectType === "Commercial Booking" ? "primary" : "outline"
            }
            onClick={() => setProjectType("Commercial Booking")}
          >
            Commercial Booking
          </Button>
          <Button
            variant={
              projectType === "Production Inquiry" ? "primary" : "outline"
            }
            onClick={() => setProjectType("Production Inquiry")}
          >
            Production Inquiry
          </Button>
        </div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex flex-col items-center border border-gold/30 bg-gold/5 py-16 text-center"
            >
              <FaCheck className="text-4xl text-gold" />
              <h3 className="mt-4 font-serif text-2xl text-ivory">
                Message Received
              </h3>
              <p className="mt-2 text-soft-gray">
                Thank you for reaching out. We will be in touch shortly.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="space-y-6 border border-ivory/10 bg-charcoal p-8 md:p-12"
            >
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs tracking-widest uppercase text-soft-gray"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className="w-full border border-ivory/20 bg-matte-black px-4 py-3 text-ivory outline-none transition-colors focus:border-gold"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs tracking-widest uppercase text-soft-gray"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full border border-ivory/20 bg-matte-black px-4 py-3 text-ivory outline-none transition-colors focus:border-gold"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="projectType"
                  className="mb-2 block text-xs tracking-widest uppercase text-soft-gray"
                >
                  Project Type
                </label>
                <select
                  id="projectType"
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full border border-ivory/20 bg-matte-black px-4 py-3 text-ivory outline-none transition-colors focus:border-gold"
                >
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs tracking-widest uppercase text-soft-gray"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full resize-none border border-ivory/20 bg-matte-black px-4 py-3 text-ivory outline-none transition-colors focus:border-gold"
                />
              </div>

              <Button type="submit" className="w-full md:w-auto">
                Send Message
              </Button>

              <p className="text-center text-sm text-soft-gray">
                Or email directly at{" "}
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-gold hover:underline"
                >
                  {contactEmail}
                </a>
              </p>
            </motion.form>
          )}
        </AnimatePresence>

        <div className="mt-12 flex justify-center gap-4">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                aria-label={link.label}
                className="flex h-12 w-12 items-center justify-center border border-ivory/20 text-ivory transition-all hover:border-gold hover:text-gold"
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
