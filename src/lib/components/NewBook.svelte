<script lang="ts">
	import { book, blurbs } from '#lib/content';
	import { reveal } from '#lib/actions/reveal';
	import cover from '#lib/assets/book-cover.jpg?enhanced';
</script>

<section id="book" class="section book">
	<div class="container">
		<header class="head" use:reveal>
			<p class="eyebrow">Our New Book</p>
			<h2>{book.title}</h2>
			<p class="subtitle">{book.subtitle}</p>
			<p class="byline">by {book.author}</p>
		</header>

		<div class="layout">
			<figure class="cover-wrap" use:reveal>
				<enhanced:img
					class="cover"
					src={cover}
					alt={book.coverAlt}
					sizes="(max-width: 720px) 70vw, 360px"
				/>
			</figure>

			<div class="copy">
				<p class="lede" use:reveal>{book.lede}</p>
				{#each book.body as para, i (i)}
					<p use:reveal={{ delay: 40 }}>{para}</p>
				{/each}

				<div class="buy" use:reveal>
					<h3 class="buy-title">Get the book</h3>
					<div class="buy-grid">
						<div class="buy-card">
							<span class="buy-card-label">Your local bookstore</span>
							<span class="buy-card-note"
								>Ask your independent bookseller to order it through Ingram/Spark.</span
							>
						</div>
						<a
							class="buy-card"
							href={book.amazonUrl}
							target="_blank"
							rel="noopener noreferrer"
						>
							<span class="buy-card-label">Buy on Amazon</span>
							<span class="buy-card-note">Ships directly to your door →</span>
						</a>
					</div>
				</div>
			</div>
		</div>

		<div class="blurbs">
			{#each blurbs as b, i (i)}
				<figure class="blurb" use:reveal={{ delay: i * 60 }}>
					<blockquote>{b.quote}</blockquote>
					<figcaption>— {b.source}</figcaption>
				</figure>
			{/each}
		</div>
	</div>
</section>

<style>
	.book {
		background: linear-gradient(180deg, var(--cream) 0%, var(--cream-deep) 100%);
	}
	.head {
		text-align: center;
		max-width: 46rem;
		margin-inline: auto;
	}
	.subtitle {
		font-family: var(--font-head);
		font-size: clamp(1.1rem, 0.95rem + 0.8vw, 1.45rem);
		font-style: italic;
		color: var(--forest);
		margin-top: 0.5rem;
	}
	.byline {
		color: var(--ink-soft);
		margin-top: 0.4rem;
		font-weight: 700;
	}

	.layout {
		display: grid;
		grid-template-columns: minmax(0, 360px) 1fr;
		gap: clamp(2rem, 5vw, 4rem);
		align-items: start;
		margin-top: 3rem;
	}

	.cover-wrap {
		position: sticky;
		top: calc(var(--nav-h) + 1.5rem);
	}
	.cover {
		width: 100%;
		height: auto;
		border-radius: 10px;
		box-shadow: var(--shadow-md);
		transition:
			transform 0.4s var(--ease),
			box-shadow 0.4s var(--ease);
	}
	.cover-wrap:hover .cover {
		transform: translateY(-6px) rotate(-0.6deg);
		box-shadow: 0 22px 55px rgba(34, 61, 38, 0.24);
	}

	.copy > p {
		margin-top: 1.1rem;
	}
	.lede {
		font-family: var(--font-head);
		font-size: clamp(1.25rem, 1.1rem + 0.8vw, 1.6rem);
		line-height: 1.35;
		color: var(--forest-deep);
	}

	/* ---- Buy block (equal weight) ---- */
	.buy {
		margin-top: 2.5rem;
		padding: 1.5rem;
		background: var(--paper);
		border: 1px solid color-mix(in srgb, var(--moss) 24%, transparent);
		border-radius: var(--radius);
		box-shadow: var(--shadow-sm);
	}
	.buy-title {
		margin-bottom: 1rem;
	}
	.buy-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}
	.buy-card {
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
		padding: 1.1rem 1.2rem;
		border-radius: 12px;
		border: 2px solid color-mix(in srgb, var(--forest) 22%, transparent);
		background: var(--cream);
		text-decoration: none;
		color: var(--ink);
		transition:
			transform 0.2s var(--ease),
			border-color 0.2s var(--ease),
			box-shadow 0.2s var(--ease);
	}
	a.buy-card:hover {
		transform: translateY(-3px);
		border-color: var(--gold);
		box-shadow: var(--shadow-sm);
	}
	.buy-card-label {
		font-family: var(--font-head);
		font-weight: 600;
		font-size: 1.15rem;
		color: var(--forest-deep);
	}
	.buy-card-note {
		font-size: 0.92rem;
		color: var(--ink-soft);
	}

	/* ---- Blurbs ---- */
	.blurbs {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 22rem), 1fr));
		gap: 1.5rem;
		margin-top: 3.5rem;
	}
	.blurb {
		position: relative;
		padding: 1.75rem 1.5rem 1.5rem;
		background: var(--paper);
		border-radius: var(--radius);
		box-shadow: var(--shadow-sm);
		border-left: 4px solid var(--gold);
	}
	.blurb blockquote {
		font-size: 1rem;
		line-height: 1.6;
		color: var(--ink);
	}
	.blurb::before {
		content: '\201C';
		position: absolute;
		top: -0.2rem;
		left: 0.8rem;
		font-family: var(--font-head);
		font-size: 4rem;
		line-height: 1;
		color: color-mix(in srgb, var(--gold) 55%, transparent);
	}
	.blurb figcaption {
		margin-top: 1rem;
		font-weight: 700;
		font-style: italic;
		color: var(--forest);
		font-size: 0.92rem;
	}

	@media (max-width: 720px) {
		.layout {
			grid-template-columns: 1fr;
			justify-items: center;
			text-align: left;
		}
		.cover-wrap {
			position: static;
			width: min(70vw, 300px);
		}
		.buy-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
