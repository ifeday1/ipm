import { useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import InvisibleGod from "./components/InvisibleGod";
import About from "./components/About";
import Mission from "./components/Mission";
import FeaturedMinistration from "./components/FeaturedMinistration";
import WhatWeDo from "./components/WhatWeDo";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Leader from "./components/Leader";
import Testimonials from "./components/Testimonials";
import Register from "./components/Register";
import Support from "./components/Support";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = document.querySelectorAll(".reveal");
    if (prefersReduced) {
      elements.forEach((el) => el.classList.add("in-view"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <InvisibleGod />
      <About />
      <Mission />
      <FeaturedMinistration />
      <WhatWeDo />
      <Events />
      <Gallery />
      <Leader />
      <Testimonials />
      <Register />
      <Support />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
