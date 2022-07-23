import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ContainerSiteSetting from '../../ContainerSiteSetting';
import { getArchitectSkills, deleteArchitectSkills, addArchitectSkills, updateArchitectSkills } from '../../../actions';
import RenderItemsContainer from '../../components/RenderItemsContainer';
import Loader from '../../../components/Loader';
import RenderAddModalContainer from './RenderAddModal';

function ArchitectSkills() {
    const architectSkills = useSelector((state) => state.architectSkills)

    const dispatch = useDispatch()
    const [currentId, setCurrentId] = useState(null)
    const [show, setShow] = useState(false)
    const [architectSkillsForm, setArchitectSkillsForm] = useState({
        title: "",
        iconImg: "",
    })
    useEffect(() => {
        dispatch(getArchitectSkills())
    }, [])
    const handleShow = () => {
        setShow(true)
    }
    if (architectSkills.loading) {
        return <Loader />
    }
    const submitArchitectSkillsForm = () => {
        if (currentId) {
            dispatch(updateArchitectSkills(currentId, architectSkillsForm))
            handleClose()
        } else {
            const form = new FormData()
            form.append("title", architectSkillsForm.title)
            form.append("iconImg", architectSkillsForm.iconImg)
            dispatch(addArchitectSkills(form)).then(() => handleClose())
        }

    }

    const handleClose = () => {
        setShow(false)
        clear()
    }
    const clear = () => {
        setCurrentId(null)
        setArchitectSkillsForm({
            title: "",
            iconImg: ""
        })
    }

    return (
        <ContainerSiteSetting
            item={architectSkills.architectSkills}
            setShow={handleShow}
            title={"Список наших преимуществ"}
            href="/siteSetting"
        >
            <RenderItemsContainer
                setShow={setShow}
                items={architectSkills.architectSkills}
                setCurrentId={setCurrentId}
                deleteButton={deleteArchitectSkills}
            />
            <RenderAddModalContainer
                formItems={architectSkillsForm}
                clear={clear}
                handleClose={handleClose}
                onSubmit={submitArchitectSkillsForm}
                setFormItems={setArchitectSkillsForm}
                show={show}
                setShow={setShow}
                setCurrentId={setCurrentId}
                currentId={currentId}
                items={architectSkills.architectSkills}
            />
        </ContainerSiteSetting>
    )
}

export default ArchitectSkills
