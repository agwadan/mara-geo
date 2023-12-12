"use client";
import Head from "next/head";
import Hero from "../components/LandingPage/Hero";
import About from "../components/LandingPage/About";
import Services from "../components/LandingPage/Services";
import Testimonials from "../components/LandingPage/Testimonials";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "@/components/LandingPage/Contact";
import Map from "@/components/LandingPage/Map";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mara Geo | Home</title>
        <meta name="keywords" content="GIS, Consultancy, Geospatial" />
      </Head>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Map />
      {/*  <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  );
}
