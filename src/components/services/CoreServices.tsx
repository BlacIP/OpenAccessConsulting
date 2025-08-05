import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  // Target, 
  Users, 
  // TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  Briefcase,
  Shield,
  BookOpen,
  // Search,
  Building,
  Globe,
  X
} from 'lucide-react';

const CoreServices = () => {
  const [selectedService, setSelectedService] = useState<any>(null);

  // Detailed service content
  const serviceDetails = {
    'Employee Verification': {
      title: 'Employee Verification Services',
      subtitle: 'Protect Your Business. Hire with Confidence – Nationwide Coverage.',
      content: `
        <p class="mb-4">Hiring the wrong employee can cost a company up to 30% of the employee's annual salary, not to mention reputational damage, compliance issues, and security risks. According to SHRM, nearly one in three resumes contains false information, while background verification has helped over 60% of employers avoid a bad hire.</p>
        <p class="mb-6">At Openaccess Consulting, we offer comprehensive, professional verification services—available in every part of Nigeria—to reduce hiring risks and ensure you build a trustworthy workforce.</p>
        
        <h4 class="text-lg font-semibold mb-4">Our Verification Services:</h4>
        <div class="space-y-4 mb-6">
          <div class="border-l-4 border-blue-500 pl-4">
            <h5 class="font-semibold">1. KYC Verification</h5>
            <p class="text-sm text-gray-600 mb-1"><strong>What it targets:</strong> Confirms the true identity of a candidate using valid government-issued IDs and biometric data.</p>
            <p class="text-sm text-gray-600 mb-1"><strong>Why you need it:</strong> Prevents impersonation, identity fraud, and ensures regulatory compliance.</p>
            <p class="text-sm text-red-600"><strong>Risk:</strong> Identity fraud, impersonation, and untraceable employee actions—especially in sensitive roles.</p>
          </div>
          
          <div class="border-l-4 border-blue-500 pl-4">
            <h5 class="font-semibold">2. Credit Check</h5>
            <p class="text-sm text-gray-600 mb-1"><strong>What it targets:</strong> Reviews a candidate's financial behavior including debts, defaults, and repayment patterns.</p>
            <p class="text-sm text-gray-600 mb-1"><strong>Why you need it:</strong> Ideal for finance-related roles to assess potential financial distress or risk of fraud.</p>
            <p class="text-sm text-red-600"><strong>Risk:</strong> Exposure to theft, bribery, or embezzlement by financially unstable employees.</p>
          </div>
          
          <div class="border-l-4 border-blue-500 pl-4">
            <h5 class="font-semibold">3. Previous Employment Check</h5>
            <p class="text-sm text-gray-600 mb-1"><strong>What it targets:</strong> Validates employment history, job roles, durations, and reasons for leaving.</p>
            <p class="text-sm text-gray-600 mb-1"><strong>Why you need it:</strong> Ensures candidates have the experience they claim and verifies professionalism.</p>
            <p class="text-sm text-red-600"><strong>Risk:</strong> Hiring underqualified staff who misrepresent their work history and skillset.</p>
          </div>
          
          <div class="border-l-4 border-blue-500 pl-4">
            <h5 class="font-semibold">4. Educational Certificate Verification</h5>
            <p class="text-sm text-gray-600 mb-1"><strong>What it targets:</strong> Confirms academic degrees, institutions, and graduation records.</p>
            <p class="text-sm text-gray-600 mb-1"><strong>Why you need it:</strong> Verifies candidate qualifications and filters out those using forged credentials.</p>
            <p class="text-sm text-red-600"><strong>Risk:</strong> Employing unqualified individuals with fake certificates, leading to performance issues.</p>
          </div>
          
          <div class="border-l-4 border-blue-500 pl-4">
            <h5 class="font-semibold">5. NYSC Certificate Verification</h5>
            <p class="text-sm text-gray-600 mb-1"><strong>What it targets:</strong> Verifies authenticity of NYSC discharge or exemption certificates.</p>
            <p class="text-sm text-gray-600 mb-1"><strong>Why you need it:</strong> Ensures compliance with Nigerian employment laws for graduates.</p>
            <p class="text-sm text-red-600"><strong>Risk:</strong> Legal liabilities for hiring staff without legitimate NYSC credentials.</p>
          </div>
          
          <div class="border-l-4 border-blue-500 pl-4">
            <h5 class="font-semibold">6. Guarantor / Referee Check</h5>
            <p class="text-sm text-gray-600 mb-1"><strong>What it targets:</strong> Confirms the identity and relationship of listed guarantors or referees.</p>
            <p class="text-sm text-gray-600 mb-1"><strong>Why you need it:</strong> Provides third-party insight into candidate character and accountability.</p>
            <p class="text-sm text-red-600"><strong>Risk:</strong> No fallback contact for tracing employees in cases of misconduct or abscondment.</p>
          </div>
          
          <div class="border-l-4 border-blue-500 pl-4">
            <h5 class="font-semibold">7. Criminal Record Check</h5>
            <p class="text-sm text-gray-600 mb-1"><strong>What it targets:</strong> Identifies any past criminal convictions or police records.</p>
            <p class="text-sm text-gray-600 mb-1"><strong>Why you need it:</strong> Critical for roles of trust, data access, finance, and customer interaction.</p>
            <p class="text-sm text-red-600"><strong>Risk:</strong> Security threats, theft, or brand damage due to hiring individuals with criminal backgrounds.</p>
          </div>
          
          <div class="border-l-4 border-blue-500 pl-4">
            <h5 class="font-semibold">8. Address Confirmation</h5>
            <p class="text-sm text-gray-600 mb-1"><strong>What it targets:</strong> Verifies residential address through physical visits or document validation.</p>
            <p class="text-sm text-gray-600 mb-1"><strong>Why you need it:</strong> Ensures traceability and contactability of staff, especially during emergencies or investigations.</p>
            <p class="text-sm text-red-600"><strong>Risk:</strong> Difficulty locating employees during disputes, exit abscondment, or fraud cases.</p>
          </div>
        </div>
        
        <h4 class="text-lg font-semibold mb-4">🔎 Our Methodology</h4>
        <p class="mb-4">We carry out our checks through the following, but not limited to:</p>
        <ul class="list-disc list-inside space-y-1 text-sm text-gray-600 mb-6">
          <li>Conducting standard and professional background screenings</li>
          <li>Performing undercover operations to evaluate performance and honesty</li>
          <li>Contacting previous employers for reference and conduct verification</li>
          <li>Visiting the residences of employees, referees, or guarantors to confirm physical addresses and identities</li>
          <li>Interviewing colleagues, neighbors, or associates to gather insights on the employee's character</li>
          <li>Searching databases, credit reports, public records, tax and legal filings, and other verified sources</li>
          <li>Partnering with security departments and law enforcement agencies for intelligence sharing</li>
          <li>Leveraging social media platforms (Facebook, LinkedIn, Twitter, etc.) to expand search depth</li>
        </ul>
        
        <p class="text-center font-semibold text-blue-600">No matter where your business operates—Lagos, Port Harcourt, Abuja, Kano, or any other location in Nigeria—Openaccess Consulting has you covered. We ensure accuracy, speed, and confidentiality, helping you hire right the first time.</p>
      `
    },
    'Outsourcing Services': {
      title: 'Employee Outsourcing Services',
      subtitle: 'Let Openaccess Consulting Handle Your Workforce, While You Focus on Growth.',
      content: `
        <h4 class="text-lg font-semibold mb-4">🌟 Why Employee Outsourcing?</h4>
        <p class="mb-6">In today's dynamic business environment, companies need the flexibility to scale up or down without being weighed down by the complexities of HR operations. That's where Openaccess Consulting comes in. We provide reliable and cost-effective Employee Outsourcing Services that help organizations optimize operations, reduce liabilities, and remain compliant, while ensuring access to skilled and vetted talent across Nigeria.</p>
        
        <h4 class="text-lg font-semibold mb-4">✅ What We Offer</h4>
        <div class="space-y-4 mb-6">
          <div class="bg-gray-50 p-4 rounded-lg">
            <h5 class="font-semibold mb-2">1. Recruitment & Onboarding</h5>
            <p class="text-sm text-gray-600">We handle the end-to-end recruitment process — from sourcing and screening to onboarding — ensuring you get the best-fit candidates quickly and efficiently.</p>
          </div>
          
          <div class="bg-gray-50 p-4 rounded-lg">
            <h5 class="font-semibold mb-2">2. HR Administration</h5>
            <p class="text-sm text-gray-600">From contract management to record keeping, we take care of HR documentation, payroll processing, tax remittances, and leave administration.</p>
          </div>
          
          <div class="bg-gray-50 p-4 rounded-lg">
            <h5 class="font-semibold mb-2">3. Regulatory Compliance</h5>
            <p class="text-sm text-gray-600">Stay compliant with Nigerian labor laws, pension, NSITF, PAYE, ITF, and other statutory requirements. We manage it all on your behalf.</p>
          </div>
          
          <div class="bg-gray-50 p-4 rounded-lg">
            <h5 class="font-semibold mb-2">4. Performance Monitoring</h5>
            <p class="text-sm text-gray-600">We help you track outsourced staff performance, provide periodic reports, and support ongoing development for improved productivity.</p>
          </div>
          
          <div class="bg-gray-50 p-4 rounded-lg">
            <h5 class="font-semibold mb-2">5. Risk Mitigation</h5>
            <p class="text-sm text-gray-600">We bear the employer liabilities while you stay focused on your core business. We manage exit processes, disputes, and workplace issues with minimal disruption to your business.</p>
          </div>
          
          <div class="bg-gray-50 p-4 rounded-lg">
            <h5 class="font-semibold mb-2">6. Scalable Workforce</h5>
            <p class="text-sm text-gray-600">Whether you need 2 or 200 staff — temporary, contract, or long-term — we can deploy at short notice, across any region in Nigeria.</p>
          </div>
        </div>
        
        <h4 class="text-lg font-semibold mb-4">💡 Why Businesses Choose Openaccess</h4>
        <ul class="list-disc list-inside space-y-2 text-sm text-gray-600 mb-6">
          <li><strong>Reduced Cost of Hire & Operations:</strong> Outsourcing with Openaccess saves you up to 30% in HR and operational costs, including recruitment, training, and compliance expenses.</li>
          <li><strong>Nationwide Coverage:</strong> We source and deploy talents across all 36 states and the FCT, ensuring you never miss out on opportunities due to staffing limitations.</li>
          <li><strong>Compliance Guaranteed:</strong> We ensure full compliance with labor regulations, avoiding fines, sanctions, or reputational risks.</li>
          <li><strong>Access to Talent Pool:</strong> We maintain a growing database of qualified and pre-vetted professionals ready to fill roles in administration, finance, customer service, technical operations, field sales, and more.</li>
          <li><strong>Fast Turnaround:</strong> We deploy within 48–72 hours for most roles — keeping your operations running smoothly without hiring delays.</li>
        </ul>
        
        <h4 class="text-lg font-semibold mb-4">📈 Use Cases & Sectors We Serve</h4>
        <div class="grid grid-cols-2 gap-2 mb-6">
          <ul class="list-disc list-inside space-y-1 text-sm text-gray-600">
            <li>Manufacturing</li>
            <li>FMCG</li>
            <li>Telecommunications</li>
            <li>Hospitality</li>
          </ul>
          <ul class="list-disc list-inside space-y-1 text-sm text-gray-600">
            <li>Logistics & Transport</li>
            <li>Oil & Gas</li>
            <li>Construction</li>
            <li>Financial Services</li>
          </ul>
        </div>
        
        <div class="bg-red-50 p-4 rounded-lg mb-6">
          <h4 class="text-lg font-semibold mb-2 text-red-800">📊 Risk of Not Outsourcing Right</h4>
          <ul class="list-disc list-inside space-y-1 text-sm text-red-700">
            <li>High employee turnover and hiring costs</li>
            <li>Legal exposure from mismanaged HR practices</li>
            <li>Payroll errors and tax penalties</li>
            <li>Inability to scale operations quickly</li>
            <li>Operational downtime due to understaffing</li>
          </ul>
        </div>
        
        <p class="text-center font-semibold text-blue-600">🛡️ Choose Openaccess Consulting — Your HR Partner. With Openaccess as your outsourcing partner, you gain peace of mind, better workforce control, and the agility to grow faster and leaner.</p>
      `
    },
    'Training & Development': {
      title: 'Employee Training & Development',
      subtitle: 'Empowering Your People. Elevating Your Business.',
      content: `
        <p class="mb-6">At Openaccess Consulting, we offer tailor-made Training & Development programs that enhance employee competencies, increase engagement, and align your workforce with your business strategy. Whether you're building core skills, improving leadership, or strengthening customer service, we help you drive results—on your terms.</p>
        
        <div class="bg-blue-50 p-4 rounded-lg mb-6">
          <p class="text-sm text-blue-800">⚙️ All training can be delivered in-house or at a location of your choice, depending on your operational needs and preferences.</p>
        </div>
        
        <h4 class="text-lg font-semibold mb-4">✅ Training Categories & Topics</h4>
        
        <div class="space-y-6">
          <div class="border-l-4 border-green-500 pl-4">
            <h5 class="font-semibold mb-2">1. Soft Skills Training</h5>
            <p class="text-sm text-gray-600 mb-2">Develop interpersonal and behavioral skills that impact performance.</p>
            <ul class="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>Effective Communication & Active Listening</li>
              <li>Emotional Intelligence at Work</li>
              <li>Time Management & Personal Effectiveness</li>
              <li>Conflict Resolution & Difficult Conversations</li>
              <li>Team Building & Collaboration</li>
              <li>Adaptability & Growth Mindset</li>
              <li>Professional Etiquette & Work Ethics</li>
            </ul>
          </div>
          
          <div class="border-l-4 border-blue-500 pl-4">
            <h5 class="font-semibold mb-2">2. Technical & Job-Specific Training</h5>
            <p class="text-sm text-gray-600 mb-2">Equip employees with specific competencies required for their roles.</p>
            <ul class="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>Procurement & Supply Chain Management</li>
              <li>Project Management Fundamentals (PMP/Agile/Scrum)</li>
              <li>Financial Reporting & Budgeting</li>
              <li>Sales & Business Development Techniques</li>
              <li>Engineering & Maintenance Procedures</li>
              <li>HR & Payroll System Training</li>
              <li>Oil & Gas Industry Standards (HSE, QA/QC, etc.)</li>
            </ul>
          </div>
          
          <div class="border-l-4 border-purple-500 pl-4">
            <h5 class="font-semibold mb-2">3. Leadership Training</h5>
            <p class="text-sm text-gray-600 mb-2">Build capable leaders who can inspire, manage, and drive performance.</p>
            <ul class="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>Developing Leadership Presence & Influence</li>
              <li>Strategic Thinking & Decision Making</li>
              <li>Coaching & Mentoring for Team Growth</li>
              <li>Leading with Emotional Intelligence</li>
              <li>Conflict Management & Team Motivation</li>
              <li>Leadership Styles and Change Management</li>
              <li>Visionary Leadership for Business Growth</li>
            </ul>
          </div>
          
          <div class="border-l-4 border-orange-500 pl-4">
            <h5 class="font-semibold mb-2">4. Sales & Customer Service Training</h5>
            <p class="text-sm text-gray-600 mb-2">Equip your team with the skills to attract, convert, and retain customers while delivering outstanding service.</p>
            <ul class="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>Customer Relationship Management (CRM)</li>
              <li>Handling Difficult Customers Professionally</li>
              <li>Service Recovery & Complaint Handling</li>
              <li>Telephone & Email Etiquette</li>
              <li>Emotional Intelligence in Customer Service</li>
              <li>Upselling & Cross-selling Techniques</li>
              <li>Pipeline Management</li>
              <li>Objection Handling</li>
              <li>Building Customer Relationships</li>
              <li>Closing Deals</li>
            </ul>
          </div>
        </div>
        
        <h4 class="text-lg font-semibold mb-4 mt-6">🧠 Delivery Approach</h4>
        <ul class="list-disc list-inside space-y-1 text-sm text-gray-600 mb-6">
          <li>In-House Training (at your office or preferred venue)</li>
          <li>Virtual Instructor-Led Sessions</li>
          <li>Hybrid Workshops</li>
          <li>One-on-One Coaching (for leadership roles)</li>
          <li>Post-Training Evaluation & Feedback Reports</li>
        </ul>
        
        <div class="bg-red-50 p-4 rounded-lg mb-6">
          <h4 class="text-lg font-semibold mb-2 text-red-800">🚨 The Risk of Not Investing in Employee Training</h4>
          <ul class="list-disc list-inside space-y-1 text-sm text-red-700">
            <li>Declining performance due to skill gaps</li>
            <li>Increased employee turnover from lack of development</li>
            <li>Missed growth opportunities</li>
            <li>Weak leadership pipeline</li>
            <li>Reduced team morale and innovation</li>
          </ul>
        </div>
        
        <p class="text-center font-semibold text-blue-600">📈 Ready to Build a Stronger, Smarter Team? Let Openaccess Consulting design and deliver training solutions that empower your people to do their best work — every day.</p>
      `
    },
    'Recruitment Service': {
      title: 'Recruitment Services',
      subtitle: 'Finding the Right Talent. Every Time.',
      content: `
        <p class="mb-6">At Openaccess, we help businesses find, attract, and hire the best talent – fast, professionally, and cost-effectively. Our recruitment service is more than just filling a vacancy; it's about finding the right candidate who fits your company culture, delivers results, and grows with your organization.</p>
        
        <h4 class="text-lg font-semibold mb-4">🎯 What We Offer</h4>
        <div class="space-y-4 mb-6">
          <div class="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h5 class="font-semibold">End-to-End Recruitment Services</h5>
              <p class="text-sm text-gray-600">From job profiling to final onboarding, we manage the entire process so you can stay focused on your business.</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h5 class="font-semibold">Executive Search & Head Hunting</h5>
              <p class="text-sm text-gray-600">We discreetly source top-tier professionals for senior and specialized roles using our extensive network and proven approach.</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h5 class="font-semibold">Bulk Recruitment</h5>
              <p class="text-sm text-gray-600">Need to hire multiple staff for expansion or project-based work? We've got you covered with structured, scalable solutions.</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h5 class="font-semibold">Temporary & Contract Staffing</h5>
              <p class="text-sm text-gray-600">We provide vetted short-term or project-based talent while you retain flexibility and manage costs.</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h5 class="font-semibold">Graduate Trainee & Internship Recruitment</h5>
              <p class="text-sm text-gray-600">Build your future talent pipeline with young, trainable graduates tailored to your long-term goals.</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h5 class="font-semibold">Specialized Industry Hiring</h5>
              <p class="text-sm text-gray-600">We understand the unique hiring needs of sectors like oil & gas, finance, manufacturing, hospitality, tech, and healthcare.</p>
            </div>
          </div>
        </div>
        
        <h4 class="text-lg font-semibold mb-4">💼 Our Process</h4>
        <div class="space-y-3 mb-6">
          <div class="flex items-start space-x-3">
            <div class="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
            <div>
              <h5 class="font-semibold">Needs Assessment</h5>
              <p class="text-sm text-gray-600">We understand your business goals, team dynamics, and the exact skills you're looking for.</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-3">
            <div class="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
            <div>
              <h5 class="font-semibold">Job Profiling & Market Mapping</h5>
              <p class="text-sm text-gray-600">We define the ideal candidate, map talent availability, and create compelling job ads.</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-3">
            <div class="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
            <div>
              <h5 class="font-semibold">Sourcing & Head Hunting</h5>
              <p class="text-sm text-gray-600">We tap into our wide network, job boards, talent databases, and digital channels to attract the right candidates.</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-3">
            <div class="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</div>
            <div>
              <h5 class="font-semibold">Screening & Shortlisting</h5>
              <p class="text-sm text-gray-600">All applicants go through rigorous screening, interviews, background checks, and assessments (on request).</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-3">
            <div class="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">5</div>
            <div>
              <h5 class="font-semibold">Client Interviews & Selection</h5>
              <p class="text-sm text-gray-600">Only qualified and culture-fit candidates are presented for final interviews with your team.</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-3">
            <div class="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">6</div>
            <div>
              <h5 class="font-semibold">Offer Management & Onboarding Support</h5>
              <p class="text-sm text-gray-600">We assist with negotiating offers and ensuring smooth onboarding for long-term retention.</p>
            </div>
          </div>
        </div>
        
        <div class="bg-yellow-50 p-4 rounded-lg mb-6">
          <h4 class="text-lg font-semibold mb-2 text-yellow-800">📊 Why Recruitment Matters to Your Business</h4>
          <p class="text-sm text-yellow-700 mb-2">Without the right talent:</p>
          <ul class="list-disc list-inside space-y-1 text-sm text-yellow-700">
            <li>Productivity drops</li>
            <li>Projects get delayed</li>
            <li>Team morale suffers</li>
            <li>You lose competitive edge</li>
            <li>Cost of bad hire can be 30% of annual salary (source: U.S. Dept. of Labor)</li>
          </ul>
        </div>
        
        <h4 class="text-lg font-semibold mb-4">🧠 Why Choose Openaccess Consulting?</h4>
        <ul class="list-disc list-inside space-y-2 text-sm text-gray-600 mb-6">
          <li><strong>Speed & Accuracy:</strong> We reduce time-to-hire and ensure only qualified candidates are presented.</li>
          <li><strong>Industry Expertise:</strong> We speak your language and understand your hiring challenges.</li>
          <li><strong>Cost Efficiency:</strong> Save HR overhead, advertising spend, and lost productivity.</li>
          <li><strong>Tailored Process:</strong> Recruitment customized to your company size, structure, and values.</li>
          <li><strong>Confidentiality:</strong> Particularly for executive searches and internal replacements.</li>
          <li><strong>Nationwide Reach:</strong> We recruit anywhere in Nigeria and across multiple sectors.</li>
        </ul>
        
        <p class="text-center font-semibold text-blue-600">🚀 Let's Build Your Dream Team. Whether you're hiring one staff or scaling up by 100, Openaccess Consulting is your strategic partner in talent acquisition.</p>
      `
    },
    'Expatriate & Immigration Services': {
      title: 'Expatriate & Immigration Services',
      subtitle: 'Seamless Immigration Support for Global Talent and Operations',
      content: `
        <p class="mb-6">Operating across borders can be complex — especially when it involves bringing in skilled expatriates. At Openaccess, we provide comprehensive immigration and expatriate management services that help your business stay compliant, efficient, and fully focused on growth. We simplify the entire process so you can onboard international professionals quickly, legally, and stress-free.</p>
        
        <h4 class="text-lg font-semibold mb-4">🛂 Our Full Suite of Services Includes:</h4>
        <div class="space-y-4 mb-6">
          <div class="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h5 class="font-semibold">Facilitation of Expatriate Quota Approvals</h5>
              <p class="text-sm text-gray-600">We help secure quota approvals from the Ministry of Interior, aligning with your business objectives and operational plans.</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h5 class="font-semibold">Processing of Business Permits</h5>
              <p class="text-sm text-gray-600">We assist in obtaining the required business permits for foreign-owned or partnered companies operating in Nigeria.</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h5 class="font-semibold">Monthly Expatriate Quota Returns</h5>
              <p class="text-sm text-gray-600">We handle timely preparation and filing of statutory returns, ensuring regulatory compliance.</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h5 class="font-semibold">Monitoring of Quota Positions</h5>
              <p class="text-sm text-gray-600">Real-time tracking and management of your company's quota usage to prevent overstay and non-compliance.</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h5 class="font-semibold">Renewal and Amendment of Quota Positions</h5>
              <p class="text-sm text-gray-600">Need to increase, extend, or amend existing quota positions? We manage the entire process for smooth continuity.</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h5 class="font-semibold">Expatriate Information Management</h5>
              <p class="text-sm text-gray-600">Maintain accurate, updated records of all expatriate staff in line with government requirements.</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h5 class="font-semibold">Temporary Work Permits (TWP)</h5>
              <p class="text-sm text-gray-600">For short-term technical assignments, we fast-track TWP approvals with minimal delays.</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h5 class="font-semibold">CERPAC Processing and Renewal</h5>
              <p class="text-sm text-gray-600">End-to-end management of Combined Expatriate Residence Permit and Aliens Card for lawful residency.</p>
            </div>
          </div>
        </div>
        
        <div class="bg-red-50 p-4 rounded-lg mb-6">
          <h4 class="text-lg font-semibold mb-2 text-red-800">🔍 Why It Matters</h4>
          <p class="text-sm text-red-700 mb-2">Operating without proper immigration support can lead to:</p>
          <ul class="list-disc list-inside space-y-1 text-sm text-red-700">
            <li>Regulatory sanctions or government fines</li>
            <li>Delays in operations and project timelines</li>
            <li>Deportation of key staff</li>
            <li>Brand and reputational damage</li>
            <li>Revocation of business licenses</li>
          </ul>
          <p class="text-sm text-red-700 mt-2 font-semibold">70% of immigration-related penalties in Nigeria stem from administrative oversight – we ensure that doesn't happen to you.</p>
        </div>
        
        <h4 class="text-lg font-semibold mb-4">🧠 Why Choose Openaccess Consulting?</h4>
        <ul class="list-disc list-inside space-y-2 text-sm text-gray-600 mb-6">
          <li><strong>Regulatory Expertise:</strong> We stay up to date with evolving Nigerian Immigration laws and Ministry of Interior policies.</li>
          <li><strong>End-to-End Support:</strong> From documentation to liaison with government authorities, we manage everything.</li>
          <li><strong>Compliance Assurance:</strong> We help clients avoid infractions and penalties by keeping them compliant at all times.</li>
          <li><strong>Speed & Accuracy:</strong> Our structured process ensures prompt application, approval, and renewal timelines.</li>
          <li><strong>Data Security & Confidentiality:</strong> We prioritize your sensitive employee data with strict confidentiality protocols.</li>
        </ul>
        
        <p class="text-center font-semibold text-blue-600">🇳🇬 Nationwide Coverage: Whether your expatriates are based in Lagos, Port Harcourt, Abuja, Ilorin, or remote project sites — we deliver services across all parts of Nigeria.</p>
      `
    },
    'Regulatory Compliance, Certification & Audit Services': {
      title: 'Regulatory Compliance, Certification & Audit Services',
      subtitle: 'Ensure Compliance. Gain Certification. Operate with Confidence.',
      content: `
        <p class="mb-6">In today's highly regulated business environment — especially within the oil & gas and allied industries — maintaining compliance isn't optional. It's a critical success factor that protects your license to operate, enhances your credibility, and opens doors to major business opportunities. At Openaccess, we provide end-to-end regulatory compliance, certification, and audit services to help organizations meet statutory requirements, pass audits, and position themselves for growth.</p>
        
        <h4 class="text-lg font-semibold mb-4">🔍 Our Comprehensive Service Offerings Include:</h4>
        
        <div class="mb-6">
          <h5 class="font-semibold mb-3 text-blue-600">🏢 Regulatory & Statutory Registrations</h5>
          <div class="space-y-3">
            <div class="bg-gray-50 p-3 rounded-lg">
              <h6 class="font-semibold">NIPEX Registration</h6>
              <p class="text-sm text-gray-600">New Registrations, Renewals, Pre-qualification Categories (PCA)</p>
            </div>
            
            <div class="bg-gray-50 p-3 rounded-lg">
              <h6 class="font-semibold">DPR/NUPRC/NMDPRA Permits</h6>
              <p class="text-sm text-gray-600">Secure all required operating licenses for upstream, midstream, and downstream activities.</p>
            </div>
            
            <div class="bg-gray-50 p-3 rounded-lg">
              <h6 class="font-semibold">NCDMB & NOGIC JQS Registration</h6>
              <p class="text-sm text-gray-600">Comply with local content mandates and unlock NCDMB projects.</p>
            </div>
            
            <div class="bg-gray-50 p-3 rounded-lg">
              <h6 class="font-semibold">COREN Certification</h6>
              <p class="text-sm text-gray-600">For engineering firms and professionals operating legally in Nigeria.</p>
            </div>
            
            <div class="bg-gray-50 p-3 rounded-lg">
              <h6 class="font-semibold">Dun & Bradstreet D-U-N-S®️ Registration</h6>
              <p class="text-sm text-gray-600">Enhance global corporate identity and creditworthiness.</p>
            </div>
            
            <div class="bg-gray-50 p-3 rounded-lg">
              <h6 class="font-semibold">Offshore Safety Permit (OSP)</h6>
              <p class="text-sm text-gray-600">For personnel working in offshore and remote environments.</p>
            </div>
            
            <div class="bg-gray-50 p-3 rounded-lg">
              <h6 class="font-semibold">Weight & Measure Permits</h6>
              <p class="text-sm text-gray-600">Comply with metrological standards under regulatory supervision.</p>
            </div>
            
            <div class="bg-gray-50 p-3 rounded-lg">
              <h6 class="font-semibold">Certificate of Pattern Approval</h6>
              <p class="text-sm text-gray-600">For companies using standard measurement or inspection equipment.</p>
            </div>
          </div>
        </div>
        
        <div class="mb-6">
          <h5 class="font-semibold mb-3 text-green-600">✅ Audit & Compliance Services</h5>
          <div class="space-y-3">
            <div class="bg-green-50 p-3 rounded-lg">
              <h6 class="font-semibold">Second Party (2nd Party) Audits</h6>
              <p class="text-sm text-gray-600">Assess suppliers and subcontractors for compliance and quality assurance.</p>
            </div>
            
            <div class="bg-green-50 p-3 rounded-lg">
              <h6 class="font-semibold">Contractor Safety Audits</h6>
              <p class="text-sm text-gray-600">Evaluate and verify safety practices and documentation of third-party vendors.</p>
            </div>
            
            <div class="bg-green-50 p-3 rounded-lg">
              <h6 class="font-semibold">Regulatory Compliance Audits</h6>
              <p class="text-sm text-gray-600">Ensure your operations are aligned with government and industry regulations.</p>
            </div>
            
            <div class="bg-green-50 p-3 rounded-lg">
              <h6 class="font-semibold">Prequalification Audits</h6>
              <p class="text-sm text-gray-600">Prepare for and pass client prequalification assessments.</p>
            </div>
            
            <div class="bg-green-50 p-3 rounded-lg">
              <h6 class="font-semibold">ISO 45001:2018 Stage 1 & 2 Certification Audits</h6>
              <p class="text-sm text-gray-600">Attain international Occupational Health & Safety standards.</p>
            </div>
            
            <div class="bg-green-50 p-3 rounded-lg">
              <h6 class="font-semibold">Internal OHS Audits</h6>
              <p class="text-sm text-gray-600">Identify gaps and strengthen workplace safety practices.</p>
            </div>
            
            <div class="bg-green-50 p-3 rounded-lg">
              <h6 class="font-semibold">Internal ISO 45001 Compliance Audits</h6>
              <p class="text-sm text-gray-600">Maintain or renew ISO certifications with confidence.</p>
            </div>
            
            <div class="bg-green-50 p-3 rounded-lg">
              <h6 class="font-semibold">NIPEX Audits</h6>
              <p class="text-sm text-gray-600">Full audit support to retain or improve NIPEX compliance scores.</p>
            </div>
          </div>
        </div>
        
        <div class="bg-yellow-50 p-4 rounded-lg mb-6">
          <h4 class="text-lg font-semibold mb-2 text-yellow-800">💼 Why It Matters to Your Business</h4>
          <ul class="list-disc list-inside space-y-1 text-sm text-yellow-700">
            <li>Failure to comply can lead to permit revocation, contract disqualification, or legal sanctions.</li>
            <li>Non-compliance often results in lost business opportunities, financial penalties, and reputational damage.</li>
            <li>Companies with strong audit records and certifications are more likely to win tenders, form partnerships, and scale operations.</li>
          </ul>
          <p class="text-sm text-yellow-700 mt-2 font-semibold">According to industry data: Up to 60% of contract bids are lost due to incomplete registrations or expired certifications.</p>
        </div>
        
        <h4 class="text-lg font-semibold mb-4">🚀 Why Clients Choose Openaccess</h4>
        <ul class="list-disc list-inside space-y-2 text-sm text-gray-600 mb-6">
          <li><strong>In-Depth Regulatory Expertise:</strong> We understand the complexities of Nigerian and international compliance frameworks.</li>
          <li><strong>Fast Turnaround & End-to-End Support:</strong> From documentation to submission and follow-up, we handle everything.</li>
          <li><strong>Nationwide Coverage:</strong> We support clients across all states in Nigeria, including remote field locations.</li>
          <li><strong>Track Record of Success:</strong> Trusted by players in oil & gas, manufacturing, energy, engineering, and telecoms.</li>
        </ul>
        
        <h4 class="text-lg font-semibold mb-4">🛠️ Tailored Support for Every Industry</h4>
        <div class="grid grid-cols-2 gap-2 mb-6">
          <ul class="list-disc list-inside space-y-1 text-sm text-gray-600">
            <li>Oil & Gas</li>
            <li>Engineering & Construction</li>
            <li>Power & Energy</li>
            <li>Manufacturing</li>
          </ul>
          <ul class="list-disc list-inside space-y-1 text-sm text-gray-600">
            <li>Marine & Offshore</li>
            <li>Telecoms & Infrastructure</li>
            <li>Mining & Resources</li>
            <li>Aviation & Logistics</li>
          </ul>
        </div>
        
        <p class="text-center font-semibold text-blue-600">Whether you're a startup entering the industry or a multinational expanding operations — we help you stay compliant, credible, and competitive.</p>
      `
    },
    'Human Resource Services': {
      title: 'Human Resource Services',
      subtitle: 'Complete HR Solutions to Optimize and Manage Your Workforce',
      content: `
        <p class="mb-6">Managing people effectively is one of the most critical functions in any organization. At Openaccess, we provide end-to-end Human Resource services that empower businesses to attract, retain, develop, and manage their workforce — all while ensuring compliance and alignment with business goals. Whether you are a startup laying HR foundations or a growing business in need of strategic HR support, our solutions are tailored to your needs.</p>
        
        <h4 class="text-lg font-semibold mb-4">🔧 Our Human Resource Service Offerings Include:</h4>
        <div class="space-y-4 mb-6">
          <div class="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h5 class="font-semibold">1. Attendance Device Supply and Management</h5>
              <ul class="text-sm text-gray-600 list-disc list-inside ml-4">
                <li>Biometric or RFID-based time & attendance systems</li>
                <li>Integration with payroll and leave management</li>
                <li>Real-time workforce tracking and reporting</li>
              </ul>
            </div>
          </div>
          
          <div class="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h5 class="font-semibold">2. Performance Management</h5>
              <ul class="text-sm text-gray-600 list-disc list-inside ml-4">
                <li>Design and implementation of KPIs and appraisal systems</li>
                <li>Tools to track individual and team performance</li>
                <li>Annual or quarterly review frameworks</li>
              </ul>
            </div>
          </div>
          
          <div class="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h5 class="font-semibold">3. Training & Development</h5>
              <ul class="text-sm text-gray-600 list-disc list-inside ml-4">
                <li>Tailored in-house or external training programs</li>
                <li>Soft skills, technical, and leadership development</li>
                <li>Workforce upskilling and reskilling initiatives</li>
              </ul>
            </div>
          </div>
          
          <div class="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h5 class="font-semibold">4. Outsourcing</h5>
              <ul class="text-sm text-gray-600 list-disc list-inside ml-4">
                <li>Provision of skilled contract and full-time staff</li>
                <li>End-to-end personnel administration and compliance</li>
                <li>Focused support for non-core functions</li>
              </ul>
            </div>
          </div>
          
          <div class="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h5 class="font-semibold">5. Career Management</h5>
              <ul class="text-sm text-gray-600 list-disc list-inside ml-4">
                <li>Employee growth mapping and succession planning</li>
                <li>Talent development strategies</li>
                <li>Coaching and mentoring programs</li>
              </ul>
            </div>
          </div>
          
          <div class="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h5 class="font-semibold">6. Recruitment</h5>
              <ul class="text-sm text-gray-600 list-disc list-inside ml-4">
                <li>Talent acquisition from junior to executive levels</li>
                <li>Interview support, testing, and onboarding</li>
                <li>Access to qualified candidates across Nigeria</li>
              </ul>
            </div>
          </div>
          
          <div class="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h5 class="font-semibold">7. Policies and Procedure Development</h5>
              <ul class="text-sm text-gray-600 list-disc list-inside ml-4">
                <li>Creation of employee handbooks and HR manuals</li>
                <li>Development of HR policies aligned with labor laws</li>
                <li>Guidelines for disciplinary actions, leave, grievance, etc.</li>
              </ul>
            </div>
          </div>
          
          <div class="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h5 class="font-semibold">8. HR Compliance Audit</h5>
              <ul class="text-sm text-gray-600 list-disc list-inside ml-4">
                <li>Assessment of HR practices for legal and operational compliance</li>
                <li>Identification of gaps and risk mitigation plans</li>
                <li>Support with implementation of audit recommendations</li>
              </ul>
            </div>
          </div>
          
          <div class="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h5 class="font-semibold">9. HR Management</h5>
              <ul class="text-sm text-gray-600 list-disc list-inside ml-4">
                <li>Day-to-day HR operations and administration</li>
                <li>Employee database and record management</li>
                <li>Leave, benefits, and disciplinary process support</li>
              </ul>
            </div>
          </div>
          
          <div class="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h5 class="font-semibold">10. Payroll Management</h5>
              <ul class="text-sm text-gray-600 list-disc list-inside ml-4">
                <li>Timely and accurate salary processing</li>
                <li>Statutory deductions and tax compliance (PAYE, NHF, NSITF, Pension)</li>
                <li>Payslip generation and staff queries resolution</li>
              </ul>
            </div>
          </div>
          
          <div class="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h5 class="font-semibold">11. Employee Relations Support</h5>
              <ul class="text-sm text-gray-600 list-disc list-inside ml-4">
                <li>Conflict resolution and mediation services</li>
                <li>Workplace culture and engagement programs</li>
                <li>Guidance on disciplinary and grievance procedures</li>
              </ul>
            </div>
          </div>
        </div>
        
        <h4 class="text-lg font-semibold mb-4">💼 Why Businesses Choose Openaccess</h4>
        <ul class="list-disc list-inside space-y-2 text-sm text-gray-600 mb-6">
          <li><strong>Cost Savings:</strong> Eliminate the need for a full internal HR department</li>
          <li><strong>Efficiency:</strong> Streamlined processes and technology-driven HR management</li>
          <li><strong>Compliance:</strong> Ensure full alignment with Nigerian labour laws and global HR standards</li>
          <li><strong>Scalability:</strong> Whether you're growing or restructuring, we adapt with you</li>
          <li><strong>Nationwide Coverage:</strong> We support clients across all states in Nigeria</li>
        </ul>
        
        <p class="text-center font-semibold text-blue-600">🚀 Let's Help You Build a Thriving Workforce. Our integrated HR services ensure you are not just managing people — you are empowering your business through people. Whether you require consulting, operational support, or full HR outsourcing, Openaccess is your trusted partner in human capital success.</p>
      `
    }
  };
  const coreServices = [
    {
      icon: Users,
      title: 'Recruitment Service',
      description: 'Comprehensive recruitment solutions across multiple industries and sectors.',
      categories: [
        'Manufacturing Professional',
        'Hospital',
        'Financial Institution',
        'Pharmaceutical',
        'Engineering',
        'Call Centre',
        'Head Hunting'
      ]
    },
    {
      icon: Shield,
      title: 'Employee Verification',
      description: 'Thorough background check services to ensure reliable hiring decisions.',
      categories: [
        'KYC Verification',
        'Credit Check',
        'Previous Employment Check',
        'Educational Certificate Verification',
        'NYSC Certificate Verification',
        'Guarantor / Referee Check',
        'Criminal Record Check',
        'Address Confirmation'
      ]
    },
    {
      icon: Briefcase,
      title: 'Outsourcing Services',
      description: 'Professional outsourcing solutions to optimize your workforce and operations.',
      categories: [
        'Call Centre',
        'Technicians',
        'Marketers',
        'Customer Service',
        'Drivers',
        'Bank Teller',
        'Factory Worker',
        'Hospitality Staff'
      ]
    },
    {
      icon: BookOpen,
      title: 'Training & Development',
      description: 'Comprehensive learning and development programs for professional growth.',
      categories: [
        'Leadership & Management',
        'Sales & Marketing',
        'Customer Service',
        'Professional Development Program',
        'Management Development Program',
        'Human Resource Training',
        'Finance & Accounting'
      ]
    },
    {
      icon: Globe,
      title: 'Expatriate & Immigration Services',
      description: 'Complete immigration and expatriate support services for international operations.',
      categories: [
        'Facilitation of expatriate quota approvals',
        'Processing of business permits',
        'Monthly expatriate quota returns',
        'Monitoring quota positions',
        'Renewal and amendment of quota positions',
        'Expatriate information management',
        'Temporary Work Permits (TWP)',
        'CERPAC processing and renewal'
      ]
    },
    {
      icon: Building,
      title: 'Pre-Employment Tests',
      description: 'Comprehensive business support across multiple functional areas.',
      categories: [
        'Cognitive Ability Test',
        'Personality Test',
        'Aptitude Test',
        'Skills Assessment Test',
        'Emotional Intelligence (EQ) Test',
        'Situational Judgment Test (SJT)',
        'Integrity/Honesty Test',
        'Job Knowledge Test',
        'Language Proficiency Test',
        'Psychometric Test',
        'Culture Fit Assessment',
        'Technical Competency Test',
        'Numerical & Verbal Reasoning Test',
        'Leadership/Management Assessment'
      ]
    },
    {
      icon: Users,
      title: 'Human Resource Services',
      description: 'Complete HR solutions to manage and optimize your human capital.',
      categories: [
        'Attendance Device Supply and Management',
        'Performance management',
        'Training',
        'Outsourcing',
        'Career management',
        'Recruitment',
        'Policies and procedure development',
        'HR compliance Audit',
        'HR management',
        'Payroll management',
        'Employee relation support'
      ]
    },
    // {
    //   icon: TrendingUp,
    //   title: 'Business Management',
    //   description: 'Strategic business management services to drive growth and efficiency.',
    //   categories: [
    //     'Strategic planning',
    //     'Development of vision and mission',
    //     'Financial management',
    //     'Leadership and management development',
    //     'Sales increase',
    //     'Business restructuring',
    //     'Cost reduction',
    //     'Business set up support',
    //     'Competitors analysis'
    //   ]
    // },
    // {
    //   icon: Target,
    //   title: 'Organisation & Process Improvement',
    //   description: 'Optimize your organizational processes across all business areas.',
    //   categories: [
    //     'Warehouse',
    //     'Accounting',
    //     'Human resource',
    //     'Production',
    //     'Cash flow',
    //     'Vendor management',
    //     'Hotel management',
    //     'Payment and Receivable'
    //   ]
    // },
    // {
    //   icon: Search,
    //   title: 'Research Services',
    //   description: 'Data and insights to support your business and marketing strategies.',
    //   categories: [
    //     'Market opportunity identification',
    //     'Customer targeting research',
    //     'Product and service design research',
    //     'Competitor analysis',
    //     'Marketing strategy development',
    //     'Pricing research',
    //     'Promotional strategy research',
    //     'Business intelligence'
    //   ]
    // },
    {
      icon: Shield,
      title: 'Regulatory Compliance, Certification & Audit Services',
      description: 'Comprehensive certification, audit, and regulatory registration services for oil & gas and other industries.',
      categories: [
        'NIPEX Registration (New, Renewals, PCA)',
        'DPR/NUPRC/NMDPRA Permits',
        'NCDMB & NOGIC JQS Registration',
        'COREN Certification',
        'Dun & Bradstreet D-U-N-S® Registration',
        'Offshore Safety Permit (OSP)',
        'Weight & Measure Permits',
        'Certificate of Pattern Approval',
        'Second Party (2nd Party) Audits',
        'Contractor Safety Audits',
        'Regulatory Compliance Audits',
        'Prequalification Audits',
        'ISO 45001:2018 Stage 1 & 2 Certification Audits',
        'Internal Occupational Health & Safety (OHS) Audits',
        'Internal ISO 45001 Compliance Audits',
        'Regulatory Audit',
        'NIPEX Audit'
      ]
    }
  ];

  return (
    <>
      <section className="py-20 px-4 sm:px-10 lg:px-28">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Core Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From recruitment and training to immigration and business support, we provide 
            comprehensive solutions tailored to your organization's unique needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreServices.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow group border border-gray-100 flex flex-col"
            >
              <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors flex-shrink-0">
                <service.icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm flex-grow">
                {service.description}
              </p>
              <div className="space-y-2 flex-shrink-0">
                {service.categories.slice(0, 4).map((category, categoryIndex) => (
                  <div key={categoryIndex} className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-xs leading-tight">{category}</span>
                  </div>
                ))}
                {service.categories.length > 4 && (
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-blue-600 text-xs font-medium hover:text-blue-700 transition-colors cursor-pointer mt-2"
                  >
                    +{service.categories.length - 4} more services
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
                    <selectedService.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{selectedService.title}</h3>
                    <p className="text-gray-600">{selectedService.description}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              {/* Detailed Content */}
              {serviceDetails[selectedService.title] ? (
                <div className="space-y-6">
                  {serviceDetails[selectedService.title].subtitle && (
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-blue-800 font-medium text-center">
                        {serviceDetails[selectedService.title].subtitle}
                      </p>
                    </div>
                  )}
                  <div 
                    className="prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{ 
                      __html: serviceDetails[selectedService.title].content 
                    }}
                  />
                </div>
              ) : (
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">All Services Include:</h4>
                  {selectedService.categories.map((category: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{category}</span>
                    </div>
                  ))}
                </div>
              )}
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center group"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CoreServices;