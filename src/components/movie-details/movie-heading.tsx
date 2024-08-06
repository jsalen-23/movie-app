import PillList from '../pill-list';

interface MovieHeadingProps {
  title: string;
  infoArray: string[];
}

export default function MovieHeading({ infoArray, title }: MovieHeadingProps) {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
        {title}
      </h1>
      <PillList items={infoArray} classNames="flex gap-5" />
    </div>
  );
}
