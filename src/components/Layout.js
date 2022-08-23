import React from "react";
import { Link } from "gatsby";
import "../styles/base.scss";
import "@fontsource/fira-code";

const Layout = ({children}) => {
    return (
        <div>
            <nav>
                <Link to="/" className="nav-link" activeClassName="active">Home</Link>
                <Link to="/about" className="nav-link" activeClassName="active">About</Link>
                <Link to="/projects" className="nav-link" activeClassName="active">Projects</Link>
            </nav>
            <main className="container">{children}</main>
        </div>
    )
}

export default Layout;