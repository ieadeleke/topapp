import { JSX } from "react";
import { MenuSideBar } from "./components/MenuSideBar";
import { NavBar } from "./components/NavBar";

type LayoutProps = {
  children?: JSX.Element;
};

export default function DashboardLayout(props: LayoutProps) {
  return (
    <div className="relative max-w-[2000px] flex flex-col mx-auto">
      <div className="fixed left-0 top-0 right-0 z-[1]">
        <NavBar />
      </div>
      <div className="relative flex m-10 ml-3 mr-3 min-h-screen mt-[120px] md:ml-[18%]">
        <div className="hidden h-auto fixed rounded-md left-6 top-30 overflow-y-hidden md:block md:min-w-[12%] xl:w-[15%]">
          <MenuSideBar />
        </div>

        <div className="w-full flex flex-col">{props.children}</div>
      </div>
    </div>
  );
}
