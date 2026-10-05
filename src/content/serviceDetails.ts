// Page content for /services/:slug, migrated from the old service modals.
// FAQ answers only restate claims already made in the original service copy.

export type HeroVisual = 'shortlist' | 'verification' | 'assessment' | 'permit' | 'compliance' | 'highlights';

export type Offering = {
  title: string;
  description?: string;
  items?: string[];
  /** Optional sub-heading to group offerings under */
  group?: string;
};

export type ServiceDetail = {
  slug: string;
  tagline: string;
  lead: string;
  body?: string;
  visual: HeroVisual;
  /** Short checklist used by the 'highlights' hero card */
  highlights: string[];
  offeringsTitle: string;
  offerings: Offering[];
  listSection?: { title: string; intro?: string; items: string[] };
  process?: { title: string; description: string }[];
  whyItMatters?: {
    title: string;
    intro?: string;
    points: string[];
    stat?: { value: string; label: string; source: string };
  };
  whyUs?: { title: string; description?: string }[];
  industries?: string[];
  faqs: { q: string; a: string }[];
  closing: { title: string; text: string };
};

const badHireStat = {
  value: '30%',
  label: 'of an employee’s annual salary: the potential cost of a bad hire',
  source: 'U.S. Department of Labor',
};

export const serviceDetails: Record<string, ServiceDetail> = {
  recruitment: {
    slug: 'recruitment',
    tagline: 'Finding the right talent. Every time.',
    lead: 'We help businesses find, attract and hire the best talent: fast, professionally and cost-effectively.',
    body: 'Recruitment is more than filling a vacancy. It’s about finding the candidate who fits your culture, delivers results and grows with your organisation.',
    visual: 'shortlist',
    highlights: ['End-to-end hiring', 'Executive search', 'Bulk recruitment', 'Graduate programmes'],
    offeringsTitle: 'What we offer',
    offerings: [
      { title: 'End-to-end recruitment', description: 'From job profiling to final onboarding, we manage the whole process so you can stay focused on your business.' },
      { title: 'Executive search & headhunting', description: 'We discreetly source top-tier professionals for senior and specialised roles using our network and proven approach.' },
      { title: 'Bulk recruitment', description: 'Hiring several people for an expansion or project? Structured, scalable recruitment that keeps quality high.' },
      { title: 'Temporary & contract staffing', description: 'Vetted short-term or project-based talent, so you keep flexibility and control costs.' },
      { title: 'Graduate trainees & interns', description: 'Build your future talent pipeline with young, trainable graduates matched to your long-term goals.' },
      { title: 'Specialised industry hiring', description: 'We understand the hiring needs of oil & gas, finance, manufacturing, hospitality, tech and healthcare.' },
    ],
    process: [
      { title: 'Needs assessment', description: 'We learn your business goals, team dynamics and the exact skills you need.' },
      { title: 'Job profiling & market mapping', description: 'We define the ideal candidate, map talent availability and write compelling job ads.' },
      { title: 'Sourcing & headhunting', description: 'We tap our network, job boards, talent databases and digital channels.' },
      { title: 'Screening & shortlisting', description: 'Rigorous screening, interviews, background checks and assessments (on request).' },
      { title: 'Client interviews & selection', description: 'Only qualified, culture-fit candidates reach your final interviews.' },
      { title: 'Offer & onboarding support', description: 'We help negotiate offers and make onboarding smooth, for long-term retention.' },
    ],
    whyItMatters: {
      title: 'Why the right hire matters',
      intro: 'Without the right talent:',
      points: ['Productivity drops', 'Projects get delayed', 'Team morale suffers', 'You lose your competitive edge'],
      stat: badHireStat,
    },
    whyUs: [
      { title: 'Speed & accuracy' },
      { title: 'Industry expertise' },
      { title: 'Cost efficiency' },
      { title: 'A tailored process' },
      { title: 'Confidentiality' },
      { title: 'Nationwide reach' },
    ],
    industries: ['Manufacturing', 'Healthcare & Hospitals', 'Financial institutions', 'Pharmaceutical', 'Engineering', 'Call centres', 'Oil & Gas', 'Hospitality', 'Tech'],
    faqs: [
      { q: 'What kinds of roles do you recruit for?', a: 'Everything from graduate trainees and interns to senior executives, including contract and temporary staff, across sectors such as oil & gas, finance, manufacturing, hospitality, tech and healthcare.' },
      { q: 'Can you handle bulk hiring?', a: 'Yes. Whether you are hiring one person or scaling up by 100, we run structured, scalable bulk recruitment for expansions and project work.' },
      { q: 'Are candidates screened before we meet them?', a: 'Yes. Every applicant goes through screening and interviews, with background checks and assessments available on request. Only qualified, culture-fit candidates reach your final interviews.' },
      { q: 'How do we get started?', a: 'Book a free recruitment needs consultation. We’ll discuss your goals and the roles you need to fill, then recommend an approach.' },
    ],
    closing: { title: 'Let’s build your team.', text: 'Book a free recruitment needs consultation and we’ll map out the right hiring approach for you.' },
  },

  'pre-employment-tests': {
    slug: 'pre-employment-tests',
    tagline: 'Know who you’re hiring before you hire.',
    lead: 'Objective assessments that measure what a CV can’t: ability, skills, personality and integrity.',
    body: 'Use them on their own, or as part of our recruitment process to make shortlists more reliable.',
    visual: 'assessment',
    highlights: ['Ability & reasoning', 'Skills & knowledge', 'Personality & behaviour', 'Integrity'],
    offeringsTitle: 'Assessments we offer',
    offerings: [
      { group: 'Ability & reasoning', title: 'Cognitive ability test', description: 'General problem-solving and learning ability.' },
      { group: 'Ability & reasoning', title: 'Aptitude test', description: 'Potential to perform and learn in a specific role.' },
      { group: 'Ability & reasoning', title: 'Numerical & verbal reasoning', description: 'Working with numbers, data and written information.' },
      { group: 'Skills & knowledge', title: 'Skills assessment', description: 'Hands-on tasks that show practical, role-ready skills.' },
      { group: 'Skills & knowledge', title: 'Technical competency test', description: 'Depth of technical know-how for specialist roles.' },
      { group: 'Skills & knowledge', title: 'Job knowledge test', description: 'Understanding of the tools, rules and practice of the job.' },
      { group: 'Skills & knowledge', title: 'Language proficiency test', description: 'Spoken and written communication in the working language.' },
      { group: 'Personality & behaviour', title: 'Personality test', description: 'Work style, motivation and behavioural preferences.' },
      { group: 'Personality & behaviour', title: 'Psychometric test', description: 'Structured measures of traits and abilities.' },
      { group: 'Personality & behaviour', title: 'Emotional intelligence (EQ) test', description: 'Self-awareness, empathy and handling relationships.' },
      { group: 'Personality & behaviour', title: 'Situational judgement test (SJT)', description: 'How candidates respond to realistic workplace scenarios.' },
      { group: 'Personality & behaviour', title: 'Culture fit assessment', description: 'Alignment with your values and ways of working.' },
      { group: 'Integrity & leadership', title: 'Integrity / honesty test', description: 'Attitudes to rules, honesty and counterproductive behaviour.' },
      { group: 'Integrity & leadership', title: 'Leadership / management assessment', description: 'Readiness to lead people and make decisions.' },
    ],
    whyItMatters: {
      title: 'Why assess before you hire',
      intro: 'Interviews alone can miss:',
      points: ['Gaps between claimed and actual skills', 'Poor fit with the role or team', 'Integrity and reliability risks', 'Leadership potential, or the lack of it'],
      stat: badHireStat,
    },
    faqs: [
      { q: 'Which tests do you offer?', a: 'Fourteen assessment types covering ability and reasoning, skills and job knowledge, personality and behaviour, integrity, and leadership.' },
      { q: 'Can tests be part of a recruitment campaign?', a: 'Yes. Assessments can be added to the screening stage of our recruitment service, so you only interview candidates who meet the bar.' },
      { q: 'Do you assess candidates for management roles?', a: 'Yes. Leadership and management assessments help you judge readiness to lead people and make decisions.' },
    ],
    closing: { title: 'Hire on evidence, not guesswork.', text: 'Tell us about the roles you’re filling and we’ll recommend the right mix of assessments.' },
  },

  'employee-verification': {
    slug: 'employee-verification',
    tagline: 'Protect your business. Hire with confidence.',
    lead: 'Professional background checks, available in every part of Nigeria, that reduce hiring risk and help you build a trustworthy workforce.',
    body: 'Hiring the wrong person can cost far more than salary: reputational damage, compliance issues and security risks.',
    visual: 'verification',
    highlights: ['KYC & identity', 'Guarantor checks', 'Address confirmation', 'Nationwide coverage'],
    offeringsTitle: 'Checks we carry out',
    offerings: [
      { title: 'KYC verification', description: 'Confirms a candidate’s true identity using valid government-issued IDs and biometric data. Prevents impersonation and identity fraud.' },
      { title: 'Credit check', description: 'Reviews financial behaviour including debts, defaults and repayment patterns. Ideal for finance-related roles.' },
      { title: 'Previous employment check', description: 'Validates employment history, roles, durations and reasons for leaving.' },
      { title: 'Educational certificate verification', description: 'Confirms degrees, institutions and graduation records, and filters out forged credentials.' },
      { title: 'NYSC certificate verification', description: 'Verifies NYSC discharge or exemption certificates, in line with Nigerian employment law.' },
      { title: 'Guarantor / referee check', description: 'Confirms the identity and relationship of guarantors and referees, giving you a fallback contact.' },
      { title: 'Criminal record check', description: 'Identifies past convictions or police records. Critical for roles involving trust, data, finance or customers.' },
      { title: 'Address confirmation', description: 'Verifies residential addresses through physical visits or document validation.' },
    ],
    listSection: {
      title: 'How we verify',
      intro: 'Our methods include, but are not limited to:',
      items: [
        'Standard, professional background screening',
        'Contacting previous employers for references and conduct',
        'Visiting residences of employees, referees and guarantors',
        'Interviewing colleagues, neighbours or associates',
        'Searching databases, credit reports, public records, tax and legal filings',
        'Working with security agencies for intelligence sharing',
        'Reviewing public social media profiles',
        'Undercover assessments of performance and honesty, where appropriate',
      ],
    },
    whyItMatters: {
      title: 'Why verification matters',
      intro: 'Skipping checks exposes you to:',
      points: ['Identity fraud and impersonation', 'Underqualified staff with false CVs or forged certificates', 'Theft, fraud and security threats', 'Staff you can’t trace after misconduct or abscondment'],
      stat: badHireStat,
    },
    whyUs: [
      { title: 'Nationwide coverage', description: 'Lagos, Port Harcourt, Abuja, Kano or anywhere else in Nigeria.' },
      { title: 'Accuracy', description: 'Multiple sources and physical verification, not just paperwork.' },
      { title: 'Speed', description: 'Structured checks that keep your hiring moving.' },
      { title: 'Confidentiality', description: 'Sensitive candidate information handled discreetly.' },
    ],
    faqs: [
      { q: 'Do you cover locations outside Lagos?', a: 'Yes. Our verification services are available in every part of Nigeria, including Port Harcourt, Abuja and Kano.' },
      { q: 'Which checks should we run?', a: 'It depends on the role. Credit checks suit finance roles, and criminal record checks matter most for positions of trust, data access, finance and customer contact. We’ll recommend the right mix.' },
      { q: 'How do you confirm addresses?', a: 'Through physical visits to the address or by validating documents, depending on what the situation requires.' },
    ],
    closing: { title: 'Hire right the first time.', text: 'Tell us which roles you’re filling and we’ll recommend the checks that protect your business.' },
  },

  outsourcing: {
    slug: 'outsourcing',
    tagline: 'We handle your workforce. You focus on growth.',
    lead: 'Reliable, cost-effective employee outsourcing that helps you scale, reduce liabilities and stay compliant, with skilled, vetted talent across Nigeria.',
    body: 'Businesses need the flexibility to scale up or down without being weighed down by HR operations. That’s where we come in.',
    visual: 'highlights',
    highlights: ['Recruitment & onboarding', 'Payroll & statutory remittances', 'Performance monitoring', 'Exits and disputes handled', 'Deploy 2 to 200 staff'],
    offeringsTitle: 'What we offer',
    offerings: [
      { title: 'Recruitment & onboarding', description: 'End-to-end sourcing, screening and onboarding, so you get best-fit staff quickly.' },
      { title: 'HR administration', description: 'Contracts, records, payroll processing, tax remittances and leave administration.' },
      { title: 'Regulatory compliance', description: 'Labour law, pension, NSITF, PAYE, ITF and other statutory requirements, managed for you.' },
      { title: 'Performance monitoring', description: 'Tracking of outsourced staff performance, periodic reports and ongoing development.' },
      { title: 'Risk mitigation', description: 'We carry the employer liabilities and manage exits, disputes and workplace issues.' },
      { title: 'Scalable workforce', description: 'Temporary, contract or long-term staff, from 2 to 200 people, deployed at short notice across Nigeria.' },
    ],
    whyItMatters: {
      title: 'The risk of getting it wrong',
      points: ['High turnover and hiring costs', 'Legal exposure from mismanaged HR', 'Payroll errors and tax penalties', 'Inability to scale quickly', 'Downtime from understaffing'],
    },
    whyUs: [
      { title: 'Lower costs', description: 'Save up to 30% on HR and operational costs.' },
      { title: 'Nationwide coverage', description: 'We source and deploy talent across all 36 states and the FCT.' },
      { title: 'Compliance', description: 'Full alignment with labour regulations, avoiding fines and sanctions.' },
      { title: 'Talent pool', description: 'A growing database of qualified, pre-vetted professionals.' },
      { title: 'Fast turnaround', description: 'Deployment within 48–72 hours for most roles.' },
    ],
    industries: ['Manufacturing', 'FMCG', 'Telecoms', 'Hospitality', 'Logistics & Transport', 'Oil & Gas', 'Construction', 'Financial services'],
    faqs: [
      { q: 'Which roles can you outsource?', a: 'Common roles include call centre agents, technicians, marketers, customer service staff, drivers, bank tellers, factory workers and hospitality staff.' },
      { q: 'How quickly can you deploy staff?', a: 'For most roles we can deploy within 48–72 hours.' },
      { q: 'Who handles payroll, taxes and compliance?', a: 'We do. Payroll, tax remittances, pension, NSITF, ITF and other statutory obligations are managed on your behalf.' },
      { q: 'Can we scale up or down?', a: 'Yes. Whether you need 2 or 200 staff, on temporary, contract or long-term arrangements, we adjust with you in any region of Nigeria.' },
    ],
    closing: { title: 'Let’s structure your ideal workforce.', text: 'Tell us the roles and headcount you need and we’ll propose an outsourcing plan.' },
  },

  'hr-services': {
    slug: 'hr-services',
    tagline: 'Complete HR, without the full HR department.',
    lead: 'End-to-end human resource services that help you attract, retain, develop and manage your people, while staying compliant.',
    body: 'Whether you’re a startup laying HR foundations or a growing business that needs strategic support, we tailor our services to you.',
    visual: 'highlights',
    highlights: ['Payroll & statutory deductions', 'Policies & employee handbooks', 'Performance management', 'HR compliance audits', 'Attendance systems'],
    offeringsTitle: 'Our HR services',
    offerings: [
      { title: 'Attendance device supply & management', description: 'Biometric or RFID time-and-attendance systems, integrated with payroll and leave, with real-time reporting.' },
      { title: 'Performance management', description: 'KPI and appraisal systems, performance tracking tools, and annual or quarterly review frameworks.' },
      { title: 'Training & development', description: 'In-house or external programmes for soft skills, technical and leadership development.' },
      { title: 'Outsourcing', description: 'Skilled contract and full-time staff, with personnel administration and compliance handled.' },
      { title: 'Career management', description: 'Growth mapping, succession planning, coaching and mentoring.' },
      { title: 'Recruitment', description: 'Talent acquisition from junior to executive level, with testing and onboarding.' },
      { title: 'Policies & procedures', description: 'Employee handbooks, HR manuals and policies aligned with labour law, covering discipline, leave and grievances.' },
      { title: 'HR compliance audit', description: 'Assessment of HR practices, gap identification, risk plans and support implementing recommendations.' },
      { title: 'HR management', description: 'Day-to-day HR operations, employee records, leave, benefits and disciplinary support.' },
      { title: 'Payroll management', description: 'Accurate salary processing, statutory deductions (PAYE, NHF, NSITF, pension), payslips and staff queries.' },
      { title: 'Employee relations', description: 'Conflict resolution, mediation, engagement programmes and guidance on grievance procedures.' },
    ],
    whyUs: [
      { title: 'Cost savings', description: 'No need for a full internal HR department.' },
      { title: 'Efficiency', description: 'Streamlined processes and technology-driven HR management.' },
      { title: 'Compliance', description: 'Aligned with Nigerian labour law and global HR standards.' },
      { title: 'Scalability', description: 'Whether you’re growing or restructuring, we adapt with you.' },
      { title: 'Nationwide coverage', description: 'We support clients across all states in Nigeria.' },
    ],
    faqs: [
      { q: 'Do we need our own HR team to work with you?', a: 'No. We can provide consulting, operational support or full HR outsourcing, depending on what you already have in place.' },
      { q: 'Can you write our employee handbook and HR policies?', a: 'Yes. We create employee handbooks, HR manuals and policies aligned with Nigerian labour law, including disciplinary, leave and grievance guidelines.' },
      { q: 'Which statutory deductions does your payroll service cover?', a: 'PAYE, NHF, NSITF and pension, alongside salary processing, payslips and staff queries.' },
    ],
    closing: { title: 'Build a thriving workforce.', text: 'Whether you need consulting, operational support or full HR outsourcing, we’ll design the right setup for you.' },
  },

  'training-and-development': {
    slug: 'training-and-development',
    tagline: 'Empower your people. Elevate your business.',
    lead: 'Tailor-made training programmes that build competencies, increase engagement and align your workforce with your strategy.',
    body: 'All training can be delivered in-house or at a location of your choice, depending on your operational needs.',
    visual: 'highlights',
    highlights: ['Soft skills', 'Leadership', 'Sales & customer service', 'Technical & digital skills', 'Health, safety & environment'],
    offeringsTitle: 'Training categories',
    offerings: [
      {
        title: 'Soft skills',
        description: 'Interpersonal and behavioural skills that lift performance.',
        items: ['Communication & active listening', 'Emotional intelligence', 'Time management', 'Conflict resolution', 'Team building', 'Professional etiquette'],
      },
      {
        title: 'Technical & job-specific',
        description: 'The competencies each role requires.',
        items: ['Procurement & supply chain', 'Project management (PMP, Agile, Scrum)', 'Financial reporting & budgeting', 'Engineering & maintenance', 'HR & payroll systems', 'Oil & gas standards (HSE, QA/QC)'],
      },
      {
        title: 'Leadership',
        description: 'Leaders who inspire, manage and drive performance.',
        items: ['Leadership presence & influence', 'Strategic thinking & decisions', 'Coaching & mentoring', 'Change management', 'Team motivation'],
      },
      {
        title: 'Sales & customer service',
        description: 'Attract, convert and retain customers.',
        items: ['Customer relationship management', 'Handling difficult customers', 'Complaint handling', 'Upselling & cross-selling', 'Pipeline management & closing'],
      },
      {
        title: 'Digital skills',
        description: 'A digitally ready, efficient workforce.',
        items: ['Microsoft Office & Google Workspace', 'Zoom, Teams & Slack', 'Cybersecurity awareness', 'Data analysis with Excel & Power BI'],
      },
      {
        title: 'Health, safety & environment',
        description: 'Protect people, workplaces and the environment.',
        items: ['HSE management systems', 'Risk assessment', 'Fire safety & emergency response', 'Incident investigation', 'First aid & CPR'],
      },
    ],
    listSection: {
      title: 'How we deliver',
      items: [
        'In-house training at your office or preferred venue',
        'Virtual instructor-led sessions',
        'Hybrid workshops',
        'One-on-one coaching for leadership roles',
        'Post-training evaluation and feedback reports',
      ],
    },
    whyItMatters: {
      title: 'The cost of not training',
      points: ['Declining performance from skill gaps', 'Higher turnover from lack of development', 'Missed growth opportunities', 'A weak leadership pipeline', 'Lower morale and innovation'],
    },
    faqs: [
      { q: 'Where is training delivered?', a: 'At your office, a venue of your choice, virtually, or as a hybrid workshop. One-on-one coaching is available for leadership roles.' },
      { q: 'Can programmes be tailored to our team?', a: 'Yes. Programmes are designed around your goals, roles and operational needs.' },
      { q: 'How do we know the training worked?', a: 'Every programme includes post-training evaluation and feedback reports.' },
      { q: 'Do you run open programmes for individuals?', a: 'Yes. Our Intensive Hands-On HR Training is open to individuals. See the HR Training page for details.' },
    ],
    closing: { title: 'Ready for a stronger, smarter team?', text: 'Book a free training needs assessment and we’ll design a programme around your people.' },
  },

  'expatriate-and-immigration': {
    slug: 'expatriate-and-immigration',
    tagline: 'Bring in international talent, without the red tape.',
    lead: 'Comprehensive immigration and expatriate management that keeps your business compliant and your projects on schedule.',
    body: 'We simplify the whole process so you can onboard international professionals into Nigeria quickly, legally and stress-free.',
    visual: 'permit',
    highlights: ['Expatriate quota', 'Business permits', 'TWP & CERPAC', 'Monthly returns'],
    offeringsTitle: 'Our immigration services',
    offerings: [
      { title: 'Expatriate quota approvals', description: 'We help secure quota approvals from the Ministry of Interior, aligned with your business plans.' },
      { title: 'Business permits', description: 'Required business permits for foreign-owned or partnered companies operating in Nigeria.' },
      { title: 'Monthly expatriate quota returns', description: 'Timely preparation and filing of statutory returns.' },
      { title: 'Quota position monitoring', description: 'Tracking of quota usage to prevent overstay and non-compliance.' },
      { title: 'Quota renewals & amendments', description: 'Increase, extend or amend existing positions with smooth continuity.' },
      { title: 'Expatriate information management', description: 'Accurate, up-to-date records of expatriate staff, in line with government requirements.' },
      { title: 'Temporary Work Permits (TWP)', description: 'Fast-tracked approvals for short-term technical assignments.' },
      { title: 'CERPAC processing & renewal', description: 'End-to-end management of the Combined Expatriate Residence Permit and Aliens Card.' },
    ],
    whyItMatters: {
      title: 'Why it matters',
      intro: 'Operating without proper immigration support can lead to:',
      points: ['Regulatory sanctions or fines', 'Delays to operations and projects', 'Deportation of key staff', 'Reputational damage', 'Revocation of business licences'],
    },
    whyUs: [
      { title: 'Regulatory expertise', description: 'Up to date with Nigerian immigration law and Ministry of Interior policy.' },
      { title: 'End-to-end support', description: 'From documentation to liaison with government authorities.' },
      { title: 'Compliance assurance', description: 'We keep you compliant to avoid infractions and penalties.' },
      { title: 'Speed & accuracy', description: 'A structured process for applications, approvals and renewals.' },
      { title: 'Confidentiality', description: 'Strict protocols for sensitive employee data.' },
    ],
    faqs: [
      { q: 'Do you handle renewals and monthly returns?', a: 'Yes. We file monthly expatriate quota returns, monitor quota positions, and manage renewals and amendments.' },
      { q: 'Do you support expatriates outside Lagos?', a: 'Yes. We serve expatriates in Lagos, Port Harcourt, Abuja, Ilorin and remote project sites across Nigeria.' },
      { q: 'Can you help with short-term assignments?', a: 'Yes. We fast-track Temporary Work Permits (TWP) for short-term technical assignments.' },
    ],
    closing: { title: 'Stay focused on growth.', text: 'We’ll handle the immigration work. Book a consultation to discuss your expatriate needs.' },
  },

  'regulatory-compliance': {
    slug: 'regulatory-compliance',
    tagline: 'Ensure compliance. Gain certification. Operate with confidence.',
    lead: 'End-to-end regulatory compliance, certification and audit services that help you meet statutory requirements, pass audits and win more work.',
    body: 'In oil & gas and allied industries, compliance isn’t optional. It protects your licence to operate and opens doors to major opportunities.',
    visual: 'compliance',
    highlights: ['NIPEX registration', 'NCDMB & NOGIC JQS', 'ISO 45001 audits', 'Prequalification support'],
    offeringsTitle: 'Our services',
    offerings: [
      { group: 'Registrations & permits', title: 'NIPEX registration', description: 'New registrations, renewals and pre-qualification categories (PCA).' },
      { group: 'Registrations & permits', title: 'DPR / NUPRC / NMDPRA permits', description: 'Operating licences for upstream, midstream and downstream activities.' },
      { group: 'Registrations & permits', title: 'NCDMB & NOGIC JQS registration', description: 'Meet local content requirements and unlock NCDMB projects.' },
      { group: 'Registrations & permits', title: 'COREN certification', description: 'For engineering firms and professionals operating in Nigeria.' },
      { group: 'Registrations & permits', title: 'Dun & Bradstreet D-U-N-S® registration', description: 'Strengthen your global corporate identity and creditworthiness.' },
      { group: 'Registrations & permits', title: 'Offshore Safety Permit (OSP)', description: 'For personnel working offshore and in remote environments.' },
      { group: 'Registrations & permits', title: 'Weights & measures permits', description: 'Comply with metrological standards.' },
      { group: 'Registrations & permits', title: 'Certificate of Pattern Approval', description: 'For companies using standard measurement or inspection equipment.' },
      { group: 'Audits', title: 'Second-party audits', description: 'Assess suppliers and subcontractors for compliance and quality.' },
      { group: 'Audits', title: 'Contractor safety audits', description: 'Verify the safety practices and documentation of vendors.' },
      { group: 'Audits', title: 'Regulatory compliance audits', description: 'Check your operations against government and industry rules.' },
      { group: 'Audits', title: 'Prequalification audits', description: 'Prepare for and pass client prequalification assessments.' },
      { group: 'Audits', title: 'ISO 45001:2018 certification audits', description: 'Stage 1 and 2 audits for occupational health & safety certification.' },
      { group: 'Audits', title: 'Internal OHS & ISO 45001 audits', description: 'Find gaps and maintain or renew your certification.' },
      { group: 'Audits', title: 'NIPEX audits', description: 'Support to retain or improve your NIPEX compliance scores.' },
    ],
    whyItMatters: {
      title: 'Why it matters',
      points: [
        'Non-compliance can mean permit revocation, contract disqualification or legal sanctions',
        'It leads to lost opportunities, financial penalties and reputational damage',
        'Strong audit records and certifications help you win tenders and partnerships',
      ],
    },
    whyUs: [
      { title: 'Regulatory expertise', description: 'Deep understanding of Nigerian and international compliance frameworks.' },
      { title: 'End-to-end support', description: 'From documentation to submission and follow-up.' },
      { title: 'Nationwide coverage', description: 'All states in Nigeria, including remote field locations.' },
      { title: 'Track record', description: 'Trusted in oil & gas, manufacturing, energy, engineering and telecoms.' },
    ],
    industries: ['Oil & Gas', 'Engineering & Construction', 'Power & Energy', 'Manufacturing', 'Marine & Offshore', 'Telecoms & Infrastructure'],
    faqs: [
      { q: 'Can you help us prepare for NIPEX or prequalification audits?', a: 'Yes. We handle NIPEX registration and renewals, run NIPEX audits, and prepare you for client prequalification assessments.' },
      { q: 'Do you support ISO 45001 certification?', a: 'Yes. We run Stage 1 and 2 certification audits as well as internal OHS and ISO 45001 compliance audits.' },
      { q: 'Do you work with companies new to the industry?', a: 'Yes. Whether you’re a startup entering the industry or a multinational expanding operations, we help you stay compliant and competitive.' },
    ],
    closing: { title: 'Operate with confidence.', text: 'Let us secure your registrations and prepare you for every audit, so you can focus on growth.' },
  },
};
