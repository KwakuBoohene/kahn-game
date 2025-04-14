interface GameSelectionButtonProps {
  title: string;
  subtitle: string;
  onClick: () => void;
}

export default function GameSelectionButton({
  title,
  subtitle,
  onClick,
}: GameSelectionButtonProps) {
  return (
    <div
      onClick={onClick}
      className="relative h-24 my-1 hover:cursor-pointer hover:scale-105 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-kahn-orange-light rounded-3xl -mx-2"></div>
      <span className="absolute -inset-y-1 left-1/2 -translate-x-1/2 w-[98%] bg-kahn-orange-dark rounded-3xl flex flex-col items-center justify-center hover:border-kahn-orange-dark focus:outline-kahn-orange-dark">
        <h1 className="text-2xl font-bold text-black">{title}</h1>
        <span className="text-sm text-black/60">{subtitle}</span>
      </span>
    </div>
  );
} 