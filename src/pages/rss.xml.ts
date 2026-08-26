import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { SITE } from '../consts';

export async function GET(context: APIContext) {
	const writing = (await getCollection('writing', ({ data }) => !data.draft)).sort(
		(a, b) => b.data.date.valueOf() - a.data.date.valueOf()
	);

	return rss({
		title: SITE.title,
		description: SITE.description,
		site: context.site!,
		items: writing.map((entry) => ({
			title: entry.data.title,
			description: entry.data.description,
			pubDate: entry.data.date,
			link: `/writing/${entry.id}/`,
		})),
	});
}
