import React from 'react'
import { NavLink } from 'react-router-dom';

export default function BackButton(props) {

    return (
        <a href={props.href ? props.href : "/"}>
            <button className="backButton">
                {props.text ? props.text : "Назад"}
            </button>
        </a>
    )
}
