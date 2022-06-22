import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getAllCategory } from '../actions';
import { Link, useParams } from 'react-router-dom';

const CategoryContainer = ({ showAllProductsButton, setShowAll, setNameCategory, setShowActiveCategory }) => {
    const category = useSelector((state) => state.category.categories)

    const [showCategoryList, setShowCategoryList] = useState(null)
    const [categoryIndex, setCategoryIndex] = useState(null)
    const [slideIndex, setSlideIndex] = useState(1)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllCategory())
    }, [])
    const editCategoryIndex = (category) => {
        setShowActiveCategory(category._id)
        setNameCategory(category.name)
        setCategoryIndex(category._id)
        console.log(category._id)
    }
    const renderFilter = (categories) => {
        let myCategories = [];
        for (let category of categories) {
            myCategories.push(

                <div
                    onClick={() => editCategoryIndex(category)}
                    className="categoryContainer__mainContainer"
                    key={category.name}>

                    {
                        category.parentId ? <Link
                            className={categoryIndex === category._id ? "categoryContainer__item active" : "categoryContainer__item"}
                            to={`/products/${category.slug}?cid=${category._id}]`}>
                            {category.name}
                        </Link> : null
                        // <span>{category.name}</span> 
                    }
                    {category.children.length > 0 ? (<div className="categoryContainer__item">{renderFilter(category.children)}</div>) : null}
                </div>
            );
        }
        return myCategories;
    }
    return (
        <div className="categoryContainer">

            <div className="categoryContainer__linkContainer">
                <div>
                    <Link onClick={showAllProductsButton} to="all">#Все</Link>
                </div>

                {category.length > 0 ? renderFilter(category) : null}
            </div>

        </div>
    )
}

export default CategoryContainer