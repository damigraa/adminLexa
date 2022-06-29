import React, { useEffect } from 'react'
import { generatePublicUrl } from '../urlConfig'
import Loader from './Loader';
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from '@mui/icons-material/Settings';
const RenderFileContainer = (props) => {

    const { loading, showDetailsModal, deleteFunc, setCurrentId, setShow, items, fileView,
        setShowDeleteModal, setDeleteId, setShowAll
    } = props

    const handleClick = (item) => {
        showDetailsModal(item)
    }
    const Edit = (item) => {
        setCurrentId(item._id)
        setShow(true)
    }
    const confirmDeletions = (item) => {
        setShowDeleteModal(true)
        setDeleteId(item._id)

    }

    const renderEmptyItem = () => {
        return (
            <div className="renderEmptyItem">
                <h3>Обьектов пока что нет, Нажмите на кнопку ниже чтобы добавить первый из них</h3>
                <div className="renderEmptyItem__buttonContainer">
                    <button onClick={() => setShow(true)} >Добавить первый товар</button>
                </div>
            </div>
        )
    }
    if (loading) return <Loader />
    if (fileView === "plate") {
        return (
            <div className="fileplate">
                {!items ? renderEmptyItem() :
                    items.map((item) =>
                        <div className='file-plate' >
                            <div className="file-plate__imgContainer">
                                <img
                                    onClick={() => handleClick(item)}
                                    className="file__img"
                                    src={generatePublicUrl(item.productPictures ? item.productPictures[0].img : item.images[0].img)}
                                    alt={item.name}
                                />
                            </div>
                            <div className="file-plate__name">
                                {item.title ? item.title : item.name}
                            </div>
                            <div className="file-plate__btns">
                                <button className="file-plate__buttons setting" onClick={() => Edit(item)}><SettingsIcon /></button>
                                <button className="file-plate__buttons delete" onClick={() => confirmDeletions(item)}><DeleteIcon /></button>
                            </div>
                        </div>
                    )}
            </div>
        )
    } else {
        return (
            <div>
                {items.length === 0 ? renderEmptyItem() :
                    items.map((item) =>
                        <div className="file" key={item._id}>
                            <div className="file__mainContainer">
                                <div className="file__containerImg">
                                    <img className="file__img"
                                        onClick={() => handleClick(item)}
                                        src={generatePublicUrl(item.productPictures ? item.productPictures[0].img : item.images[0].img)}
                                        alt={item.title ? item.title : item.name} />
                                </div>
                                <div className="filec">
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
export default RenderFileContainer

