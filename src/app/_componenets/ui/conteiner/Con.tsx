import React from "react";

export default function Con({
  children,
  heigth = "auto",
}: {
  children: React.ReactNode;
  heigth?: string;
}) {
  return (
    <div
      className="glass flex flex-col items-start justify-between rounded-xl px-3 py-2"
      style={{
        height: heigth,
      }}
    >
      {children}
    </div>
  );
}
