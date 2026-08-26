/**
 * Single source of truth for the CV page. Keep this in sync with
 * /public/cv.pdf — the PDF is what most people will actually download.
 */

export const EDUCATION = [
	// TODO(Ece): confirm the exact programme name and start/end dates, then
	// replace the placeholder below.
	{
		period: '2026 –',
		what: 'M.Sc.',
		where: 'Politecnico di Torino, Turin, Italy',
		notes: ['Incoming.'],
	},
	{
		period: 'Sep 2022 – Jun 2026',
		what: 'B.Sc. in Computer Engineering',
		where: 'Bilkent University, Ankara, Türkiye',
		notes: [
			'CGPA 3.36 / 4.00',
			'Six Honour and High Honour titles',
			'Coursework: Data Structures and Algorithms, Database Systems, Operating Systems, Object-Oriented Software Engineering',
		],
	},
	{
		period: 'Feb 2025 – Jul 2025',
		what: 'Erasmus+ Exchange Semester',
		where: "Università degli Studi dell'Aquila, L'Aquila, Italy",
		notes: [
			'Deep Neural Networks, Cloud Architecture, Bioinformatics, Information Systems & Security, Signal Processing',
		],
	},
];

export const RESEARCH = [
	{
		period: 'Jan 2026 – May 2026',
		what: 'Automated Program Repair',
		where: 'Bilkent University — Undergraduate Researcher',
		notes: [
			'Multidimensional characterisation study of software defect benchmarks, analysing evaluation bias in automated program repair.',
		],
	},
	{
		period: 'Sep 2025 – May 2026',
		what: 'LLM-Driven Build and Test Environments',
		where: 'Bilkent University — Undergraduate Researcher',
		notes: [
			'Applying LLMs and LLM agents to automate build processes and environment setup for open-source software.',
		],
	},
];

export const EXPERIENCE = [
	{
		period: 'Oct 2025 – Jun 2026',
		what: 'Candidate Software Engineer',
		where: 'Meteksan Savunma, Ankara',
		notes: ['Internal testing software tools in C# and .NET.'],
	},
	{
		period: 'Aug 2025 – Sep 2025',
		what: 'Machine Learning Intern',
		where: 'Meteksan Savunma, Ankara',
		notes: [
			'Predictive modelling and data analysis to optimise hardware test design workflows, reducing testing overhead.',
		],
	},
	{
		period: 'Jun 2025 – Jul 2025',
		what: 'Software Engineer Intern, Bioinformatics',
		where: "Università degli Studi dell'Aquila, L'Aquila",
		notes: [
			'Built MiRNASearch, a full-stack application analysing microRNA–gene–pathway relationships with Spring Boot and a Neo4j graph database.',
			'Integrated five miRNA–gene prediction databases (miRBase, TarBase, RNA22, PicTar, TargetScan) into a unified graph of 4M+ nodes.',
		],
	},
	{
		period: 'Aug 2024',
		what: 'Security Management Intern',
		where: 'İşnet, Ankara',
		notes: ['Security Operations Centre analysis and social engineering threat practices.'],
	},
	{
		period: 'Jul 2024',
		what: 'Software Engineer Intern',
		where: 'MobileAction, Ankara',
		notes: ['Full-stack air pollution analysis application with Spring Boot, H2 and the OpenWeatherMap API.'],
	},
];

export const SELECTED_PROJECTS = [
	{
		period: 'Sep 2025 – present',
		what: 'Autonomous Containerization of Open-Source Software',
		where: 'Senior design project — Docker, OpenAI, LangChain',
		notes: [
			'ReAct-based agent for autonomous Docker environment construction and build automation.',
			'Validated on 282 repositories across 46 build systems and 11 application domains: 69.5% smoke-test success at an average cost of $0.087 per repository.',
			'Senior Design Project Productivity Award, Bilkent CS Fair 2026.',
		],
	},
	{
		period: 'Feb 2025 – Jul 2025',
		what: 'CNN Initialization and Training Performance Study',
		where: 'PyTorch, Python',
		notes: [
			'Effect of weight initialisation schemes on CNN performance on Fashion-MNIST; best configuration reached 90.37% test accuracy.',
		],
	},
	{
		period: 'Sep 2024 – Dec 2024',
		what: 'Bilkent Information Office Web Application',
		where: 'Spring Boot, PostgreSQL, Vue.js',
		notes: ['Tour and fair management for prospective students.'],
	},
];

export const LEADERSHIP = [
	{
		period: '2022 – present',
		what: 'Bilkent Young Entrepreneurs Society (BilkentYES)',
		where: 'President of the Supervisory Board; Chairwoman of the Board; Sponsorship Coordinator',
		notes: [
			'Led one of Bilkent’s largest student societies, ~1,500 members, managing sponsorships and partnerships for national-scale events.',
			'Organised the Ankara Start-up Summit — ~800 participants, 20 sponsors, and venture capital organisations each year.',
		],
	},
];

export const TESTS = [
	{ label: 'GRE General', value: '328 / 340 — Quantitative 170 / 170', year: 'Sep 2025' },
	{ label: 'IELTS Academic', value: 'Band 8.0 / 9.0 — CEFR C1', year: 'Sep 2025' },
];

export const CERTIFICATIONS = [
	{ label: 'AWS Academy Graduate — Cloud Foundations', value: 'Amazon Web Services', year: 'Jun 2025' },
	{ label: 'Complete Machine Learning Course with Python', value: 'Udemy', year: 'Feb 2025' },
	{ label: 'Microservices Foundations Professional Certificate', value: 'Kong Inc.', year: 'Aug 2024' },
	{ label: 'Apple Search Ads Certificate', value: 'Apple', year: 'Jul 2024' },
];

export const SKILLS = [
	{ group: 'Languages', items: 'Java, C, C++, C#, Python, JavaScript, HTML/CSS, SQL' },
	{ group: 'Frameworks', items: 'Spring Boot, .NET, Blazor, Vue.js' },
	{ group: 'Data & AI', items: 'PyTorch, Pandas, NumPy, LangChain, LLM agents, OpenAI API, CLIP, OpenCV' },
	{ group: 'Databases', items: 'PostgreSQL, Neo4j, MySQL, H2' },
	{ group: 'Cloud & DevOps', items: 'AWS, Azure, Docker, Git, Linux' },
];

export const LANGUAGES = [
	{ group: 'Turkish', items: 'Native' },
	{ group: 'English', items: 'C1' },
	{ group: 'French', items: 'B1' },
	{ group: 'Italian', items: 'A2' },
];
