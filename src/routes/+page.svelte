<script lang="ts">
	import Hero from '#lib/components/Hero.svelte';
	import NewBook from '#lib/components/NewBook.svelte';
	import Contact from '#lib/components/Contact.svelte';
	import { press, book } from '#lib/content';

	const title = `${press.name} — ${book.title}`;
	const description = `${press.intro} Our new book: ${book.title} by ${book.author}.`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta name="theme-color" content="#2f5233" />
</svelte:head>

<Hero />
<NewBook />
<Contact />

<footer class="footer">
	<p>© {new Date().getFullYear()} {press.name}. All rights reserved.</p>
</footer>

<style>
	.footer {
		background: var(--forest-deep);
		color: color-mix(in srgb, var(--cream) 55%, transparent);
		text-align: center;
		padding: 1.5rem 1rem 2.5rem;
		font-size: 0.85rem;
		border-top: 1px solid color-mix(in srgb, var(--cream) 12%, transparent);
	}
</style>
