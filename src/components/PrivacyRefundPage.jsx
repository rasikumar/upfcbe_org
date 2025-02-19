import React from "react";
import { eventbg } from "@/assets";
import { FaDove } from "react-icons/fa";

const PrivacyRefundPage = () => {
  return (
    
    <div className=" w-full  text-black-900 p-8" style={{ backgroundImage: `url(${eventbg})` }}>
      <div className="max-w-6xl mx-auto bg-transparent p-8 space-y-2">
        <h1 className="text-3xl pb-10 text-center font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4">
        Universal Peace Foundation we is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website and use our services, including our dynamic payment method for donations. We collect personal and non-personal data to enhance user experience, process donations, and ensure security. Your information is never sold or rented. We employ industry-standard security measures to protect data. Users have the right to access, update, or delete their data. This policy may be updated periodically to reflect regulatory changes.
        </p>

        <h2 className="text-2xl font-bold mt-6">1. Information We Collect</h2>
        <p><strong>Personal Information:</strong> When you donate or interact with our website, we may collect your name, email, phone number, address, and payment details.</p>
        <p><strong>Non-Personal Information:</strong> We may collect data such as browser type, IP address, and browsing patterns to improve our services.</p>
        <p><strong>Cookies and Tracking Technologies:</strong> We use cookies to enhance user experience and analyze website traffic.</p>
        <p><strong>Social Media Information:</strong> If you interact with our social media pages, we may collect your public profile information, comments, and interactions.</p>

        <h2 className="text-2xl font-bold mt-6">2. How We Use Your Information</h2>
        <ul className="list-none pl-5 mt-2 space-y-2">
          <li className="flex items-center"><FaDove className="mr-3 text-[#21B740]" />To process donations and provide receipts.</li>
          <li className="flex items-center"><FaDove className="mr-3 text-[#21B740]" />To communicate with you about our programs, events, and initiatives.</li>
          <li className="flex items-center"><FaDove className="mr-3 text-[#21B740]" />To improve our website, outreach efforts, and user experience.</li>
          <li className="flex items-center"><FaDove className="mr-3 text-[#21B740]" />To comply with legal and regulatory requirements.</li>
          <li className="flex items-center"><FaDove className="mr-3 text-[#21B740]" />To personalize your experience and provide relevant content.</li>
          <li className="flex items-center"><FaDove className="mr-3 text-[#21B740]" />To prevent fraudulent transactions and ensure the security of our platform.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-6">3. Information Sharing and Disclosure</h2>
        <p>We do not sell or rent personal information to third parties.</p>
        <p>We may share data with trusted service providers for payment processing, website management, and communication services.</p>
        <p>We may disclose information if required by law, legal proceedings, or to protect our rights and safety.</p>
        <p>In case of a merger, restructuring, or asset transfer, donor and user data may be transferred to a successor organization with appropriate privacy safeguards.</p>

        <h2 className="text-2xl font-bold mt-6">4. Data Security</h2>
        <p>We implement appropriate security measures, including encryption, firewalls, and secure access protocols, to protect your information from unauthorized access, alteration, disclosure, or destruction. Despite our efforts, no security system is impenetrable; users should take necessary precautions when sharing sensitive data online.</p>

        <h2 className="text-2xl font-bold mt-6">5. Your Rights</h2>
        <p>You can request access, correction, or deletion of your personal data by contacting us at [simple@gmail.com].</p>
        <p>You can opt out of marketing communications at any time by using the "unsubscribe" link in our emails.</p>
        <p>You can disable cookies through your browser settings, though this may impact website functionality.</p>

        <h2 className="text-2xl font-bold mt-6">6. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time to reflect changes in regulations, best practices, or operational processes. Please review it periodically. Any major updates will be notified through email or website announcements.</p>
        <p>For any questions or concerns regarding this Privacy Policy, contact us at [simple@gmail.com] or call [98XXXXXXX].</p>

        <h1 className="text-3xl py-10 font-bold mt-12 text-center">Refund Policy</h1>
        <p>At Universal Peace Foundation, we deeply appreciate your support and donations towards our mission. As a non-profit organization, we strive to maintain transparency regarding refunds. Donations are generally non-refundable, except in specific cases such as accidental transactions. Event or program fees may be refundable under certain conditions. Merchandise returns are accepted for defective items. Refunds are processed within 7-14 business days and subject to applicable fees.</p>

        <h2 className="text-2xl font-bold mt-6">1. Donations</h2>
        <p>Donations made to Universal Peace Foundation are non-refundable, except in cases of accidental or duplicate transactions.</p>
        <p>If you believe a transaction was made in error, please contact us within 7 days of the donation date for review.</p>
        <p>Refund requests must be submitted in writing to [simple@gmail.com] with proof of the transaction.</p>
        <p>Refunds will only be processed if they do not contradict applicable legal or regulatory requirements.</p>

        <h2 className="text-2xl font-bold mt-6">2. Event or Program Fees</h2>
        <p>If you have registered for an event or program and wish to cancel, refunds may be provided based on the specific event’s cancellation policy.</p>
        <p>Cancellation requests must be submitted at least [3] days before the event start date.</p>
        <p>Some program fees may be non-refundable, as specified in individual program terms.</p>
        <p>If an event is canceled by Universal Peace Foundation, full refunds will be issued to all registered participants.</p>

        <h2 className="text-2xl font-bold mt-6">3. Merchandise and Product Purchases</h2>
        <p>If Universal Peace Foundation offers merchandise or digital products, refund policies will be specified on the product purchase page.</p>
        <p>Defective or damaged products may be exchanged or refunded within 14 days of purchase with valid proof of defect.</p>
        <p>Digital products, once accessed or downloaded, are generally non-refundable.</p>

        <h2 className="text-2xl font-bold mt-6">4. Refund Processing</h2>
        <p>Approved refunds will be processed to the original payment method within 7-14 business days.</p>
        <p>Refunds are subject to deductions for processing fees, if applicable.</p>
        <p>Universal Peace Foundation is not responsible for any delays caused by banks or payment processors.</p>

        <h2 className="text-2xl font-bold mt-6">5. Contact Us</h2>
        <p>For refund-related inquiries, please reach out to us at [simple@gmail.com] or call [98XXXXXXX]. Please provide full details of your transaction and reason for the refund request.</p>
        <p>We appreciate your generosity and support in making a positive impact through Universal Peace Foundation.</p>
      </div>
    </div>
  );
};

export default PrivacyRefundPage;