import React from 'react'
import { generatePublicUrl } from '../urlConfig'
import { useDispatch, useSelector } from 'react-redux';
import Loader from './Loader';

const FileContainer = (props) => {

    const { showDetailsModal, deleteFunc, setCurrentId, setShow, items, fileView,
        setShowDeleteModal, setDeleteId
    } = props

    const dispatch = useDispatch()
    const handleClick = (item) => {
        showDetailsModal(item)
    }
    // const deleteObj = (item) => {
    //     dispatch(deleteFunc(item._id))
    // }
    const Edit = (item) => {
        setCurrentId(item._id)
        setShow(true)
    }
    const confirmDeletions = (item) => {
        setShowDeleteModal(true)
        setDeleteId(item._id)

    }
    console.log(props.product)
    if (fileView === "plate") {
        return (
            <div className="fileplate">
                {!items ? <Loader /> :
                    items.map((item) =>
                        <div className='file-plate' >
                            <img
                                onClick={() => handleClick(item)}
                                className="file__img"
                                src={generatePublicUrl(item.productPictures ? item.productPictures[0].img : item.images[0].img)}
                                alt={item.name}
                            />
                            <div className="file-plate__name">
                                {item.title}
                            </div>
                            <div className="file-plate__btns">
                                <button className="btn btn-secondary" onClick={() => Edit(item)}>Редактировать</button>
                                <button className="btn btn-secondary" onClick={() => confirmDeletions(item)}>Удалить</button>
                            </div>
                        </div>
                    )}
            </div>
        )
    } else {
        return (
            <div>
                {!items ? <Loader /> :
                    items.map((item) =>
                        <div className="file" key={item._id}>
                            <div className="file__mainContainer">
                                <div className="file__containerImg">
                                    <img className="file__img"
                                        onClick={() => handleClick(item)}
                                        src={generatePublicUrl(item.productPictures[0].img)}
                                        alt={item.title ? item.title : item.name} />
                                </div>
                                <div className="file__contentBlock">
                                    <div className="file__contentBox">
                                        <div className="file__name">
                                            {item.title ? item.title : item.name}

                                        </div>
                                        <div className="file__size">
                                            {item.createdAt ? item.createdAt.slice(0, 10) : "22.05.2022"}
                                        </div>
                                    </div>
                                </div>
                                <div className="file__buttonContainer">
                                    <button className="file__btn file__download" onClick={() => Edit(item)}>Редактировать</button>
                                    <button className="file__btn file__delete " onClick={() => confirmDeletions(item)}>Удалить</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}
export default FileContainer

