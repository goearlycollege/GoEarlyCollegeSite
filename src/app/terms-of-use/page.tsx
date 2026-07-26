import { LegalPage } from "@/components/legal/legal-page";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms of Use",
  description: "The terms governing use of the Go Early College website.",
  path: "/terms-of-use",
});

const SECTIONS = [
  {
    heading: "Terms of Website Use",
    body: "[Placeholder] Conditions of accessing and using goearlycollege.com to be defined here, including eligibility (e.g. use by parents/guardians on behalf of a minor student) and acceptable use.",
  },
  {
    heading: "Intellectual Property",
    body: "[Placeholder] Ownership of site content, branding, the Monument Shield mark, and course materials to be defined here, along with what a visitor may and may not reproduce.",
  },
  {
    heading: "Disclaimers",
    body: "[Placeholder] Disclaimers to define here — e.g. that assessment results and credit/tuition-savings projections are estimates, not guarantees, and that admission and credit transfer remain subject to Go Early College's and receiving universities' own review.",
  },
  {
    heading: "Limitation of Liability",
    body: "[Placeholder] Standard limitation-of-liability language to be drafted by counsel, scoped to Indian law.",
  },
  {
    heading: "Governing Law",
    body: "[Placeholder] These terms to be governed by the laws of India, with courts in Chennai, Tamil Nadu having jurisdiction — to be confirmed by counsel.",
  },
  {
    heading: "Dispute Resolution",
    body: "[Placeholder] Process for resolving disputes (e.g. good-faith negotiation, then arbitration or the courts of Chennai) to be defined here.",
  },
  {
    heading: "Contact",
    body: "Questions about these terms can be sent to admissions@goearlycollege.com.",
  },
];

export default function TermsOfUsePage() {
  return <LegalPage title="Terms of Use" lastUpdated="[DATE — pending legal review]" sections={SECTIONS} />;
}
