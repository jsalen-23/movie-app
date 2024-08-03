import HeroBanner from "@/components/HeroBanner";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="w-full max-w-[1140px] lg:pt-20">
        <HeroBanner />
      </section>
    </main>
  );
}
