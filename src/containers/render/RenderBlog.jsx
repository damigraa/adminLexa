import React from 'react'
import { useSelector } from "react-redux";
import FileContainer from '../../components/FileContainer';


export const RenderBlog = ({ setShow, showBlogDetailsModal, setCurrentId, blog, setShowDeleteModal, setDeleteId }) => {

    const fileView = useSelector(state => state.blog.view)

    return (
        <>
            <FileContainer
                setShowDeleteModal={setShowDeleteModal}
                setDeleteId={setDeleteId}
                items={blog}
                fileView={fileView}
                showDetailsModal={showBlogDetailsModal}
                setCurrentId={setCurrentId}
                setShow={setShow}
            />
        </>
    )
}
