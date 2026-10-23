// Editable site copy, kept as typed data so it's easy to update later.

export type NavItem = { id: string; label: string };

export const nav: NavItem[] = [
	{ id: 'home', label: 'Home' },
	{ id: 'book', label: 'New Book' },
	{ id: 'contact', label: 'Contact' }
];

export const press = {
	name: 'Rootspring Press',
	tagline: `A tiny, new publisher rooted in Portland,&nbsp;Oregon.`,
	intro:
		'Rootspring Press is a tiny, new publisher established primarily to publish the works of Wahhab and Kay Baldwin and their friends. We are unable to accept unsolicited manuscripts.',
	location: 'Portland, OR'
};

export const book = {
	title: `From Climate Crisis to Kinship&nbsp;Culture`,
	subtitle: 'A Hopeful, Practical Guide to What You Can Do',
	author: 'Wahhab Baldwin',
	coverAlt:
		'Book cover: towering old-growth forest with a small figure gazing up, titled “From Climate Crisis to Kinship Culture” by Wahhab Baldwin.',
	amazonUrl:
		'https://link.amazon/B0fboaH4o'
	// Lead-in shown first, then the body paragraphs.
	lede: 'A hopeful, practical guide for anyone who cares about the future and is tired of feeling helpless about it.',
	body: [
		'Solar costs have fallen ninety percent in a decade. Renewables are now cheaper than coal and gas. Batteries, electric vehicles, and clean grids are scaling world-wide faster than almost anyone predicted. And still, carbon emissions keep climbing.',
		'Why? We have the technology. The problem is threefold: short-term thinking; an economy based on endless growth; and above all, a consumption-based culture that treats Earth and life on Earth as resources to be exploited, rather than recognizing them as family — knowing that we are deeply interconnected with all of life.',
		'The good news? A different set of values is already emerging globally. Baldwin calls it the Kinship Culture: a way of living rooted in the felt sense that we are not separate from the living world we depend on. Along the way, you’ll find some genuinely surprising reasons for hope that the headlines have missed.',
		'The book’s last part is a practical guide to joining this emerging culture, based on its seven core values. Each is paired with exercises for readers ready to live them, not just read about them.',
		'This is a book for anyone who cares about our future and is tired of feeling powerless facing it. You can be part of the solution. Turn the page to see how.'
	]
};

export type Blurb = { quote: string; source: string };

export const blurbs: Blurb[] = [
	{
		quote:
			'Confronting climate crisis, civilization collapse, and finding a path to walk in these broken times, From Climate Crisis to Kinship Culture takes us back to what is simple and sustaining, the patterns of kinship that connect us together with each other and the Earth. Here is wisdom for our hands and our heart, and the clear recognition of the primacy of love, how it permeates everything. Allow this timely book to help you on your journey, knowing how “Every act of love toward Earth and her beings, both human and more-than-human, helps heal the whole.”',
		source: 'Llewellyn Vaughan-Lee, ed. Spiritual Ecology: The Cry of the Earth'
	},
	{
		quote:
			'Wahhab Baldwin knows what too few people know: the Climate Crisis can’t be resolved by technology or politics or economics alone. It requires a deep shift in the human spirit, and that shift will lead to better, deeper, more beautiful and meaningful lives. What could be more important?',
		source: 'Brian D. McLaren, author of Life After Doom and The Last Voyage'
	}
];

// Email assembled from parts so it isn't sitting in the markup as plain text.
export const contact = {
	user: 'info',
	domain: 'rootspringpress.com'
};
