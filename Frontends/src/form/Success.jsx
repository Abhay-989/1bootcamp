

import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const Success = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-50 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Registration Successful!</h1>
        <p className="text-gray-600 mb-6">
          Thank you for registering for the IEEE 7-Day Web Development Bootcamp.
          We’ll be in touch with more details soon.
        </p>
        <Link
          to="/"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Success;
