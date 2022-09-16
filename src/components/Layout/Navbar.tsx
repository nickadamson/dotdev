import Logo from "./Logo";
import PageLink from "./PageLink";

const links = [
  { name: "projects", href: "#projects" },
  { name: "about", href: "#about" },
];

const Navbar = (): JSX.Element => {
  return (
    <nav>
      <div className="flex z-50 justify-between items-center w-full h-6.5vh px-88vw max-w-screen text-zinc-900 font-mono">
        <PageLink key="home" name="home" href="#home">
          <Logo />
        </PageLink>
        <div className="flex z-50 justify-around space-x-8 max-w-1/2 xl:text-2xl">
          {links.map((link) => {
            return <PageLink key={link.name} {...link} />;
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
