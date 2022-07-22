
import axios from '../../helpers/axios';


export const updatedArchitect = (id, updateArchitect) => axios.patch(`/architect/update/${id}`, updateArchitect)
export const deletedArchitect = (id) => axios.delete(`/architect/delete/${id}`)
