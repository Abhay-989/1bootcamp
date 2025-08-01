import { useEffect, useState } from 'react';

const Dashboard = () => {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem('bootcampRegistrations');
    if (data) {
      setRegistrations(JSON.parse(data));
    }
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-orange-200">Bootcamp Registration List</h1>
      
      {registrations.length === 0 ? (
        <p className="text-center text-orange-200">No registrations found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-purple-700 text-white">
              <tr>
                <th className="border border-gray-300 px-4 py-2">#</th>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Email</th>
                <th className="border border-gray-300 px-4 py-2">Branch</th>
                <th className="border border-gray-300 px-4 py-2">WhatsApp</th>
                <th className="border border-gray-300 px-4 py-2">Scholar No.</th>
                <th className="border border-gray-300 px-4 py-2">Year</th>
              </tr>
            </thead>
            <tbody>
              {registrations.map((user, index) => (
                <tr key={index} className="bg-white even:bg-gray-100">
                  <td className="border px-4 py-2 text-center">{index + 1}</td>
                  <td className="border px-4 py-2">{user.name}</td>
                  <td className="border px-4 py-2">{user.email}</td>
                  <td className="border px-4 py-2">{user.Branch}</td>
                  <td className="border px-4 py-2">{user.number}</td>
                  <td className="border px-4 py-2">{user.scholar}</td>
                  <td className="border px-4 py-2">{user.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
