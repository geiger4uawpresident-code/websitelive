import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlayCircle, FileText, Quote, Loader2 } from "lucide-react";
export function SpeechSection() {
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  return (
    <section id="speech" className="bg-slate-50 border-y border-slate-200 overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-6">
            <h2 className="text-4xl md:text-5xl font-black text-campaign-navy uppercase leading-tight">
              The Message <br />
              <span className="text-campaign-gold italic">That Started It All</span>
            </h2>
            <p className="text-body max-w-md">
              Watch Tricia's official campaign launch or read the full transcript of her vision for the UAW's 2026 future.
            </p>
            <div className="hidden lg:block pt-8">
              <Quote className="h-12 w-12 text-campaign-gold/40 mb-4" />
              <p className="text-xl font-bold text-campaign-navy italic leading-snug">
                "We don't just need a seat at the table; we need to own the room. It starts with member-led transparency."
              </p>
            </div>
          </div>
          <div className="lg:col-span-8">
            <Tabs defaultValue="video" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-slate-200 h-14 p-1">
                <TabsTrigger value="video" className="text-sm font-bold uppercase tracking-widest data-[state=active]:bg-campaign-navy data-[state=active]:text-white">
                  <PlayCircle className="mr-2 h-4 w-4" /> Watch Video
                </TabsTrigger>
                <TabsTrigger value="transcript" className="text-sm font-bold uppercase tracking-widest data-[state=active]:bg-campaign-navy data-[state=active]:text-white">
                  <FileText className="mr-2 h-4 w-4" /> Read Transcript
                </TabsTrigger>
              </TabsList>
              <TabsContent value="video" className="mt-6">
                <div className="aspect-video w-full bg-campaign-navy/5 rounded-xl shadow-glass overflow-hidden relative group border border-slate-200">
                  {isVideoLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-50 z-10">
                      <Loader2 className="h-8 w-8 text-campaign-navy animate-spin" />
                    </div>
                  )}
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Campaign Launch Speech"
                    onLoad={() => setIsVideoLoading(false)}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </TabsContent>
              <TabsContent value="transcript" className="mt-6 bg-white rounded-xl shadow-soft p-8 md:p-12 max-h-[600px] overflow-y-auto prose prose-slate max-w-none">
                <h3 className="text-2xl font-black text-campaign-navy mb-6 uppercase tracking-tight">Launch Address: April 2026</h3>
                <p className="font-bold text-campaign-navy text-lg">Fellow UAW Brothers and Sisters,</p>
                <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                  Today, I stand before you not just as a candidate, but as a worker who has seen the inside of our shops and the inside of our boardrooms. For too long, the distance between the two has grown too wide.
                </p>
                <div className="border-l-4 border-campaign-gold pl-6 py-2 my-8">
                  <p className="text-xl md:text-2xl font-black text-campaign-navy italic leading-snug">
                    "Our strength isn't in our bank account; it's in our solidarity. But solidarity cannot exist without trust."
                  </p>
                </div>
                <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                  Trust is earned when every member knows where every dollar goes. Trust is built when the smallest local has the same volume as the largest region. This campaign is about restoring that trust.
                </p>
                <p className="text-base md:text-lg text-slate-700 leading-relaxed mt-4">
                  We are entering a new era of labor. The challenges of automation, green energy transitions, and global shifts are not threats—they are opportunities for a UAW that is prepared, transparent, and unyielding.
                </p>
                <p className="text-base md:text-lg text-slate-700 leading-relaxed mt-4">
                  Join me. Not for my name, but for our union. Let's take it back.
                </p>
                <div className="mt-10 pt-6 border-t border-slate-100">
                  <p className="font-black text-campaign-navy text-xl">— TRICIA GEIGER</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}