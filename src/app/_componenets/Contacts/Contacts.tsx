import React from "react";

import Linkedin from "~/app/_componenets/Contacts/icons/svg/Linkedid";
import Github from "./icons/svg/Github";
import Telegram from "./icons/svg/Telegram";
import Mail from "./icons/svg/Mail";
import Telephone from "./icons/svg/Telephone";

export default function Contacts() {
  return (
    <section
      className="flex h-screen w-full flex-col items-center justify-center gap-8"
      id="contacts"
    >
      <div className="flex flex-wrap items-center justify-center gap-3 ">
        <Link
          target="_blank"
          link="https://ua.linkedin.com/in/vasyl-marchak-2b04a029b"
        >
          <Linkedin className="size-28" />
        </Link>
        <Link target="_blank" link="https://github.com/MrMaphistopheles">
          <Github className="size-28" />
        </Link>
        <Link link="https://t.me/your_mephistopheles" target="_blank">
          <Telegram className="size-28" />
        </Link>
        <Link target="_blank" link="mailto:basylmarchak@icloud.com">
          <Mail className="size-28" />
        </Link>
        <Link target="_blank" link="tel:+380639346667">
          <Telephone className="size-28" />
        </Link>
      </div>
    </section>
  );
}

function Link({
  children,
  link,
  target,
}: {
  children: React.ReactNode;
  link?: string;
  target?: React.HTMLAttributeAnchorTarget | undefined;
}) {
  return (
    <a
      href={link}
      target={target}
      className="glass linear rounded-3xl p-4 transition-all duration-300 hover:scale-110 "
    >
      {children}
    </a>
  );
}
