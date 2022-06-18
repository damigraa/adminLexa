import React from 'react'
import Layout from "../components/Layout";
import { Tabs } from './Component';
import { Container } from "react-bootstrap";
import BackButton from '../siteSetting/components/BackButton';
import RenderFunctional from './RenderFunctional';


export const MainContainer = (props) => {
    if (!props) {
        return null
    }
    return (
        <Layout sidebar>
            <Container fluid={props.fluid} >
                <div className="mainContainer__headerContainer">
                    <div>
                        {props.backButtonProduct && <BackButton
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
