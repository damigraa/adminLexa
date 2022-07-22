
import axios from '../../helpers/axios';


export const updatedArchitectSkills = (id, updateArchitectSkills) => axios.patch(`/architectSkills/update/${id}`, updateArchitectSkills)
export const deletedArchitectSkills = (id) => axios.delete(`/architectSkills/delete/${id}`)
