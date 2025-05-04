interface GameSelectionButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  isEditable?: boolean;
}

export default function GameSelectionButton({
  onClick,
  children,
  className = "",
}: GameSelectionButtonProps) {
  return (
    <div
      onClick={onClick}
      className={`relative h-24 my-1 hover:cursor-pointer hover:scale-105 transition-all duration-300 ${className}`}
    >
      <div className="absolute inset-0 bg-kahn-orange-light rounded-3xl -mx-2"></div>
      <span className="absolute -inset-y-1 left-1/2 -translate-x-1/2 w-[98%] bg-kahn-orange-dark rounded-3xl flex items-center justify-center hover:border-kahn-orange-dark focus:outline-kahn-orange-dark">
        {children}
      </span>
    </div>
  );
} 