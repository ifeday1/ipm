import Hero from "../components/Hero";
import InvisibleGod from "../components/InvisibleGod";
import AboutTeaser from "../components/AboutTeaser";
import PhotoStrip from "../components/PhotoStrip";
import FeaturedMinistration from "../components/FeaturedMinistration";
import Testimonials from "../components/Testimonials";
import InviteBand from "../components/InviteBand";

export default function Home() {
  return (
    <>
      <Hero />
      <InvisibleGod />
      <AboutTeaser />
      <PhotoStrip />
      <FeaturedMinistration />
      <Testimonials />
      <InviteBand />
    </>
  );
}
