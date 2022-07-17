import React from 'react'

export default function BackButton(props) {

    return (
        <>
            {props.onClickButton ? <div> 
                <button 
                    onClick={props.onClick}
                    className="backButton">
                    {props.text ? props.text : "Назад"}
                </button>
            </div>
                :
                <a href={props.href ? props.href : "/"}>
                    <button className="backButton">
                        {props.text ? props.text : "Назад"}
                    </button>
                </a>}
        </>

    )
}
