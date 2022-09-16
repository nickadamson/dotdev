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
      <div className="overflow-hidden w-screen h-screen -z-10">
        <CameraFrame />
        <header>
          <Navbar />
        </header>
        {children}
      </div>
    </>
  );
};

export default Layout;
