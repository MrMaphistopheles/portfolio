import { env } from "~/env";
import Card from "../ui/card/Card";
import Con from "../ui/conteiner/Con";

export default function SingleProject({
  tech,
  desc,
  name,
  video,
}: {
  tech: string[];
  desc: string;
  name: string;
  video: string;
}) {
  const url = `${env.NEXT_PUBLIC_URL}videos/${video}.mp4`;

  return (
    <div className=" grid  grid-flow-col grid-rows-12 gap-3 lg:w-9/12">
      <div className="row-span-1 md:col-span-5 md:row-span-2 lg:row-span-2">
        <h1 className="outline-text text-3xl font-bold">{name}</h1>
      </div>

      <div className="row-span-3 md:col-span-5 md:row-span-6 lg:row-span-6">
        <Con heigth="100%">
          <p>Description</p>
          <p className="text-xl">{desc}</p>
        </Con>
      </div>

      <div className="row-span-2 md:col-span-8 md:row-span-4 lg:col-span-5 lg:row-span-4">
        <Con heigth="100%">
          <p>Core Technology</p>
          <div className="flex flex-wrap gap-1 p-3">
            {tech.map((item) => (
              <Card key={item}>{item}</Card>
            ))}
          </div>
        </Con>
      </div>

      <div className="row-span-6 md:col-span-3 md:row-span-8 lg:row-span-12">
        <Con>
          <video autoPlay loop muted>
            <source src={url} type="video/mp4" />
          </video>
        </Con>
      </div>
    </div>
  );
}
