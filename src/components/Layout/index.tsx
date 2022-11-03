import { FC, ReactNode } from "react";
import Navbar from "./Navbar";
import NextHead from "./NextHead";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const DynamicFrame = dynamic(() => import("./CameraFrame"), {
  suspense: true,
});

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
        <Suspense fallback={"Loading..."}>
          <DynamicFrame />
        </Suspense>
      </div>
    </>
  );
};

export default Layout;
