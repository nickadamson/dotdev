import { FC, ReactNode } from "react";
import Navbar from "./Navbar";
import NextHead from "./NextHead";
import CameraFrame from "./CameraFrame";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <NextHead />
      <div className="overflow-y-hidden fixed w-screen h-screen">
        <header>
          <Navbar />
        </header>
        {children}
        <CameraFrame />
      </div>
    </>
  );
};

export default Layout;
