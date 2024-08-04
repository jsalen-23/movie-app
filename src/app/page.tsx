import FeaturedList from "@/components/FeaturedList";
import HeroBanner from "@/components/HeroBanner";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <section className="w-full max-w-[1140px] lg:pt-20">
        <HeroBanner />
      </section>
      <section className="py-8 w-full max-w-[1140px] lg:pt-20">
        <FeaturedList />
      </section>
    </main>
  );
}
