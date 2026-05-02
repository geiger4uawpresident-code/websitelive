import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
const NAV_LINKS = [
  { name: 'Platform', href: '#platform' },
  { name: 'Speech', href: '#speech' },
  { name: 'Endorsements', href: '#endorsements' },
  { name: 'Resources', href: '#resources' },
];
const DONATE_URL = "https://www.gofundme.com"; // Placeholder
export function TopNav() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled 
          ? "bg-campaign-navy/95 backdrop-blur-sm shadow-md py-3" 
          : "bg-campaign-navy py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-campaign-gold p-1.5 rounded-sm group-hover:scale-110 transition-transform">
            <ShieldCheck className="h-6 w-6 text-campaign-navy" />
          </div>
          <span className="text-xl font-black text-white tracking-tighter uppercase leading-none">
            Geiger <span className="text-campaign-gold">2026</span>
          </span>
        </Link>
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-white/90 hover:text-campaign-gold uppercase tracking-widest transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button asChild className="bg-campaign-gold text-campaign-navy hover:bg-campaign-gold/90 font-black px-6">
            <a href={DONATE_URL} target="_blank" rel="noopener noreferrer">DONATE</a>
          </Button>
        </nav>
        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-campaign-navy border-l-campaign-gold/20 text-white p-0">
              <div className="flex flex-col h-full">
                <div className="p-6 flex items-center justify-between border-b border-white/10">
                  <span className="text-lg font-black uppercase">Menu</span>
                </div>
                <div className="flex-1 px-6 py-8 space-y-6">
                  {NAV_LINKS.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="block text-2xl font-black uppercase tracking-tighter hover:text-campaign-gold"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
                <div className="p-6 mt-auto">
                  <Button asChild className="w-full bg-campaign-gold text-campaign-navy hover:bg-campaign-gold/90 font-black h-14 text-lg">
                    <a href={DONATE_URL} target="_blank" rel="noopener noreferrer">DONATE NOW</a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}