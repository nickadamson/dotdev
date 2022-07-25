import { useRouter } from "next/router";
import { FC, MouseEventHandler, ReactNode } from "react";

interface LinkProps {
  name: string;
  href: string;
}

const PageLink: FC<LinkProps> = ({ name, href }) => {
  const router = useRouter();

  const handleClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a
      href={href}
      className={router.asPath === href ? `underline` : `hover:underline`}
      onClick={handleClick}
    >
      {name}
    </a>
  );
};

export default PageLink;
