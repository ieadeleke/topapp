import SideBar from "./sidebar";
import Footer from "../footer";
import Navbar from "../nav";

interface LayoutPropsInterface {
    children: React.ReactElement
}

const AccountLayout = (props: LayoutPropsInterface) => {
    return (
        <div>
            <Navbar />
            <div className="min-h-[70vh] md:h-screen md:overflow-hidden p-5 flex flex-col md:flex-row gap-6">
                <div className="hidden md:block">
                    <SideBar />
                </div>
                <div className="flex-1 md:overflow-scroll overflow-x-hidden">
                    {props.children}
                </div>
            </div>
            <div className="block md:hidden">
                <Footer />
            </div>
        </div>
    )
}

export default AccountLayout;