
import axios from '../../helpers/axios';


export const updatedArchitectLi = (id, updateArchitectLi) => axios.patch(`/architectLi/update/${id}`, updateArchitectLi)
export const deletedArchitectLi = (id) => axios.delete(`/architectLi/delete/${id}`)
