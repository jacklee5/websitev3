import React from "react";
import "../styles/feature.scss";

export default function Feature(props) {
    // use map
    return (
        <div class="feature">
            <p class="feature-company">Readorium</p>
            <div>
                <span class="feature-tag">PHP</span> 
                <span class="feature-tag">Laravel</span> 
                <span class="feature-tag">WordPress</span> 
            </div>
            <h3 class="feature-title">{props.title}</h3>
            <p class="feature-desc">{props.desc}</p>
        </div>
    )
}