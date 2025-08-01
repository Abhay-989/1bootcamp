import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaRocket } from "react-icons/fa";
import { MdComputer } from "react-icons/md";

const timelineData = [
  {
    day: "Day 1",
    title: "HTML Fundamentals",
    description: [
      "Structure web pages using HTML.",
      "Add text, images, links, and forms.",
      "🔧 Project: Build your first static webpage."
    ],
    icon: <FaHtml5 className="text-red-500" />,
  },
  {
    day: "Day 2",
    title: "CSS Basics",
    description: [
      "Write CSS styles and selectors.",
      "Use Box Model, backgrounds, colors.",
      "🎨 Mini Project: Style your webpage from Day 1."
    ],
    icon: <FaCss3Alt className="text-blue-500" />,
  },
  {
    day: "Day 3",
    title: "Responsive Design",
    description: [
      "Use gradients, shadows, and CSS variables.",
      "Master Flexbox & Grid for responsive layouts.",
      "📱 Project: Make your site responsive."
    ],
    icon: <MdComputer className="text-purple-600" />,
  },
  {
    day: "Day 4",
    title: "JavaScript Essentials",
    description: [
      "Understand variables, functions, DOM manipulation.",
      "Add interactivity to your pages.",
      "⚙️ Mini Project: Add dynamic features."
    ],
    icon: <FaJs className="text-yellow-400" />,
  },
  {
    day: "Day 5",
    title: "React Basics",
    description: [
      "Learn JSX, Components, State & Props.",
      "Optional: Use React Router for multi-page apps.",
      "⚛️ Mini Project: Build a React To-Do App or Counter."
    ],
    icon: <FaReact className="text-cyan-400" />,
  },
  {
    day: "Day 6",
    title: "React Intermediate & Git",
    description: [
      "Use React Hooks like useEffect and useContext.",
      "Intro to Git & GitHub for version control.",
      "🚀 Project: Build a full React application."
    ],
    icon: <FaGithub className="text-black" />,
  },
  {
    day: "Day 7",
    title: "Deployment & Career Guidance",
    description: [
      "Deploy projects using Vercel or Netlify.",
      "Career tips, resume help, mock interviews.",
      "🎓 Present projects & receive certificates."
    ],
    icon: <FaRocket className="text-green-500" />,
  },
];

const Timeline = () => {
  return (
    <section className=" py-12 px-4 md:px-20 ">
      <h2 className="text-3xl font-bold text-center mb-10 text-orange-500">🗓️ 7-Day Bootcamp Timeline</h2>
      <div className="relative border-l border-gray-300">
        {timelineData.map((item, index) => (
          <div key={index} className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-10 h-10 bg-white border-4 border-orange-500 rounded-full -left-5">
              {item.icon}
            </span>
            <h3 className="text-xl font-semibold text-orange-500">{item.day}: {item.title}</h3>
            <ul className="list-disc list-inside mt-2 text-white space-y-1">
              {item.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
