export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  region: "Edmonton" | "Calgary";
  excerpt: string;
  body: string[];
  featured?: boolean;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "edmonton-market-report-february-2024",
    title: "Edmonton Market Report — February 2024",
    date: "2024-02-28",
    region: "Edmonton",
    featured: true,
    excerpt:
      "Inventory remains tight across most price brackets in Greater Edmonton. We break down what we are seeing on the ground from over 600 inspections this month.",
    body: [
      "February brought continued tightness in the lower end of the Greater Edmonton market — anything under $400,000 in good condition is moving in days, often with multiple offers. The story above $700,000 is more nuanced, with longer days-on-market and more measured negotiation.",
      "On the appraisal side, we are seeing a divergence between municipal assessments and current market value, particularly in neighbourhoods that have appreciated quickly over the last twelve months. Owners refinancing should be aware that their property tax assessment is not a substitute for a current appraisal.",
      "Acreage activity in counties around Edmonton has slowed slightly from the pandemic-era peak but remains strong relative to the long-term average. Buyers continue to favour serviced acreages within 30 km of the city.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    ]
  },
  {
    slug: "edmonton-market-report-september-2019",
    title: "Edmonton Market Report — September 2019",
    date: "2019-09-30",
    region: "Edmonton",
    excerpt:
      "Fall buying activity picked up after a slower summer. Detached home prices held steady while condos saw modest declines.",
    body: [
      "September 2019 brought a late-season uptick in showing activity across Edmonton, particularly in the $350K–$500K detached home range.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et bibendum velit. Suspendisse potenti."
    ]
  },
  {
    slug: "calgary-market-report-april-may-2019",
    title: "Calgary Market Report — April–May 2019",
    date: "2019-05-31",
    region: "Calgary",
    excerpt:
      "Calgary spring market posted modest gains in unit sales but inventory remained elevated, keeping pressure on pricing.",
    body: [
      "April and May 2019 saw Calgary buyers return cautiously to the market. Inventory levels stayed elevated through the spring, particularly in the suburban townhome segment.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac orci ut arcu varius dignissim."
    ]
  },
  {
    slug: "edmonton-market-report-may-2019",
    title: "Edmonton Market Report — May 2019",
    date: "2019-05-31",
    region: "Edmonton",
    excerpt:
      "Spring 2019 in Edmonton — sales volume up year-over-year, but average price down across most categories.",
    body: [
      "May 2019 closed with sales volume up roughly 5% year-over-year, but average sale prices down 2-3% in most segments.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada lectus quis ipsum varius, eget porttitor nibh tempor."
    ]
  }
];
