import React from 'react'
import { useDispatch } from 'react-redux';
import Loader from '../../../components/Loader';

const RenderItemBenefits = ({ items, setCurrentId, setShow, deleteButton, limitItem }) => {
    const dispatch = useDispatch()

    const Edit = (item) => {
        setCurrentId(item._id)
        setShow(true)
    }
    
    return (
        <div className="renderItemBenefits">
            {!items ? <Loader /> :
                items.map((item, index) =>
                    <div
                        className="renderItemBenefits__itemContainer"
                        key={item._id}
                    >
                        <div className="renderItemBenefits__contentBlock">
                            <div className="renderItemBenefits__titleContainer">
                                <h3>{index + 1}. </h3>
                                <h3>
                                    {item.title}
                                </h3>

                            </div>
                            <p>
                                {item.description}
                            </p>
                        </div>
                        <div style={{ textAlign: "center" }}>
                        </div>
                        <button
                            className="btn btn-secondary"
                            onClick={() => Edit(item)}>
                            Редактировать
                        </button>
                        <button
                            style={{ marginLeft: "5px" }}

                            className="btn btn-secondary"
                            onClick={() => dispatch(deleteButton(item._id))}>
                            Удалить
                        </button>
                    </div>

                )}
        </div >
    )
}

export default RenderItemBenefits