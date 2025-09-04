import {
  About,
  Conditions,
  Contact,
  FreeConsult,
  Hero,
  Treatment,
  Testimonials,
  Videos,
  Header,
  Footer,
  Policies,
  Gallery,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="antialiased bg-slate-50 text-slate-800">
      <Header />
      <Hero />
      <Conditions />
      <Treatment />
      <About />
      <Gallery />
      <Videos />
      <Testimonials />
      <FreeConsult />
      <Contact />
      <Policies />
      <Footer />
    </main>
  );
}
