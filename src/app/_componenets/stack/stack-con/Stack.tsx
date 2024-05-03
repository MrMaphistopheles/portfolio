import Card from "../../ui/card/Card";
import Con from "../../ui/conteiner/Con";

export default function Frontend({
  tech,
  children,
}: {
  tech: string[];
  children: React.ReactNode;
}) {
  return (
    <Con heigth="14rem">
      <div className="flex items-center justify-center gap-3  p-3">
        {children}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 p-3">
        {tech.map((item) => (
          <Card key={item}>{item}</Card>
        ))}
      </div>
    </Con>
  );
}
