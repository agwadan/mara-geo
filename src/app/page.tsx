import Head from "next/head"
import Hero from "../../components/LandingPage/Hero";
import About from "../../components/LandingPage/About";

export default function Home() {
  return (
    <>
    <Head>
      <title>Mara Geo | Home</title>
      <meta name="keywords" content="GIS, Consultancy, Geospatial"/>
    </Head>
      <Hero/>
      <About/>
    </>
  )
}
