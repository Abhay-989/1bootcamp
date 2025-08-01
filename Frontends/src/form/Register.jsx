// src/pages/Register.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    college: '',
    year: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
const navigate = useNavigate();
  const handleSubmit = (e) => {
    
    e.preventDefault();

    const existingData = JSON.parse(localStorage.getItem('bootcampRegistrations')) || [];

    const updatedData = [...existingData, formData];

    localStorage.setItem('bootcampRegistrations', JSON.stringify(updatedData));

    setSubmitted(true);
    setFormData({ name: '', email: '', college: '', year: '' });
    navigate('/success');
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-10 bg-[#ebf5f8]">
      <div className='bg-gradient-to-r from-[#d3ccf9] to-[#7d7bc7]  p-6 rounded-lg mb-3 border border-gray-300 transition-colors duration-200'>
        <h1 className="text-3xl font-semibold text-purple-800 text-center mb-6">IEEE MANIT STUDENT BRANCH</h1>
         <h2 className="text-3xl font-bold text-purple-500 text-center mb-6">Bootcamp Registration</h2>

      </div>

      <div className='bg-white p-6 rounded-lg mb-3 border border-gray-300 transition-colors duration-200'>
         <h1 className="text-2xl font-bold  mb-6">WEB DEVELOPMENT BOOTCAMP 2025</h1>
         <p>Are you ready to take the first step on this exciting coding journey?</p>
         <br />
         <p>Scroll down, fill in your details, and get one step closer to joining our incredible Bootcamp.</p>
         <br />
         <p>Develop your coding skills, and unlock the door to exciting opportunities.</p>
         <br />
         <p></p>
  <hr />
         <div className=' divide-y p-3'>* Indicates required question</div>
      </div>
     
      {submitted && <p className="text-green-600 text-center mb-4">Registration successful!</p>}

      <form onSubmit={handleSubmit} className="space-y-4  p-6 ">
<div className="bg-white p-6 rounded-lg mb-3 border border-gray-300 transition-colors duration-200 ">
          <label className="block mb-1  font-medium">Name *</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>

         <div className="bg-white p-6 rounded-lg mb-3 border border-gray-300 transition-colors duration-200">
          <label className="block mb-1  font-medium">Branch *</label>
          <select
            name="Branch"
            required
            value={formData.Branch}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          >
            <option value="">choose</option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="MDS">MDS</option>
            <option value="Electrical">Electrical</option>
            <option value="Mechenical">Mechenical</option>
            <option value="Civil">Civil</option>
            <option value="MME">MME</option>
          </select>
        </div>

          <div className="bg-white p-6 rounded-lg mb-3 border border-gray-300 transition-colors duration-200 ">
          <label className="block mb-1  font-medium">Whatsup Number *</label>
          <input
            type="number"
            name="number"
            required
            value={formData.number}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        
        <div className="bg-white p-6 rounded-lg mb-3 border border-gray-300 transition-colors duration-200 ">
          <label className="block mb-1  font-medium">Email *</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>


        <div className="bg-white p-6 rounded-lg mb-3 border border-gray-300 transition-colors duration-200">
          <label className="block mb-1  font-medium">Scholar Number *</label>
          <input
            type="number"
            name="scholar"
            required
            value={formData.scholar}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        
     <div className="bg-white p-6 rounded-lg mb-3 border border-gray-300 transition-colors duration-200">
          <label className="block mb-1  font-medium">Year *</label>
          <select
            name="year"
            required
            value={formData.year}
            onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-600 hover:border-purple-500 transition-colors duration-200"
          >
            <option value="">Select Year</option>
            <option value="1st Year">1st Year</option>
            <option value="2nd Year">2nd Year</option>
            <option value="3rd Year">3rd Year</option>
            <option value="4th Year">4th Year</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-purple-700 text-white py-2 px-4 rounded hover:bg-purple-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
