import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/adeprom-logo.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="bg-brand-deep text-white mt-20">
      <div className="container-page py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logo.url} alt="AdeProm Cleaning" className="h-16 w-auto bg-white rounded-lg p-2" width={64} height={64} />
          <p className="mt-4 text-sm text-white/75 max-w-sm">
            Professional residential and commercial cleaning across Motherwell and Scotland. Spotless results, every time.
          </p>
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
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0" /> <a href="mailto:Leyedayo@gmail.com" className="hover:text-white">Leyedayo@gmail.com</a></li>
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
