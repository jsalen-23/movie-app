interface ErrorBannerProps {
  message?: string;
  heading: string;
  ctaLink?: string;
  ctaText?: string;
}

export default function ErrorBanner({
  message,
  heading,
  ctaLink,
  ctaText,
}: ErrorBannerProps) {
  return (
    <main className="flex flex-col items-center">
      <section className="w-full max-w-[1140px] py-32 px-4">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
            {heading}
          </h1>
          {message && <p>{message}</p>}
          {ctaLink && ctaText && (
            <a href={ctaLink} className="mt-16 text-primary link-underline">
              {ctaText}
            </a>
          )}
        </div>
      </section>
    </main>
  );
}
