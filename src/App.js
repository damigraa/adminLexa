import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import '../src/scss/app.scss'
import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import PrivateRoute from './components/HOC/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn, getInitialData } from './actions';
import Products from './containers/ComponentContainer/Products';
import Orders from './containers/Orders';
import Category from './containers/Category';
import NewPage from './containers/NewPage';
import GalleryPhoto from './containers/GalleryPhoto/GalleryPhoto';
import Applications from './containers/Applications/Applications';
import Users from './containers/Users/Users';
import SiteSetting from './siteSetting/SiteSetting';
import HeaderSetting from './siteSetting/containers/HeaderSetting';
import Promotions from './siteSetting/containers/Promotions';
import MainImage from './siteSetting/containers/MainImage';
import Manufacture from './siteSetting/containers/Manufacture';
import ComeToUs from './siteSetting/containers/ComeToUs';
import WeWorkOnline from './siteSetting/containers/WeWorkOnline';
import ChooseMemorialPhotos from './siteSetting/containers/ChooseMemorialPhotos';
import Engraving from './siteSetting/containers/Engraving';
import Contact from './siteSetting/containers/Contact';
import GraniteMaterial from './siteSetting/containers/GraniteMaterial';
import Warranty from './siteSetting/containers/Warranty';
import PaymentLI from './siteSetting/containers/PaymentLI';
import CatalogTitle from './siteSetting/containers/CatalogTitle';
import CostDelivery from './siteSetting/containers/CostDelivery';
import MultipleSelectChip from './siteSetting/containers/Chip';
import Footer from './siteSetting/containers/Footer';

import PaymentAndDeliveryContainer from './siteSetting/PaymentAndDeliveryContainer';
import Blog from './containers/ComponentContainer/Blog';
import TombstoneCurb from './containers/ComponentContainer/TombstoneCurb';
import GraniteTiles from './containers/ComponentContainer/GraniteTiles';
import LinkProductPage from './containers/LinkProductPage';
import Ceramics from './containers/ComponentContainer/Ceramics';
import Cabinet from './containers/Cabinet/Cabinet';

// import EngravingCategory from './containers/EngravingCategory/EngravingCategory';
import ContainerEngravingCategoryPage from './containers/LinkEngravingCategoryPage';
import EngravingLayout from './containers/EngravingLayout/EngravingLayout';
import PortfolioPage from './containers/ComponentContainer/PortfolioPage/PortfolioPage';
import DeliveryInfo from './siteSetting/containers/DeliveryInfo';



function App() {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)


  //componentDidMount or componentDidUpdate
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
    if (auth.authenticate) {
      dispatch(getInitialData());
    }


  }, [auth.authenticate]);


  const pageComponentsItems = [
    {
      path: "/",
      component: <Home />
    },
    {
      path: "/page",
      component: <NewPage />
    },
    {
      path: "/category",
      component: <Category />
    },
    {
      path: "/products/:slug",
      component: <Products />
    },
    {
      path: "/portfolio",
      component: <PortfolioPage />
    },
    {
      path: "/orders",
      component: <Orders />
    },
    {
      path: "/applications",
      component: <Applications />
    },
    {
      path: "/users",
      component: <Users />
    },
    {
      path: "/siteSetting",
      component: <SiteSetting />
    },
    {
      path: "/headerSetting",
      component: <HeaderSetting />
    },
    {
      path: "/engravingCategory",
      component: <ContainerEngravingCategoryPage />
    },
    {
      path: "/engravingLayout/:slug",
      component: <EngravingLayout />
    },
    {
      path: "/blog",
      component: <Blog />
    },
    {
      path: "/test",
      component: <MultipleSelectChip />
    },
    {
      path: "/containerProductPage",
      component: <LinkProductPage />
    },
    {
      path: "/costDelivery",
      component: <CostDelivery />
    },
    {
      path: "/catalog-title",
      component: <CatalogTitle />
    },
    
    {
      path: "/orders",
      component: <Orders />
    },
    {
      path: "/contact",
      component: <Contact />
    },
    {
      path: "/mainImageSetting",
      component: <MainImage />
    },
    {
      path: "/paymentLI",
      component: <PaymentLI />
    },
    {
      path: "/warranty",
      component: <Warranty />
    },
    {
      path: "/deliveryInfo",
      component: <DeliveryInfo />
    },

  ]
  return (
    <div className="App">

      <Routes>
        {pageComponentsItems.map((obj, index) => (
          <Route
            key={index}
            path={obj.path}
            element={<PrivateRoute>{obj.component}</PrivateRoute>}
            />
            
            ))}

            {/* <PrivateRoute path="/tombstoneCurb" component={TombstoneCurb} /> */}
            {/* <PrivateRoute path="/graniteTiles" component={GraniteTiles} /> */}
            {/* <PrivateRoute path="/ceramics" component={Ceramics} /> */}
            {/* <PrivateRoute path="/cabinet" component={Cabinet} />

        <PrivateRoute path="/promotionsSetting" component={Promotions} />

        <PrivateRoute path="/manufactureSetting" component={Manufacture} />

        <PrivateRoute path="/comeToUsSetting" component={ComeToUs} />
        <PrivateRoute path="/weWorkOnline" component={WeWorkOnline} />
        <PrivateRoute path="/chooseMemorialPhotos" component={ChooseMemorialPhotos} />
        <PrivateRoute path="/engraving" component={Engraving} />
        <PrivateRoute path="/granite-material" component={GraniteMaterial} />
        <PrivateRoute path="/paymentLI" component={PaymentLI} />
        <PrivateRoute path="/paymentAndDelivery" component={PaymentAndDeliveryContainer} />
        {/* 
        <PrivateRoute path="/engravingLayout/:slug" component={EngravingLayout} />
        <PrivateRoute path="/engravingCategory" component={ContainerEngravingCategoryPage} /> */}

        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
