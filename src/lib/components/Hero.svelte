<script lang="ts">
	import { press } from '#lib/content';
	import { reveal } from '#lib/actions/reveal';
	import logo from '#lib/assets/logo.png?enhanced';
</script>

<section id="home" class="hero section">
	<div class="container hero-inner">
		<div class="logo-wrap" use:reveal>
			<enhanced:img class="logo" src={logo} alt="{press.name} logo: a tree with spreading roots and leaves" />
		</div>

		<p class="eyebrow" use:reveal={{ delay: 80 }}>Independent publishing · {press.location}</p>
		<h1 use:reveal={{ delay: 120 }}>
			Rootspring <span class="accent">Press</span>
		</h1>
		<p class="lede" use:reveal={{ delay: 200 }}>{@html press.tagline}</p>
		<p class="intro" use:reveal={{ delay: 260 }}>{press.intro}</p>

		<div class="cta-row" use:reveal={{ delay: 320 }}>
			<a class="btn btn-primary" href="#book">See our new book</a>
			<a class="btn btn-ghost" href="#contact">Get in touch</a>
		</div>
	</div>

	<div class="leaf-drift" aria-hidden="true"></div>
</section>

<style>
	.hero {
		position: relative;
		overflow: hidden;
		padding-top: clamp(2.5rem, 6vh, 4rem);
		background:
			radial-gradient(
				ellipse 70% 55% at 50% 0%,
				color-mix(in srgb, var(--moss) 16%, transparent),
				transparent 70%
			);
	}
	.hero-inner {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}
	.logo-wrap {
		width: min(320px, 68vw);
		margin-bottom: 0.5rem;
	}
	.logo {
		width: 100%;
		height: auto;
		animation: sway 9s ease-in-out infinite;
		transform-origin: 50% 85%;
	}
	h1 {
		margin-top: 0.3rem;
	}
	.accent {
		color: var(--gold-deep);
	}
	.lede {
		font-family: var(--font-head);
		font-size: clamp(1.25rem, 1.05rem + 1vw, 1.7rem);
		color: var(--forest);
		margin-top: 0.8rem;
		max-width: 34ch;
	}
	.intro {
		margin-top: 1.1rem;
		max-width: 56ch;
		color: var(--ink-soft);
	}
	.cta-row {
		display: flex;
		flex-wrap: wrap;
		gap: 0.8rem;
		justify-content: center;
		margin-top: 2rem;
	}

	@keyframes sway {
		0%,
		100% {
			transform: rotate(-1.1deg);
		}
		50% {
			transform: rotate(1.1deg);
		}
	}

	/* Scroll-reveal base state (class added by the reveal action) */
	:global(.reveal) {
		opacity: 0;
		transform: translateY(22px);
		transition:
			opacity 0.7s var(--ease),
			transform 0.7s var(--ease);
	}
	:global(.reveal.is-visible) {
		opacity: 1;
		transform: none;
	}

	@media (prefers-reduced-motion: reduce) {
		.logo {
			animation: none;
		}
	}
</style>
