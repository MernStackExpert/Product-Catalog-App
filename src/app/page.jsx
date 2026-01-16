import AboutUs from "@/Components/Home/AboutUs";
import Features from "@/Components/Home/Features";
import Hero from "@/Components/Home/Hero";



export default function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <Hero/>
      <Features/>
      <AboutUs/>
    </main>
  );
}
