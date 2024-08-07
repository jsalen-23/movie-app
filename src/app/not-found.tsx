import ErrorBanner from '@/components/error-banner';

export default function Page() {
  return (
    <main className="flex flex-col items-center">
      <section className="w-full max-w-[1140px] py-32 px-4">
        <ErrorBanner
          heading="Whoa!"
          message="We found nothing on this page."
          ctaLink="/"
          ctaText="Go back home"
        />
      </section>
    </main>
  );
}
