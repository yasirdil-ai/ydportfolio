export interface Metric {
  value: string;
  label: string;
  description: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  challenge: string;
  action: string;
  result: string;
  tools: string[];
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
}

export interface Service {
  title: string;
  forWho: string;
  outcome: string;
}

export const METRICS: Metric[] = [
  { value: "21,000+", label: "Qualified Leads", description: "Generated annually through integrated multi-channel campaigns." },
  { value: "25%", label: "Enrolment Growth", description: "Year-on-year growth achieved for international education groups." },
  { value: "35%", label: "Funnel Lift", description: "Uplift in qualified lead volume through strategic optimization." },
  { value: "30%", label: "Lead Nurturing", description: "Improvement in conversion through advanced CRM architecture." },
  { value: "40%", label: "Productivity Gain", description: "Through HubSpot automation and customized workflow implementation." },
  { value: "12+", label: "Global Team", description: "Distributed marketing team led across UAE, Qatar, and Pakistan." },
  { value: "AED 5M+", label: "Budget Managed", description: "Annual multi-million marketing expenditure handled with high ROI." },
  { value: "60%", label: "Brand Visibility", description: "Uplift through new revenue and strategic storytelling channels." },
  { value: "1M+", label: "Audience Reach", description: "People reached through multilingual communication campaigns." },
  { value: "100K", label: "Viral Response", description: "Calls generated in 2 months through a viral public campaign." },
  { value: "70%", label: "Traffic Growth", description: "Increase in site visits for high-profile digital campaigns." },
  { value: "100+", label: "Event Activations", description: "High-visibility events and digital activations executed globally." },
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Regional Marketing Manager",
    company: "International School Partnership",
    location: "Dubai",
    period: "2024 – Present",
    summary: "Leading regional marketing strategy across international schools in UAE and Qatar. Focus on demand generation, brand strategy, CRM automation, and performance dashboards.",
  },
  {
    role: "Head of Marketing & Admissions",
    company: "International Community Schools",
    location: "Abu Dhabi",
    period: "2024",
    summary: "Owned marketing and admissions strategy across a multi-campus education group, driving enrolment growth and platform-wide CRM automation.",
  },
  {
    role: "Corporate Marketing & Admissions Manager",
    company: "LEAMS Education Services",
    location: "Dubai",
    period: "2023 – 2024",
    summary: "Led unified marketing execution across four campuses, delivering enrolment growth through digital-first campaigns and CRM pipeline management.",
  },
  {
    role: "Marketing Specialist",
    company: "Millennium Group",
    location: "UK / Dubai",
    period: "2022 – 2023",
    summary: "Executed digital-first brand campaigns for FMCG clients, contributing to £1M+ in Q1 revenue through influencer and email marketing.",
  },
  {
    role: "Communication & Digital Campaign Expert",
    company: "Cesvi Fondazione Onlus",
    location: "Pakistan / Remote",
    period: "2020 – 2022",
    summary: "Led EU-funded communication campaigns reaching 1M+ people, producing 100+ social and video content pieces.",
  },
  {
    role: "Freelance Consultant",
    company: "Global Growth Projects",
    location: "Remote",
    period: "2018 – Present",
    summary: "Delivered digital strategy and social growth projects for international organisations, sports brands, and advocacy campaigns.",
  },
  {
    role: "Digital Campaign Coordinator",
    company: "Sustainable Development Policy Institute",
    location: "Pakistan",
    period: "2015 – 2018",
    summary: "Executed 100+ digital activations and high-visibility events, supporting institutional visibility and policy communication.",
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "cs1",
    title: "Regional Education Growth Engine",
    challenge: "Managing growth across 11 international schools in UAE and Qatar.",
    action: "Built integrated demand generation strategy, CRM workflows, and performance dashboards.",
    result: "Generated 21,000+ leads annually, delivered 25% YoY enrolment growth, and 35% lift in lead quality.",
    tools: ["HubSpot", "Zoho CRM", "GA4", "Looker Studio", "Google Ads", "Meta Ads"],
  },
  {
    id: "cs2",
    title: "CRM Automation & Lead Nurturing",
    challenge: "Manual or fragmented lead management across education campuses.",
    action: "Designed advanced HubSpot and Zoho CRM automation with lead scoring and auto-assignment.",
    result: "Improved nurturing by 30%, productivity by 40%, and response time by 25%.",
    tools: ["HubSpot", "Zoho CRM", "Salesforce", "Looker Studio"],
  },
  {
    id: "cs3",
    title: "Multi-Campus Admissions Growth",
    challenge: "Growing admissions while maintaining distinct brand positioning.",
    action: "Led multilingual content, paid digital, and admissions funnel optimization.",
    result: "15% YoY admissions growth and 12% enrolment increase through digital-first campaigns.",
    tools: ["Meta Ads", "LinkedIn Ads", "Content Strategy", "Funnel Optimization"],
  },
  {
    id: "cs4",
    title: "Viral Public Campaign",
    challenge: "Drive rapid public action and awareness through digital-first execution.",
    action: "Led influencer-style messaging and performance-led distribution strategy.",
    result: "Generated 100K calls in 2 months and achieved national Twitter trending reach.",
    tools: ["Influencer Marketing", "Social Strategy", "Viral Loops"],
  },
  {
    id: "cs5",
    title: "Freelance Growth Portfolio",
    challenge: "Support global organizations with digital strategy and execution.",
    action: "Delivered consulting for humanitarian, sports, and advocacy brands.",
    result: "70% increase in site visits (100K+ new visitors) for a sports brand and 70% audience growth.",
    tools: ["Digital Strategy", "Campaign Execution", "Brand Growth"],
  },
];

export const SERVICES: Service[] = [
  { title: "Fractional Head of Marketing", forWho: "Founders & Boards", outcome: "Executive leadership without full-time overhead." },
  { title: "Demand Generation Strategy", forWho: "Sales-led B2B & Education", outcome: "A repeatable engine for MQLs and SQLs." },
  { title: "CRM & Funnel Automation", forWho: "Operations Teams", outcome: "40% productivity gains and seamless lead flow." },
  { title: "EdTech Growth Strategy", forWho: "Startups & Scaleups", outcome: "Market entry and customer acquisition playbooks." },
  { title: "Performance Dashboards", forWho: "CMOs & Stakeholders", outcome: "Real-time visibility into ROI and campaign health." },
  { title: "Brand Storytelling", forWho: "Heritage & Mission-led Brands", outcome: "Distinctive positioning that cuts through noise." },
];

export const TECH_STACK = [
  "HubSpot", "Zoho CRM", "Salesforce", "Google Analytics 4", "Google Tag Manager",
  "Looker Studio", "Google Ads", "Meta Ads Manager", "LinkedIn Ads", "Mailchimp",
  "Pipedrive", "Canva Pro", "Adobe Suite", "ChatGPT", "Claude", "Zapier", "Notion",
  "Monday.com", "ClickUp", "Microsoft 365"
];

export const EDUCATION = [
  { degree: "Master of Development Studies", school: "Iqra University" },
  { degree: "Bachelor of Commerce & Communication", school: "Punjab University" },
  { degree: "HubSpot Marketing Automation", school: "Certification" },
  { degree: "Google Digital Marketing", school: "Certification" },
  { degree: "Meta Blueprint Digital Marketing", school: "Certification" },
  { degree: "Risk Communication", school: "Red Cross UK" },
];
