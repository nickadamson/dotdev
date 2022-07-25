import { FC, ReactNode } from "react";
import Navbar from "./Navbar";
import NextHead from "./NextHead";
import SocialLinks from "./SocialLinks";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      {/* <head> */}
      <NextHead />
      <div className="w-screen h-screen">
        <header>
          <div className="flex flex-col mx-auto max-w-6xl">
            <Navbar />
          </div>
        </header>
        <div className="flex justify-center mx-auto mt-12 w-full max-w-4xl max-h-full">
          <div className="flex flex-col items-center self-start pt-8 mr-16 space-y-4 w-12 h-max">
            <SocialLinks />
          </div>
          <div className="w-3/4">
            <main>{children}</main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
