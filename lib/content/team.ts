export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  designations: string;
  awards?: string;
  bio: string;
  photo: string;
  featured?: boolean;
  leadership?: boolean;
};

export const team: TeamMember[] = [
  {
    slug: "gerhardt-klann",
    name: "Gerhardt Klann",
    role: "CEO & Owner",
    designations: "DAR, DAC, DRP, Certified Appraisal Reviewer",
    awards: "CNAREA Appraiser of the Year 2016",
    photo: "/images/team/gerhardt.svg",
    featured: true,
    leadership: true,
    bio:
      "Gerhardt is the founder and CEO of Northern Lights Appraisals. He holds the DAR, DAC, DRP, and Certified Appraisal Reviewer designations from CNAREA and is licensed by RECA. Recognized as CNAREA's Appraiser of the Year for all of Canada in 2016, he has completed over 7,500 appraisals. Gerhardt holds a B.Sc. in Forestry Business Management (with distinction) from the University of Alberta (1999) and is a former world-class biathlete. He is an engaging public speaker who has delivered keynote addresses at conferences for investors, lenders, and mortgage brokers across western Canada. He serves as a volunteer for the Start 2 Finish Reading and Running Program and sits on the Appraisal Advisory Committee for RECA."
  },
  {
    slug: "shila-klann",
    name: "Shila Klann",
    role: "Co-Owner",
    designations: "Operations & Administration",
    photo: "/images/team/shila.svg",
    leadership: true,
    bio:
      "Shila Klann co-owns Northern Lights Appraisals alongside her husband Gerhardt. She plays an integral role in the day-to-day operations of the firm."
  },
  {
    slug: "brianne-falk",
    name: "Brianne Falk",
    role: "Appraiser",
    designations: "DAR",
    awards: "CNAREA Candidate of the Year 2015",
    photo: "/images/team/brianne.svg",
    bio:
      "Brianne holds a diploma from Lakeland College and a certificate from UBC in Appraisal & Assessment. She was awarded CNAREA's Candidate of the Year in 2015. Her practical and formal training enhances her understanding of the real estate market. In her personal time she enjoys caring for her pets with her husband."
  },
  {
    slug: "ken-pickett",
    name: "Ken Pickett",
    role: "Appraiser",
    designations: "DAR, Certified Appraisal Reviewer",
    photo: "/images/team/ken-pickett.svg",
    bio:
      "Ken brings 14 years of experience across many facets of the appraisal industry. He holds both the DAR and Certified Appraisal Reviewer designations. His focus is primarily on residential appraisals and he takes pride in delivering concise reports while remaining conscious of client timelines. Ken enjoys time with his wife and two sons outside of work."
  },
  {
    slug: "eldon-banack",
    name: "Eldon Banack",
    role: "Appraiser",
    designations: "CRA (working towards AACI)",
    photo: "/images/team/eldon.svg",
    bio:
      "Eldon brings over 9 years of experience as a CRA appraiser to Northern Lights, covering both residential and rural properties. His background in business and construction management gives him a unique perspective on client expectations. He is actively pursuing his AACI designation. In his spare time, Eldon plays hockey, baseball, and golf, and enjoys time with his wife and three young children."
  },
  {
    slug: "neeta-sachar",
    name: "Neeta Sachar",
    role: "Appraiser",
    designations: "DAR",
    awards: "James Vincent Latteri Memorial Award (CNAREA)",
    photo: "/images/team/neeta.svg",
    bio:
      "Neeta began her appraisal career in 2006 and is well-versed across residential, acreage, relocation, and retrospective appraisals. She is the recipient of the James Vincent Latteri Memorial Award from CNAREA. Neeta currently operates out of the Maple Ridge, BC area, extending the firm's geographic reach into British Columbia. She enjoys time with her husband and two daughters."
  },
  {
    slug: "ryan-nicholson",
    name: "Ryan Nicholson",
    role: "Appraiser",
    designations: "DAR (acquired February 2024)",
    photo: "/images/team/ryan.svg",
    bio:
      "Ryan joined Northern Lights in 2021 as a Candidate Member and earned his DAR designation in February 2024. He holds a Bachelor of Commerce (Finance) from the University of Alberta (2000), supplemented by Project Management training from both the U of A and NAIT. Ryan spent the majority of his career in project and contract management in the construction industry before transitioning to appraisals — an area he has always been passionate about. Outside work, he loves skiing, biking, and golfing with his wife and three kids."
  },
  {
    slug: "mike-hejna",
    name: "Mike Hejna",
    role: "Appraiser",
    designations: "DAR",
    photo: "/images/team/mike.svg",
    bio:
      "Mike joined Northern Lights in 2021. He spent the majority of his earlier career leading teams in big-box retail, bringing strong leadership and attention to detail to his appraisal work. Outside the office, Mike enjoys spending time with his wife and two kids and playing ball hockey."
  },
  {
    slug: "ken-heemeryck",
    name: "Ken Heemeryck",
    role: "Appraiser",
    designations: "AACI, P.App (Appraisal Institute of Canada)",
    photo: "/images/team/ken-heemeryck.svg",
    bio:
      "Ken joined the NLA team in 2021 and is based in the Calgary area. He has 13 years of appraisal experience and has completed approximately 5,000 residential appraisals. Ken holds a Bachelor of Commerce from the University of Calgary, a post-graduate business certificate from UBC, and the P.App AACI designation from the Appraisal Institute of Canada. He received his early education in Okotoks and has volunteered as a coach in Okotoks Minor Hockey and Minor Soccer."
  }
];
