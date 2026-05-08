import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import AISearch from "../components/home/AISearch";
import Stats from "../components/home/Stats";
import Categories from "../components/home/Categories";
import Products from "../components/home/Products";
import Footer from "../components/layout/Footer";
import Featured from "../components/home/Featured";
import Testimonials from "../components/home/Testimonials";
export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white overflow-hidden relative">

      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-500/20 blur-[150px] rounded-full"></div>

      <div className="absolute top-[500px] right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[150px] rounded-full"></div>

      <div className="absolute bottom-0 left-[30%] w-[500px] h-[500px] bg-purple-500/20 blur-[150px] rounded-full"></div>

      {/* CONTENT */}
      <div className="relative z-10">

        <Navbar />
        <Hero />
        <AISearch />
        <Stats />
        <Categories />
        <Featured />
        <Products />
        <Testimonials />
        <Footer />

      </div>

    </main>
  );
}