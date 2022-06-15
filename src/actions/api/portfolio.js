
import axios from '../../helpers/axios';


export const updatedPortfolio = (id, updatePortfolio) => axios.patch(`/portfolio/update/${id}`, updatePortfolio)
export const deletedPortfolio = (id) => axios.delete(`/portfolio/delete/${id}`)
