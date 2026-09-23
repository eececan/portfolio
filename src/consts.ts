export const SITE = {
	name: 'Elif Ece Can',
	url: 'https://eececan.com',
	title: 'Elif Ece Can',
	tagline:
		'MSc student in Computer Engineering at Politecnico di Torino, working toward human–computer interaction. Hobby projects applying computer vision to architecture.',
	description:
		'Elif Ece Can — MSc student in Computer Engineering at Politecnico di Torino, working toward human–computer interaction. Previously automated program repair and LLM agents at Bilkent University.',
	email: 'elfececan@gmail.com',
	locale: 'en',
} as const;

export const NAV = [
	{ href: '/', label: 'Home' },
	{ href: '/projects/', label: 'Projects' },
	{ href: '/writing/', label: 'Writing' },
	{ href: '/cv/', label: 'CV' },
	{ href: '/about/', label: 'About' },
] as const;

// TODO(Ece): add Google Scholar and ORCID once you have something in them.
export const LINKS = [
	{ href: 'https://github.com/eececan', label: 'GitHub' },
	{ href: 'https://linkedin.com/in/elif-ece-can', label: 'LinkedIn' },
] as const;

export const KIND_LABEL: Record<string, string> = {
	paper: 'Paper',
	report: 'Technical report',
	note: 'Note',
};
