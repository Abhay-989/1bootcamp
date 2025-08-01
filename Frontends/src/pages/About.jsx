
const About = () => {
  return (
    <section className=" text-white py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto space-y-12">
       
        <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-600">About the Bootcamp</h2>

        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-orange-400">About IEEE MANIT Student Branch</h3>
          <p>
            IEEE is the world's largest technical professional organization dedicated to advancing technology for humanity. The IEEE MANIT Student Branch aligns with this mission, fostering innovation and excellence in technology within the MANIT Bhopal campus.
          </p>
          <p>
            Our branch is recognized as the only prestigious IEEE branch in Central India and has earned accolades like the Darrel Chong Medal for excellence in student activities.
          </p>
          <p>
            Our mission is to cultivate technological progress and innovation, and our vision is to make meaningful contributions to the technical community through quality events and mentorship.
          </p>
        </div>

        {/* About the Bootcamp */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-orange-400">About the Web Development Bootcamp</h3>
          <p>
            This 7-day bootcamp is designed to equip beginners with essential web development skills, focusing particularly on ReactJS. The goal is to provide participants with both theoretical knowledge and practical experience, empowering them to build modern, responsive websites.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Master HTML, CSS, JavaScript, and React</li>
            <li>Build responsive web applications</li>
            <li>Understand front-end development and an intro to back-end concepts</li>
            <li>Develop job-ready skills through real-world projects</li>
          </ul>
          <p>
            No prior coding experience? No problem! This bootcamp welcomes students from all backgrounds. All you need is basic computer literacy and a passion for learning.
          </p>
        </div>

        {/* Learning Philosophy & USPs */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-orange-400">Our Learning Approach</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Hands-on Learning:</strong> Learn by building, not just watching.</li>
            <li><strong>Expert Mentorship:</strong> Get guidance from experienced developers.</li>
            <li><strong>Interactive Sessions:</strong> Live Q&A, doubt clearing, and collaborative tasks.</li>
            <li><strong>IEEE Endorsement:</strong> Industry-trusted backing for credibility.</li>
            <li><strong>ReactJS Focus:</strong> Learn the most in-demand front-end library in the industry.</li>
            <li><strong>Career-Readiness:</strong> Portfolio creation, career tips, and real-world projects.</li>
            <li><strong>Community:</strong> Network with peers and professionals through IEEE MANIT.</li>
          </ul>
        </div>

        {/* Bootcamp Expectations */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-orange-400">What to Expect</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Structure:</strong> Daily live sessions, hands-on project work, and self-paced tasks.</li>
            <li><strong>Resources:</strong> Access to course materials, code labs, and instructor support.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
