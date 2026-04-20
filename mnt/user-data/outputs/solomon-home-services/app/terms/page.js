"use client";

import { FileText, ChevronRight } from "lucide-react";

export default function TermsOfService() {
  const lastUpdated = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const sections = [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      content: (
        <p>
          By accessing or using the Solomon Home Services website (
          <strong>solomonhomeservices.com</strong>) or any services provided
          through it, you agree to be bound by these Terms of Service ("Terms"),
          our Privacy Policy, and all applicable federal, state, and local laws
          and regulations. These Terms constitute a legally binding agreement
          between you ("User," "you," or "your") and Solomon Home Services,
          operated by Mark Solomon, a licensed Colorado real estate broker under
          REAL Broker, LLC. If you do not agree to these Terms, please
          discontinue use of this website immediately.
        </p>
      ),
    },
    {
      id: "real-estate-services",
      title: "2. Real Estate Services and Licensing",
      content: (
        <>
          <p>
            Mark Solomon is a licensed real estate broker in the State of
            Colorado, operating under the supervision and licensure of{" "}
            <strong>REAL Broker, LLC</strong>, a Colorado licensed brokerage. All
            real estate activities, representations, and services are conducted
            in compliance with the Colorado Real Estate Commission (CREC) rules
            and the Colorado Revised Statutes governing real estate practice.
          </p>
          <p className="mt-3">
            The content, listings, and market information provided on this
            website are intended for general informational purposes. Nothing on
            this website constitutes a binding offer, contract, or legal advice.
            Real estate transactions involve complex legal and financial
            considerations; you are strongly encouraged to consult with
            qualified legal and financial professionals.
          </p>
          <p className="mt-3">
            Property valuations, market analyses, and Comparative Market
            Analyses (CMAs) provided by Solomon Home Services are professional
            opinions based on available market data and are not formal appraisals.
            Only a licensed appraiser can provide a certified property appraisal.
          </p>
        </>
      ),
    },
    {
      id: "idx-listings",
      title: "3. IDX Property Listings and MLS Data",
      content: (
        <>
          <p>
            Property listings displayed on this website are provided through an
            Internet Data Exchange (IDX) agreement with the local Multiple
            Listing Service (MLS). This data is intended solely for personal,
            non-commercial use by consumers.
          </p>
          <ul className="list-disc list-inside space-y-2 text-stone-600 mt-3">
            <li>
              MLS listing data is the intellectual property of the respective
              MLS and its participating members
            </li>
            <li>
              Listing information is deemed reliable but not guaranteed to be
              accurate, complete, or current
            </li>
            <li>
              Property information should be independently verified prior to
              entering any real estate transaction
            </li>
            <li>
              You may not reproduce, redistribute, or commercially exploit MLS
              data obtained through this website
            </li>
            <li>
              Listings may not reflect all properties available through the MLS
            </li>
          </ul>
          <p className="mt-3">
            Solomon Home Services does not guarantee the accuracy of any listing
            information and shall not be liable for errors, omissions, or
            outdated information in MLS data displayed on this site.
          </p>
        </>
      ),
    },
    {
      id: "website-use",
      title: "4. Permitted Use of This Website",
      content: (
        <>
          <p>
            You are granted a limited, non-exclusive, non-transferable,
            revocable license to access and use this website for personal,
            non-commercial purposes in connection with real estate services. You
            agree not to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-stone-600 mt-3">
            <li>
              Use the website for any unlawful purpose or in violation of these
              Terms
            </li>
            <li>
              Scrape, harvest, or collect data from this website through
              automated means
            </li>
            <li>
              Attempt to gain unauthorized access to any portion of the website
              or its systems
            </li>
            <li>
              Upload or transmit viruses, malware, or any other malicious code
            </li>
            <li>
              Impersonate any person or entity or misrepresent your affiliation
              with any person or entity
            </li>
            <li>
              Interfere with or disrupt the integrity or performance of the
              website
            </li>
            <li>
              Use the website to solicit, advertise, or promote competing real
              estate services without written consent
            </li>
            <li>
              Reproduce, republish, or distribute IDX listing content for
              commercial purposes
            </li>
          </ul>
          <p className="mt-3">
            We reserve the right to terminate or restrict your access to the
            website at any time, without notice, for conduct that we determine,
            in our sole discretion, violates these Terms or is harmful to other
            users, us, or third parties.
          </p>
        </>
      ),
    },
    {
      id: "copyright",
      title: "5. Intellectual Property and Copyright",
      content: (
        <>
          <p>
            All content on this website — including but not limited to text,
            copy, photography, graphics, logos, icons, audio clips, digital
            downloads, data compilations, and software — is the property of
            Solomon Home Services or its content suppliers and is protected by
            United States copyright law, trademark law, and international
            conventions.
          </p>
          <h4 className="font-semibold text-slate-800 mt-4 mb-2">
            What You May Do:
          </h4>
          <ul className="list-disc list-inside space-y-1 text-stone-600">
            <li>
              View and print pages for your personal, non-commercial real estate
              research
            </li>
            <li>Share links to this website through social media or email</li>
          </ul>
          <h4 className="font-semibold text-slate-800 mt-4 mb-2">
            What You May Not Do:
          </h4>
          <ul className="list-disc list-inside space-y-1 text-stone-600">
            <li>
              Reproduce, duplicate, copy, or sell any portion of the website
              without our express written permission
            </li>
            <li>
              Use our trademarks, service marks, logos, or branding without prior
              written consent
            </li>
            <li>
              Create derivative works based on the website content without
              authorization
            </li>
            <li>
              Use website content for any commercial purpose without written
              permission
            </li>
            <li>
              Remove or alter any copyright, trademark, or proprietary notices
            </li>
          </ul>
          <p className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg text-sm">
            <strong>DMCA Notice:</strong> If you believe that any content on this
            website infringes your copyright, please contact us at{" "}
            <a
              href="mailto:mark@solomonhomeservices.com"
              className="text-[#1e3a2f] font-medium hover:underline"
            >
              mark@solomonhomeservices.com
            </a>{" "}
            with a description of the allegedly infringing material and its
            location on our site.
          </p>
        </>
      ),
    },
    {
      id: "sms-terms",
      title: "6. SMS / Text Message Communications",
      content: (
        <>
          <p>
            By providing your mobile phone number and expressly consenting to
            SMS communications through our contact form or other opt-in
            mechanisms, you agree to the following SMS Terms of Service:
          </p>
          <h4 className="font-semibold text-slate-800 mt-4 mb-2">
            Program Description:
          </h4>
          <p>
            Solomon Home Services may send you SMS text messages related to your
            real estate inquiry, including property information, market updates,
            appointment reminders, home valuation follow-ups, and related
            communications. Message frequency varies.
          </p>
          <h4 className="font-semibold text-slate-800 mt-4 mb-2">
            Consent Requirements:
          </h4>
          <p>
            Your consent to receive SMS messages is not a condition of purchase
            or receipt of real estate services. You may receive services from us
            without agreeing to receive text messages.
          </p>
          <h4 className="font-semibold text-slate-800 mt-4 mb-2">
            Opt-Out:
          </h4>
          <p>
            You may opt out of SMS communications at any time by replying{" "}
            <strong>STOP</strong> to any text message you receive from us. After
            opting out, you will receive one final confirmation message and no
            further text messages will be sent. Reply <strong>HELP</strong> for
            assistance or contact us directly.
          </p>
          <h4 className="font-semibold text-slate-800 mt-4 mb-2">
            Charges:
          </h4>
          <p>
            Message and data rates may apply depending on your wireless carrier
            plan. Solomon Home Services does not charge for SMS messages, but
            your carrier's standard messaging rates apply.
          </p>
          <h4 className="font-semibold text-slate-800 mt-4 mb-2">
            Supported Carriers:
          </h4>
          <p>
            Major U.S. wireless carriers are supported. Carriers are not
            responsible for delayed or undelivered messages.
          </p>
          <div className="mt-4 p-5 bg-[#1e3a2f]/8 border-l-4 border-[#c9a84c] rounded-r-lg">
            <p className="font-bold text-slate-800 mb-2 text-sm uppercase tracking-wide">
              A2P 10DLC Compliance Statement
            </p>
            <p className="text-stone-600 text-sm">
              Our SMS program operates in compliance with A2P 10DLC (Application-to-Person
              10-Digit Long Code) regulations as required by U.S. wireless
              carriers and the CTIA Messaging Principles and Best Practices. Our
              messaging campaigns are registered with the appropriate campaign
              registry to ensure compliant, non-spam delivery.
            </p>
          </div>
        </>
      ),
    },
    {
      id: "contact-forms",
      title: "7. Contact Forms and Lead Capture",
      content: (
        <p>
          Information submitted through our contact forms is used to respond to
          your real estate inquiry and to communicate with you about our
          services. By submitting a form, you represent that all information
          provided is accurate and that you are the authorized user of the email
          address and phone number provided. We reserve the right to decline to
          process inquiries that appear fraudulent, automated, or submitted in
          violation of these Terms. Submission of a contact form does not create
          an agency relationship, listing agreement, or any other binding real
          estate contract between you and Solomon Home Services or REAL Broker, LLC.
        </p>
      ),
    },
    {
      id: "disclaimers",
      title: "8. Disclaimers and Limitation of Liability",
      content: (
        <>
          <p>
            This website and its content are provided on an "AS IS" and "AS
            AVAILABLE" basis without warranties of any kind, either express or
            implied, including but not limited to implied warranties of
            merchantability, fitness for a particular purpose, or
            non-infringement.
          </p>
          <p className="mt-3">
            Solomon Home Services, Mark Solomon, and REAL Broker, LLC do not
            warrant that:
          </p>
          <ul className="list-disc list-inside space-y-1 text-stone-600 mt-2">
            <li>The website will be uninterrupted, error-free, or secure</li>
            <li>
              Property listing information is complete, accurate, or current
            </li>
            <li>
              Market analyses or home valuations will reflect actual sale prices
            </li>
            <li>
              Results obtained through use of our services will meet your
              expectations
            </li>
          </ul>
          <p className="mt-4">
            To the maximum extent permitted by applicable law, Solomon Home
            Services, Mark Solomon, and REAL Broker, LLC shall not be liable for
            any indirect, incidental, special, consequential, or punitive damages
            arising from your use of this website or our services. Our total
            liability to you for any claims arising under these Terms shall not
            exceed the amount you paid to us for services in the preceding 12
            months.
          </p>
        </>
      ),
    },
    {
      id: "fair-housing",
      title: "9. Fair Housing Statement",
      content: (
        <p>
          Solomon Home Services is firmly committed to the principles of the
          Fair Housing Act (42 U.S.C. § 3601 et seq.) and Equal Housing
          Opportunity. We do not discriminate against any person in the
          provision of real estate services on the basis of race, color,
          religion, national origin, sex, disability, familial status, sexual
          orientation, gender identity, or any other characteristic protected
          by federal, Colorado, or local law. All buyers, sellers, tenants, and
          landlords are entitled to equal professional service. Any discriminatory
          housing practices should be reported to the Colorado Civil Rights
          Division or the U.S. Department of Housing and Urban Development
          (HUD).
        </p>
      ),
    },
    {
      id: "governing-law",
      title: "10. Governing Law and Dispute Resolution",
      content: (
        <>
          <p>
            These Terms of Service shall be governed by and construed in
            accordance with the laws of the State of Colorado, without regard
            to its conflict of law provisions. Any legal action or proceeding
            arising out of or relating to these Terms or your use of this website
            shall be brought exclusively in the state or federal courts located
            in Colorado, and you hereby consent to the personal jurisdiction and
            venue of such courts.
          </p>
          <p className="mt-3">
            Before initiating any legal action, you agree to first attempt to
            resolve disputes informally by contacting us at{" "}
            <a
              href="mailto:mark@solomonhomeservices.com"
              className="text-[#1e3a2f] font-medium hover:text-[#c9a84c] transition-colors"
            >
              mark@solomonhomeservices.com
            </a>
            . We will attempt in good faith to resolve any dispute within 30 days.
          </p>
        </>
      ),
    },
    {
      id: "modifications",
      title: "11. Modifications to Terms",
      content: (
        <p>
          We reserve the right to modify these Terms of Service at any time. We
          will provide notice of material changes by updating the "Last Updated"
          date at the top of this page. Your continued use of the website
          following posting of revised Terms constitutes your acceptance of the
          changes. We encourage you to review these Terms periodically. If you
          object to any change, your sole remedy is to discontinue use of the
          website and services.
        </p>
      ),
    },
    {
      id: "contact",
      title: "12. Contact Information",
      content: (
        <>
          <p>
            Questions or concerns regarding these Terms of Service should be
            directed to:
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
            <FileText size={14} />
            <span>Legal</span>
            <ChevronRight size={12} />
            <span>Terms of Service</span>
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Terms of Service
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
        {/* Intro Banner */}
        <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-8 mb-8">
          <p className="text-stone-600 leading-relaxed text-base">
            Please read these Terms of Service carefully before using the Solomon
            Home Services website. These Terms govern your access to and use of
            our website, real estate services, and all communications with us,
            including SMS text messaging. By using this website, you agree to be
            bound by these Terms and our{" "}
            <a
              href="/privacy"
              className="text-[#1e3a2f] font-medium hover:text-[#c9a84c] transition-colors underline"
            >
              Privacy Policy
            </a>
            .
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
            under{" "}
            <strong className="text-stone-200">REAL Broker, LLC</strong>. All
            services comply with Colorado Real Estate Commission (CREC)
            regulations, the Fair Housing Act, and applicable federal and state
            law. Equal Housing Opportunity.
          </p>
        </div>
      </div>
    </div>
  );
}
