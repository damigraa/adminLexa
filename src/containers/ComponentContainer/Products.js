
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, searchProducts } from "../../actions";
import { AddProductModal } from "../create/AddProductModal";
import { MainContainer } from '../MainContainer';
import { DetailsProduct } from "../render/DetailsProduct";
import ModalConfirm from './../../components/BurgerMenu/ModalConfirm';
import { deleteProductById, getProductsBySlug } from './../../actions/product.action';
import { Link, useParams } from 'react-router-dom';
import CategoryContainer from "../../components/CategoryContainer";
import FileContainer from '../../components/RenderFileContainer';

const Products = () => {
  const product = useSelector((state) => state.product.products)
  const activeCategory = useSelector(state => state.product.activeCategory)
  const fileView = useSelector(state => state.product.view)
  const loading = useSelector(state => state.product.loading)

  const [showActiveCategory, setShowActiveCategory] = useState(activeCategory);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [showModalImg, setShowModalImg] = useState(false);
  const [nameCategory, setNameCategory] = useState("");

  const [show, setShow] = useState(false);
  const [productDetailModal, setProductDetailModal] = useState(false);
  const [productDetails, setProductDetails] = useState(null);
  const [currentId, setCurrentId] = useState(null)

  const [productForm, setProductForm] = useState({
    name: "",
    quantity: "",
    price: "",
    description: "",
    categoryId: "",
    size: "",
    weight: "",
  })
  const clear = () => {
    setCurrentId(null)
    setProductForm({
      name: "",
      quantity: "",
      price: "",
      description: "",
      categoryId: "",
      weight: "",
      size: ""
    })
  }
  const dispatch = useDispatch();

  const handleShow = () => setShow(true)

  const handleShowModalImg = () => {
    setShowModalImg(true)
  }
  const handleClose = () => {
    clear()
    setShow(false)

  }
  const { slug } = useParams()

  const showAllProductsButton = () => {
    dispatch(getProducts(slug))

  }
  useEffect(() => {
    if (slug === "all") {
      dispatch(getProducts())
    }
    dispatch(getProductsBySlug(slug))
  }, [slug])
  console.log(slug)
  const showProductDetailsModal = (product) => {
    setProductDetails(product);
    setProductDetailModal(true);
  };
  const confirmDelete = () => {
    dispatch(deleteProductById(deleteId))
    setShowDeleteModal(false)
  }
  const handleCloseDeleteModal = () => setShowDeleteModal(false)

  const renderDeleteModal = () => {
    return (
      <ModalConfirm
        description="Если в действительно хотите удалить этот продукт, подтвердите это"
        title={"Удалить продукт"}
        show={showDeleteModal}
        handleClose={handleCloseDeleteModal}
        onClick={confirmDelete}
      />
    )
  }
  return (
    <MainContainer
      slug={slug}
      buttonText={"Добавить продукт"}
      backButtonProduct
      productSort
      fullFunctional
      search={searchProducts}
      get={getProducts}
      handleShow={handleShow}
      title="Товары"
      getSlug={getProductsBySlug}
    >
      <CategoryContainer
        setShowActiveCategory={setShowActiveCategory}
        showAllProductsButton={showAllProductsButton}
        setNameCategory={setNameCategory}
      />
      <Container>
        <h1>
          {nameCategory}
        </h1>
        <Row>
          <Col>
          <FileContainer
                loading={loading}
                setShowDeleteModal={setShowDeleteModal}
                setDeleteId={setDeleteId}
                items={product}
                fileView={fileView}
                showDetailsModal={showProductDetailsModal}
                setCurrentId={setCurrentId}
                setShow={setShow}
            />
          </Col>
        </Row>
      </Container>
      <AddProductModal
        show={show}
        handleClose={handleClose}
        currentId={currentId}
        setCurrentId={setCurrentId}
        product={product}
        productForm={productForm}
        setProductForm={setProductForm}
        clear={clear}
      />
      <DetailsProduct
        handleShowModalImg={handleShowModalImg}
        setShowModalImg={setShowModalImg}
        showModalImg={showModalImg}
        productDetailModal={productDetailModal}
        productDetails={productDetails}
        setProductDetailModal={setProductDetailModal}
      />
      {renderDeleteModal()}
    </MainContainer >
  );
};

export default Products;
