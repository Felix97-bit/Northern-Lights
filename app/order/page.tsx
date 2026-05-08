import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Container from "@/components/ui/Container";
import OrderForm from "@/components/sections/OrderForm";
import { site } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Order Now — E-Quote",
  description:
    "Request a quote for an appraisal in four short steps. We will reply with scope, fee, and timing — usually within hours.",
  alternates: { canonical: "/order" }
};

export default function OrderPage() {
  return (
    <>
      <PageHero
        eyebrow="ORDER NOW · E-QUOTE"
        title={
          <>
            Four steps to a
            <br />
            <span className="aurora-text">fast, accurate quote.</span>
          </>
        }
        intro="Tell us about the property and the purpose of the appraisal. We will confirm scope, fee, and timing — usually within hours."
      />

      <section className="py-8 md:py-16">
        <Container size="lg">
          <OrderForm />
          <p className="mt-12 text-mist text-sm text-center">
            Prefer to call? <a href={`tel:${site.phoneTel}`} className="link-aurora text-aurora-green">{site.phone}</a>{" "}
            · or email <a href={`mailto:${site.email}`} className="link-aurora text-aurora-green">{site.email}</a>
          </p>
        </Container>
      </section>
    </>
  );
}
