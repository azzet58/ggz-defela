import { Complaints } from "@/components/home/complaints";
import { Hero } from "@/components/home/hero";
import { EmergencyNotice } from "@/components/emergency-notice";

export default function HomePage() {
  return (
    <>
      <Hero />
      <EmergencyNotice />
      <Complaints />
    </>
  );
}
