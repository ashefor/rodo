import Link from "next/link";
import { Globe, Share2, Mail, MapPin } from "lucide-react";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-heading text-3xl font-bold tracking-tighter"
            >
              RL
            </Link>
            <p className="mt-3 text-gray-600 text-sm max-w-xs">
              Capturing moments and creating unforgettable experiences through
              mobile videography, content creation, and event planning in Abuja.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              Get In Touch
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <a
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {SOCIAL_LINKS.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                <span>Abuja, Nigeria</span>
              </li>
            </ul>

            <div className="flex gap-3 mt-5">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm border border-gray-100"
                aria-label="Instagram"
              >
                <Globe size={18} />
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm border border-gray-100"
                aria-label="Twitter"
              >
                <Share2 size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Rodo Lens. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
