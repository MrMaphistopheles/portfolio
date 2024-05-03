import FrontEndSvg from "./svg/FrontEndSvg";
import Stack from "./stack-con/Stack";
import Terminal from "./svg/Terminal";
import Db from "./svg/Db";

const frontEnd = [
  "next.js",
  "react",
  "tailwindcss",
  "typescript",
  "tanstack/query",
];

const backEnd = ["node.js", "next.js", "express", "typescript", "prisma"];

const db = ["sql", "mysql", "postgresql"];

export default function MyStack() {
  return (
    <section
      className="flex h-screen w-full flex-col items-center justify-center gap-2"
      id="stack"
    >
      <div className="grid w-full grid-cols-3 gap-2 lg:w-9/12">
        <div className="col-span-3">
          <Stack tech={frontEnd}>
            <FrontEndSvg />
            Fron-end
          </Stack>
        </div>
        <div className="col-span-3 md:col-span-2">
          <Stack tech={backEnd}>
            <Terminal />
            Back-end
          </Stack>
        </div>
        <div className="col-span-3 md:col-span-1">
          <Stack tech={db}>
            <Db />
            Database
          </Stack>
        </div>
      </div>
    </section>
  );
}
