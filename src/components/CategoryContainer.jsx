import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getAllCategory } from '../actions';
import { Link, useParams } from 'react-router-dom';

const CategoryContainer = () => {
    const category = useSelector((state) => state.category.categories)

    const [categoryIndex, setCategoryIndex] = useState(1)
    const [slideIndex, setSlideIndex] = useState(1)
    const dispatch = useDispatch()
    const { slug } = useParams()
    useEffect(() => {
        dispatch(getAllCategory())
    }, [])
    return (
        <div className="categoryContainer">
            <h2>Категории</h2>
            <div>
                {category ? category.map((obj, index) => (
                    <div
                        key={index}
                        className="categoryContainer__mainContainer"
                    >
                        {
                            obj.children.map((childrenCategory, index) => (

                                <Link to={`/products/${childrenCategory.slug}?${childrenCategory._id}`}
                                    className={slideIndex === index + 1 ? "categoryContainer__item active" : "categoryContainer__item"}
                                >
                        {console.log(childrenCategory)}
                        <div onClick={() => setCategoryIndex(index + 1)} className={categoryIndex === index + 1 ? "categoryContainer__itemBox active" : "categoryContainer__itemBox"}>
                            <div className="categoryContainer__item">
                                {childrenCategory.name}
                            </div>
                        </div>
                    </Link>
                ))
                        }

            </div>

                )) : null}

        </div>
        </div >
    )
}

export default CategoryContainer