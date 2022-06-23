import React from 'react'
import { Link, useMatch } from 'react-router-dom';

const CustomLink = (props) => {

    const { to, children } = props
    const match = useMatch(to)
    return (
        <Link
            to={to}
            {...props}
            style={{
                color: match ? "red" : "black",
                // textDecoration: "none"
            }}
        >
            {children}
        </Link>
    )
}

export default CustomLink