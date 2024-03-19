import React ,{useState, useEffect} from 'react'
import VisitList from './AppintmentList';
import { getAppointment } from '../Controller/Controller';

export const Visit = () => {
    const [listOfAppointment,setListOfAppointment] = useState([]);
    const getAppointmentDetails = async() =>{
        console.log(await getAppointment());
        let {data} = await getAppointment()
        setListOfAppointment(data?.appointmentData)
      }
      
      useEffect(()=>{
        getAppointmentDetails()
      },[])
  return (
    <>
    <VisitList visits ={listOfAppointment} getAppointmentDetails = {getAppointmentDetails}/>
    </>
  )
}
