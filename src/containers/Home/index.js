import React from 'react';
import Layout from '../../components/Layout';
import { Jumbotron, Row, Col, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import Diagram from './../Diagram/Diagram';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CategoryIcon from '@mui/icons-material/Category';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import SettingsIcon from '@mui/icons-material/Settings';
import ImageIcon from '@mui/icons-material/Image';
import FilterFramesIcon from '@mui/icons-material/FilterFrames';
import CurtainsClosedIcon from '@mui/icons-material/CurtainsClosed';


const Home = (props) => {
  const items = [
    {
      href: "/category",
      text: "Категории",
      icon: <CategoryIcon />
    },
    {
      href: "/blog",
      text: "Блог",
      icon: <CategoryIcon />
    },
    {
      href: "/containerProductPage",
      text: "Продукты",
      icon: <CurtainsClosedIcon />
    },
    // {
    //   href: "/orders",
    //   text: "Заказы",
    //   icon: <FilterFramesIcon />
    // },
    {
      href: "/portfolio",
      text: "Портфолио",
      icon: <ImageIcon />
    },
    // {
    //   href: "/page",
    //   text: "Страницы",
    //   icon: <DocumentScannerIcon />
    // },
    {
      href: "/applications",
      text: "Заявки",
      icon: <BorderColorIcon />
    },
    // {
    //   href: "/user",
    //   text: "Пользователи",
    //   icon: <PersonOutlineIcon />
    // },
    // {
    //   href: "/siteSetting",
    //   text: "Настройки сайта",
    //   icon: <SettingsIcon />
    // },
  ]
  return (
    <Layout sidebar>
      <h1 style={{
        margin: "20px",
        textAlign: "center"
      }}>
        На какую страницу перейдем?
      </h1>
      <div className="homePageContainer">
        {items.map((item, index) => (
          <div key={index} className="homePageContainer__mainBox">
            <a href={item.href}>
              <div className="homePageContainer__iconContainer">
                {item.icon}
              </div>
              <div className="homePageContainer__text">
                {item.text}
              </div>
            </a>

          </div>
        ))}

      </div>
    </Layout>
  )

}

export default Home