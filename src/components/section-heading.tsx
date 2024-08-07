import Typography from './typography';

interface SectionHeadingProps {
  heading: string;
  children: React.ReactNode;
}

export default function SectionHeading({
  children,
  heading,
}: SectionHeadingProps) {
  return (
    <>
      <Typography type="h2" className="pb-2 text-primaryRed">
        {heading}
      </Typography>
      {children}
    </>
  );
}
