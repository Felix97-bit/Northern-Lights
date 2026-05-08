"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/lib/content/site";

const purposes = [
  "Determine Listing Price",
  "Divorce / Legal",
  "Tax Info or Appeal",
  "Purchase",
  "Refinance / Mortgage",
  "Investment",
  "Other"
] as const;

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Enter a phone number"),
  address: z.string().min(4, "Enter the property address"),
  postal: z.string().min(3, "Enter a postal code"),
  city: z.string().min(2, "Enter a city"),
  purpose: z.enum(purposes),
  notes: z.string().optional()
});

type FormValues = z.infer<typeof schema>;

const steps = [
  { label: "Contact", fields: ["name", "email", "phone"] as const },
  { label: "Property", fields: ["address", "postal", "city"] as const },
  { label: "Purpose", fields: ["purpose"] as const },
  { label: "Details", fields: ["notes"] as const }
];

export default function OrderForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
    getValues
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onTouched",
    defaultValues: { purpose: "Refinance / Mortgage" }
  });

  const next = async () => {
    const valid = await trigger(steps[step].fields as readonly (keyof FormValues)[]);
    if (valid) setStep((s) => Math.min(s + 1, steps.length - 1));
  };
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const onSubmit = async (data: FormValues) => {
    setSubmitting(true);
    // Stubbed handler — log + open mailto fallback
    console.log("Order submission", data);
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    const v = getValues();
    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
      `New E-Quote Request — ${v.name}`
    )}&body=${encodeURIComponent(
      `Name: ${v.name}\nEmail: ${v.email}\nPhone: ${v.phone}\n\nAddress: ${v.address}\nCity: ${v.city}\nPostal: ${v.postal}\n\nPurpose: ${v.purpose}\n\nNotes:\n${v.notes ?? ""}`
    )}`;
    return (
      <div className="card-surface p-10 md:p-14 text-center">
        <CheckCircle2 className="text-aurora-green mx-auto mb-6" size={48} />
        <h2 className="h-section text-3xl md:text-4xl text-frost mb-4">
          Quote request received.
        </h2>
        <p className="text-mist max-w-xl mx-auto mb-8">
          Thank you, {getValues("name")}. We&apos;ll be in touch shortly with scope, fee, and timing — typically within hours.
        </p>
        <a href={mailto} className="btn-ghost inline-flex">
          Email us a copy
        </a>
      </div>
    );
  }

  return (
    <div className="card-surface p-6 md:p-12">
      {/* Progress */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <span className="mono-label text-aurora-green">
            Step {step + 1} of {steps.length}
          </span>
          <span className="mono-label text-mist">{steps[step].label}</span>
        </div>
        <div className="h-px w-full bg-steel/30 relative overflow-hidden">
          <motion.div
            className="h-full"
            style={{ background: "var(--aurora-gradient)" }}
            initial={false}
            animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.3 }}
            className="space-y-5"
          >
            {step === 0 && (
              <>
                <Field label="Full name" id="name" error={errors.name?.message}>
                  <input id="name" className="input-aurora" autoComplete="name" {...register("name")} />
                </Field>
                <Field label="Email" id="email" error={errors.email?.message}>
                  <input id="email" type="email" className="input-aurora" autoComplete="email" {...register("email")} />
                </Field>
                <Field label="Phone" id="phone" error={errors.phone?.message}>
                  <input id="phone" type="tel" className="input-aurora" autoComplete="tel" {...register("phone")} />
                </Field>
              </>
            )}
            {step === 1 && (
              <>
                <Field label="Property address" id="address" error={errors.address?.message}>
                  <input id="address" className="input-aurora" autoComplete="street-address" {...register("address")} />
                </Field>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Postal code" id="postal" error={errors.postal?.message}>
                    <input id="postal" className="input-aurora" autoComplete="postal-code" {...register("postal")} />
                  </Field>
                  <Field label="City" id="city" error={errors.city?.message}>
                    <input id="city" className="input-aurora" autoComplete="address-level2" {...register("city")} />
                  </Field>
                </div>
              </>
            )}
            {step === 2 && (
              <Field label="Purpose of appraisal" id="purpose" error={errors.purpose?.message}>
                <select id="purpose" className="input-aurora appearance-none" {...register("purpose")}>
                  {purposes.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </Field>
            )}
            {step === 3 && (
              <Field label="Anything else we should know?" id="notes" error={errors.notes?.message}>
                <textarea
                  id="notes"
                  rows={6}
                  className="input-aurora resize-y"
                  placeholder="Deadline, lender, special access, etc."
                  {...register("notes")}
                />
              </Field>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 flex items-center justify-between">
          <button
            type="button"
            onClick={back}
            disabled={step === 0}
            className="btn-ghost disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ArrowLeft size={16} /> Back
          </button>
          {step < steps.length - 1 ? (
            <button type="button" onClick={next} className="btn-primary">
              Continue <ArrowRight size={16} />
            </button>
          ) : (
            <button type="submit" disabled={submitting} className="btn-primary disabled:opacity-50">
              {submitting ? <Loader2 size={16} className="animate-spin" /> : <ArrowRight size={16} />}
              {submitting ? "Sending" : "Submit request"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

function Field({
  label,
  id,
  error,
  children
}: {
  label: string;
  id: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mono-label block mb-2">
        {label}
      </label>
      {children}
      {error && <p className="mt-2 text-xs text-aurora-violet">{error}</p>}
    </div>
  );
}
