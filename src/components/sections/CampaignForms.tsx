import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { Loader2, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { api } from '@/lib/api-client';
import type { SupporterType } from '@shared/types';
const updateSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email address"),
  zipCode: z.string().min(5, "Invalid Zip"),
});
const amplifierSchema = updateSchema.extend({
  phone: z.string().min(10, "Invalid phone number"),
  shopLocation: z.string().min(2, "Shop info required"),
  interests: z.array(z.string()).min(1, "Select at least one interest"),
});
type UpdateValues = z.infer<typeof updateSchema>;
type AmplifierValues = z.infer<typeof amplifierSchema>;
export function UpdateForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<UpdateValues>({
    resolver: zodResolver(updateSchema)
  });
  const onSubmit = async (data: UpdateValues) => {
    setIsSubmitting(true);
    try {
      await api('/api/supporters', {
        method: 'POST',
        body: JSON.stringify({ ...data, type: 'update' as SupporterType })
      });
      toast.success("Welcome to the team!", { description: "You've been added to our campaign updates." });
      reset();
    } catch (err) {
      toast.error("Subscription failed", { description: String(err) });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Input placeholder="Full Name" {...register('name')} />
          {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <Input placeholder="Email Address" type="email" {...register('email')} />
          {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
        </div>
        <div className="space-y-2">
          <Input placeholder="Zip Code" {...register('zipCode')} />
          {errors.zipCode && <p className="text-xs text-red-500">{errors.zipCode.message}</p>}
        </div>
      </div>
      <Button disabled={isSubmitting} type="submit" className="w-full bg-campaign-gold text-campaign-navy hover:bg-campaign-gold/90 font-bold uppercase py-6">
        {isSubmitting ? <Loader2 className="animate-spin h-5 w-5 mr-2" /> : <Send className="h-5 w-5 mr-2" />}
        Stay Informed
      </Button>
    </form>
  );
}
const INTEREST_OPTIONS = [
  { id: 'phone', label: 'Phone Banking' },
  { id: 'door', label: 'Door Canvassing' },
  { id: 'social', label: 'Social Media' },
  { id: 'shop', label: 'In-Shop Advocacy' },
];
export function AmplifierForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { register, handleSubmit, setValue, watch, reset, formState: { errors } } = useForm<AmplifierValues>({
    resolver: zodResolver(amplifierSchema),
    defaultValues: { interests: [] }
  });
  const selectedInterests = watch('interests');
  const onSubmit = async (data: AmplifierValues) => {
    setIsSubmitting(true);
    try {
      await api('/api/supporters', {
        method: 'POST',
        body: JSON.stringify({ ...data, type: 'amplifier' as SupporterType })
      });
      toast.success("Application Received!", { description: "Our volunteer coordinator will reach out soon." });
      reset();
    } catch (err) {
      toast.error("Failed to submit", { description: String(err) });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 md:p-12 rounded-2xl shadow-glass border border-white/20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label>Full Name</Label>
          <Input {...register('name')} />
          {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <Label>Email Address</Label>
          <Input type="email" {...register('email')} />
          {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
        </div>
        <div className="space-y-2">
          <Label>Phone Number</Label>
          <Input {...register('phone')} placeholder="(555) 000-0000" />
          {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
        </div>
        <div className="space-y-2">
          <Label>Shop / Local Number</Label>
          <Input {...register('shopLocation')} placeholder="Local 600, etc." />
          {errors.shopLocation && <p className="text-xs text-red-500">{errors.shopLocation.message}</p>}
        </div>
      </div>
      <div className="space-y-2">
        <Label>Zip Code</Label>
        <Input {...register('zipCode')} />
        {errors.zipCode && <p className="text-xs text-red-500">{errors.zipCode.message}</p>}
      </div>
      <div className="space-y-4">
        <Label className="text-lg font-bold">How would you like to help?</Label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {INTEREST_OPTIONS.map((item) => (
            <div key={item.id} className="flex items-center space-x-2 bg-slate-50 p-4 rounded-lg border border-slate-100 hover:border-campaign-gold transition-colors">
              <Checkbox
                id={item.id}
                checked={selectedInterests.includes(item.id)}
                onCheckedChange={(checked) => {
                  const current = selectedInterests;
                  if (checked) {
                    setValue('interests', [...current, item.id]);
                  } else {
                    setValue('interests', current.filter(i => i !== item.id));
                  }
                }}
              />
              <label htmlFor={item.id} className="text-sm font-bold text-campaign-navy leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {item.label}
              </label>
            </div>
          ))}
        </div>
        {errors.interests && <p className="text-xs text-red-500">{errors.interests.message}</p>}
      </div>
      <Button disabled={isSubmitting} type="submit" className="w-full bg-campaign-navy text-white hover:bg-campaign-navy/90 h-16 text-xl font-black uppercase shadow-glow">
        {isSubmitting ? <Loader2 className="animate-spin h-6 w-6 mr-2" /> : "Step Up Now"}
      </Button>
    </form>
  );
}