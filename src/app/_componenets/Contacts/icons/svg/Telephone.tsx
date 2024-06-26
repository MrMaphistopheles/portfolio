export default function Telephone({
  className = "size-6",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      width={24}
      height={24}
      fill="#ffffff"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M4.356 2.639a2.181 2.181 0 0 1 3.262.203l2.244 2.883a2.18 2.18 0 0 1 .394 1.867l-.684 2.738a.848.848 0 0 0 .223.804l3.07 3.07a.847.847 0 0 0 .806.223l2.736-.683a2.181 2.181 0 0 1 1.868.393l2.882 2.243a2.18 2.18 0 0 1 .204 3.264l-1.293 1.292c-.925.925-2.307 1.331-3.596.878a23.293 23.293 0 0 1-8.762-5.525 23.292 23.292 0 0 1-5.525-8.762c-.453-1.287-.047-2.67.878-3.596L4.356 2.64Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
