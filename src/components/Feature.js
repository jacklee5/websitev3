import React from "react";
import "../styles/feature.scss";
import { Link } from "gatsby";

export default function Feature(props) {
    return (
        <Link to={props.slug} style={{textDecoration:"none"}}>
            <div className="feature">
                {/* <p className="feature-company">{props.company || "Personal"}</p> */}
                <div>
                    { props.tags.map(tag => <span className="feature-tag" key={props.title+tag}>{tag}</span>) }
                </div>
                <h3 className="feature-title">{props.title}</h3>
                <p className="feature-desc">{props.desc}</p>
            </div>
        </Link>
    )
}