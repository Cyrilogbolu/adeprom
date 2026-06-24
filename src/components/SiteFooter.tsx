import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/adeprom-logo.png.asset.json";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.43a8.16 8.16 0 0 0 4.77 1.52V6.5a4.85 4.85 0 0 1-1.84-.81z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-brand-deep text-white mt-20">
      <div className="container-page py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logo.url} alt="AdeProm Cleaning" className="h-16 w-auto bg-white rounded-lg p-2" width={64} height={64} />
          <p className="mt-4 text-sm text-white/75 max-w-sm">
            Professional residential and commercial cleaning across Motherwell, Scotland and beyond. Spotless results, every time.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a href="https://www.facebook.com/profile.php?id=61591572170592" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/AdeProm1" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://www.tiktok.com/@Adepromcleaning" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
              <TikTokIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/booking" className="hover:text-white">Book a Clean</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> Motherwell, Scotland</li>
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0" /> <a href="tel:+447570833626" className="hover:text-white">+44 757 083 3626</a></li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0" /> <a href="mailto:support@adeprom.com" className="hover:text-white">support@adeprom.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-5 text-xs text-white/60 flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} AdeProm Cleaning Services. All rights reserved.</p>
          <p>Motherwell · Scotland</p>
        </div>
      </div>
    </footer>
  );
}
