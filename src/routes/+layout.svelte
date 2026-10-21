<script lang="ts">
	import '../app.css';
	import favicon from '#lib/assets/favicon.svg';
	import Nav from '#lib/components/Nav.svelte';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<a class="skip-link" href="#home">Skip to content</a>
<Nav />

<main id="main">
	{@render children()}
</main>
