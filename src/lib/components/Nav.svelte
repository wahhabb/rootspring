<script lang="ts">
	import { onMount } from 'svelte';
	import { nav, press } from '#lib/content';
	import logo from '#lib/assets/logo.png';

	let active = $state('home');
	let scrolled = $state(false);

	onMount(() => {
		const sections = nav
			.map((n) => document.getElementById(n.id))
			.filter((el): el is HTMLElement => el !== null);

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) active = entry.target.id;
				}
			},
			// A band across the upper-middle of the viewport decides the active section.
			{ rootMargin: '-45% 0px -50% 0px', threshold: 0 }
		);
		sections.forEach((s) => observer.observe(s));

		const onScroll = () => (scrolled = window.scrollY > 8);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });

		return () => {
			observer.disconnect();
			window.removeEventListener('scroll', onScroll);
		};
	});
</script>

<header class="nav" class:scrolled>
	<nav class="nav-inner container" aria-label="Primary">
		<a class="brand" href="#home" aria-label="{press.name} — home">
			<img src={logo} alt="" width="40" height="40" />
			<span>Rootspring<span class="brand-press"> Press</span></span>
		</a>

		<ul class="links">
			{#each nav as item (item.id)}
				<li>
					<a
						href="#{item.id}"
						class:active={active === item.id}
						aria-current={active === item.id ? 'true' : undefined}
					>
						{item.label}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>

<style>
	.nav {
		position: sticky;
		top: 0;
		z-index: 50;
		background: color-mix(in srgb, var(--cream) 82%, transparent);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		border-bottom: 1px solid transparent;
		transition:
			border-color 0.3s var(--ease),
			box-shadow 0.3s var(--ease),
			background-color 0.3s var(--ease);
	}
	.nav.scrolled {
		border-bottom-color: color-mix(in srgb, var(--forest) 18%, transparent);
		box-shadow: 0 6px 24px rgba(34, 61, 38, 0.06);
	}
	.nav-inner {
		height: var(--nav-h);
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}
	.brand {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		font-family: var(--font-head);
		font-weight: 600;
		font-size: 1.25rem;
		color: var(--forest-deep);
		text-decoration: none;
		letter-spacing: -0.01em;
	}
	.brand img {
		width: 40px;
		height: 40px;
		object-fit: contain;
	}
	.brand-press {
		color: var(--moss);
	}
	.links {
		display: flex;
		align-items: center;
		gap: clamp(0.4rem, 2vw, 1.4rem);
		list-style: none;
		padding: 0;
	}
	.links a {
		position: relative;
		font-weight: 700;
		font-size: 0.98rem;
		color: var(--ink-soft);
		text-decoration: none;
		padding: 0.4rem 0.2rem;
		white-space: nowrap;
	}
	.links a::after {
		content: '';
		position: absolute;
		left: 0.2rem;
		right: 0.2rem;
		bottom: 0.1rem;
		height: 2px;
		background: var(--gold);
		border-radius: 2px;
		transform: scaleX(0);
		transform-origin: left;
		transition: transform 0.28s var(--ease);
	}
	.links a:hover {
		color: var(--forest);
	}
	.links a.active {
		color: var(--forest-deep);
	}
	.links a.active::after {
		transform: scaleX(1);
	}

	@media (max-width: 420px) {
		.brand-press {
			display: none;
		}
		.brand {
			font-size: 1.1rem;
		}
	}
</style>
