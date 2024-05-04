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

const wordsTech = [
  "React",
  "TypeScript",
  "TailwindCSS",
  "next.js",
  "nextUI",
  "Prisma ORM",
  "PostgreSQL",
  "tanstack/query",
  "trpc",
  "Google Cloud",
  "Google Text to Speach API",
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

const descWordProject = `The primary goal of this project is to develop a Progressive Web App (PWA) for engaging vocabulary learning using a 'repeating' method. Additionally, a Chrome extension will capture new words from Netflix and YouTube, creating personalized vocabulary lists. The aim is to simplify language learning through active engagement with real-world content and systematic reinforcement.`;

export default function Project() {
  return (
    <section
      className="flex w-full flex-col items-center justify-center gap-28 py-14"
      id="project"
    >
      <SingleProject
        tech={loyaltyThingTech}
        desc={desc}
        name="Loyalty Thing"
        video="loyalty"
      />

      <SingleProject
        tech={wordsTech}
        desc={descWordProject}
        name="Words"
        video="Words"
      />
    </section>
  );
}
