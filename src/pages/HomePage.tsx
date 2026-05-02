import React from 'react';
import { 
  ShieldCheck, 
  Users, 
  Handshake, 
  FileText, 
  Search, 
  ArrowRight, 
  PlayCircle 
} from 'lucide-react';
import { RootLayout } from '@/components/layout/RootLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
const PLATFORM_POINTS = [
  {
    title: "Uncompromising Solidarity",
    description: "Putting the 'Union' back in UAW. Stronger bargaining and direct member engagement at every step.",
    icon: Users,
  },
  {
    title: "Financial Transparency",
    description: "Every dollar accounted for. Real-time reporting on union expenditures and campaign contributions.",
    icon: ShieldCheck,
  },
  {
    title: "Grassroots Empowerment",
    description: "Decisions move from the floor up, not the top down. Empowering local leaders to advocate for their shops.",
    icon: Handshake,
  },
  {
    title: "Accountable Leadership",
    description: "Term limits and recall mechanisms to ensure leaders never lose sight of the membership they serve.",
    icon: Search,
  },
];
export function HomePage() {
  return (
    <RootLayout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-campaign-navy overflow-hidden">
        {/* Abstract Campaign Background Elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-campaign-gold rounded-full blur-3xl" />
          <div className="absolute top-1/2 -right-48 w-[32rem] h-[32rem] bg-campaign-blue rounded-full blur-3xl" />
        </div>
        <div className="section-container relative z-10">
          <div className="max-w-3xl space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-campaign-gold/10 border border-campaign-gold/20 text-campaign-gold rounded-full text-xs font-bold uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-campaign-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-campaign-gold"></span>
              </span>
              Campaign Launch 2026
            </div>
            <h1 className="text-display text-white">
              Tricia Geiger for <span className="text-campaign-gold italic font-black">UAW President</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-medium leading-relaxed max-w-2xl">
              Bringing integrity, transparency, and unyielding strength to the fight for our future. 
              It's time to return the power to the members.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="h-14 px-10 text-lg font-black bg-campaign-gold text-campaign-navy hover:bg-campaign-gold/90">
                JOIN THE FIGHT <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-10 text-lg font-bold border-white/20 text-white hover:bg-white/10">
                WATCH SPEECH <PlayCircle className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Platform Section */}
      <section id="platform" className="bg-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-campaign-navy">The Member First Platform</h2>
            <div className="w-24 h-2 bg-campaign-gold mx-auto" />
            <p className="text-muted-foreground text-lg">
              Our vision is built on four core pillars designed to restore trust and maximize the power of our collective voice.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PLATFORM_POINTS.map((point, idx) => (
              <Card key={idx} className="border-none shadow-soft hover:shadow-lg transition-all duration-300 group">
                <CardContent className="pt-8 space-y-4">
                  <div className="w-14 h-14 bg-slate-50 flex items-center justify-center rounded-lg group-hover:bg-campaign-gold transition-colors">
                    <point.icon className="h-7 w-7 text-campaign-navy" />
                  </div>
                  <h3 className="text-xl font-bold text-campaign-navy">{point.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {point.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Quick Involvement Teaser */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="section-container text-center">
          <div className="bg-campaign-navy rounded-3xl p-12 md:p-16 relative overflow-hidden shadow-2xl">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="grid grid-cols-12 h-full w-full">
                {Array.from({ length: 48 }).map((_, i) => (
                  <div key={i} className="border border-white/10" />
                ))}
              </div>
            </div>
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl md:text-4xl font-black text-white uppercase italic">Ready to make a difference?</h2>
              <p className="text-white/70 max-w-xl mx-auto">
                Sign up for campaign updates or volunteer to become a Campaign Amplifier. 
                We need every voice in this fight.
              </p>
              <div className="flex justify-center gap-4 pt-4">
                <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 px-8">
                  Get Updates
                </Button>
                <Button className="bg-campaign-gold text-campaign-navy hover:bg-campaign-gold/90 px-8 font-bold">
                  Volunteer Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </RootLayout>
  );
}