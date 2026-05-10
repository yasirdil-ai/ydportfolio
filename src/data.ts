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

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  readingTime: string;
  tags: string[];
  date: string;
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

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    title: "Why Most Education Marketing Fails Without CRM and Automation",
    excerpt: "Most education brands do not have a lead problem. They have a systems problem. Here’s why CRM architecture and automation are becoming the foundation of modern enrolment growth.",
    readingTime: "6 min read",
    tags: ["Growth Marketing", "CRM & Automation"],
    date: "May 2026",
    content: `
      <p>International schools and EdTech brands often spend heavily on advertising but still struggle to convert enquiries into enrolments. The issue usually is not lead volume. It is the absence of a connected marketing and CRM system.</p>

      <p>In many education organisations, marketing still operates in disconnected layers:</p>

      <ul class="list-disc pl-6 space-y-2 mb-6 text-slate-custom/70">
        <li>paid ads generate leads</li>
        <li>admissions teams manually follow up</li>
        <li>spreadsheets track enquiries</li>
        <li>reporting happens too late</li>
        <li>nobody owns the full funnel</li>
      </ul>

      <p>That creates friction, delays, and lost revenue.</p>

      <p>The schools and education brands growing fastest today are treating marketing as a revenue operation, not just a communications department.</p>

      <p>At ISP, I worked on regional demand generation systems that generated more than 21,000 qualified leads annually across multiple campuses. The biggest gains did not come from increasing ad spend. They came from improving the flow between marketing, CRM, admissions, and analytics.</p>

      <h3>Lead Scoring Instead of Manual Guesswork</h3>
      <p>Not every enquiry has the same intent. A parent downloading a brochure behaves differently from someone booking a campus tour or returning multiple times to fee pages.</p>
      <p>By implementing lead scoring through HubSpot and CRM workflows, teams could prioritise high-intent enquiries automatically instead of treating every lead equally.</p>

      <h3>Automated Nurturing Increased Conversion</h3>
      <p>Most education enquiries are not ready to convert instantly. Families research. They compare. They wait. They discuss internally. Without nurturing, many leads simply disappear.</p>
      <p>Automated email sequences, remarketing, and segmented messaging improved nurturing conversion by 30% because communication became relevant to each stage of the decision journey.</p>

      <h3>Real-Time Dashboards Changed Decision-Making</h3>
      <p>Weekly reports are too slow for modern marketing. Real-time dashboards allowed faster budget shifts toward higher-performing campaigns, campuses, and audience segments.</p>

      <h3>AI Is Changing Education Marketing Fast</h3>
      <p>AI is already transforming how schools personalise communication. Predictive lead scoring, intelligent segmentation, and dynamic content are reducing manual work while improving parent engagement.</p>

      <p>Education marketing is no longer just about visibility. It is about building connected systems that turn interest into trust, trust into engagement, and engagement into enrolment.</p>

      <div class="cta-box mt-12 p-8 bg-primary/5 border border-primary/20 rounded-lg">
        <p class="font-serif italic text-lg text-white">Interested in growth strategy, CRM transformation, or marketing leadership? Let’s connect.</p>
      </div>
    `
  },
  {
    id: "blog-2",
    title: "What International Schools Can Learn From Growth Startups",
    excerpt: "The fastest-growing education brands no longer market like traditional institutions. They operate like growth companies with data-driven funnels, storytelling, and performance systems.",
    readingTime: "5 min read",
    tags: ["Education Marketing", "Growth Marketing"],
    date: "April 2026",
    content: `
      <p>Most international schools still market themselves like traditional institutions.</p>

      <p>The fastest-growing education brands behave more like modern growth companies.</p>

      <p>That difference matters.</p>

      <p>Parents today consume information the same way consumers evaluate products:</p>

      <ul class="list-disc pl-6 space-y-2 mb-6 text-slate-custom/70">
        <li>mobile-first</li>
        <li>social-first</li>
        <li>comparison-driven</li>
        <li>trust-based</li>
        <li>heavily influenced by community perception</li>
      </ul>

      <p>Schools competing only on curriculum or facilities are increasingly vulnerable.</p>

      <p>Growth-oriented education brands focus on three things differently.</p>

      <h3>They Build Funnels, Not Campaigns</h3>

      <p>Traditional marketing teams think campaign by campaign.</p>

      <p>Growth teams think funnel by funnel.</p>

      <p>Every stage matters:</p>

      <ul class="list-disc pl-6 space-y-2 mb-6 text-slate-custom/70">
        <li>awareness</li>
        <li>enquiry</li>
        <li>nurturing</li>
        <li>campus visits</li>
        <li>conversion</li>
        <li>retention</li>
        <li>advocacy</li>
      </ul>

      <p>When schools optimise only the top of the funnel, they create lead volume without improving enrolment efficiency.</p>

      <p>The strongest-performing schools align marketing, admissions, CRM, and parent communication into one measurable system.</p>

      <h3>They Treat Brand as an Experience</h3>

      <p>Parents do not remember slogans.</p>

      <p>They remember:</p>

      <ul class="list-disc pl-6 space-y-2 mb-6 text-slate-custom/70">
        <li>response speed</li>
        <li>event experience</li>
        <li>social proof</li>
        <li>communication quality</li>
        <li>emotional trust</li>
      </ul>

      <p>In education, brand is operational.</p>

      <p>A delayed response from admissions damages brand perception just as much as poor advertising.</p>

      <p>Schools that win long term create consistent experiences across every touchpoint.</p>

      <h3>They Use Data to Remove Friction</h3>

      <p>Growth companies obsess over friction.</p>

      <p>International schools should do the same.</p>

      <p>Questions every school should ask:</p>

      <ul class="list-disc pl-6 space-y-2 mb-6 text-slate-custom/70">
        <li>Where are enquiries dropping?</li>
        <li>Which campaigns generate low-quality leads?</li>
        <li>Which campuses convert best?</li>
        <li>What content increases tour bookings?</li>
        <li>Which audiences have highest lifetime value?</li>
      </ul>

      <p>Without data, marketing decisions become opinion-driven instead of performance-driven.</p>

      <h3>The Future of Education Marketing</h3>

      <p>The next generation of successful education brands will combine:</p>

      <ul class="list-disc pl-6 space-y-2 mb-6 text-slate-custom/70">
        <li>storytelling</li>
        <li>CRM intelligence</li>
        <li>AI automation</li>
        <li>community engagement</li>
        <li>performance analytics</li>
      </ul>

      <p>The schools that adapt fastest will dominate enrolment growth over the next decade.</p>

      <p>Education is still deeply human.</p>

      <p>But growth today is increasingly system-driven.</p>

      <div class="cta-box mt-12 p-8 bg-primary/5 border border-primary/20 rounded-lg">
        <p class="font-serif italic text-lg text-white">Interested in growth strategy, CRM transformation, or marketing leadership? Let’s connect.</p>
      </div>
    `
  },
  {
    id: "blog-3",
    title: "Building High-Performance Marketing Teams Across MENA",
    excerpt: "Regional growth requires more than execution. It requires cultural intelligence, operational clarity, and leadership systems that scale across markets.",
    readingTime: "7 min read",
    tags: ["Leadership", "MENA Strategy"],
    date: "March 2026",
    content: `
      <p>Leading marketing teams across different countries requires more than operational management.</p>

      <p>It requires cultural intelligence.</p>

      <p>Over the last decade, marketing across UAE, Qatar, Pakistan, and wider MENA has evolved rapidly. Audiences are more digital, expectations are higher, and attention spans are shorter.</p>

      <p>But one thing remains consistent:<br/>
      people respond to brands that understand context.</p>

      <h3>One Strategy Does Not Fit Every Market</h3>

      <p>Many organisations fail because they copy campaigns across countries without adapting communication style, cultural signals, and audience behaviour.</p>

      <p>The same creative approach that works in Dubai may fail in Riyadh or Doha.</p>

      <p>Strong regional marketing leadership requires balancing:</p>

      <ul class="list-disc pl-6 space-y-2 mb-6 text-slate-custom/70">
        <li>central brand consistency</li>
        <li>local market flexibility</li>
        <li>speed of execution</li>
        <li>cultural relevance</li>
      </ul>

      <p>That balance is where high-performing regional teams differentiate themselves.</p>

      <h3>High-Performance Teams Need Clarity</h3>

      <p>Distributed teams fail when priorities are vague.</p>

      <p>The strongest regional marketing teams usually operate with:</p>

      <ul class="list-disc pl-6 space-y-2 mb-6 text-slate-custom/70">
        <li>clear KPIs</li>
        <li>transparent dashboards</li>
        <li>shared reporting systems</li>
        <li>weekly execution rhythms</li>
        <li>accountability culture</li>
      </ul>

      <p>When teams can see performance clearly, decision-making improves dramatically.</p>

      <p>At scale, clarity becomes more important than control.</p>

      <h3>Technology Is Reshaping Regional Teams</h3>

      <p>CRM systems, automation, AI-assisted reporting, and collaboration tools are changing how regional teams operate.</p>

      <p>Modern marketing leadership is increasingly about enabling systems rather than manually managing every workflow.</p>

      <p>That shift creates:</p>

      <ul class="list-disc pl-6 space-y-2 mb-6 text-slate-custom/70">
        <li>faster execution</li>
        <li>better reporting</li>
        <li>reduced operational bottlenecks</li>
        <li>stronger alignment between marketing and commercial teams</li>
      </ul>

      <h3>Leadership Still Matters Most</h3>

      <p>Technology improves efficiency.<br/>
      Leadership builds momentum.</p>

      <p>The best regional marketing teams are built on:</p>

      <ul class="list-disc pl-6 space-y-2 mb-6 text-slate-custom/70">
        <li>trust</li>
        <li>ownership</li>
        <li>experimentation</li>
        <li>fast learning</li>
        <li>psychological safety</li>
      </ul>

      <p>People perform best when they understand both the numbers and the mission behind the work.</p>

      <p>Marketing across MENA is becoming more competitive every year.</p>

      <p>The organisations that combine cultural intelligence, operational discipline, and modern growth systems will lead the next phase of regional brand growth.</p>

      <div class="cta-box mt-12 p-8 bg-primary/5 border border-primary/20 rounded-lg">
        <p class="font-serif italic text-lg text-white">Interested in growth strategy, CRM transformation, or marketing leadership? Let’s connect.</p>
      </div>
    `
  }
];

export interface LinkedInPost {
  id: string;
  url: string;
  title: string;
  content: string;
  date: string;
  engagement: string;
  image?: string;
}

export const LINKEDIN_POSTS: LinkedInPost[] = [
  {
    id: "post-1",
    url: "https://www.linkedin.com/posts/yasirdil_growthmarketing-crm-automation-activity-1",
    title: "The absence of a connected marketing and CRM system is the #1 reason education brands fail to scale.",
    content: "Most education brands do not have a lead problem. They have a systems problem. CRM architecture and automation are becoming the foundation of modern enrolment growth.",
    date: "2 days ago",
    engagement: "142 likes • 12 comments",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "post-2",
    url: "https://www.linkedin.com/posts/yasirdil_edtech-innovation-growth-activity-2",
    title: "International schools need to start marketing like growth startups.",
    content: "The fastest-growing education brands no longer market like traditional institutions. They operate with data-driven funnels, storytelling, and performance systems.",
    date: "1 week ago",
    engagement: "89 likes • 5 comments",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "post-3",
    url: "https://www.linkedin.com/posts/yasirdil_leadership-marketing-mena-activity-3",
    title: "Building High-Performance Marketing Teams Across MENA is about cultural context.",
    content: "Regional growth requires more than execution. It requires cultural intelligence, operational clarity, and leadership systems that scale across diverse markets.",
    date: "2 weeks ago",
    engagement: "215 likes • 24 comments",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"
  }
];
