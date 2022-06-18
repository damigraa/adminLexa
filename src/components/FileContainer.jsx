import React from 'react'
import { generatePublicUrl } from '../urlConfig'
import Loader from './Loader';
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from '@mui/icons-material/Settings';
const FileContainer = (props) => {

    const { showDetailsModal, deleteFunc, setCurrentId, setShow, items, fileView,
        setShowDeleteModal, setDeleteId
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
    console.log(props.product)
    if (fileView === "plate") {
        return (
            <div className="fileplate">
                {!items ? <Loader /> :
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
                {!items ? <Loader /> :
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
export default FileContainer

