import { useState } from "react";

const FAQItem = ({ question, answer }) => {
	const [open, setOpen] = useState(false);

	return (
		<div className="  py-4">
			<button
				onClick={() => setOpen(!open)}
				className="w-full text-left font-semibold text-lg text-white hover:text-orange-600 transition duration-200"
			>
				{question}
			</button>
			{open && <p className="mt-2 text-fuchsia-200">{answer}</p>}
		</div>
	);
};

const FAQs = () => {
	const faqs = {
		"About the Bootcamp": [
			{
				question: "What is the IEEE MANIT 7-Day Web Development Bootcamp?",
				answer:
					"This bootcamp is designed to teach participants modern web development, focusing on HTML, CSS, JavaScript, and ReactJS through a hands-on learning approach."
			},
			{
				question: "What are the key takeaways from this bootcamp?",
				answer:
					"Participants will learn core web development skills, including building responsive web apps, ReactJS, and possibly backend concepts."
			},
			{
				question: "Who is the target audience for this bootcamp?",
				answer:
					"Beginners, aspiring developers, and students from both technical and non-technical backgrounds are welcome, even with no prior coding experience."
			},
			{
				question: "What are the prerequisites for attending the bootcamp?",
				answer:
					"Basic computer literacy and curiosity to learn. Prior experience with HTML/CSS/JS is a bonus but not mandatory."
			},
			{
				question: "How does the bootcamp ensure a job-ready skillset?",
				answer:
					"Through real-world projects, ReactJS training, career support like portfolio guidance, and exposure to industry-relevant tools."
			}
		],
		"Technical Requirements": [
			{
				question: "What are the computer and software requirements?",
				answer:
					"A working laptop/PC with internet, Google Chrome, VS Code, and ability to run Zoom or Google Meet."
			},
			{
				question: "Is a specific operating system required?",
				answer:
					"Windows, macOS, or Linux systems are supported. Chromebooks and tablets are not recommended."
			},
			{
				question: "Are there any optional tools recommended?",
				answer:
					"Yes, a second monitor, headphones, and external mouse/keyboard can enhance your productivity but are optional."
			}
		],
		"Registration and Attendance": [
			{
				question: "How do I enroll for the bootcamp?",
				answer:
					"You can enroll by filling out the registration form through the official website or link provided."
			},
			{
				question: "What is the registration fee?",
				answer: "The bootcamp is completely free and open to all students."
			},
			{
				question: "Is attendance mandatory?",
				answer:
					"Yes, attending all sessions may be required to receive the certificate."
			},
			{
				question: "What if I miss a session or need help?",
				answer:
					"Doubt-clearing sessions and support from mentors will be available regularly during the bootcamp."
			}
		],
		"Certification and Career Support": [
			{
				question: "Will I get a certificate after the bootcamp?",
				answer:
					"Yes, all participants who meet the criteria (like attendance and project submission) will receive a certificate."
			},
			{
				question: "Is any career support provided?",
				answer:
					"Yes! Resume reviews, portfolio guidance, and mentorship sessions will be part of the career-focused track."
			}
		]
	};

	return (
		<div className="max-w-4xl mx-auto px-4 py-12 border my-10" id="faq">
			<h2 className="text-3xl font-bold text-center text-orange-600 mb-8">
				Frequently Asked Questions
			</h2>
			{Object.keys(faqs).map((category) => (
				<div key={category} className="mb-10">
					<h3 className="text-xl font-semibold text-orange-400 mb-4">{category}</h3>
					{faqs[category].map((faq, index) => (
						<FAQItem key={index} question={faq.question} answer={faq.answer} />
					))}
				</div>
			))}
		</div>
	);
};

export default FAQs;
