import React from 'react'
import Layout from "../components/Layout";
import { Tabs } from './Component';
import { Container } from "react-bootstrap";
import BackButton from '../siteSetting/components/BackButton';
import RenderFunctional from './RenderFunctional';
import { useNavigate } from 'react-router-dom';


export const MainContainer = (props) => {
    // const navigate = useNavigate()
    if (!props) {
        return null
    }
    // console.log("navigate", navigate)
    // const goBack = () => navigate(-1)
    return (
        <Layout sidebar>
            <Container fluid={props.fluid} >
                <div className="mainContainer__headerContainer">
                    <div>
                        {props.backButtonProduct && <BackButton
                            // onClick={goBack}
                            text="Назад"
                        href={props.backHref ? "/" : "/containerProductPage"}
                        />}
                    </div>
                    <div>
                        <h1 className="text-center">{props.title}</h1>
                    </div>
                </div>
                {props.tabs && <Tabs />}
                <RenderFunctional {...props} />
                {props.children}
            </Container>
        </Layout>
    )
}
