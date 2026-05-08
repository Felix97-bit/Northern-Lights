"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { site } from "@/lib/content/site";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().optional(),
  subject: z.string().min(2, "Add a subject"),
  message: z.string().min(10, "Add a message")
});

type FormValues = z.infer<typeof schema>;

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({ resolver: zodResolver(schema), mode: "onTouched" });

  const onSubmit = async (data: FormValues) => {
    setSubmitting(true);
    console.log("Contact submission", data);
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    setDone(true);
  };

  if (done) {
    return (
      <div className="card-surface p-10 text-center">
        <CheckCircle2 className="text-aurora-green mx-auto mb-4" size={36} />
        <h3 className="h-sub text-2xl text-frost mb-2">Message sent.</h3>
        <p className="text-mist">
          Thank you. We will reply shortly. For urgent matters, call{" "}
          <a href={`tel:${site.phoneTel}`} className="link-aurora text-aurora-green">{site.phone}</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="card-surface p-6 md:p-10 space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field id="c-name" label="Name" error={errors.name?.message}>
          <input id="c-name" className="input-aurora" autoComplete="name" {...register("name")} />
        </Field>
        <Field id="c-email" label="Email" error={errors.email?.message}>
          <input id="c-email" type="email" className="input-aurora" autoComplete="email" {...register("email")} />
        </Field>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field id="c-phone" label="Phone (optional)" error={errors.phone?.message}>
          <input id="c-phone" type="tel" className="input-aurora" autoComplete="tel" {...register("phone")} />
        </Field>
        <Field id="c-subject" label="Subject" error={errors.subject?.message}>
          <input id="c-subject" className="input-aurora" {...register("subject")} />
        </Field>
      </div>
      <Field id="c-message" label="Message" error={errors.message?.message}>
        <textarea id="c-message" rows={6} className="input-aurora resize-y" {...register("message")} />
      </Field>
      <div className="pt-2 flex justify-end">
        <button type="submit" className="btn-primary" disabled={submitting}>
          {submitting ? <Loader2 size={16} className="animate-spin" /> : <ArrowRight size={16} />}
          {submitting ? "Sending" : "Send message"}
        </button>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children
}: {
  id: string;
  label: string;
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
