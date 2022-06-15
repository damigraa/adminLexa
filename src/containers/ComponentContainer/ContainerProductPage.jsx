import React from 'react'
import BackButton from '../../siteSetting/components/BackButton'

const ContainerProductPage = (props) => {


    return (
        <>
            <BackButton
                text="Назад"
                href="containerProductPage"
            />

            {props.children}
        </>
    )
}

export default ContainerProductPage
