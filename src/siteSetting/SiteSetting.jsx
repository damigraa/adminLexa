import React from 'react'
import Layout from './../components/Layout/index';
import { NavLink } from 'react-router-dom';

const SiteSetting = () => {
    return (
        <Layout sidebar backButton>

            <div className="siteSettingMainContainer">
                <h2>Выберите что нужно изменить</h2>
                <ul className="siteSetting">
                    <li><NavLink to={"/mainImageSetting"}>Изображение главной страницы </NavLink></li>
                    <li><NavLink to={"/warranty"}>Гарантии</NavLink></li>
                    <li><NavLink to={"/deliveryInfo"}>Инфо доставка</NavLink></li>
                    <li><NavLink to={"/paymentList"}>Способы Оплаты</NavLink></li>
                    <li><NavLink to={"/aboutUsSetting"}>О нас </NavLink></li>
                    <li><NavLink to={"/benefitsSetting"}>Преймущества нашей компании </NavLink></li>
                    <li><NavLink to={"/contactsSetting"}>Контакты </NavLink></li>

                </ul>
            </div>
        </Layout>
    )
}

export default SiteSetting
