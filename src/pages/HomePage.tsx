import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ShieldCheck,
  Users,
  Handshake,
  Search,
  ArrowRight,
  PlayCircle,
  FileDown
} from 'lucide-react';
import { RootLayout } from '@/components/layout/RootLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SpeechSection } from '@/components/sections/SpeechSection';
import { EndorsementsCarousel } from '@/components/sections/EndorsementsCarousel';
import { UpdateForm } from '@/components/sections/CampaignForms';
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
  const navigate = useNavigate();
  const handleResourcesClick = () => {
    navigate('/resources');
  };
  return (
    <RootLayout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-campaign-navy overflow-hidden">
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
              <Button asChild size="lg" className="h-14 px-10 text-lg font-black bg-campaign-gold text-campaign-navy hover:bg-campaign-gold/90">
                <Link to="/join">JOIN THE FIGHT <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-10 text-lg font-bold border-white/20 text-white hover:bg-white/10">
                <a href="#speech">WATCH SPEECH <PlayCircle className="ml-2 h-5 w-5" /></a>
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
      <SpeechSection />
      <EndorsementsCarousel />
      {/* Lead Capture Footer Teaser */}
      <section id="updates" className="bg-slate-50 border-t border-slate-200">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl font-black text-campaign-navy uppercase">Stay in the Loop</h2>
              <p className="text-body text-lg">
                The campaign moves fast. Sign up for direct updates from Tricia and the organizing team. We never spam.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-2 overflow-hidden">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-slate-200" />
                  ))}
                </div>
                <span className="text-sm font-bold text-campaign-navy">+ 1,200 UAW members joined this week</span>
              </div>
            </div>
            <div className="lg:col-span-7 bg-white p-8 rounded-2xl shadow-soft border border-slate-100">
              <UpdateForm />
            </div>
          </div>
        </div>
      </section>
      {/* Resources Quick Link */}
      <section id="resources" className="bg-campaign-navy py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-white">
            <FileDown className="h-10 w-10 text-campaign-gold" />
            <div>
              <p className="text-lg font-black uppercase">Campaign Resources</p>
              <p className="text-sm text-white/60">Download fliers, posters, and profile kits.</p>
            </div>
          </div>
          <Button 
            onClick={handleResourcesClick}
            className="bg-campaign-gold text-campaign-navy hover:bg-campaign-gold/90 font-bold px-8"
          >
            ACCESS RESOURCE CENTER
          </Button>
        </div>
      </section>
    </RootLayout>
  );
}