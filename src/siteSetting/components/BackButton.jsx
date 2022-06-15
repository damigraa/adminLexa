import React from 'react'
import { NavLink } from 'react-router-dom';

export default function BackButton(props) {

    return (
        <div>
            <button className="backButton">
                <NavLink
                    to={`${props.href ? props.href : "/siteSetting"}`}
                >
                    {props.text ? props.text : "Назад"}
                </NavLink>
            </button>
        </div> 
    )
}
