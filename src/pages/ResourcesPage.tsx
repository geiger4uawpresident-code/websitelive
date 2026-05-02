import React from 'react';
import { RootLayout } from '@/components/layout/RootLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Image, MessageSquare, Download, CheckCircle2 } from 'lucide-react';
const RESOURCES = [
  {
    title: "Official Campaign Flier",
    description: "The primary 2-page handout for shop floors and union hall meetings.",
    icon: FileText,
    type: "PDF",
    size: "1.2 MB",
  },
  {
    title: "Member Pledge Card",
    description: "A printable card for members to commit their support and stay organized.",
    icon: CheckCircle2,
    type: "PDF",
    size: "450 KB",
  },
  {
    title: "Social Media Graphics Kit",
    description: "High-resolution banners and profile frames for Facebook and Instagram.",
    icon: Image,
    type: "ZIP",
    size: "8.5 MB",
  },
  {
    title: "Town Hall Talk Points",
    description: "Key responses and platform highlights for active local discussion.",
    icon: MessageSquare,
    type: "DOCX",
    size: "320 KB",
  }
];
export function ResourcesPage() {
  return (
    <RootLayout>
      <div className="bg-campaign-navy py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-campaign-gold rounded-full blur-3xl -mr-48 -mt-48" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-6">
              Resource <span className="text-campaign-gold">Center</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Equip yourself with the official materials to organize your local and help Tricia bring integrity back to our union.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {RESOURCES.map((item, idx) => (
            <Card key={idx} className="border border-slate-100 shadow-soft hover:shadow-lg transition-all duration-300 flex flex-col">
              <CardHeader className="flex flex-row items-start gap-4 pb-4">
                <div className="bg-slate-50 p-3 rounded-lg">
                  <item.icon className="h-8 w-8 text-campaign-navy" />
                </div>
                <div className="space-y-1">
                  <CardTitle className="text-2xl font-black text-campaign-navy uppercase tracking-tight">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-base text-muted-foreground">
                    {item.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="mt-auto flex items-center justify-between pt-4 border-t border-slate-50">
                <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                  {item.type} • {item.size}
                </div>
                <Button className="bg-campaign-gold text-campaign-navy hover:bg-campaign-gold/90 font-black gap-2">
                  <Download className="h-4 w-4" /> DOWNLOAD
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-20 bg-slate-50 rounded-3xl p-8 md:p-12 text-center border border-slate-200">
          <h2 className="text-2xl md:text-3xl font-black text-campaign-navy uppercase mb-4">Need Custom Materials?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Our design team can provide region-specific or shop-specific fliers if you have a local organizing committee established.
          </p>
          <Button variant="outline" asChild className="border-campaign-navy text-campaign-navy hover:bg-campaign-navy hover:text-white font-bold h-12 px-8">
            <a href="mailto:info@geiger2026.com">CONTACT CAMPAIGN HQ</a>
          </Button>
        </div>
      </div>
    </RootLayout>
  );
}