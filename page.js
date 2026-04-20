"use client";

import { Shield, ChevronRight } from "lucide-react";

export default function PrivacyPolicy() {
  const lastUpdated = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const sections = [
    {
      id: "information-collected",
      title: "1. Information We Collect",
      content: (
        <>
          <p>
            Solomon Home Services, operated by Mark Solomon under REAL Broker,
            LLC, collects information you voluntarily provide and information
            gathered through your use of our website. Categories of information
            collected include:
          </p>
          <h4 className="font-semibold text-slate-800 mt-4 mb-2">
            a. Information You Provide Directly
          </h4>
          <ul className="list-disc list-inside space-y-1 text-stone-600">
            <li>Full name, email address, and phone number</li>
            <li>Property address or areas of interest</li>
            <li>Real estate inquiry details (buying, selling, relocating)</li>
            <li>Military affiliation or VA loan interest (if voluntarily disclosed)</li>
            <li>Messages submitted through our contact forms</li>
          </ul>
          <h4 className="font-semibold text-slate-800 mt-4 mb-2">
            b. Information Collected Automatically
          </h4>
          <ul className="list-disc list-inside space-y-1 text-stone-600">
            <li>IP address and browser type</li>
            <li>Pages visited and time spent on site</li>
            <li>Referring website or search engine</li>
            <li>Device type and operating system</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
          <h4 className="font-semibold text-slate-800 mt-4 mb-2">
            c. IDX and MLS Data
          </h4>
          <p>
            Property listings displayed on this website are sourced from the
            local Multiple Listing Service (MLS) via IDX data feed. This data is
            provided for personal, non-commercial use by consumers. You
            acknowledge that MLS data is the intellectual property of the
            respective MLS and its participating brokerages.
          </p>
        </>
      ),
    },
    {
      id: "how-we-use",
      title: "2. How We Use Your Information",
      content: (
        <>
          <p>We use the information we collect to:</p>
          <ul className="list-disc list-inside space-y-1 text-stone-600 mt-3">
            <li>Respond to your real estate inquiries promptly and professionally</li>
            <li>Provide home valuations, market reports, and property information</li>
            <li>Send follow-up communications related to your inquiry</li>
            <li>Send SMS text messages when you have provided explicit consent</li>
            <li>Improve the functionality and content of our website</li>
            <li>
              Comply with Colorado Real Estate Commission (CREC) record-keeping
              requirements
            </li>
            <li>Comply with applicable federal, state, and local laws</li>
            <li>Prevent fraud and protect the security of our website</li>
          </ul>
          <p className="mt-4">
            We will not use your information for purposes materially different
            from those described in this Privacy Policy without first providing
            you notice and, where required by law, obtaining your consent.
          </p>
        </>
      ),
    },
    {
      id: "sms-communications",
      title: "3. SMS / Text Message Communications",
      content: (
        <>
          <p>
            By providing your phone number and checking the consent box on our
            contact form, you expressly consent to receive text messages (SMS)
            from Solomon Home Services regarding your real estate inquiry,
            property updates, market information, and related services.
          </p>
          <div className="my-4 p-4 bg-[#1e3a2f]/8 border-l-4 border-[#c9a84c] rounded-r-lg">
            <p className="font-semibold text-slate-800 mb-1">
              SMS Opt-Out Instructions:
            </p>
            <p className="text-stone-600">
              Reply <strong>STOP</strong> at any time to unsubscribe from text
              messages. Reply <strong>HELP</strong> for assistance. Message and
              data rates may apply. Message frequency varies based on your
              inquiry and our communications cadence.
            </p>
          </div>
          <div className="my-4 p-5 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="font-bold text-slate-800 mb-2 uppercase text-sm tracking-wide">
              Important — Mobile Data Sharing Policy
            </p>
            <p className="text-stone-700 text-sm leading-relaxed">
              No mobile information will be shared with third
              parties/affiliates for marketing/promotional purposes. All the
              above categories exclude text messaging originator opt-in data and
              consent; this information will not be shared with any third
              parties.
            </p>
          </div>
          <p>
            Our SMS messaging program uses a 10DLC (10-Digit Long Code)
            registered number in compliance with A2P 10DLC regulations
            established by U.S. mobile carriers and the CTIA. We are committed
            to responsible messaging practices.
          </p>
        </>
      ),
    },
    {
      id: "sharing",
      title: "4. Information Sharing and Disclosure",
      content: (
        <>
          <p>
            Solomon Home Services does not sell, rent, or trade your personal
            information to unaffiliated third parties for their marketing
            purposes. We may share your information only in the following
            circumstances:
          </p>
          <h4 className="font-semibold text-slate-800 mt-4 mb-2">
            a. Service Providers
          </h4>
          <p>
            We may share your information with trusted third-party service
            providers who assist us in operating our website and conducting our
            real estate business, including CRM software providers, email
            marketing platforms, and transaction management systems. These
            providers are contractually obligated to keep your information
            confidential and use it only for the purposes we specify.
          </p>
          <h4 className="font-semibold text-slate-800 mt-4 mb-2">
            b. REAL Broker, LLC
          </h4>
          <p>
            As a licensed agent operating under REAL Broker, LLC, certain
            transaction and client records may be shared with the brokerage as
            required by Colorado law and CREC regulations for record retention
            and compliance purposes.
          </p>
          <h4 className="font-semibold text-slate-800 mt-4 mb-2">
            c. Legal Requirements
          </h4>
          <p>
            We may disclose your information if required to do so by law,
            subpoena, court order, or other legal process, or if we believe in
            good faith that such disclosure is necessary to protect our rights,
            protect your safety or the safety of others, or investigate fraud.
          </p>
          <h4 className="font-semibold text-slate-800 mt-4 mb-2">
            d. Business Transfers
          </h4>
          <p>
            In the event of a merger, acquisition, or sale of all or a portion
            of our business assets, your personal information may be transferred
            as part of the transaction. We will provide notice before your
            personal information is transferred and becomes subject to a
            different privacy policy.
          </p>
        </>
      ),
    },
    {
      id: "cookies",
      title: "5. Cookies and Tracking Technologies",
      content: (
        <>
          <p>
            Our website uses cookies and similar tracking technologies to
            enhance your browsing experience. Cookies are small data files
            stored on your device that help us recognize returning visitors and
            understand how our website is used.
          </p>
          <ul className="list-disc list-inside space-y-1 text-stone-600 mt-3">
            <li>
              <strong>Essential Cookies:</strong> Required for the website to
              function properly
            </li>
            <li>
              <strong>Analytics Cookies:</strong> Help us understand website
              traffic and user behavior (e.g., Google Analytics)
            </li>
            <li>
              <strong>Marketing Cookies:</strong> Used to deliver relevant
              advertisements (only with your consent)
            </li>
          </ul>
          <p className="mt-3">
            You may disable cookies through your browser settings. Note that
            disabling certain cookies may affect the functionality of our
            website, including IDX property search features.
          </p>
        </>
      ),
    },
    {
      id: "data-security",
      title: "6. Data Security",
      content: (
        <p>
          We implement commercially reasonable technical and organizational
          security measures to protect your personal information from
          unauthorized access, disclosure, alteration, or destruction. These
          measures include SSL/TLS encryption for data in transit, secure
          hosting infrastructure, and restricted access to personal data. While
          we strive to use industry-standard security practices, no method of
          internet transmission or electronic storage is 100% secure. We cannot
          guarantee absolute security, but we are committed to promptly
          addressing any data security incidents in accordance with applicable
          Colorado law, including the Colorado Consumer Protection Act (CCPA)
          and the Colorado Privacy Act (CPA).
        </p>
      ),
    },
    {
      id: "colorado-rights",
      title: "7. Your Rights Under Colorado Law",
      content: (
        <>
          <p>
            Under the Colorado Privacy Act (CPA), Colorado residents have the
            following rights regarding their personal data:
          </p>
          <ul className="list-disc list-inside space-y-2 text-stone-600 mt-3">
            <li>
              <strong>Right to Access:</strong> Know what personal data we have
              collected about you
            </li>
            <li>
              <strong>Right to Correction:</strong> Correct inaccurate personal
              data
            </li>
            <li>
              <strong>Right to Deletion:</strong> Request deletion of your
              personal data, subject to legal retention requirements
            </li>
            <li>
              <strong>Right to Opt-Out:</strong> Opt out of the sale of
              personal data or targeted advertising (we do not sell personal
              data)
            </li>
            <li>
              <strong>Right to Portability:</strong> Receive a copy of your
              personal data in a portable format
            </li>
            <li>
              <strong>Right to Appeal:</strong> Appeal our decision regarding
              a privacy request
            </li>
          </ul>
          <p className="mt-4">
            To exercise any of these rights, please contact us at{" "}
            <a
              href="mailto:mark@solomonhomeservices.com"
              className="text-[#1e3a2f] font-medium hover:text-[#c9a84c] transition-colors"
            >
              mark@solomonhomeservices.com
            </a>
            . We will respond to verifiable requests within 45 days as required
            by law.
          </p>
        </>
      ),
    },
    {
      id: "children",
      title: "8. Children's Privacy",
      content: (
        <p>
          Our website is not directed to children under the age of 13, and we do
          not knowingly collect personal information from children under 13. If
          you believe a child under 13 has provided us with personal information,
          please contact us immediately and we will take steps to delete such
          information.
        </p>
      ),
    },
    {
      id: "third-party-links",
      title: "9. Third-Party Links",
      content: (
        <p>
          Our website may contain links to third-party websites, including MLS
          listing portals, mortgage calculators, and community resources. This
          Privacy Policy does not apply to those third-party websites. We
          encourage you to review the privacy policies of any third-party sites
          you visit. Solomon Home Services is not responsible for the privacy
          practices or content of third-party websites.
        </p>
      ),
    },
    {
      id: "fair-housing",
      title: "10. Fair Housing Compliance",
      content: (
        <p>
          Solomon Home Services is committed to the principles of the Fair
          Housing Act and the Equal Housing Opportunity laws. We do not
          discriminate on the basis of race, color, religion, sex, national
          origin, disability, familial status, or any other characteristic
          protected by federal, state, or local law. All real estate services
          are provided in full compliance with Colorado anti-discrimination laws
          and CREC regulations.
        </p>
      ),
    },
    {
      id: "changes",
      title: "11. Changes to This Privacy Policy",
      content: (
        <p>
          We reserve the right to modify this Privacy Policy at any time. Changes
          will be effective immediately upon posting to this page with an updated
          "Last Updated" date. Your continued use of our website following the
          posting of changes constitutes your acceptance of the updated policy.
          We encourage you to review this Privacy Policy periodically.
        </p>
      ),
    },
    {
      id: "contact",
      title: "12. Contact Us",
      content: (
        <>
          <p>
            If you have questions, concerns, or requests regarding this Privacy
            Policy or our data practices, please contact:
          </p>
          <div className="mt-4 p-5 bg-[#1e3a2f]/8 rounded-lg border border-[#1e3a2f]/15">
            <p className="font-bold text-slate-800">Mark Solomon, REALTOR®</p>
            <p className="text-stone-600">Solomon Home Services</p>
            <p className="text-stone-600">Licensed under REAL Broker, LLC</p>
            <p className="text-stone-600">Colorado Front Range</p>
            <a
              href="mailto:mark@solomonhomeservices.com"
              className="text-[#1e3a2f] font-medium hover:text-[#c9a84c] transition-colors block mt-2"
            >
              mark@solomonhomeservices.com
            </a>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Page Header */}
      <div className="bg-[#1a2332] pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-[#c9a84c] text-xs uppercase tracking-widest font-medium mb-4">
            <Shield size={14} />
            <span>Legal</span>
            <ChevronRight size={12} />
            <span>Privacy Policy</span>
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Privacy Policy
          </h1>
          <p className="text-stone-400 text-sm">
            Last Updated:{" "}
            <span className="text-[#c9a84c] font-medium">{lastUpdated}</span>
          </p>
          <p className="text-stone-400 text-sm mt-2">
            Solomon Home Services · Mark Solomon, REALTOR® · REAL Broker, LLC
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Intro */}
        <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-8 mb-8">
          <p className="text-stone-600 leading-relaxed text-base">
            Solomon Home Services ("we," "our," or "us"), operated by Mark
            Solomon as a licensed Colorado real estate broker under{" "}
            <strong>REAL Broker, LLC</strong>, is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, disclose,
            and protect information about you when you visit our website,
            interact with our real estate services, or communicate with us via
            phone, email, or SMS text message.
          </p>
          <p className="text-stone-600 leading-relaxed text-base mt-4">
            By using our website or services, you agree to the practices
            described in this Privacy Policy. If you do not agree with these
            practices, please do not use our website or provide us with your
            personal information.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section) => (
            <div
              key={section.id}
              id={section.id}
              className="bg-white rounded-2xl shadow-sm border border-stone-200 p-8"
            >
              <h2
                className="text-xl font-bold text-[#1a2332] mb-4 pb-3 border-b border-stone-100"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {section.title}
              </h2>
              <div className="text-stone-600 leading-relaxed text-sm space-y-3">
                {section.content}
              </div>
            </div>
          ))}
        </div>

        {/* CREC Footer Note */}
        <div className="mt-8 p-5 bg-[#1a2332] rounded-xl text-center">
          <p className="text-stone-400 text-xs leading-relaxed">
            Mark Solomon is a licensed Colorado real estate broker operating
            under <strong className="text-stone-200">REAL Broker, LLC</strong>.
            All services are conducted in compliance with Colorado Real Estate
            Commission (CREC) regulations and applicable federal law.
          </p>
        </div>
      </div>
    </div>
  );
}
