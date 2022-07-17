
import axios from '../../helpers/axios';


export const updatedPaymentList = (id, updatePaymentList) => axios.patch(`/paymentList/update/${id}`, updatePaymentList)
export const deletedPaymentList = (id) => axios.delete(`/paymentList/delete/${id}`)
