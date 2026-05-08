export const site = {
  name: "Northern Lights Appraisals",
  legalName: "Northern Lights Real Estate Consulting Ltd.",
  tagline:
    "Helping You Make Smart Decisions by Providing Fast, Accurate and Reliable Real Estate Appraisals",
  founded: 2012,
  address: {
    street: "6417 112 Ave NW",
    city: "Edmonton",
    province: "AB",
    postal: "T5W 0N9",
    full: "6417 112 Ave NW, Edmonton, AB T5W 0N9"
  },
  phone: "1.780.757.2060",
  phoneTel: "+17807572060",
  tollFree: "1.844.757.2060",
  tollFreeTel: "+18447572060",
  email: "info@northernlightsappraisals.ca",
  careersEmail: "careers@northernlightsappraisals.ca",
  coordinates: {
    label: "53.5461° N, 113.4938° W",
    lat: 53.5461,
    lng: -113.4938
  },
  hours: {
    weekday: "Mon – Fri 8:00 AM – 4:30 PM",
    saturday: "Saturday by Appointment Only",
    sunday: "Sunday Closed"
  },
  social: {
    facebook: "https://facebook.com/NorthernLightsAppraisals",
    twitter: "https://twitter.com/NLAppraisals",
    youtube: "https://youtube.com/user/EdmontonAppraisals"
  },
  stats: [
    { value: "7,500+", label: "Appraisals Completed" },
    { value: "60+", label: "Years Combined Experience" },
    { value: "9", label: "Certified Appraisers" },
    { value: "2012", label: "Established" }
  ],
  trustMarks: [
    "RECA Licensed",
    "CNAREA Members",
    "AACI Designations",
    "E&O Insured",
    "CNAREA Appraiser of the Year 2016"
  ]
} as const;
