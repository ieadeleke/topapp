import SideBar from "./sidebar";

interface LayoutPropsInterface {
    children: React.ReactElement
}

const AccountLayout = (props: LayoutPropsInterface) => {
    return (
        <div className="h-screen overflow-hidden p-5 flex gap-6">
            <SideBar />
            <div className="flex-1 overflow-scroll overflow-x-hidden">
                {props.children}
            </div>
        </div>
    )
}

export default AccountLayout;