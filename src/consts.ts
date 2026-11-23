import profile from '../profile.json';

export const SITE = profile.site;
export const LINKS = profile.links;
export const INTRO = profile.intro;

export const NAV = [
	{ href: '/', label: 'Home' },
	{ href: '/projects/', label: 'Projects' },
	{ href: '/cv/', label: 'CV' },
	{ href: '/about/', label: 'About' },
] as const;
