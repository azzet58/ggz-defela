import { AboutTeaser } from "@/components/home/about-teaser";
import { Complaints } from "@/components/home/complaints";
import { Hero } from "@/components/home/hero";
import { HowItWorks } from "@/components/home/how-it-works";
import { Reimbursement } from "@/components/home/reimbursement";
import { Treatment } from "@/components/home/treatment";
import { ContactCta } from "@/components/contact-cta";
import { EmergencyNotice } from "@/components/emergency-notice";

export default function HomePage() {
  return (
    <>
      <Hero />
      <EmergencyNotice />
      <Complaints />
      <Treatment />
      <HowItWorks />
      <Reimbursement />
      <AboutTeaser />
      <ContactCta />
    </>
  );
}
