import React, { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
const ENDORSEMENTS = [
  {
    name: "John Miller",
    title: "Local 600 Member",
    text: "Tricia has been in the trenches with us for 15 years. She's the only one I trust to handle the next big contract.",
  },
  {
    name: "Sarah Chen",
    title: "Regional Coordinator",
    text: "Her commitment to financial transparency is exactly what we need to clean up the union and move forward.",
  },
  {
    name: "Mike Thompson",
    title: "Shop Steward",
    text: "Finally, a candidate who speaks 'worker' before she speaks 'politician'. She has my full support.",
  },
  {
    name: "Elena Rodriguez",
    title: "Pension Committee",
    text: "Tricia understands that our retirees are the backbone of this union. She won't leave anyone behind.",
  }
];
export function EndorsementsCarousel() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return (
      <section id="endorsements" className="bg-white min-h-[400px] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-campaign-navy border-t-campaign-gold rounded-full animate-spin" />
      </section>
    );
  }
  return (
    <section id="endorsements" className="bg-white overflow-hidden">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-campaign-navy uppercase tracking-tight">
              Voices <span className="text-campaign-gold">For Change</span>
            </h2>
            <p className="text-body max-w-xl text-lg">
              Hear from the members and leaders who are standing with Tricia for a stronger, cleaner UAW.
            </p>
          </div>
        </div>
        <div className="px-4 md:px-12">
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {ENDORSEMENTS.map((endorsement, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="border-none bg-slate-50 shadow-soft h-full hover:bg-slate-100 transition-colors">
                    <CardContent className="p-8 flex flex-col h-full">
                      <Quote className="h-8 w-8 text-campaign-gold mb-6 opacity-50" />
                      <p className="text-lg font-medium text-campaign-navy mb-8 flex-1 italic leading-relaxed">
                        "{endorsement.text}"
                      </p>
                      <div className="flex items-center gap-4 border-t border-slate-200 pt-6">
                        <div className="h-10 w-10 rounded-full bg-campaign-navy flex items-center justify-center text-white font-bold text-sm shrink-0">
                          {endorsement.name[0]}
                        </div>
                        <div className="overflow-hidden">
                          <p className="font-bold text-campaign-navy leading-none mb-1 truncate">{endorsement.name}</p>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider truncate">{endorsement.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-campaign-navy text-white hover:bg-campaign-navy/90 border-none h-10 w-10" />
            <CarouselNext className="hidden md:flex -right-12 bg-campaign-navy text-white hover:bg-campaign-navy/90 border-none h-10 w-10" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}