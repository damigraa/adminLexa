

import React, { useEffect, useState } from 'react'
import Input from '../../components/UI/Input/index';
import Modal from '../../components/UI/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { addBlog, updateBlog } from '../../actions';


export const AddBlog = ({ blogForm, setBlogForm, show, handleClose, setCurrentId, currentId }) => {
    const dispatch = useDispatch();
    const blog = useSelector((state) => currentId ? state.blog.blog.find((stand) => stand._id === currentId) : null)

    const [img, setImg] = useState([]);

    useEffect(() => {
        if (blog) setBlogForm(blog)
    }, [blog])


    const submitStandMonumentForm = (e) => {
        if (currentId) {
            e.preventDefault()
            dispatch(updateBlog(currentId, blogForm))
            handleClose()
        } else {
            const form = new FormData();
            form.append("title", blogForm.title);
            form.append("videoHref", blogForm.videoHref);
            form.append("description", blogForm.description);
            for (let pic of img) {
                form.append("img", pic);
            }
            dispatch(addBlog(form)).then(() => handleClose());

        }

    };
    const handleProductPictures = (e) => {
        setImg([...img, e.target.files[0]]);
    };
    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalTitle={!currentId ? "Добавить новый блог" : "Изменить содержимое"}
            onSubmit={submitStandMonumentForm}
        >

            <Input
                label="Заголовок"
                title="title"
                value={blogForm.title}
                placeholder={`Введите аголовок`}
                onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })}
            />
            <Input
                label="Видео Ютуб"
                name="videoHref"
                value={blogForm.videoHref}
                placeholder={"Ссылка на видео"}
                onChange={(e) => setBlogForm({ ...blogForm, videoHref: e.target.value })}
            />
            <Input
                label="Подробное описание"
                name="description"
                value={blogForm.description}
                placeholder={"Подробное описание"}
                onChange={(e) => setBlogForm({ ...blogForm, description: e.target.value })}
            />
            {!currentId ? <>
                {
                    img.length > 0
                        ? img.map((pic, index) => (
                            <div key={index}>{pic.name}</div>
                        ))
                        : null
                }
                < input
                    type="file"
                    name="img"
                    onChange={handleProductPictures}
                    required
                    multiple
                />
            </> : null}
        </Modal>
    )
}
