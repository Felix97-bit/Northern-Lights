export type Service = {
  slug: string;
  name: string;
  shortName: string;
  category: string;
  tagline: string;
  description: string;
  covers: string[];
  audience: string[];
  process: { title: string; detail: string }[];
  // Constellation node coordinates for the services hub map
  node: { x: number; y: number };
};

export const services: Service[] = [
  {
    slug: "residential",
    name: "Residential Appraisals",
    shortName: "Residential",
    category: "Core Service",
    tagline:
      "Independent professional opinions of market value, delivered fast.",
    description:
      "Our most in-demand service. Residential appraisals span everything from a refinance on a starter home to expert testimony in family court — and we tailor every report to its purpose. We don't do cookie-cutter appraisals. Note that an appraisal (independent professional opinion of market value) and an assessment (municipal taxation valuation) can result in significantly different figures.",
    covers: [
      "Lending and mortgage financing",
      "Home purchase or sale",
      "Legal proceedings — family law, divorce, litigation, foreclosures, bankruptcies",
      "Real estate investment analysis",
      "Standard and CERC (Canadian Employee Relocation Council) relocation",
      "Retrospective appraisals",
      "Change-of-use appraisals (e.g., converting a home to a rental suite)",
      "Expert witness testimony for court proceedings"
    ],
    audience: [
      "Homeowners",
      "Lenders & Banks",
      "Mortgage Brokers",
      "Real Estate Investors",
      "Attorneys / Lawyers",
      "Realtors",
      "Relocation Companies"
    ],
    process: [
      { title: "Request a quote", detail: "Submit the E-Quote form, call, or email — we'll confirm scope and fee within hours." },
      { title: "Inspection", detail: "We schedule a site visit at your convenience and document the property thoroughly." },
      { title: "Analysis", detail: "We pull comparables, verify data, and apply the methodology that fits the report's purpose." },
      { title: "Delivery", detail: "Concise written report delivered on schedule — typically within days, not weeks." }
    ],
    node: { x: 18, y: 28 }
  },
  {
    slug: "commercial",
    name: "Commercial Appraisals",
    shortName: "Commercial",
    category: "Specialty",
    tagline: "Income-stream analysis married to property valuation.",
    description:
      "Commercial work demands more than comparable sales — it demands financial fluency. Our commercial appraisers analyze income streams, leases, expenses, and capitalization rates alongside the physical property to produce defensible valuations.",
    covers: [
      "Undeveloped industrial land",
      "Retail properties",
      "Office buildings",
      "Apartment buildings",
      "Shopping malls",
      "Multi-family properties — duplex, four-plex, and larger"
    ],
    audience: [
      "Lenders & Banks",
      "Real Estate Investors",
      "Business Owners",
      "Attorneys / Lawyers"
    ],
    process: [
      { title: "Scoping call", detail: "We discuss the property type, intended use, and timeline before quoting." },
      { title: "Data gathering", detail: "Leases, rent rolls, expenses, and any prior reports are collected and reviewed." },
      { title: "Multi-approach valuation", detail: "Income, sales comparison, and cost approaches reconciled into a single conclusion." },
      { title: "Final report", detail: "Detailed written report with supporting exhibits, suitable for lenders, courts, or boards." }
    ],
    node: { x: 50, y: 16 }
  },
  {
    slug: "farm",
    name: "Farm & Agricultural Appraisals",
    shortName: "Farm & Agricultural",
    category: "Rural Specialty",
    tagline: "Backed by first-hand farming experience.",
    description:
      "We've been valuing farms across rural Alberta for over a decade — and several of our appraisers have first-hand farming backgrounds. We understand soil classes, productivity, and the realities of running an operation, not just spreadsheets.",
    covers: [
      "Land value across cultivated, pasture, and bush",
      "Crop value and agricultural productivity",
      "Existing farm structures and outbuildings",
      "Knowledge of regional agricultural markets"
    ],
    audience: [
      "Farmers / Agricultural Landowners",
      "Lenders & Banks",
      "Attorneys / Lawyers",
      "Real Estate Investors"
    ],
    process: [
      { title: "Initial consultation", detail: "We discuss the operation, parcels, and intended use of the appraisal." },
      { title: "Field inspection", detail: "We walk the property, measure improvements, and document soil and infrastructure." },
      { title: "Market research", detail: "We analyze regional sales, productivity, and any income components." },
      { title: "Reporting", detail: "Comprehensive farm appraisal report delivered for financing, sale, or estate planning." }
    ],
    node: { x: 78, y: 32 }
  },
  {
    slug: "acreage",
    name: "Acreage Appraisals",
    shortName: "Acreage",
    category: "Rural Specialty",
    tagline: "Land, access, services, and rural character — all valued.",
    description:
      "Acreages aren't just bigger residential lots — they're a different valuation problem. We weight land area, access, services, outbuildings, and rural amenities. Acreages up to 10 acres are priced as a standard service; larger parcels require a custom quote.",
    covers: [
      "Acreages up to 10 acres",
      "Land, access, and services analysis",
      "Outbuildings and rural improvements",
      "Custom quotes for larger acreages"
    ],
    audience: [
      "Homeowners",
      "Real Estate Investors",
      "Lenders & Banks",
      "Realtors"
    ],
    process: [
      { title: "Request a quote", detail: "Send us the parcel size and location for a fast confirmation." },
      { title: "Site visit", detail: "We inspect the land, access, services, and any improvements." },
      { title: "Comparable analysis", detail: "We research recent acreage sales in your sub-market." },
      { title: "Final report", detail: "Tailored report reflecting the rural realities of your property." }
    ],
    node: { x: 30, y: 64 }
  },
  {
    slug: "insurance",
    name: "Insurance Appraisals",
    shortName: "Insurance (RCN)",
    category: "Specialty",
    tagline: "What it costs to rebuild — not what it's worth.",
    description:
      "Insurance appraisals calculate the Replacement Cost New (RCN) — what it would cost to rebuild the structure in the event of a total loss. RCN is distinct from market value and is what determines whether your insurance coverage is adequate.",
    covers: [
      "Replacement Cost New analysis",
      "Coverage adequacy review",
      "Custom assessments for high-value or unusual structures",
      "Detailed breakdowns suitable for insurers"
    ],
    audience: [
      "Homeowners",
      "Insurers",
      "Property Managers",
      "Business Owners"
    ],
    process: [
      { title: "Property review", detail: "Confirm scope, structure, and intended insurer." },
      { title: "Inspection", detail: "Detailed measurement and documentation of all insurable improvements." },
      { title: "Cost analysis", detail: "We apply current construction costs to derive an accurate RCN." },
      { title: "Report delivery", detail: "Final report formatted for your insurer's coverage review." }
    ],
    node: { x: 70, y: 60 }
  },
  {
    slug: "wemeasurehomes",
    name: "weMeasureHomes",
    shortName: "weMeasureHomes",
    category: "Sub-brand",
    tagline: "Standalone RMS measurement for accurate MLS listings.",
    description:
      "weMeasureHomes is our sub-brand for professional RMS (Residential Measurement Standard) property measurement — a standalone service for real estate agents and homeowners who need accurate square footage figures for MLS listings. Old MLS data is notoriously unreliable; we measure it right. Also accessible at wemeasurehomes.ca.",
    covers: [
      "Residential Measurement Standard (RMS) compliant measurements",
      "Floor plans suitable for MLS",
      "Standalone service — no full appraisal required",
      "Fast turnaround for active listings"
    ],
    audience: [
      "Realtors",
      "Homeowners",
      "Property Managers"
    ],
    process: [
      { title: "Booking", detail: "Call or email to book the measurement at the listing's convenience." },
      { title: "On-site measurement", detail: "RMS-compliant measurement of the property by a trained appraiser." },
      { title: "Floor plan", detail: "We produce a clean floor plan with accurate square footage." },
      { title: "Delivery", detail: "RMS report and floor plan delivered same- or next-day where possible." }
    ],
    node: { x: 50, y: 78 }
  }
];

export const residentialSubTypes = [
  { name: "Full Appraisal", description: "Complete interior and exterior inspection with detailed written report." },
  { name: "Drive-By Appraisal", description: "Exterior-only visual inspection; lower cost option for certain purposes." },
  { name: "Progress Inspection", description: "For new construction; assesses progress of a build for draw advances." },
  { name: "Appraisal Update", description: "Updates a prior appraisal to reflect current market conditions." },
  { name: "Market-Rents Letter", description: "Establishes current market rental rate for a given unit." },
  { name: "Standard Relocation", description: "Relocation appraisal meeting standard industry requirements." },
  { name: "CERC Relocation", description: "Canadian Employee Relocation Council compliant appraisal — more in-depth." }
];

export const clientTypes = [
  { type: "Homeowners", use: "Selling, buying, refinancing, insurance coverage, dispute resolution" },
  { type: "Lenders & Banks", use: "Mortgage lending decisions; trusted by Canada's largest banks and credit unions" },
  { type: "Mortgage Brokers", use: "Accurate valuations for mortgage applications" },
  { type: "Real Estate Investors", use: "Investment property analysis, rental income verification" },
  { type: "Attorneys / Lawyers", use: "Litigation support, foreclosures, bankruptcies, family law, expert testimony" },
  { type: "Realtors", use: "Listing price strategy, buyer's due diligence, RMS measurements" },
  { type: "Relocation Companies", use: "CERC and standard relocation appraisals for employee transfers" },
  { type: "Employers / HR", use: "Property valuations for employee relocation programs" },
  { type: "Farmers / Agricultural Landowners", use: "Farm and rural land valuations for financing, sale, or estate planning" },
  { type: "Business Owners", use: "Commercial property and income-producing property valuations" },
  { type: "Insurers", use: "Replacement Cost New appraisals for insurance coverage adequacy" }
];

export const serviceAreas = {
  edmonton: {
    title: "Edmonton Region",
    note: "all services",
    cities: [
      "Edmonton",
      "Beaumont",
      "Devon",
      "Fort Saskatchewan",
      "Leduc",
      "Morinville",
      "Camrose",
      "Sherwood Park",
      "Spruce Grove",
      "Stony Plain",
      "St. Albert"
    ],
    footer: "Plus surrounding towns and counties within 100 km."
  },
  calgary: {
    title: "Calgary Region",
    note: "all services",
    cities: ["Calgary", "Airdrie", "Cochrane", "High River", "Okotoks"],
    footer: ""
  },
  bc: {
    title: "British Columbia",
    note: "residential appraisals only — Neeta Sachar, DAR",
    cities: [
      "Maple Ridge",
      "Coquitlam",
      "Port Coquitlam",
      "Abbotsford",
      "Langley",
      "Mission",
      "Surrey"
    ],
    footer: ""
  }
};
