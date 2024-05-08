export default function Mail({ className = "size-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      width={24}
      height={24}
      fill="#ffffff"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m20.572 5.083-7.896 7.037a1 1 0 0 1-1.331 0L3.416 5.087A2 2 0 0 1 4 5h16a2 2 0 0 1 .572.083Zm1.356 1.385c.047.17.072.348.072.532v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 .072-.534l7.942 7.148a3 3 0 0 0 3.992 0l7.922-7.146Z" />
    </svg>
  );
}
