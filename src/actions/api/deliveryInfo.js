
import axios from '../../helpers/axios';


export const updatedDeliveryInfo = (id, updateDeliveryInfo) => axios.patch(`/deliveryInfo/update/${id}`, updateDeliveryInfo)
export const deletedDeliveryInfo = (id) => axios.delete(`/deliveryInfo/delete/${id}`)
