import React, { useState, useEffect } from 'react'
import Input from '../../components/UI/Input/index';
import Modal from '../../components/UI/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, updateContact } from '../../actions';

const AddContacts = ({ show, handleClose, setCurrentId, currentId }) => {
    const dispatch = useDispatch()
    const contactId = useSelector((state) => currentId ? state.contact.contact.find((c) => c._id === currentId) : null)
    const [formContact, setFormContact] = useState({
        city: "",
        address: "",
        cityIndex: "",
        country: "",
        email: "",
        number: "",
        numberTwo: ""
    })
    useEffect(() => {
        if (contactId) setFormContact(contactId)
    }, [contactId])


    const submitContactForm = (e) => {
        if (currentId) {
            e.preventDefault()
            dispatch(updateContact(currentId, formContact))
            handleClose()
            clear()
        } else {
            const form = new FormData()
            form.append("city", formContact.city)
            form.append("address", formContact.address)
            form.append("cityIndex", formContact.cityIndex)
            form.append("country", formContact.country)
            form.append("email", formContact.email)
            form.append("number", formContact.number)
            form.append("numberTwo", formContact.numberTwo)
            dispatch(addContact(formContact)).then(() => handleClose())
            // clear()
        }
    }
    const clear = () => {
        setCurrentId(null)
        setFormContact({
            city: "",
            address: "",
            cityIndex: "",
            country: "",
            email: "",
            number: "",
            numberTwo: ""


        })
    }
    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalTitle={"Добавить пункт"}
            onSubmit={submitContactForm}
        >
            <Input
                label="Город"
                value={formContact.city}
                placeholder={"Город"}
                onChange={(e) => setFormContact({ ...formContact, city: e.target.value })}
            />
            <Input
                label="Адрес производства"
                value={formContact.address}
                placeholder={"Введите адресс производства"}
                onChange={(e) => setFormContact({ ...formContact, address: e.target.value })}
            />
            <Input
                label="Индекс города"
                value={formContact.cityIndex}
                placeholder={"Введите индекс города"}
                onChange={(e) => setFormContact({ ...formContact, cityIndex: e.target.value })}
            />
            <Input
                label="Страна"
                value={formContact.country}
                placeholder={"Введите страну"}
                onChange={(e) => setFormContact({ ...formContact, country: e.target.value })}
            />
            <Input
                label="email"
                value={formContact.email}
                placeholder={"Введите email"}
                onChange={(e) => setFormContact({ ...formContact, email: e.target.value })}
            />
            <Input
                label="Номер телефона"
                value={formContact.number}
                placeholder={"Введите основной номер телефона"}
                onChange={(e) => setFormContact({ ...formContact, number: e.target.value })}
            />
            <Input
                label="Второй номер"
                value={formContact.numberTwo}
                placeholder={"Введите Второй номер"}
                onChange={(e) => setFormContact({ ...formContact, numberTwo: e.target.value })}
            />

        </Modal>

    )
}


export default AddContacts