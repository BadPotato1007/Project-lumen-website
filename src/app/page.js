import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Team from "@/components/Team";
import Sponsors from "@/components/Sponsors";
import Support from "@/components/Support";
import Footer from "@/components/Footer";
import PlaneSpecs from "@/components/PlaneSpecs";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <PlaneSpecs />
      <Team />
      <Sponsors />
      <Support />
      <Footer />
    </div>
  );
}
