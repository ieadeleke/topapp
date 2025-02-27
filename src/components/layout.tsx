import React from "react";
import Footer from "./footer";
import Navigation from "./nav";

interface LayoutInterface {
    navPosition?: string
    children: React.ReactElement
    whiteNav?: boolean
    footerMargin?: boolean
}

const Layout = (props: LayoutInterface) => {
    return (
        <div>
            <Navigation navPosition={props.navPosition} whiteNav={props.whiteNav} />
            {props.children}
            <Footer footerMargin={props.footerMargin} />
        </div>
    )
}

export default Layout;