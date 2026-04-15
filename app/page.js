import Navbar from "@/component/Navbar";
import Button from "@/component/Button";
import Hero from "@/component/Hero";
import About from "@/component/About";
import Team from "@/component/Teams";
import Work from "@/component/Work";
import Footer from "@/component/Footer";

const page = () => {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Work />
      <Footer />
    </main>
  );
};

export default page;
