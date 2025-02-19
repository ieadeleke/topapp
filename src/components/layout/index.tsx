import { Footer } from "../landing-page/Footer";
import { NavBar } from "../landing-page/NavBar";

type LayoutProps = {
  children?: React.ReactNode;
};

export const Layout = (props: LayoutProps) => {
  return (
    <div className="relative mx-auto  max-w-[2000px]">
      <div className="sticky top-0 z-[2]">
        <NavBar />
      </div>
      {props.children}
      <Footer />
    </div>
  );
};
