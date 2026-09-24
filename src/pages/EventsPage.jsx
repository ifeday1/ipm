import PageHeader from "../components/PageHeader";
import Events from "../components/Events";
import FeaturedMinistration from "../components/FeaturedMinistration";

export default function EventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Events"
        title="Where praise happens."
        intro="From The Immortal Invisible God to live ministrations, see what's coming up and relive past nights of worship."
        image="/assets/iig9/moment-13.jpg"
        position="center 40%"
      />
      <Events />
      <FeaturedMinistration />
    </>
  );
}
