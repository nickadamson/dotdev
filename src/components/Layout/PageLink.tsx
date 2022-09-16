import Link from "next/link";
import { useRouter } from "next/router";
import { FC, ReactNode } from "react";

interface LinkProps {
    name: string;
    href: string;
    as?: string;
    children?: ReactNode;
}

const PageLink: FC<LinkProps> = ({ name, href, as, children }) => {
    const router = useRouter();

    const isHomePage = name === "home";
    const isActivePage = router.asPath === `/${href}`;
    const classNameString = isHomePage ? `z-50` : isActivePage ? `underline` : `hover:underline`;

    return (
        <div className={classNameString}>
            <Link href={href} passHref as={as} scroll={true}>
                {children ? <a>{children}</a> : name}
            </Link>
        </div>
    );
};

export default PageLink;
