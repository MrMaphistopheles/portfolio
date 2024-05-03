import SingleProject from "./SingleProject";

const loyaltyThingTech = [
  "React",
  "TypeScript",
  "TailwindCSS",
  "next.js",
  "nextUI",
  "Prisma ORM",
  "PostgreSQL",
  "tanstack/query",
  "trpc",
];

const desc = `The project focuses on simplifying the setup of a loyalty system,
requiring just a few clicks from the user. Notable features
include online reviews and tips for baristas. The system functions
as a Progressive Web App (PWA), offering consumers an app-like
experience. Additionally, I have implemented a customization
feature, allowing managers to personalize the brand style for a
cohesive appearance on customers' mobile devices. One of the
project's key aspects is providing a cost-effective alternative to
more expensive native apps.`;

export default function Project() {
  return (
    <section
      className="flex h-screen w-full items-center justify-center"
      id="project"
    >
      <SingleProject
        tech={loyaltyThingTech}
        desc={desc}
        name="Loyalty Thing"
        video="loyalty"
      />
    </section>
  );
}
