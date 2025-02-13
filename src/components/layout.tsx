import React from "react";
import Footer from "./footer";
import Navigation from "./nav";

interface LayoutInterface {
    navPosition?: string
    children: React.ReactElement
}

const Layout = (props: LayoutInterface) => {
    return (
        <div>
            <Navigation navPosition={props.navPosition} />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout;