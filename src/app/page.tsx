import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import Featured from "../components/home/FlashDeals";
import Products from "../components/home/Products";
import Testimonials from "../components/home/Testimonials";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <main className="bg-[#050507] min-h-screen text-white overflow-hidden relative">

      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-500/20 blur-[150px] rounded-full" />

      <div className="absolute top-[500px] right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[150px] rounded-full" />

      <div className="absolute bottom-0 left-[30%] w-[500px] h-[500px] bg-purple-500/20 blur-[150px] rounded-full" />

      {/* CONTENT */}
      <div className="relative z-10">

        <Navbar />

        {/* HERO */}
        <section>
          <Hero />
        </section>

        {/* CATEGORIES */}
        <section className="mt-20 md:mt-28">
          <Categories />
        </section>

        {/* FEATURED PRODUCTS */}
        <section className="mt-20 md:mt-28">
          <Featured />
        </section>

        {/* TRENDING PRODUCTS */}
        <section className="mt-20 md:mt-28">
          <Products />
        </section>

        {/* TESTIMONIALS */}
        <section className="mt-20 md:mt-28">
          <Testimonials />
        </section>

        {/* FOOTER */}
        <section className="mt-24 md:mt-32">
          <Footer />
        </section>

      </div>

    </main>
  );
}
