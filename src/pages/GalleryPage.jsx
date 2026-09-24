import PageHeader from "../components/PageHeader";
import AlmightyPhotos from "../components/AlmightyPhotos";
import Gallery from "../components/Gallery";

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Moments of praise."
        intro="Photos from The Almighty and past Immortal Invisible God events."
        image="/assets/iig9/moment-02.jpg"
        position="center 45%"
      />
      <AlmightyPhotos />
      <Gallery />
    </>
  );
}
