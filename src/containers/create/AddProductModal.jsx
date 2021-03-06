

import React, { useEffect, useState } from 'react'
import Input from '../../components/UI/Input/index';
import Modal from '../../components/UI/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, getGraniteTiles, getBlog, updateProductById } from '../../actions';
import { getTombstoneCurb } from './../../actions/components/tombstoneCurb';


export const AddProductModal = ({ show, handleClose, setCurrentId, currentId, productForm, setProductForm, clear }) => {
    const dispatch = useDispatch();
    const category = useSelector((state) => state.category)
    const product = useSelector((state) => currentId ? state.product.products.find((m) => m._id === currentId) : null)
    const [productPictures, setProductPictures] = useState("");
   
    useEffect(() => {
        if (product) setProductForm(product)
    }, [product])
    useEffect(() => {
        // dispatch(getBlog())
        // dispatch(getTombstoneCurb())
        // dispatch(getGraniteTiles())
    }, [])

    const createCategoryList = (categories, options = []) => {
        for (let category of categories) {
            options.push({ value: category._id, name: category.name });
            if (category.children.length > 0) {
                createCategoryList(category.children, options);
            }
        }

        return options;
    };
    const submitProductForm = () => {
        if (currentId) {
            dispatch(updateProductById(currentId, productForm))
            handleClose()
            clear()
        } else {
            const form = new FormData();
            form.append("name", productForm.name);
            form.append("quantity", productForm.quantity);
            form.append("price", productForm.price);
            form.append("description", productForm.description);
            form.append("category", productForm.categoryId);
            form.append("size", productForm.size);
            form.append("weight", productForm.weight);
            for (let i = 0; i < productPictures.length; i++) {
                form.append("productPictures", productPictures[i]);
            }
            dispatch(addProduct(form)).then(() => handleClose());
            clear()

        }

    };

    const handleProductPictures = (e) => {
        setProductPictures(e.target.files);
    };


    return (
        <Modal

            show={show}
            currentId={currentId}
            handleClose={handleClose}
            modalTitle={!currentId ? "???????????????? ?????????? ??????????????" : "???????????????? ?????????? ?? ????????????"}
            onSubmit={submitProductForm}
        >
            <Input
                label="????????????????"
                name="name"
                value={productForm.name}
                placeholder={`????????????????`}
                onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
            />
            <Input
                label="????????????????????"
                name="quantity"
                value={productForm.quantity}
                placeholder={`????????????????????`}
                onChange={(e) => setProductForm({ ...productForm, quantity: e.target.value })}
            />
            <Input
                label="????????"
                name="price"
                value={productForm.price}
                placeholder={`????????`}
                onChange={(e) => setProductForm({ ...productForm, price: e.target.value })}
            />
            <Input
                label="?????????????????? ????????????????"
                name="description"
                value={productForm.description}
                placeholder={`?????????????????? ????????????????`}
                onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
            />
            <Input
                label="?????????????? ??????????????????"
                name="size"
                value={productForm.size}
                placeholder={`?????????????? ??????????????`}
                onChange={(e) => setProductForm({ ...productForm, size: e.target.value })}
            />
            <Input
                label="?????? ???????????????? ??????????????"
                name="weight"
                value={productForm.weight}
                placeholder={`??????`}
                onChange={(e) => setProductForm({ ...productForm, weight: e.target.value })}
            />

            {
                !currentId ? <select
                    className="form-control"
                    name="categoryId"
                    value={productForm.categoryId}
                    onChange={(e) => setProductForm({ ...productForm, categoryId: e.target.value })}
                >
                    <option>?????????????? ??????????????????</option>
                    {createCategoryList(category.categories).map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.name}
                        </option>
                    ))}
                </select> : null
            }

            {!currentId ? <>
                <input
                    type="file"
                    name="productPictures"
                    onChange={(e) => handleProductPictures(e)}
                    required
                    multiple
                />
            </> : null
            }
        </Modal>
    )
}
