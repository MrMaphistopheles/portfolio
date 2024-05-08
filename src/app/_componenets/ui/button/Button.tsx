export default function Button({
  children,
  onClick,
  link,
  target,
}: {
  children?: React.ReactNode;
  onClick?: () => void;
  link?: string;
  target?: React.HTMLAttributeAnchorTarget | undefined;
}) {
  if (link) {
    return (
      <a
        className="flex items-center justify-center rounded-lg bg-[rgb(255,255,255,0.2)] px-3 py-1 text-lg transition-all duration-100 ease-linear hover:border-0 hover:bg-[rgb(255,255,255,0.3)]"
        href={link}
        target={target}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className="flex items-center justify-center rounded-lg border-2 border-white px-3 py-1 text-lg transition-all duration-100 ease-linear hover:border-0 hover:bg-[rgb(255,255,255,0.2)]"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
