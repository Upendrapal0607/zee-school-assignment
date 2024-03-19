import React, { useEffect } from 'react';
import { deleteAppointment, getAppointment, updateAppointment } from '../Controller/Controller';

const VisitList = ({ visits=[],getAppointmentDetails }) => {

const onUpdate = async (id) =>{
   let {data} = await updateAppointment(id,{isScheduled:true});
   console.log(data);
  if(data?.message){
alert(`Meeting confirm`)
getAppointmentDetails();
  }
}
const onDelete = async (id) =>{
   let {data} = await deleteAppointment(id);
   console.log(data);
  if(data?.message){
alert(`Appointment Cancel`)
getAppointmentDetails();
  }
}

  return (
    <div className="max-w-2lg min-h-[77vh] mx-auto bg-gray-100">
      <div className="overflow-hidden bg-white shadow-md sm:rounded-lg">
        <div className="">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 text-center font-bold">
              <tr>
              <th scope="col" className="px-6 py-4 text-xs font-medium tracking-wider text-center uppercase">
                  Employee Name
                </th>
                <th scope="col" className="px-6 py-4 text-xs font-medium tracking-wider text-center uppercase">
                  Visit Date
                </th>
                <th scope="col" className="px-6 py-4 text-xs font-medium tracking-wider text-center uppercase">
                  Visit Time
                </th>
                <th scope="col" className="px-6 py-4 text-xs font-medium tracking-wider text-center uppercase">
                  Passcode
                </th>
              
                <th scope="col" className="px-6 py-4 text-xs font-medium tracking-wider text-center uppercase">
                  Visit Department
                </th>
                <th scope="col" className="px-6 py-4 text-xs font-medium tracking-wider text-center uppercase">
                  Whom to Visit
                </th>
                <th scope="col" className="px-6 py-4 text-xs font-medium tracking-wider text-center uppercase">
                  Action
                </th>
                
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {visits.map((visit, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 whitespace-nowrap">{visit.employee_name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{visit.visit_date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{visit.visit_time}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{visit.passcode}</td>
        
                  <td className="px-6 py-4 whitespace-nowrap">{visit.visit_department}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{visit.whome_visit}</td>
                  <td className="px-6 py-4 text-right whitespace-nowrap">
                   {visit?.isScheduled?
                   <div >
                    <button
                      className="text-green-600 hover:text-green-900 focus:outline-none p-3"
                    >
                 Join Meet
                    </button>
                    <button onClick={()=>onDelete(visit._id)}
                      className="text-red-600 hover:text-red-900 focus:outline-none p-2"
                    >
                  Delete
                    </button>
                   </div>
                   
                    :
                    <button
                      onClick={() => onUpdate(visit._id)}
                      className="text-yellow-500 hover:text-yellow-700 focus:outline-none"
                    >
                Confirm meeting
                    </button>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VisitList;





