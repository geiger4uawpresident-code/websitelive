import React from 'react';
import { Facebook, Youtube, Instagram, Twitter, Mail, Music, ShieldCheck } from 'lucide-react';
export function CampaignFooter() {
  const currentYear = new Date().getFullYear();
  const SOCIAL_LINKS = [
    { Icon: Facebook, href: "https://facebook.com/geiger2026", label: "Facebook" },
    { Icon: Youtube, href: "https://youtube.com/@geiger2026", label: "YouTube" },
    { Icon: Instagram, href: "https://instagram.com/geiger2026", label: "Instagram" },
    { Icon: Music, href: "https://tiktok.com/@geiger2026", label: "TikTok" }, // Music icon for TikTok
  ];
  return (
    <footer className="bg-campaign-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Column 1: Identity & Contact */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-8 w-8 text-campaign-gold" />
              <span className="text-2xl font-black tracking-tighter uppercase">Geiger 2026</span>
            </div>
            <p className="text-white/60 text-sm max-w-xs">
              Fighting for UAW members with integrity, transparency, and unyielding strength. Together, we are the union.
            </p>
            <div className="flex items-center gap-3">
              <div className="bg-white/10 p-2 rounded-full">
                <Mail className="h-4 w-4" />
              </div>
              <a href="mailto:info@geiger2026.com" className="text-sm hover:text-campaign-gold transition-colors">
                info@geiger2026.com
              </a>
            </div>
          </div>
          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h4 className="text-campaign-gold font-black uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/#platform" className="text-white/80 hover:text-white transition-colors">Platform</a></li>
              <li><a href="/#speech" className="text-white/80 hover:text-white transition-colors">Launch Speech</a></li>
              <li><a href="/join" className="text-white/80 hover:text-white transition-colors font-bold text-campaign-gold">Volunteer / Join</a></li>
              <li><a href="/resources" className="text-white/80 hover:text-white transition-colors">Resources</a></li>
            </ul>
          </div>
          {/* Column 3: Social Connect */}
          <div className="space-y-6">
            <h4 className="text-campaign-gold font-black uppercase tracking-widest text-sm">Follow the Fight</h4>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="bg-white/10 p-3 rounded-md hover:bg-campaign-gold hover:text-campaign-navy transition-all"
                >
                  <social.Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <p className="text-xs text-white/40 italic">
              * Official links only. Beware of unofficial social media accounts.
            </p>
          </div>
        </div>
        {/* Disclosure & Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center space-y-6">
          <div className="inline-block border-2 border-white/20 px-8 py-4">
            <span className="text-xs font-black uppercase tracking-[0.2em]">
              Paid for by the Committee to Elect Tricia Geiger
            </span>
          </div>
          <div className="text-[10px] text-white/40 uppercase tracking-widest">
            &copy; {currentYear} Geiger for UAW President. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}