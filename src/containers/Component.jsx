import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { TextField } from '@mui/material';
import { useParams } from 'react-router-dom';
import { getProducts } from '../actions';
import { getProductsBySlug } from './../actions/product.action';


export function Search(props) {
    const dispatch = useDispatch();
    const [searchTimeout, setSearchTimeout] = useState(false);
    const [searchName, setSearchName] = useState("");


    const searchChangeHandler = (e) => {
        setSearchName(e.target.value)
        if (searchTimeout !== false) {
            clearTimeout(searchTimeout)
        }
        // dispatch(showLoader())
        if (e.target.value !== "") {
            setSearchTimeout(setTimeout((value) => {

                dispatch(props.search(value))
            }, 1000, e.target.value))
        } else {
            dispatch(props.get())
        }
    }

    return (
        <>
            {/* <TextField
                id="filled-basic"
                label="Filled"
                variant="Filled"
                value={searchName}
                onChange={(e) => searchChangeHandler(e)}
            /> */}
            <input
                className="disk__search"
                type="text"
                placeholder="Поиск"
                value={searchName}
                onChange={(e) => searchChangeHandler(e)}
            />
        </>
    )
}
export const Sort = (props) => {
    const dispatch = useDispatch();
    const [sort, setSort] = useState("");
    const { slug } = useParams()

    console.log("slug", slug)
    console.log("sort", sort)
    const handleChange = (event) => {
        setSort(event.target.value);
    };
    const selectItem = [
        {
            value: "name",
            text: "По названию от А-Я"
        },
        {
            value: "nameMinus",
            text: "По названию от Я-А"
        },
        {
            value: !props.productSort ? "email" : "price",
            text: !props.productSort ? "Email A-Z" : "По цене от дорогого к дешевому"
        },
        {
            value: !props.productSort ? "emailMinus" : "priceMinus",
            text: !props.productSort ? "Email Z-A" : "По цене от дорогого к дешевому"
        },
        {
            value: "updatedAtMinus",
            text: "Самые новые"
        },
        {
            value: "updatedAt",
            text: "Самые старые"
        },
    ]
    useEffect(() => {
        if (props.slug == "all") {
            dispatch(getProducts(sort))

        }
        if (props.slug !== "all") {
            dispatch(getProductsBySlug(slug, sort))

        }

    }, [sort])//добавил сорт

    return (
        <div className="selectContainer1">
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-helper-label">сортировка</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={sort}
                    label="Сортировка"
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>ничего</em>
                    </MenuItem>
                    {selectItem.map((item) => (
                        <MenuItem value={item.value}>{item.text}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    )
}


export const Tabs = (props) => {
    const [appState, setAppState] = useState({
        activeObject: null,
        objects: [{ id: 1, text: "Заказы" }, { id: 2, text: "Выполненые" },]
    });
    const toggleActive = (index) => {
        setAppState({ ...setAppState, activeObject: appState.objects[index] })
    }
    return (
        <div className="tabs">
            <div className="tabs__container">
                <div className="tabs__list">
                    {
                        appState.objects.map((item, index) => (
                            <div
                                className="tabs__item"
                                onClick={() => { toggleActive(index) }}
                                key={index} >
                                <div className='tabs__link' >

                                    {item.text}
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>

        </div>
    )
}