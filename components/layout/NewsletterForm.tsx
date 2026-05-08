"use client";

export default function NewsletterForm() {
  return (
    <form className="mt-6" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="newsletter" className="mono-label block mb-2">
        Newsletter
      </label>
      <div className="flex gap-2">
        <input
          id="newsletter"
          type="email"
          placeholder="you@email.com"
          className="input-aurora text-xs !py-2.5"
          aria-label="Email address for newsletter"
        />
        <button type="submit" className="btn-primary !py-2.5 !px-4 !text-xs whitespace-nowrap">
          Subscribe
        </button>
      </div>
    </form>
  );
}
