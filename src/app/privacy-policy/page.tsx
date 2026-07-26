import { LegalPage } from "@/components/legal/legal-page";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How Go Early College collects, uses, and protects your personal data.",
  path: "/privacy-policy",
});

const SECTIONS = [
  {
    heading: "Introduction",
    body: "[Placeholder] This policy explains how American World School / Go Early College collects, uses, stores, and protects personal data submitted through this website, including via the Free Assessment, Apply, Contact, and School Partnership forms. Final wording pending legal review.",
  },
  {
    heading: "Data We Collect",
    body: "[Placeholder] Categories to define here: contact details (name, email, phone, WhatsApp number), student academic information (grade, board, school, results), uploaded documents (report cards, ID), and site usage data collected via analytics.",
  },
  {
    heading: "How We Use Your Data",
    body: "[Placeholder] Purposes to define here: processing assessments and applications, admissions communication, counsellor assignment, service delivery to enrolled students, and — only with consent — marketing communication such as the newsletter.",
  },
  {
    heading: "Cookies",
    body: "[Placeholder] Disclosure pending: categories of cookies used (essential, analytics such as GA4, advertising such as Meta Pixel), and how a visitor can manage cookie preferences.",
  },
  {
    heading: "Third-Party Services",
    body: "[Placeholder] Named here once selected: email automation provider (Mailchimp/Klaviyo), CRM (HubSpot/Zoho), payment processor (Razorpay/Cashfree), and analytics providers — each with a link to their own privacy policy.",
  },
  {
    heading: "Data Retention",
    body: "[Placeholder] Retention periods to define here for enquiry data, application data, and enrolled-student records, including deletion procedures on request.",
  },
  {
    heading: "Your Rights",
    body: "[Placeholder] Rights under India's Digital Personal Data Protection (DPDP) Act, 2023 to be detailed here — including the right to access, correct, and request erasure of personal data, and how to exercise them.",
  },
  {
    heading: "Contact for Privacy Concerns",
    body: "Questions about this policy can be sent to admissions@goearlycollege.com. A dedicated privacy contact / Grievance Officer (as may be required under the DPDP Act) is to be named here once confirmed.",
  },
];

export default function PrivacyPolicyPage() {
  return <LegalPage title="Privacy Policy" lastUpdated="[DATE — pending legal review]" sections={SECTIONS} />;
}
