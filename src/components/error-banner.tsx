import Typography from './typography';

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
    <div className="flex flex-col justify-center items-center">
      <Typography type="h1" className="text-center pb-8">
        {heading}
      </Typography>
      {message && <Typography type="p">{message}</Typography>}
      {ctaLink && ctaText && (
        <a href={ctaLink} className="mt-8 text-primary link-underline">
          {ctaText}
        </a>
      )}
    </div>
  );
}
