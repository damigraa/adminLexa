import React, { useState } from 'react'
// import AlignVerticalCenterIcon from '@mui/icons-material/AlignVerticalCenter';
import { Link } from 'react-router-dom';
import { setCurrentCategory } from '../../reducers/product.reducer';
import { generatePublicUrl } from '../../urlConfig';

const CategoryList = ({ category, setSlideIndex, slideIndex, setName, setObj, currentCategoryId }) => {
    const [mainCategoryIndex, setMainCategoryIndex] = useState(1)
    const [categoryId, setCategoryId] = useState("")


    // const handlerCategoryList = (index, childrenCategory) => {
    //     setSlideIndex(index + 1)
    //     setName(childrenCategory.name)
    //     setObj(childrenCategory)
    //     console.log("Ckick", currentCategoryId)
    // }
    const currentCategory = (obj, index) => {
        setCurrentCategory(obj._id)
        setMainCategoryIndex(index + 1)
    }
    return (
        <div className="productList">
            <div className="text-center">
            <h1 >Категории с фото </h1>
        </div>
            <div className="productList__containerMainCategory">
                {category ? category.map((obj, index) => (
                    <div key={index}>
                        <div className="productList__containerIcon">
                            <div
                                onClick={() => currentCategory(obj, index)}
                                className={mainCategoryIndex === index + 1 ? "productList__mainCategory active" : "productList__mainCategory"}>
                                {obj.name}
                            </div>
                        </div>
                    </div>
                )) : null}
            </div>
            <div className="productList__container">
                <div className="productList__mainItemBox">
                    {category.map((obj, index) => (
                        <>
                            <div className="productList__categoryMainContainer">
                                <div
                                    className={mainCategoryIndex === index + 1 ? "productList__categoryItemContainer active" : "productList__categoryItemContainer"}>
                                    {obj.children.map((childrenCategory, index) => (
                                        <Link to={`/products/${childrenCategory.slug}?${childrenCategory._id}`}
                                            // onClick={() => handlerCategoryList(index, childrenCategory)}
                                            className={slideIndex === index + 1 ? "productList__categoryItemBox active" : "productList__categoryItemBox"}
                                        >
                                            {/* <AlignVerticalCenterIcon /> */}

                                            <img
                                                className="productList__categoryItemBox"

                                                src={generatePublicUrl(childrenCategory.categoryImage)} alt="" />
                                            <div className="productList__text">
                                                {childrenCategory.name}
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </>
                    ))}
                </div>
                <div>
                </div>
            </div>
        </div >
    )


}

export default CategoryList
