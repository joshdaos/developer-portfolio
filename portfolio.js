import emoji from "react-easy-emoji";

export const greetings = {
	name: "Joshua Daos",
	title: "Hello all! I'm Josh Daos",
	description:
		"Driven by my curiosity in tech & possessing a passion for solving complex problems, I am a Software Engineer who enjoys transforming applications from logic to production.",
	resumeLink: "https://docs.google.com/document/d/1gfnYKaXBJjuyXxL58a5mCCaTVsBt3pqJ-EM7821S-jc/edit?usp=sharing",
};

export const openSource = {
	githubUserName: "joshdaos",
};

export const contact = {};

export const socialLinks = {
	// facebook: "https://www.facebook.com",
	instagram: "https://www.instagram.com/josh_develops/",
	twitter: "https://twitter.com/joshdaos",
	github: "https://github.com/joshdaos",
	linkedin: "https://www.linkedin.com/in/joshua-daos/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"Software Developer who is passionate about learning and growing in Tech.",
	skills: [
		emoji(
			"⚡ Develop highly interactive Front end / User Interfaces for your web applications"
		),
		emoji(
			"⚡ Progressive Web Applications built with Tech-Stacks such as Express, React, and Django"
		),
		emoji(
			"⚡ Adept at identifying issues with existing software and creating innovative new software programs"
		),
	],

	softwareSkills: [
		{
			skillName: "html-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "sass",
			fontAwesomeClassname: "logos:sass",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "TypeScript",
			fontAwesomeClassname: "logos:typescript-icon",
		},
		{
			skillName: "reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		{
			skillName: "postman",
			fontAwesomeClassname: "logos:postman",
		},
		{
			skillName: "npm",
			fontAwesomeClassname: "vscode-icons:file-type-npm",
		},
		{
			skillName: "sql-database",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		{
			skillName: "mongoDB",
			fontAwesomeClassname: "vscode-icons:file-type-mongo",
		},
		{
			skillName: "postgresql",
			fontAwesomeClassname: "logos:postgresql",
		},
		{
			skillName: "firebase",
			fontAwesomeClassname: "logos:firebase",
		},
		{
			skillName: "python",
			fontAwesomeClassname: "logos:python",
		},
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
		// {
		// 	skillName: "docker",
		// 	fontAwesomeClassname: "logos:docker-icon",
		// },
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "80", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "50",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		schoolName: "General Assembly",
		subHeader: "Software Engineering Immersive",
		duration: "March 2021 - June 2021",
		desc: "Full-Stack Software Engineering Immersive Bootcamp that consists of 500+ hours of professional training over 12 weeks. Led by qualified instructors, this program is focused on technical training such as; understanding programming languages, frameworks, libraries, logical thinking, cooperative teamwork, etc. to ensure skills to build full-stack web applications/websites.",
		descBullets: [
			"Optimized solutions to computer software problems through algorithms, data structures, and scalable code while implementing industry methods to develop full-stack web applications.",
			"Translated logic into code while collaborating with user experience and UI designs to produce completed fully functional applications for an immersive experience.",
			"Collaborated with other Developers to create Full-Stack Applications while juggling mock Client requests"
		],
	},
];

export const experience = [
	{
		role: "Software Engineer",
		company: "Google",
		companylogo: "/img/icons/common/google.svg",
		date: "June 2018 – Present",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		descBullets: [
			"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		],
	},
	{
		role: "Front-End Developer",
		company: "Github",
		companylogo: "/img/icons/common/github.svg",
		date: "May 2017 – May 2018",
		desc: "Lorem ipsum dolor sit amet, consefdctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
	{
		role: "Software Engineer Intern",
		company: "Airbnb",
		companylogo: "/img/icons/common/airbnbLogo.png",
		date: "Jan 2015 – Sep 2015",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
];

export const projects = [
	{
		name: "Dripsy",
		desc: "A eCommerce Full-Stack Web Application utilizing Python, Django, and PostgreSQL",
		github: "https://github.com/joshdaos/Dripsy",
		link: "https://dripsyproject.herokuapp.com/",
	},
	{
		name: "Wayfarer",
		desc: "A Social Media / Travel Community Full-Stack Web Application that utilizes Python, Django, and PostgreSQL",
		github: "https://github.com/joshdaos/Wayfarer",
		link: "https://project2-wayfarer.herokuapp.com/",
	},
	{
		name: "GitSumCoffee",
		desc: "A Coffee Ordering Full-Stack Web Application utilizing JavaScript, Express.js, Node.js, and MongoDB",
		github: "https://github.com/joshdaos/GitSumCoffee",
		link: "https://gitsumcoffee.herokuapp.com/",
	},
];

export const feedbacks = [
	{
		name: "Tom Kolsrud",
		feedback:
			'"Speak softly and carry a big stick -- you will go far. Josh is incredibly patient. Josh is incredibly conscientious. Josh is also a potent intellect. Throughout our time as peers in the Software Engineering Intensive, I never saw him complain, or lose his composure -- yet his skills would also grow in, honestly kind of astonishing, leaps and bounds. Each project was more advanced, and techniques were never set aside, but would continue to develop alongside new ones he was exposed to. In addition to being a quick learner and a skilled leader, Josh has an innate sense for design that elevates his work even further.',
	},
	{
		name: "Ben Dazey",
		feedback:
			'"Josh is the most humble engineer I have met. He went from struggling with content to being near the top of the class, while staying completely under the radar. When he tackles a problem he does it with a smile and puts hands to keyboard to figure it out. I never once heard him complain, and he was always a positive and effective communicator, letting his work speak volumes for itself. I would count myself lucky to work on a team with Josh again!"',
	},
	{
		name: "Cassie Pitkin",
		feedback:
			'"Josh has taken his career change very seriously and will make an incredible software engineer. I look forward to seeing the impact he has on his future companies an I know he will be an incredible asset to any team. As his career coach, I appreciate how serious he is taking his job search!"',
	},
];
