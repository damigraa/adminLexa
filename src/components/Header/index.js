import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signout } from "../../actions";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CategoryIcon from '@mui/icons-material/Category';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import SettingsIcon from '@mui/icons-material/Settings';
import ImageIcon from '@mui/icons-material/Image';
import FilterFramesIcon from '@mui/icons-material/FilterFrames';
import CurtainsClosedIcon from '@mui/icons-material/CurtainsClosed';
import ModalConfirm from './../BurgerMenu/ModalConfirm';


const Header = (props) => {
  const auth = useSelector((state) => state.auth);
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const dispatch = useDispatch();


  const handleClose = () => setShowConfirm(false);
  const handleShow = () => setShowConfirm(true);

  console.log("auth", auth)
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
    {
      href: "/siteSetting",
      text: "Настройки сайта",
      icon: <SettingsIcon />
    },
  ]
  const logout = () => {
    dispatch(signout());
  };

  const renderLoggedInLinks = () => {

    return (
      <Nav>
        <div className="nav-itemContainer">
          <li className="nav-item">
            <span className="nav-link" onClick={handleShow}>
              Выйти
            </span>
          </li>
        </div>
      </Nav>
    );
  };

  const renderNonLoggedInLinks = () => {
    return (
      <Nav>
        <div className="nav-itemContainer">
          <li className="nav-item">
            <NavLink to="signin" className="nav-link">
              Войти
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="signup" className="nav-link">
              Регестрация
            </NavLink>
          </li>
        </div>
      </Nav>
    );
  };
  const renderBurgerMenu = () => {
    if (auth.authenticate) {
      return <BurgerMenu title="COMPANY" items={items} />
    } else {
      return null
    }
  }
  return (
    <Navbar
      collapseOnSelect
      fixed="top"
      expand="lg"
      bg="primary"
      variant="dark"
      style={{ zIndex: 1 }}
    >
      <ModalConfirm
        title={"Выйти с профиля"}
        show={showConfirm}
        handleClose={handleClose}
        onClick={logout}
      />
      <Container fluid>


        {renderBurgerMenu()}


        <div className="navBarNameContainer">
          <Link to="/" className="navbar-brand">
            ПАНЕЛЬ АДМИНИСТРАТОРА
          </Link>
        </div>
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">

          </Nav>
        </Navbar.Collapse> */}
        {auth.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()}
      </Container>
    </Navbar>
  );
};

export default Header;
