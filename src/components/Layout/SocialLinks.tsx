import Image from "next/image";

const socials = [
  // https://icon-sets.iconify.design/akar-icons/github-outline-fill/
  { name: "github", href: "https://github.com/nickadamson" },
  // https://icon-sets.iconify.design/et/linkedin/
  { name: "linkedin", href: "https://linkedin.com/in/nick-adamson" },
  // https://icon-sets.iconify.design/et/twitter/
  { name: "twitter", href: "https://twitter.com/nickadams0n" },
  // https://icon-sets.iconify.design/arcticons/spike-email/
  { name: "email", href: "mailto:nickadamson@pm.me" },
];

const SocialLinks = () => {
  return (
    <>
      {socials.map(({ name, href }) => {
        return (
          <a key={name} href={href}>
            <Image src={`/${name}.svg`} alt={name} width={32} height={32} />
          </a>
        );
      })}
    </>
  );
};

export default SocialLinks;
