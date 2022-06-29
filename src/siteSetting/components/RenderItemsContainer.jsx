import React from 'react'
import { useDispatch } from 'react-redux';
import { generatePublicUrl } from '../../urlConfig';
import Loader from './../../components/Loader';

const RenderItemsContainer = ({ items, setCurrentId, setShow, deleteButton }) => {
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
                        className="col-sm-4"
                        key={item._id}
                        style={{ textAlign: "center", height: "300px", paddingTop: "20px", margin: "auto" }}>
                        <img
                            src={generatePublicUrl(item.iconImg)}
                            style={{ height: "150px", width: "100px" }}
                        />
                        <div style={{ margin: "20px" }}>
                            <div>
                                {item?.title}
                            </div>

                            <div>
                                {item?.description}
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
                        style={{marginLeft: "5px"}}

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