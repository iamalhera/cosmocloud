import React, { useState, useEffect } from 'react'
import { getAllEmployee, deleteEmployee } from '../api/apiService'
import { Link } from 'react-router-dom';


const Homepage = () => {
  const [employee, setEmployee] = useState(null);

  async function deleteHandler(id) {
    setEmployee(prevData => prevData.filter(item => item._id !== id));
    const response = await deleteEmployee(id);
    // var response;
    if (response) {
      alert("Employee record Deleted", response);
    }
  }

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await getAllEmployee();
        console.log(response?.data);
        setEmployee(response?.data);
      } catch (error) {
        console.error("error message : ",error);
      }
    };

    fetchEmployee();
  }, []);
  return (
    <div className='flex flex-col p-5'>
      <header className='flex justify-between pb-3 border-gray-500 border-b-2 '  >
        <h3>CosmoCloud Assignment</h3>
        <button>
          <Link to={`adding-employee`}>+ Add Employee</Link>
        </button>
      </header>

      {
        employee?.length>0 ?
        <div className="w-full max-w-4xl mx-auto p-6 bg-dark border border-dark rounded-lg shadow-lg mt-10">
        <table className="min-w-full bg-dark border border-dark rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-700 text-light uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Employee Name</th>
              <th className="py-3 px-6 text-left">Employee ID</th>
              <th className="py-3 px-6 text-left">More Details</th>
              <th className="py-3 px-6 text-left">Delete Action</th>
            </tr>
          </thead>
          <tbody>
            {
              employee?.map((emp) => {
                return (
                  <tr
                    key={emp._id}
                    className="text-light border-b border-dark hover:bg-dark-hover"
                  >
                    <td className="py-3 px-6">{emp.name}</td>
                    <td className="py-3 px-6">{emp._id}</td>
                    <td className="py-3 px-6">
                      <Link
                       to={`/employee/${emp._id}`}
                       state={{employeeData : emp}}
                       > 🔗 ..more details</Link>
                    </td>
                    <td className="py-3 px-6">
                      <button
                        onClick={() => deleteHandler(emp._id)}
                        className="bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500">
                        DELETE
                      </button>
                    </td>
                  </tr>
                )
              })
            }

          </tbody>
        </table>
      </div> :
          <div className='text-6xl w-max self-center mt-32'>
            <span>☹️</span>
            No Employees Found!!!
          </div>
      }


    </div>
  )
}

export default Homepage
