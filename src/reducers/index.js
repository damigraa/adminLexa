import auth from './auth.reducers'
import user from './user.reducer'
import product from './product.reducer'
import category from './category.reducer'
import order from './order.reducer'
import page from './page.reducer'
import loader from './loader.reducer'
import gallery from './galleryPhoto.reducer'
import application from './application.reducer'
import header from './header'
import promotion from './components/promotion'
import mainImage from './components/mainImage'
import manufacture from './components/manufacture'
import weWorkOnline from './components/weWorkOnline'
import comeToUs from './components/comeToUs'
import chooseMemorialPhotos from './components/chooseMemorialPhotos'
import engraving from './components/engraving'
import contact from './components/contact'
import warranty from './components/warranty'
import graniteMaterial from './components/graniteMaterial'
import paymentLI from './components/paymentLI'
import catalogTitle from './components/catalogTitle'
import costDelivery from './components/costDelivery'
import blog from './components/blog'
import portfolio from './components/portfolio'
import tombstoneCurb from './components/tombstoneCurb'
import graniteTiles from './components/graniteTiles'
import footer from './components/footer'
import ceramics from './components/ceramics'
import engravingLayout from './components/engravingLayout'
import engravingCategory from './components/engravingCategory'
import deliveryInfo from './components/deliveryInfo'
import paymentList from './components/paymentList'
import aboutUs from './components/aboutUs'
import benefits from './components/benefits'
import architect from './components/architect'
import architectLi from './components/architectLi'
import architectSkills from './components/architectSkills'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth,
    user,
    category,
    product,
    order,
    page,
    loader,
    application,
    gallery,
    header,
    promotion,
    mainImage,
    manufacture,
    comeToUs,
    weWorkOnline,
    engraving,
    chooseMemorialPhotos,
    contact,
    warranty,
    graniteMaterial,
    paymentLI,
    catalogTitle,
    costDelivery,
    portfolio,
    blog,
    tombstoneCurb,
    footer,
    graniteTiles,
    ceramics,
    deliveryInfo,
    engravingCategory,
    engravingLayout,
    paymentList,
    aboutUs,
    benefits,
    architect,
    architectLi,
    architectSkills,
})

export default rootReducer