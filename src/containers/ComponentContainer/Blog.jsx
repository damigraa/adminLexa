
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteBlog, getBlog } from './../../actions';
import { MainContainer } from './../MainContainer';
import { AddBlog } from '../create/AddBlog.jsx';
import ModalConfirm from './../../components/BurgerMenu/ModalConfirm';
import { RenderDetailsBlog } from "../render/RenderDetailsBlog";
import RenderFileContainer from './../../components/RenderFileContainer';

const Blog = () => {
  const fileView = useSelector(state => state.blog.view)

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const [showModalImg, setShowModalImg] = useState(false);
  const [show, setShow] = useState(false);
  const [blogDetailModal, setBlogDetailModal] = useState(false);
  const [blogDetails, setBlogDetails] = useState(null);
  const [currentId, setCurrentId] = useState(null)
  const dispatch = useDispatch();

  const blog = useSelector((state) => state.blog.blog)

  const handleShow = () => setShow(true)
  const handleClose = () => {
    setShow(false)
    clear()
  }
  const [blogForm, setBlogForm] = useState({
    title: "",
    videoHref: "",
    description: "",
  })
  const clear = () => {
    setCurrentId(null)
    setBlogForm({
      title: "",
      videoHref: "",
      description: "",
      weight: "",
      img: []
    })
  }
  useEffect(() => {
    dispatch(getBlog())
  }, [])

  const confirmDelete = () => {
    dispatch(deleteBlog(deleteId))
    setShowDeleteModal(false)
  }

  const showBlogDetailsModal = (blog) => {
    setBlogDetails(blog);
    setBlogDetailModal(true);
  };
  const handleCloseDeleteModal = () => setShowDeleteModal(false)

  const renderDeleteModal = () => {
    return (
      <ModalConfirm
        description="Если в действительно хотите удалить этот блог, подтвердите это"
        title={"Удалить продукт"}
        show={showDeleteModal}
        handleClose={handleCloseDeleteModal}
        onClick={confirmDelete}
      />
    )
  }




  return (
    <MainContainer
      backButtonProduct
      // productSort
      mediumFunctional
      get={getBlog}
      handleShow={handleShow}
      backHref
      title="Список блогов"
    >
      <Container>
        <Row>
          <Col>
          <RenderFileContainer
                setShowDeleteModal={setShowDeleteModal}
                setDeleteId={setDeleteId}
                items={blog}
                fileView={fileView}
                showDetailsModal={showBlogDetailsModal}
                setCurrentId={setCurrentId}
                setShow={setShow}
            />
          </Col>
        </Row>
      </Container>
      <AddBlog
        setBlogForm={setBlogForm}
        blogForm={blogForm}
        show={show}
        handleClose={handleClose}
        currentId={currentId}
        setCurrentId={setCurrentId}
      />
      <RenderDetailsBlog
        showModalImg={showModalImg}
        setShowModalImg={setShowModalImg}
        blogDetailModal={blogDetailModal}
        blogDetails={blogDetails}
        setBlogDetailModal={setBlogDetailModal}
      />
      {renderDeleteModal()}

    </MainContainer >
  );
};

export default Blog;
