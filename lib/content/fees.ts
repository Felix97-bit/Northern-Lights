export type Fee = {
  service: string;
  fee: string;
  fixed: boolean;
};

export const fees: Fee[] = [
  { service: "Full Appraisal", fee: "$325", fixed: true },
  { service: "Drive-By Appraisal", fee: "$225", fixed: true },
  { service: "Progress Inspection", fee: "$125", fixed: true },
  { service: "Appraisal Update", fee: "$150", fixed: true },
  { service: "Market-Rents Letter (per unit)", fee: "$150", fixed: true },
  { service: "Standard Relocation", fee: "$400", fixed: true },
  { service: "CERC Relocation", fee: "$650", fixed: true },
  { service: "Duplex Appraisal", fee: "Call for Quote", fixed: false },
  { service: "Acreage (up to 10 acres)", fee: "Call for Quote", fixed: false },
  { service: "Four-Plex Appraisal", fee: "Call for Quote", fixed: false },
  { service: "Farm / Agricultural Appraisal", fee: "Call for Quote", fixed: false },
  { service: "Legal Appraisal", fee: "Call for Quote", fixed: false },
  { service: "Commercial Appraisal", fee: "Call for Quote", fixed: false },
  { service: "Insurance Appraisal", fee: "Call for Quote", fixed: false },
  { service: "Out-of-Area Appraisal", fee: "Call for Quote", fixed: false }
];

export const feesFootnote =
  "Higher rates apply for: executive/high-value homes, unusual property features, large acreages, properties outside Greater Edmonton/Calgary, and mileage charges. Always confirm final fee at the time of quote. Fee schedule last updated July 10, 2024.";
