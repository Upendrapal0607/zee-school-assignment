import axios from "axios";
const bashUrl = "https://dream-park-backend.onrender.com/"
export const getAppointment = async () => {
    try {
       return await axios.get(`${bashUrl}appointment`)
   
   } catch (error) {
  return "error"
   }
};
export const scheduledAppointment = async (payload) => {
try {
   return await axios.post(`${bashUrl}appointment/add`, payload)

} catch (error) {
    
}
};
export const updateAppointment = async (id,payload) => {
try {
    return await axios.patch(`${bashUrl}appointment/update/${id}`, payload)
} catch (error) {
    return {error}
}
};
export const deleteAppointment = async (id) => {
try {
    return await axios.delete(`${bashUrl}appointment/delete/${id}`)
} catch (error) {
    return {error}
}
};