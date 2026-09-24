import PageHeader from "../components/PageHeader";
import Contact from "../components/Contact";
import Support from "../components/Support";
import FAQ from "../components/FAQ";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch."
        intro="Invite IPM to minister, support the work, or just say hello. We'd love to hear from you."
        image="/assets/iig9/moment-10.jpg"
        position="center 30%"
      />
      <Contact />
      <Support />
      <FAQ />
    </>
  );
}
