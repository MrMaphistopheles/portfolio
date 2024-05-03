export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center rounded-lg bg-[rgb(255,255,255,0.2)] px-3 py-2 transition-all duration-100 ease-linear hover:bg-[rgb(255,255,255,0.1)]">
      {children}
    </div>
  );
}
