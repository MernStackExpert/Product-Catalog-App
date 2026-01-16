import AboutUs from "@/Components/Home/AboutUs";
import Category from "@/Components/Home/Category";
import CTA from "@/Components/Home/CTA";
import Features from "@/Components/Home/Features";
import Hero from "@/Components/Home/Hero";
import Products from "@/Components/Home/Products";
import Testimonials from "@/Components/Home/Testimonials";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <Hero />
      <Features />
      <Category/>
      <Products />
      <AboutUs />
      <Testimonials />
      <CTA/>
    </main>
  );
}
