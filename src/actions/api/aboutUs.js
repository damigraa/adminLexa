
import axios from '../../helpers/axios';


export const updatedAboutUs = (id, updateAboutUs) => axios.patch(`/aboutUs/update/${id}`, updateAboutUs)
export const deletedAboutUs = (id) => axios.delete(`/aboutUs/delete/${id}`)
