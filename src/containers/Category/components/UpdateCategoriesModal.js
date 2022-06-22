import React from 'react';
import Input from '../../../components/UI/Input';
import Modal from '../../../components/UI/Modal';
import { Row, Col } from 'react-bootstrap';


const UpdateCategoriesModal = (props) => {

    const {
        show,
        handleClose,
        modalTitle,
        size,
        expandedArray,
        checkedArray,
        handleCategoryInput,
        categoryList,
        onSubmit
    } = props;


    return (
        <Modal
            show={show}
            handleClose={handleClose}
            onSubmit={onSubmit}
            modalTitle={modalTitle}
            size={size}
        >

            {
                expandedArray.length > 0 &&
                expandedArray.map((item, index) =>
                    <Row key={index}>
                        <Col>
                            <p>Переименовать</p>
                            <Input
                                value={item.name}
                                placeholder={`Category Name`}
                                onChange={(e) => handleCategoryInput('name', e.target.value, index, 'expanded')}
                            />
                        </Col>
                        <Col>
                            <p>Изменить категорию</p>
                            <select
                                className="form-control"
                                value={item.parentId}
                                onChange={(e) => handleCategoryInput('parentId', e.target.value, index, 'expanded')}>
                                <option>select category</option>
                                {
                                    categoryList.map(option =>
                                        <option key={option.value} value={option.value}>{option.name}</option>
                                    )
                                }
                            </select>
                        </Col>
                        {/* <Col>
                            <select
                                className="form-control"
                                value={item.type}
                                onChange={(e) => handleCategoryInput('type', e.target.value, index, 'expanded')}
                            >
                                <option value="">Выбрать тип:</option>
                                <option value="store">По Цене</option>
                                <option value="product">Продукт</option>
                                <option value="page">Баннеры</option>
                            </select>
                        </Col> */}
                    </Row>
                )
            }
            {
                checkedArray.length > 0 &&
                checkedArray.map((item, index) =>
                    <Row key={index}>
                        <Col>
                            <p>Переименовать</p>
                                    <Input
                                        value={item.name}
                                        placeholder={`Category Name`}
                                        onChange={(e) => handleCategoryInput('name', e.target.value, index, 'checked')}
                                    />
                        </Col>
                        <Col>
                            <p>Изменить категорию</p>
                            <select
                                className="form-control"
                                value={item.parentId}
                                onChange={(e) => handleCategoryInput('parentId', e.target.value, index, 'checked')}>
                                <option>select category</option>
                                {
                                    categoryList.map(option =>
                                        <option key={option.value} value={option.value}>{option.name}</option>
                                    )
                                }
                            </select>
                        </Col>
                        {/* <Col>
                            <select
                                className="form-control"
                                value={item.type}
                                onChange={(e) => handleCategoryInput('type', e.target.value, index, 'checked')}
                            
                            >
                               <option value="">Выбрать тип:</option>
                                <option value="store">По Цене</option>
                                <option value="product">Продукт</option>
                                <option value="page">Баннеры</option>
                            </select>
                        </Col> */}
                    </Row>
                )
            }
        </Modal>
    );
}

export default UpdateCategoriesModal;