export default function AlmightyVideo() {
  return (
    <section className="section almighty-video" id="almighty-video">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow">Immortal Invisible God 9.0</div>
          <h2>The Almighty, from above.</h2>
        </div>
        <div className="video-frame reveal">
          <video
            src="/assets/video/almighty-highlight.mp4"
            poster="/assets/video/almighty-highlight-poster.jpg"
            controls
            playsInline
            preload="none"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
