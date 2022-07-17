
import axios from '../../helpers/axios';


export const updatedBenefits = (id, updateBenefits) => axios.patch(`/benefits/update/${id}`, updateBenefits)
export const deletedBenefits = (id) => axios.delete(`/benefits/delete/${id}`)
