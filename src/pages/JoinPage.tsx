import React from 'react';
import { RootLayout } from '@/components/layout/RootLayout';
import { AmplifierForm } from '@/components/sections/CampaignForms';
import { ShieldCheck, Users, Megaphone, Smartphone } from 'lucide-react';
export function JoinPage() {
  return (
    <RootLayout>
      <div className="bg-campaign-navy py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-display text-white mb-6">Become An <span className="text-campaign-gold italic">Amplifier</span></h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Our campaign doesn't have corporate PACs or dark money. We have you. Join the organization that's taking back the UAW.
          </p>
        </div>
      </div>
      <div className="section-container -mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 order-2 lg:order-1">
            <AmplifierForm />
          </div>
          <div className="lg:col-span-4 order-1 lg:order-2 space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-soft border border-slate-100">
              <h3 className="text-2xl font-black text-campaign-navy uppercase mb-6 flex items-center gap-2">
                <ShieldCheck className="text-campaign-gold h-6 w-6" /> Why Amplify?
              </h3>
              <ul className="space-y-6">
                {[
                  { icon: Users, title: "Organize Locally", desc: "Lead the conversation in your shop and your region." },
                  { icon: Megaphone, title: "Broaden the Reach", desc: "Help us overcome the media blackout with grassroots digital action." },
                  { icon: Smartphone, title: "Stay Connected", desc: "Get direct access to candidate briefings and strategy calls." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="bg-campaign-gold/10 p-2 h-10 w-10 shrink-0 rounded-lg flex items-center justify-center">
                      <item.icon className="text-campaign-gold h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-bold text-campaign-navy">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-campaign-gold rounded-2xl p-8 shadow-glow">
              <h3 className="text-xl font-black text-campaign-navy uppercase mb-4">Already signed up?</h3>
              <p className="text-campaign-navy/80 font-medium mb-6">
                Download the official campaign flier to distribute at your next local meeting.
              </p>
              <button className="w-full bg-campaign-navy text-white font-bold py-3 rounded-lg hover:bg-campaign-navy/80 transition-all uppercase text-sm tracking-widest">
                Download Flier (.PDF)
              </button>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}