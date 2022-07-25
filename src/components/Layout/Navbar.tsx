import Logo from "./Logo";
import PageLink from "./PageLink";

const links = [
  { name: "about", href: "/" },
  { name: "projects", href: "/projects" },
];

const Navbar = (): JSX.Element => {
  return (
    <div className="flex justify-between items-center px-16 w-full h-16 max-w-screen">
      <Logo />
      <nav>
        <div className="flex justify-around space-x-8 max-w-1/2">
          {links.map(({ name, href }) => {
            return <PageLink key={name} name={name} href={href} />;
          })}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
