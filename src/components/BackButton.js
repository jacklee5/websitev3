import React from 'react';
import { Link } from 'gatsby';

const BackButton = () => {
    return <Link style={{
        color: "white", 
        textDecoration: "none", 
        margin: 0, 
        fontWeight: 'bold', 
        cursor:'pointer'}
    } to="/">&lt; Back</Link>
}

export default BackButton;