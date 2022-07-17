import React from 'react'
import { deleteContact } from '../../actions';
import Loader from '../../components/Loader';
import { useDispatch } from 'react-redux';
import { generatePublicUrl } from '../../urlConfig';
import BackButton from './../components/BackButton';

export const RenderContacts = ({ contact, setCurrentId, setShow }) => {
    const dispatch = useDispatch()

    const Edit = (item) => {
        setCurrentId(item._id)
        setShow(true)
    }
    return (
        <div className="renderContact">
            {!contact ? <Loader /> :
                contact.map((item) =>
                    <div className="col-12" key={item._id} style={{ textAlign: "center", height: "220px", paddingTop: "20px", margin: "auto" }}>
                        <div className="renderContact__city">{item.city || null}</div>
                        <div className="renderContact__address">{item.address || null}</div>
                        <div className="renderContact__cityIndex">{item.cityIndex || null}</div>
                        <div className="renderContact__country">{item.country || null}</div>
                        <div className="renderContact__email">{item.email || null}</div>
                        <div className="renderContact__number">{item.number || null}</div>
                        <div className="renderContact__numberTwo">{item.numberTwo || null}</div>

                        <div className="renderContact__buttonBlock">
                            <BackButton
                                onClickButton
                                onClick={() => Edit(item)}
                                text="Изменить"
                            />
                            <BackButton
                                onClickButton
                                onClick={() => dispatch(deleteContact(item._id))}
                                text="Удалить"
                            />
                        </div>
                    </div>
                )
            }
        </div >
    )
}
