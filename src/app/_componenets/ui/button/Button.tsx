export default function Button({
  children,
  onClick,
}: {
  children?: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      className="flex items-center justify-center rounded-lg border-2 border-white px-3 py-1 text-lg transition-all duration-100 ease-linear hover:border-0 hover:bg-[rgb(255,255,255,0.2)]"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
