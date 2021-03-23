<script>
	import Button from "../components/Button.svelte";
	import Facebook from "../icons/Facebook.svelte";

	import Instagram from "../icons/Instagram.svelte";
</script>

<style>
	.main {
		z-index: 1;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		padding: 0px 12px;
		box-sizing: border-box;
	}
	.logo {
		width: 100%;
		max-width: 500px;
		height: 500px;
		margin: 0 auto;
		background-image: url(/logo-compressed.png);
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
	}
	.title,
	.title span {
		color: var(--primary);
		font-size: 3rem;
		font-weight: 500;
		text-align: center;
		text-transform: uppercase;
		line-height: 4rem;
		font-family: "Dekko", cursive;
	}
	.title span {
		background-color: var(--accent);
		padding: 0px 10px;
		border-radius: 4px;
		transform: rotate(-4deg);
		display: inline-block;
		color: var(--text);
	}
	.row {
		display: grid;
		grid-gap: 10px;
		grid-template-columns: 1fr 1fr;
	}
	.socials {
		margin-top: 2rem;
	}
	.socials a {
		text-align: center;
		font-size: 2rem;
	}

	@media (max-width: 640px) {
		.title,
		.title span {
			font-size: 2rem;
			line-height: 3rem;
		}
	}
</style>

<div class="main">
	<div>
		<h1 class="title">
			Meksički street food
			<br />
			na
			<span>srpski</span>
			način
		</h1>
	</div>
	<div class="logo" />
	<div class="footer">
		<div class="row">
			<Button title="Jelovnik" type="accent" link="/jelovnik" />
			<Button target="new" title="Naruči" link="https://mamacitafood.com" />
		</div>
		<div class="row socials">
			<a href="https://www.instagram.com/mamacita.kantina/" target="new">
				<Instagram />
			</a>
			<a href="https://facebook.com/mamacitafood" target="new">
				<Facebook />
			</a>
		</div>
	</div>
</div>
