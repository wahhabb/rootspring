<script lang="ts">
	import NewBook from '#lib/components/NewBook.svelte';
	import Contact from '#lib/components/Contact.svelte';
	import { press, book } from '#lib/content';

	// Plain-text versions for metadata (strip the &nbsp; used for on-page wrapping).
	const plainTitle = book.title.replace(/&nbsp;/g, ' ');
	const title = `${plainTitle} — ${press.name}`;
	const description = `${plainTitle}: ${book.subtitle}, by ${book.author}. ${book.lede}`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="book" />
	<meta name="theme-color" content="#2f5233" />
</svelte:head>

<NewBook />
<Contact />

<footer class="footer">
	<p>© {new Date().getFullYear()} {press.name}. All rights reserved.</p>
</footer>
