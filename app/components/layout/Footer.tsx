import { FaImdb, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { contactEmail, navLinks, socialLinks } from "~/data/site";

const iconMap = {
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  imdb: FaImdb,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-ivory/10 bg-matte-black">
      <div className="container-luxury section-padding pb-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="font-serif text-2xl text-gold">Eba Sheba</div>
            <p className="mt-4 text-sm leading-relaxed text-soft-gray">
              Award-winning Indonesian Make-Up Artist, creative visionary, and
              Executive Producer.
            </p>
          </div>

          <div>
            <h3 className="text-xs tracking-widest uppercase text-gold">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-soft-gray transition-colors hover:text-ivory"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs tracking-widest uppercase text-gold">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-soft-gray">
              <li>
                <a
                  href={`mailto:${contactEmail}`}
                  className="transition-colors hover:text-ivory"
                >
                  {contactEmail}
                </a>
              </li>
              <li>Jakarta, Indonesia</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs tracking-widest uppercase text-gold">
              Connect
            </h3>
            <div className="mt-4 flex gap-4">
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
                    className="flex h-10 w-10 items-center justify-center border border-ivory/20 text-ivory transition-all hover:border-gold hover:text-gold"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-ivory/10 pt-8 text-center text-xs text-soft-gray">
          &copy; {currentYear} Eba Sheba. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
