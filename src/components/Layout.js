import React from "react";
// import { Link } from "gatsby";
import "../styles/base.scss";
import "@fontsource/fira-code";
import { Helmet } from "react-helmet";

const Layout = ({children}) => {
    return (
        <div>
            <Helmet>
                <title>Jack Lee</title>
            </Helmet>
            {/* <nav> */}
                {/* <Link to="/" className="nav-link" activeClassName="active">Home</Link> */}
                {/* <Link to="/about" className="nav-link" activeClassName="active">About</Link> */}
                {/* <Link to="/projects" className="nav-link" activeClassName="active">Projects</Link> */}
            {/* </nav> */}
            <main className="container" style = {{marginTop: "64px"}}>{children}</main>
        </div>
    )
}

export default Layout;