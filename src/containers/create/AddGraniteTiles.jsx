

import React, { useEffect, useState } from 'react'
import Input from '../../components/UI/Input/index';
import Modal from '../../components/UI/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { addGraniteTiles, addTGraniteTiles, updateGraniteTiles } from '../../actions';


export const AddGraniteTiles = ({ show, handleClose, setCurrentId, currentId }) => {
    const dispatch = useDispatch();
    const graniteTiles = useSelector((state) => currentId ? state.graniteTiles.graniteTiles.find((item) => item._id === currentId) : null)

    const [img, setImg] = useState([]);

    const [graniteTilesForm, setGraniteTilesForm] = useState({
        name: "",
        size: "",
        price: "",
        description: "",
        weight: ""
    })


    useEffect(() => {
        if (graniteTiles) setGraniteTilesForm(graniteTiles)
    }, [graniteTiles])


    const submitGraniteTilesForm = (e) => {
        if (currentId) {
            e.preventDefault()
            dispatch(updateGraniteTiles(currentId, graniteTilesForm))
            handleClose()
            clear()
        } else {
            const form = new FormData();
            form.append("name", graniteTilesForm.name);
            form.append("size", graniteTilesForm.size);
            form.append("price", graniteTilesForm.price);
            form.append("description", graniteTilesForm.description);
            form.append("weight", graniteTilesForm.weight);
            for (let pic of img) {
                form.append("img", pic);
            }
            dispatch(addGraniteTiles(form)).then(() => handleClose());
        }

    };
    const handleProductPictures = (e) => {
        setImg([...img, e.target.files[0]]);
    };

    const clear = () => {
        setCurrentId(null)
        setGraniteTilesForm({
            name: "",
            size: "",
            price: "",
            description: "",
            weight: "",
        })
    }
    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalTitle={"???????????????? ?????????????????? ????????????"}
            onSubmit={submitGraniteTilesForm}
        >

            <Input
                label="????????????????"
                name="name"
                value={graniteTilesForm.name}
                placeholder={`????????????????`}
                onChange={(e) => setGraniteTilesForm({ ...graniteTilesForm, name: e.target.value })}
            />
            <Input
                label="????????????"
                name="size"
                value={graniteTilesForm.size}
                placeholder={"????????????"}
                onChange={(e) => setGraniteTilesForm({ ...graniteTilesForm, size: e.target.value })}
            />
            <Input
                label="????????"
                name="price"
                value={graniteTilesForm.price}
                placeholder={"????????"}
                onChange={(e) => setGraniteTilesForm({ ...graniteTilesForm, price: e.target.value })}
            />
            <Input
                label="??????"
                name="weight"
                value={graniteTilesForm.weight}
                placeholder={"??????"}
                onChange={(e) => setGraniteTilesForm({ ...graniteTilesForm, weight: e.target.value })}

            />
            <Input
                label="?????????????????? ????????????????"
                name="description"
                value={graniteTilesForm.description}
                placeholder={"?????????????????? ????????????????"}
                onChange={(e) => setGraniteTilesForm({ ...graniteTilesForm, description: e.target.value })}
            />
            {img.length > 0
                ? img.map((pic, index) => (
                    <div key={index}>{pic.name}</div>
                ))
                : null}
            <input
                type="file"
                name="img"
                onChange={handleProductPictures}
                required
                multiple
            />
        </Modal>
    )
}
