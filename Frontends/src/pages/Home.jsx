import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className=" text-white px-6 py-16 md:py-24 text-center relative">
     
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-400">
        IEEE MANIT's 7-Day Web Development Bootcamp
      </h1>

      <p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto text-gray-300">
        Master Web Development from Scratch to Deployment!
      </p>


      <Link
        to="/register"
        className="inline-block mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-600 transition"
      >
        Register Now
      </Link>
      <div className="mt-16 max-w-4xl mx-auto text-left">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Why Join?</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Gain practical, real-world web development skills</li>
          <li>Build your personal portfolio from scratch</li>
          <li>Learn from expert mentors and developers</li>
          <li>Network with peers and professionals</li>
          <li>Certificate of Completion from IEEE MSB</li>
        </ul>
      </div>

      {/* Quick Navigation Links */}
      <div className="mt-12 flex justify-center flex-wrap gap-4 text-sm font-medium text-orange-400">
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/timeline" className="hover:underline">Timeline</Link>
        <Link to="/faqs" className="hover:underline">FAQs</Link>
        <Link to="/mentors" className="hover:underline">Mentors</Link>
      </div>

    
     
      <div className="mt-20 max-w-4xl mx-auto">
        <h3 className="text-xl font-bold text-yellow-400 mb-6">What Our Past Participants Say</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-[#6124ab] text-white p-4 rounded-lg shadow-md">
            <p>“This bootcamp changed my web development journey. Highly recommended!”</p>
            <p className="mt-2 font-semibold text-sm">— Ananya Sharma, B.Tech CSE</p>
          </div>
          <div className="bg-[#6124ab] text-white p-4 rounded-lg shadow-md">
            <p>“Hands-on learning with amazing mentors. I built my first portfolio site!”</p>
            <p className="mt-2 font-semibold text-sm">— Rahul Mehta, 2nd Year ECE</p>
          </div>
        </div>
      </div>
   
    </section>
  );
};

export default About;
