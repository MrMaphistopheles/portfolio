import { env } from "~/env";
import Card from "../ui/card/Card";
import Con from "../ui/conteiner/Con";
import { log } from "console";

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
  log(url);

  return (
    <div className=" grid grid-flow-col grid-rows-9 gap-3 lg:w-9/12">
      <div className="col-span-2 row-span-1">
        <h1 className="outline-text text-3xl font-bold">{name}</h1>
      </div>
      <div className="col-span-2 row-span-5">
        <Con heigth="100%">
          <p>Description</p>
          <p className="text-xl">{desc}</p>
        </Con>
      </div>

      <div className="col-span-2 row-span-3">
        <Con heigth="100%">
          <p>Core Technology</p>
          <div className="flex flex-wrap gap-1 p-3">
            {tech.map((item) => (
              <Card key={item}>{item}</Card>
            ))}
          </div>
        </Con>
      </div>

      <div className=" row-span-9">
        <Con>
          <video autoPlay loop muted height="300">
            <source src={url} type="video/mp4" />
          </video>
        </Con>
      </div>
    </div>
  );
}
