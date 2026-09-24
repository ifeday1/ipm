import PageHeader from "../components/PageHeader";
import About from "../components/About";
import Mission from "../components/Mission";
import Leader from "../components/Leader";
import WhatWeDo from "../components/WhatWeDo";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Who we are."
        intro="A family of worshippers celebrating the majesty of God through praise, as expressed in Psalm 8."
        image="/assets/iig9/banner-about.jpg"
        position="center 35%"
      />
      <About />
      <Mission />
      <Leader />
      <WhatWeDo />
    </>
  );
}
