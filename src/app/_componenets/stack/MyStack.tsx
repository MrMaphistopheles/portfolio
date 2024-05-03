import Con from "../ui/conteiner/Con";
import Card from "../ui/card/Card";
import FrontEndSvg from "./svg/FrontEndSvg";
import Stack from "./stack-con/Stack";

const frontEnd = [
  "next.js",
  "react",
  "tailwindcss",
  "typescript",
  "tanstack/query",
];

export default function MyStack() {
  return (
    <section
      className="flex h-screen w-full flex-col items-center justify-center gap-2"
      id="me"
    >
      <Stack tech={frontEnd}>
        <FrontEndSvg />
      </Stack>
      <Stack tech={frontEnd}>
        <FrontEndSvg />
      </Stack>
      <Stack tech={frontEnd}>
        <FrontEndSvg />
      </Stack>
    </section>
  );
}
