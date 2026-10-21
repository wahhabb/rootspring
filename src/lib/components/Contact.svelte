<script lang="ts">
	import { onMount } from 'svelte';
	import { contact, press } from '#lib/content';
	import { reveal } from '#lib/actions/reveal';

	// The href is assembled on the client only, so the full `mailto:` address
	// never appears in the server-rendered HTML for scrapers to harvest.
	let href = $state<string | undefined>(undefined);

	onMount(() => {
		href = `mailto:${contact.user}@${contact.domain}`;
	});
</script>

<section id="contact" class="section contact">
	<div class="container inner" use:reveal>
		<p class="eyebrow">Say hello</p>
		<h2>Contact us</h2>
		<p class="blurb">
			We’d love to hear from you. For questions about our books or about Rootspring Press,
			send us an email.
		</p>

		<a class="btn btn-primary email" {href}>
			{contact.user}<span aria-hidden="true">&#64;</span>{contact.domain}
		</a>

		<p class="place">{press.name} · {press.location}</p>
		<p class="note">We are unable to accept unsolicited manuscripts.</p>
	</div>
</section>

<style>
	.contact {
		background: var(--forest-deep);
		color: var(--cream);
		text-align: center;
	}
	.contact :global(h2) {
		color: var(--cream);
	}
	.inner {
		max-width: 42rem;
	}
	.eyebrow {
		color: var(--gold);
	}
	.blurb {
		margin: 1rem auto 2rem;
		max-width: 38ch;
		color: color-mix(in srgb, var(--cream) 82%, transparent);
	}
	.email {
		font-family: var(--font-body);
		font-size: clamp(1rem, 0.9rem + 0.6vw, 1.25rem);
		letter-spacing: 0.01em;
	}
	.place {
		margin-top: 2.5rem;
		font-weight: 700;
		color: var(--cream);
	}
	.note {
		margin-top: 0.5rem;
		font-size: 0.9rem;
		color: color-mix(in srgb, var(--cream) 62%, transparent);
	}
</style>
