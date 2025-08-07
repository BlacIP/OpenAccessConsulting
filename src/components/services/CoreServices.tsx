import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Briefcase,
  Shield,
  BookOpen,
  Building,
  Globe,
  X
} from 'lucide-react';

const CoreServices = () => {
  const [selectedService, setSelectedService] = useState<any>(null);

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
      ],
      detailedContent: (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Finding the Right Talent. Every Time.</h3>
          </div>
          
          <p className="text-gray-700 leading-relaxed">
            At Openaccess, we help businesses find, attract, and hire the best talent – fast, professionally, and cost-effectively. Our recruitment service is more than just filling a vacancy; it's about finding the right candidate who fits your company culture, delivers results, and grows with your organization.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">🎯 What We Offer</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <strong>End-to-End Recruitment Services:</strong> From job profiling to final onboarding, we manage the entire process so you can stay focused on your business.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <strong>Executive Search & Head Hunting:</strong> We discreetly source top-tier professionals for senior and specialized roles using our extensive network and proven approach.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <strong>Bulk Recruitment:</strong> Need to hire multiple staff for expansion or project-based work? We've got you covered with structured, scalable solutions.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <strong>Temporary & Contract Staffing:</strong> We provide vetted short-term or project-based talent while you retain flexibility and manage costs.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <strong>Graduate Trainee & Internship Recruitment:</strong> Build your future talent pipeline with young, trainable graduates tailored to your long-term goals.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <strong>Specialized Industry Hiring:</strong> We understand the unique hiring needs of sectors like oil & gas, finance, manufacturing, hospitality, tech, and healthcare.
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">💼 Our Process</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <strong>Needs Assessment:</strong> We understand your business goals, team dynamics, and the exact skills you're looking for.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <strong>Job Profiling & Market Mapping:</strong> We define the ideal candidate, map talent availability, and create compelling job ads.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <strong>Sourcing & Head Hunting:</strong> We tap into our wide network, job boards, talent databases, and digital channels to attract the right candidates.
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <strong>Screening & Shortlisting:</strong> All applicants go through rigorous screening, interviews, background checks, and assessments (on request).
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">5</div>
                  <div>
                    <strong>Client Interviews & Selection:</strong> Only qualified and culture-fit candidates are presented for final interviews with your team.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">6</div>
                  <div>
                    <strong>Offer Management & Onboarding Support:</strong> We assist with negotiating offers and ensuring smooth onboarding for long-term retention.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-red-500 bg-red-50 p-4 rounded">
            <h4 className="text-lg font-semibold text-red-800 mb-2">📊 Why Recruitment Matters to Your Business</h4>
            <p className="text-red-700 mb-2">Without the right talent:</p>
            <ul className="text-red-700 space-y-1 ml-4">
              <li>• Productivity drops</li>
              <li>• Projects get delayed</li>
              <li>• Team morale suffers</li>
              <li>• You lose competitive edge</li>
              <li>• Cost of bad hire can be 30% of annual salary (source: U.S. Dept. of Labor)</li>
            </ul>
          </div>

          <div className="bg-blue-600 text-white p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-4">🧠 Why Choose Openaccess Consulting?</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Speed & Accuracy</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Industry Expertise</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Cost Efficiency</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Tailored Process</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Confidentiality</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Nationwide Reach</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center bg-gray-50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-900 mb-2">🚀 Let's Build Your Dream Team</h4>
            <p className="text-gray-700 mb-4">Whether you're hiring one staff or scaling up by 100, Openaccess Consulting is your strategic partner in talent acquisition.</p>
            <p className="text-blue-600 font-semibold">📞 Contact us today to schedule a FREE Recruitment Needs Consultation.</p>
          </div>
        </div>
      )
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
      ],
      detailedContent: (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Employee Verification Services</h3>
            <p className="text-lg text-blue-600 font-semibold">Protect Your Business. Hire with Confidence – Nationwide Coverage.</p>
          </div>
          
          <p className="text-gray-700 leading-relaxed">
            Hiring the wrong employee can cost a company up to 30% of the employee's annual salary, not to mention reputational damage, compliance issues, and security risks. According to SHRM, nearly one in three resumes contains false information, while background verification has helped over 60% of employers avoid a bad hire.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            At Openaccess Consulting, we offer comprehensive, professional verification services—available in every part of Nigeria—to reduce hiring risks and ensure you build a trustworthy workforce.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "1. KYC Verification",
                target: "Confirms the true identity of a candidate using valid government-issued IDs and biometric data.",
                why: "Prevents impersonation, identity fraud, and ensures regulatory compliance.",
                risk: "Identity fraud, impersonation, and untraceable employee actions—especially in sensitive roles."
              },
              {
                title: "2. Credit Check",
                target: "Reviews a candidate's financial behavior including debts, defaults, and repayment patterns.",
                why: "Ideal for finance-related roles to assess potential financial distress or risk of fraud.",
                risk: "Exposure to theft, bribery, or embezzlement by financially unstable employees."
              },
              {
                title: "3. Previous Employment Check",
                target: "Validates employment history, job roles, durations, and reasons for leaving.",
                why: "Ensures candidates have the experience they claim and verifies professionalism.",
                risk: "Hiring underqualified staff who misrepresent their work history and skillset."
              },
              {
                title: "4. Educational Certificate Verification",
                target: "Confirms academic degrees, institutions, and graduation records.",
                why: "Verifies candidate qualifications and filters out those using forged credentials.",
                risk: "Employing unqualified individuals with fake certificates, leading to performance issues."
              },
              {
                title: "5. NYSC Certificate Verification",
                target: "Verifies authenticity of NYSC discharge or exemption certificates.",
                why: "Ensures compliance with Nigerian employment laws for graduates.",
                risk: "Legal liabilities for hiring staff without legitimate NYSC credentials."
              },
              {
                title: "6. Guarantor / Referee Check",
                target: "Confirms the identity and relationship of listed guarantors or referees.",
                why: "Provides third-party insight into candidate character and accountability.",
                risk: "No fallback contact for tracing employees in cases of misconduct or abscondment."
              },
              {
                title: "7. Criminal Record Check",
                target: "Identifies any past criminal convictions or police records.",
                why: "Critical for roles of trust, data access, finance, and customer interaction.",
                risk: "Security threats, theft, or brand damage due to hiring individuals with criminal backgrounds."
              },
              {
                title: "8. Address Confirmation",
                target: "Verifies residential address through physical visits or document validation.",
                why: "Ensures traceability and contactability of staff, especially during emergencies or investigations.",
                risk: "Difficulty locating employees during disputes, exit abscondment, or fraud cases."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-600 mb-2">{item.title}</h4>
                <div className="space-y-2 text-sm">
                  <p><strong>What it targets:</strong> {item.target}</p>
                  <p><strong>Why you need it:</strong> {item.why}</p>
                  <p className="text-red-600"><strong>Risk:</strong> {item.risk}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">🔎 Methodology</h4>
            <p className="text-gray-700 mb-3">We carry out our checks through the following, but not limited to:</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1" />
                <span>Conducting standard and professional background screenings</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1" />
                <span>Performing undercover operations to evaluate performance and honesty</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1" />
                <span>Contacting previous employers for reference and conduct verification</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1" />
                <span>Visiting the residences of employees, referees, or guarantors to confirm physical addresses and identities</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1" />
                <span>Interviewing colleagues, neighbors, or associates to gather insights on the employee's character</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1" />
                <span>Searching databases, credit reports, public records, tax and legal filings, and other verified sources</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1" />
                <span>Partnering with security departments and law enforcement agencies for intelligence sharing</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1" />
                <span>Leveraging social media platforms (Facebook, LinkedIn, Twitter, etc.) to expand search depth</span>
              </li>
            </ul>
          </div>

          <div className="text-center bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-2">
              No matter where your business operates—Lagos, Port Harcourt, Abuja, Kano, or any other location in Nigeria—Openaccess Consulting has you covered.
            </p>
            <p className="text-blue-600 font-semibold">
              We ensure accuracy, speed, and confidentiality, helping you hire right the first time.
            </p>
          </div>
        </div>
      )
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
      ],
      detailedContent: (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Employee Outsourcing Services</h3>
            <p className="text-lg text-blue-600 font-semibold">Let Openaccess Consulting Handle Your Workforce, While You Focus on Growth.</p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">🌟 Why Employee Outsourcing?</h4>
            <p className="text-gray-700 leading-relaxed">
              In today's dynamic business environment, companies need the flexibility to scale up or down without being weighed down by the complexities of HR operations. That's where Openaccess Consulting comes in.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              We provide reliable and cost-effective Employee Outsourcing Services that help organizations optimize operations, reduce liabilities, and remain compliant, while ensuring access to skilled and vetted talent across Nigeria.
            </p>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">✅ What We Offer</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <div>
                  <strong>Recruitment & Onboarding:</strong> We handle the end-to-end recruitment process — from sourcing and screening to onboarding — ensuring you get the best-fit candidates quickly and efficiently.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <div>
                  <strong>HR Administration:</strong> From contract management to record keeping, we take care of HR documentation, payroll processing, tax remittances, and leave administration.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                <div>
                  <strong>Regulatory Compliance:</strong> Stay compliant with Nigerian labor laws, pension, NSITF, PAYE, ITF, and other statutory requirements. We manage it all on your behalf.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">4</div>
                <div>
                  <strong>Performance Monitoring:</strong> We help you track outsourced staff performance, provide periodic reports, and support ongoing development for improved productivity.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">5</div>
                <div>
                  <strong>Risk Mitigation:</strong> We bear the employer liabilities while you stay focused on your core business. We manage exit processes, disputes, and workplace issues with minimal disruption to your business.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">6</div>
                <div>
                  <strong>Scalable Workforce:</strong> Whether you need 2 or 200 staff — temporary, contract, or long-term — we can deploy at short notice, across any region in Nigeria.
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-600 text-white p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-4">💡 Why Businesses Choose Openaccess</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Reduced Cost of Hire & Operations:</strong> Save up to 30% in HR and operational costs
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Nationwide Coverage:</strong> We source and deploy talents across all 36 states and the FCT
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Compliance Guaranteed:</strong> Full compliance with labor regulations, avoiding fines and sanctions
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Access to Talent Pool:</strong> Growing database of qualified and pre-vetted professionals
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Fast Turnaround:</strong> Deploy within 48–72 hours for most roles
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">📈 Use Cases & Sectors We Serve</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {['Manufacturing', 'FMCG', 'Telecommunications', 'Hospitality', 'Logistics & Transport', 'Oil & Gas', 'Construction', 'Financial Services'].map((sector, index) => (
                <div key={index} className="bg-white p-3 rounded text-center text-sm font-medium text-gray-700">
                  {sector}
                </div>
              ))}
            </div>
          </div>

          <div className="border-l-4 border-red-500 bg-red-50 p-4 rounded">
            <h4 className="text-lg font-semibold text-red-800 mb-2">📊 Risk of Not Outsourcing Right</h4>
            <ul className="text-red-700 space-y-1">
              <li>• High employee turnover and hiring costs</li>
              <li>• Legal exposure from mismanaged HR practices</li>
              <li>• Payroll errors and tax penalties</li>
              <li>• Inability to scale operations quickly</li>
              <li>• Operational downtime due to understaffing</li>
            </ul>
          </div>

          <div className="text-center bg-gray-50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-900 mb-2">🛡️ Choose Openaccess Consulting — Your HR Partner</h4>
            <p className="text-gray-700 mb-2">
              With Openaccess as your outsourcing partner, you gain peace of mind, better workforce control, and the agility to grow faster and leaner.
            </p>
            <p className="text-blue-600 font-semibold">Let's discuss how we can structure your ideal workforce today.</p>
          </div>
        </div>
      )
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
      ],
      detailedContent: (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Employee Training & Development</h3>
            <p className="text-lg text-blue-600 font-semibold">Empowering Your People. Elevating Your Business.</p>
          </div>
          
          <p className="text-gray-700 leading-relaxed">
            At Openaccess Consulting, we offer tailor-made Training & Development programs that enhance employee competencies, increase engagement, and align your workforce with your business strategy. Whether you're building core skills, improving leadership, or strengthening customer service, we help you drive results—on your terms.
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-blue-800 font-medium">⚙️ All training can be delivered in-house or at a location of your choice, depending on your operational needs and preferences.</p>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-gray-900">✅ Training Categories & Topics</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 p-5 rounded-lg">
                <h5 className="font-semibold text-blue-600 mb-3">1. Soft Skills Training</h5>
                <p className="text-sm text-gray-600 mb-3">Develop interpersonal and behavioral skills that impact performance.</p>
                <ul className="text-sm space-y-1">
                  <li>• Effective Communication & Active Listening</li>
                  <li>• Emotional Intelligence at Work</li>
                  <li>• Time Management & Personal Effectiveness</li>
                  <li>• Conflict Resolution & Difficult Conversations</li>
                  <li>• Team Building & Collaboration</li>
                  <li>• Adaptability & Growth Mindset</li>
                  <li>• Professional Etiquette & Work Ethics</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 p-5 rounded-lg">
                <h5 className="font-semibold text-blue-600 mb-3">2. Technical & Job-Specific Training</h5>
                <p className="text-sm text-gray-600 mb-3">Equip employees with specific competencies required for their roles.</p>
                <ul className="text-sm space-y-1">
                  <li>• Procurement & Supply Chain Management</li>
                  <li>• Project Management Fundamentals (PMP/Agile/Scrum)</li>
                  <li>• Financial Reporting & Budgeting</li>
                  <li>• Sales & Business Development Techniques</li>
                  <li>• Engineering & Maintenance Procedures</li>
                  <li>• HR & Payroll System Training</li>
                  <li>• Oil & Gas Industry Standards (HSE, QA/QC, etc.)</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 p-5 rounded-lg">
                <h5 className="font-semibold text-blue-600 mb-3">3. Leadership Training</h5>
                <p className="text-sm text-gray-600 mb-3">Build capable leaders who can inspire, manage, and drive performance.</p>
                <ul className="text-sm space-y-1">
                  <li>• Developing Leadership Presence & Influence</li>
                  <li>• Strategic Thinking & Decision Making</li>
                  <li>• Coaching & Mentoring for Team Growth</li>
                  <li>• Leading with Emotional Intelligence</li>
                  <li>• Conflict Management & Team Motivation</li>
                  <li>• Leadership Styles and Change Management</li>
                  <li>• Visionary Leadership for Business Growth</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 p-5 rounded-lg">
                <h5 className="font-semibold text-blue-600 mb-3">4. Sales & Customer Service Training</h5>
                <p className="text-sm text-gray-600 mb-3">Equip your team with skills to attract, convert, and retain customers.</p>
                <ul className="text-sm space-y-1">
                  <li>• Customer Relationship Management (CRM)</li>
                  <li>• Handling Difficult Customers Professionally</li>
                  <li>• Service Recovery & Complaint Handling</li>
                  <li>• Telephone & Email Etiquette</li>
                  <li>• Emotional Intelligence in Customer Service</li>
                  <li>• Upselling & Cross-selling Techniques</li>
                  <li>• Pipeline Management & Closing Deals</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 p-5 rounded-lg">
                <h5 className="font-semibold text-blue-600 mb-3">5. Digital Skills & Workplace Technology</h5>
                <p className="text-sm text-gray-600 mb-3">Keep your workforce digitally ready and efficient.</p>
                <ul className="text-sm space-y-1">
                  <li>• Microsoft Office Suite (Excel, Word, PowerPoint)</li>
                  <li>• Google Workspace for Business</li>
                  <li>• Workplace Collaboration Tools (Zoom, Teams, Slack)</li>
                  <li>• Cybersecurity Awareness for Employees</li>
                  <li>• Digital Productivity & Remote Work Tools</li>
                  <li>• Basic Data Analysis with Excel & Power BI</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 p-5 rounded-lg">
                <h5 className="font-semibold text-blue-600 mb-3">6. Health, Safety & Environment (HSE) Training</h5>
                <p className="text-sm text-gray-600 mb-3">Protecting people, workplace, and environment through proactive training.</p>
                <ul className="text-sm space-y-1">
                  <li>• HSE Management Systems</li>
                  <li>• Workplace Safety and Risk Assessment</li>
                  <li>• Fire Safety & Emergency Response</li>
                  <li>• Incident Reporting & Investigation</li>
                  <li>• Environmental Impact & Waste Management</li>
                  <li>• First Aid & CPR</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-600 text-white p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-4">🧠 Delivery Approach</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>In-House Training (at your office or preferred venue)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Virtual Instructor-Led Sessions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Hybrid Workshops</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>One-on-One Coaching (for leadership roles)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Post-Training Evaluation & Feedback Reports</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-red-500 bg-red-50 p-4 rounded">
            <h4 className="text-lg font-semibold text-red-800 mb-2">🚨 The Risk of Not Investing in Employee Training</h4>
            <ul className="text-red-700 space-y-1">
              <li>• Declining performance due to skill gaps</li>
              <li>• Increased employee turnover from lack of development</li>
              <li>• Missed growth opportunities</li>
              <li>• Weak leadership pipeline</li>
              <li>• Reduced team morale and innovation</li>
            </ul>
          </div>

          <div className="text-center bg-gray-50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-900 mb-2">📈 Ready to Build a Stronger, Smarter Team?</h4>
            <p className="text-gray-700 mb-2">
              Let Openaccess Consulting design and deliver training solutions that empower your people to do their best work — every day.
            </p>
            <p className="text-blue-600 font-semibold">📩 Contact us now to schedule a Free Training Needs Assessment.</p>
          </div>
        </div>
      )
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
      ],
      detailedContent: (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Expatriate & Immigration Services</h3>
            <p className="text-lg text-blue-600 font-semibold">Seamless Immigration Support for Global Talent and Operations</p>
          </div>
          
          <p className="text-gray-700 leading-relaxed">
            Operating across borders can be complex — especially when it involves bringing in skilled expatriates. At Openaccess, we provide comprehensive immigration and expatriate management services that help your business stay compliant, efficient, and fully focused on growth.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            We simplify the entire process so you can onboard international professionals quickly, legally, and stress-free.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">🛂 Our Full Suite of Services Includes:</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <strong>Facilitation of Expatriate Quota Approvals:</strong> We help secure quota approvals from the Ministry of Interior, aligning with your business objectives and operational plans.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <strong>Processing of Business Permits:</strong> We assist in obtaining the required business permits for foreign-owned or partnered companies operating in Nigeria.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <strong>Monthly Expatriate Quota Returns:</strong> We handle timely preparation and filing of statutory returns, ensuring regulatory compliance.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <strong>Monitoring of Quota Positions:</strong> Real-time tracking and management of your company's quota usage to prevent overstay and non-compliance.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <strong>Renewal and Amendment of Quota Positions:</strong> Need to increase, extend, or amend existing quota positions? We manage the entire process for smooth continuity.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <strong>Expatriate Information Management:</strong> Maintain accurate, updated records of all expatriate staff in line with government requirements.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <strong>Temporary Work Permits (TWP):</strong> For short-term technical assignments, we fast-track TWP approvals with minimal delays.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <strong>CERPAC Processing and Renewal:</strong> End-to-end management of Combined Expatriate Residence Permit and Aliens Card for lawful residency.
                </div>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-red-500 bg-red-50 p-4 rounded">
            <h4 className="text-lg font-semibold text-red-800 mb-2">🔍 Why It Matters</h4>
            <p className="text-red-700 mb-2">Operating without proper immigration support can lead to:</p>
            <ul className="text-red-700 space-y-1">
              <li>❌ Regulatory sanctions or government fines</li>
              <li>❌ Delays in operations and project timelines</li>
              <li>❌ Deportation of key staff</li>
              <li>❌ Brand and reputational damage</li>
              <li>❌ Revocation of business licenses</li>
            </ul>
            <p className="text-red-700 mt-3 font-medium">
              70% of immigration-related penalties in Nigeria stem from administrative oversight – we ensure that doesn't happen to you.
            </p>
          </div>

          <div className="bg-blue-600 text-white p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-4">🧠 Why Choose Openaccess Consulting?</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Regulatory Expertise:</strong> We stay up to date with evolving Nigerian Immigration laws and Ministry of Interior policies.
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 mt-1" />
                  <div>
                    <strong>End-to-End Support:</strong> From documentation to liaison with government authorities, we manage everything.
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Compliance Assurance:</strong> We help clients avoid infractions and penalties by keeping them compliant at all times.
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Speed & Accuracy:</strong> Our structured process ensures prompt application, approval, and renewal timelines.
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Data Security & Confidentiality:</strong> We prioritize your sensitive employee data with strict confidentiality protocols.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">🇳🇬 Nationwide Coverage</h4>
            <p className="text-gray-700">
              Whether your expatriates are based in Lagos, Port Harcourt, Abuja, Ilorin, or remote project sites — we deliver services across all parts of Nigeria.
            </p>
          </div>

          <div className="text-center bg-gray-50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-900 mb-2">🚀 Stay Focused on Growth – We'll Handle the Immigration Work</h4>
            <p className="text-gray-700 mb-2">
              Let Openaccess Consulting be your strategic partner in immigration and expatriate workforce management.
            </p>
            <p className="text-blue-600 font-semibold">📞 Book a consultation today to discuss your needs and ensure you're 100% compliant.</p>
          </div>
        </div>
      )
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
      ],
      detailedContent: (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Human Resource Services</h3>
            <p className="text-lg text-blue-600 font-semibold">Complete HR Solutions to Optimize and Manage Your Workforce</p>
            <p className="text-sm text-gray-600 mt-2">Delivered by Openaccess</p>
          </div>
          
          <p className="text-gray-700 leading-relaxed">
            Managing people effectively is one of the most critical functions in any organization. At Openaccess, we provide end-to-end Human Resource services that empower businesses to attract, retain, develop, and manage their workforce — all while ensuring compliance and alignment with business goals.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            Whether you are a startup laying HR foundations or a growing business in need of strategic HR support, our solutions are tailored to your needs.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">🔧 Our Human Resource Service Offerings Include:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>1. Attendance Device Supply and Management:</strong> Biometric or RFID-based time & attendance systems, integration with payroll and leave management, real-time workforce tracking and reporting.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>2. Performance Management:</strong> Design and implementation of KPIs and appraisal systems, tools to track individual and team performance, annual or quarterly review frameworks.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>3. Training & Development:</strong> Tailored in-house or external training programs, soft skills, technical, and leadership development, workforce upskilling and reskilling initiatives.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>4. Outsourcing:</strong> Provision of skilled contract and full-time staff, end-to-end personnel administration and compliance, focused support for non-core functions.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>5. Career Management:</strong> Employee growth mapping and succession planning, talent development strategies, coaching and mentoring programs.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>6. Recruitment:</strong> Talent acquisition from junior to executive levels, interview support, testing, and onboarding, access to qualified candidates across Nigeria.
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>7. Policies and Procedure Development:</strong> Creation of employee handbooks and HR manuals, development of HR policies aligned with labor laws, guidelines for disciplinary actions, leave, grievance, etc.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>8. HR Compliance Audit:</strong> Assessment of HR practices for legal and operational compliance, identification of gaps and risk mitigation plans, support with implementation of audit recommendations.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>9. HR Management:</strong> Day-to-day HR operations and administration, employee database and record management, leave, benefits, and disciplinary process support.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>10. Payroll Management:</strong> Timely and accurate salary processing, statutory deductions and tax compliance (PAYE, NHF, NSITF, Pension), payslip generation and staff queries resolution.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>11. Employee Relations Support:</strong> Conflict resolution and mediation services, workplace culture and engagement programs, guidance on disciplinary and grievance procedures.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-600 text-white p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-4">💼 Why Businesses Choose Openaccess</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Cost Savings:</strong> Eliminate the need for a full internal HR department
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Efficiency:</strong> Streamlined processes and technology-driven HR management
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Compliance:</strong> Ensure full alignment with Nigerian labour laws and global HR standards
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Scalability:</strong> Whether you're growing or restructuring, we adapt with you
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Nationwide Coverage:</strong> We support clients across all states in Nigeria
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center bg-gray-50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-900 mb-2">🚀 Let's Help You Build a Thriving Workforce</h4>
            <p className="text-gray-700 mb-2">
              Our integrated HR services ensure you are not just managing people — you are empowering your business through people.
            </p>
            <p className="text-gray-700 mb-2">
              Whether you require consulting, operational support, or full HR outsourcing, Openaccess is your trusted partner in human capital success.
            </p>
          </div>
        </div>
      )
    },
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
      ],
      detailedContent: (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Regulatory Compliance, Certification & Audit Services</h3>
            <p className="text-lg text-blue-600 font-semibold">Ensure Compliance. Gain Certification. Operate with Confidence.</p>
            <p className="text-sm text-gray-600 mt-2">Delivered by Openaccess Consulting</p>
          </div>
          
          <p className="text-gray-700 leading-relaxed">
            In today's highly regulated business environment — especially within the oil & gas and allied industries — maintaining compliance isn't optional. It's a critical success factor that protects your license to operate, enhances your credibility, and opens doors to major business opportunities.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            At Openaccess, we provide end-to-end regulatory compliance, certification, and audit services to help organizations meet statutory requirements, pass audits, and position themselves for growth.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">🔍 Our Comprehensive Service Offerings Include:</h4>
            
            <div className="mb-6">
              <h5 className="text-lg font-semibold text-blue-600 mb-3">🏢 Regulatory & Statutory Registrations</h5>
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-sm"><strong>NIPEX Registration</strong> (New, Renewals, Pre-qualification Categories - PCA)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-sm"><strong>DPR/NUPRC/NMDPRA Permits</strong> – Secure all required operating licenses for upstream, midstream, and downstream activities.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-sm"><strong>NCDMB & NOGIC JQS Registration</strong> – Comply with local content mandates and unlock NCDMB projects.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-sm"><strong>COREN Certification</strong> – For engineering firms and professionals operating legally in Nigeria.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-sm"><strong>Dun & Bradstreet D-U-N-S®️ Registration</strong> – Enhance global corporate identity and creditworthiness.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-sm"><strong>Offshore Safety Permit (OSP)</strong> – For personnel working in offshore and remote environments.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-sm"><strong>Weight & Measure Permits</strong> – Comply with metrological standards under regulatory supervision.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-sm"><strong>Certificate of Pattern Approval</strong> – For companies using standard measurement or inspection equipment.</span>
                </div>
              </div>
            </div>

            <div>
              <h5 className="text-lg font-semibold text-blue-600 mb-3">✅ Audit & Compliance Services</h5>
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-sm"><strong>Second Party (2nd Party) Audits</strong> – Assess suppliers and subcontractors for compliance and quality assurance.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-sm"><strong>Contractor Safety Audits</strong> – Evaluate and verify safety practices and documentation of third-party vendors.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-sm"><strong>Regulatory Compliance Audits</strong> – Ensure your operations are aligned with government and industry regulations.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-sm"><strong>Prequalification Audits</strong> – Prepare for and pass client prequalification assessments.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-sm"><strong>ISO 45001:2018 Stage 1 & 2 Certification Audits</strong> – Attain international Occupational Health & Safety standards.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-sm"><strong>Internal OHS Audits</strong> – Identify gaps and strengthen workplace safety practices.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-sm"><strong>Internal ISO 45001 Compliance Audits</strong> – Maintain or renew ISO certifications with confidence.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-sm"><strong>NIPEX Audits</strong> – Full audit support to retain or improve NIPEX compliance scores.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-red-500 bg-red-50 p-4 rounded">
            <h4 className="text-lg font-semibold text-red-800 mb-2">💼 Why It Matters to Your Business</h4>
            <ul className="text-red-700 space-y-1">
              <li>❗ Failure to comply can lead to permit revocation, contract disqualification, or legal sanctions.</li>
              <li>💰 Non-compliance often results in lost business opportunities, financial penalties, and reputational damage.</li>
              <li>📈 Companies with strong audit records and certifications are more likely to win tenders, form partnerships, and scale operations.</li>
            </ul>
            <p className="text-red-700 mt-3 font-medium">
              According to industry data: Up to 60% of contract bids are lost due to incomplete registrations or expired certifications.
            </p>
          </div>

          <div className="bg-blue-600 text-white p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-4">🚀 Why Clients Choose Openaccess</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 mt-1" />
                  <div>
                    <strong>In-Depth Regulatory Expertise:</strong> We understand the complexities of Nigerian and international compliance frameworks.
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Fast Turnaround & End-to-End Support:</strong> From documentation to submission and follow-up, we handle everything.
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Nationwide Coverage:</strong> We support clients across all states in Nigeria, including remote field locations.
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Track Record of Success:</strong> Trusted by players in oil & gas, manufacturing, energy, engineering, and telecoms.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">🛠️ Tailored Support for Every Industry</h4>
            <p className="text-gray-700 mb-3">We serve businesses across sectors like:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {['Oil & Gas', 'Engineering & Construction', 'Power & Energy', 'Manufacturing', 'Marine & Offshore', 'Telecoms & Infrastructure'].map((sector, index) => (
                <div key={index} className="bg-white p-3 rounded text-center text-sm font-medium text-gray-700">
                  {sector}
                </div>
              ))}
            </div>
            <p className="text-gray-700 mt-4">
              Whether you're a startup entering the industry or a multinational expanding operations — we help you stay compliant, credible, and competitive.
            </p>
          </div>

          <div className="text-center bg-gray-50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-900 mb-2">📞 Partner with Openaccess Today</h4>
            <p className="text-gray-700">
              Let us help your organization secure all required registrations, pass all audits, and operate in full regulatory compliance — so you can focus on business growth and operational excellence.
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-10 lg:px-28">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Our Core Services
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive professional services designed to transform your business operations 
          and drive sustainable growth across all areas of your organization.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coreServices.map((service, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow group border border-gray-100"
          >
            <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
              <service.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {service.title}
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {service.description}
            </p>
            <button
              onClick={() => setSelectedService(service)}
              className="text-blue-600 font-medium hover:text-blue-700 transition-colors inline-flex items-center group"
            >
              {service.detailedContent ? 'Read More' : '+ more services'}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        ))}
      </div>

      {/* Service Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-gray-900">
                {selectedService.title}
              </h3>
              <button
                onClick={() => setSelectedService(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6">
              {selectedService.detailedContent ? (
                selectedService.detailedContent
              ) : (
                <div>
                  <p className="text-gray-600 mb-6">{selectedService.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedService.categories.map((category: string, idx: number) => (
                      <div key={idx} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-700">{category}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center group"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CoreServices;