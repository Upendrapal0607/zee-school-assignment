import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getAppointment, scheduledAppointment } from '../Controller/Controller';

export const Appointment = () => {
  const navigate = useNavigate();
  const [appointmentDetails,setAppointmentDetails] = useState({
    visit_date:"",
    visit_time:"",
    passcode:"",
    employee_name: "",
    visit_department: "",
    whome_visit:"",
    userId:"",
    isScheduled: false
  });

    const minTime = '08:00';
    const maxTime = '18:00';
 
        const now = new Date();
        const currentHour = now.getHours().toString().padStart(2, '0');
        const currentMinute = now.getMinutes().toString().padStart(2, '0');
       const currentTime = `${currentHour}:${currentMinute}`;
 
const handleChangeDetails = async e => {
  const {name, value} = e.target;
  setAppointmentDetails({...appointmentDetails, [name]: value});


}
 
const handleNavigate =async (e) => {
  e.preventDefault();
  if(appointmentDetails.visit_date && appointmentDetails.visit_time  && appointmentDetails.employee_name && appointmentDetails.visit_department && appointmentDetails.whome_visit){
    let AllAppointmentDetails = {...appointmentDetails,passcode:Math.round(Math.random()*10000)};
   let {data} = await scheduledAppointment(AllAppointmentDetails);
   if (data.message == "New appointment added successfully") {
    alert("Your appointment booked successfully")
    navigate("/visit")
   }
  else{
    alert("there was an error");
  }
  }
  else{

    alert("Please fill all the fields");
  }




}

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Book your appointment</h2>
          </div>
    
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <form className="space-y-6" onSubmit={handleNavigate}>
                {/* <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                   Pass Number
                  </label>
                  <div className="mt-1">
                    <input value={email} onChange={e=>setEmail(e.target.value)} id="email" name="email" type="email" autoComplete="email" required className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                  </div>
                </div> */}


                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                   Visit Date
                  </label>
                  <div className="mt-1">
                    <input value={appointmentDetails.visit_date} onChange={handleChangeDetails} type="date"
        id="date"
        name="visit_date"
        min={new Date().toISOString().split('T')[0]} autoComplete="date" required className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                  </div>
                </div>


                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Visit Time
                  </label>
                  <div className="mt-1">
                    <input
                     type="time"
        id="time"
        name="visit_time"
        min={minTime}
        max={maxTime}
       
        onChange={handleChangeDetails}
        value={appointmentDetails.visit_time}
          autoComplete="time" required className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    {/* <input value={email} onChange={e=>setEmail(e.target.value)} id="email" name="email" type="time" autoComplete="email" required className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" /> */}
                  </div>
                </div>
    

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Employee Name
                  </label>
                  <div className="mt-1">
                    <input onChange={handleChangeDetails} value={appointmentDetails.employee_name} id="employee" name="employee_name" type="text" autoComplete="current-password" required className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                  </div>
                </div>


                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Visit Department
                  </label>
                  <div className="mt-1">
                    {/* <input value={password} onChange={e=>setPassword(e.target.value)} id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" /> */}
                  <select onChange={handleChangeDetails} value={appointmentDetails.visit_department} name="visit_department" id=""  className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option value="">Select Department</option>
                    <option value="Manager report">Managment Report</option>
                    <option value="Employee department">Employee Depart</option>
                    <option value="Developer department">Developer Depart</option>
                    <option value="Marketing">Marketing</option>
                    <option value="HR department">HR Depart</option>
                  </select>
                  </div>
                </div>


                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                   Whom to Visit
                  </label>
                  <div className="mt-1">
                    {/* <input value={password} onChange={e=>setPassword(e.target.value)} id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" /> */}
                    <select onChange={handleChangeDetails} value={appointmentDetails.whome_visit} name="whome_visit" id=""  className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option value="">Select name</option>
                    <option value="Joy sir">Joy sir</option>
                    <option value="John">HR manager john</option>
                    <option value="Ojian">Ojian</option>
                    <option value="Oliver">Oliver</option>
                    <option value="Elijah">Elijah</option>
                  </select>
                  </div>
                </div>
    
                {/* <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                    <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                      Remember me
                    </label>
                  </div>
    
                  <div className="text-sm">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Forgot your password?
                    </a>
                  </div>
                </div> */}
    
                <div>
                  <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    BOOK
                  </ button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
}
