import React from 'react'
import { useDispatch } from 'react-redux';
import { generatePublicUrl } from '../../urlConfig';
import Loader from './../../components/Loader';

const RenderItemsContainer = ({ items, setCurrentId, setShow, deleteButton, limitItem }) => {
    const dispatch = useDispatch()

    const Edit = (item) => {
        setCurrentId(item._id)
        setShow(true)
    }
    return (
        <div className="row">
            {!items ? <Loader /> :
                items.map((item) =>
                    <div
                        className={limitItem ? "col-sm-10" : "col-sm-4"}
                        key={item._id}
                        style={{ textAlign: "center", height: "300px", paddingTop: "20px", margin: "auto" }}>
                        <img
                            src={generatePublicUrl(item.aboutUsPicture || item.itemImg || item.mainImg || item.iconImg)}
                            style={{ height: limitItem ? "200px" : "100px" }}
                        />
                        <div style={{ margin: "20px" }}>
                            <div>
                                {item.title || item.headerTitle}
                            </div>

                            <div>
                                {item.description || item.textImage}
                            </div>
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

export default RenderItemsContainer