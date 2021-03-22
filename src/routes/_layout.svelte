<script>
</script>

<style>
	:root {
		--background: #0e0f09;
		--text: #fefefe;
		--text-secondary: #d8d4cf;
		--primary: #ecc843;
		--primary-dark: #ff9a00;
		--accent: #b02d34;
		--accent-light: #e83e47;
		--border: #2b2b2b;
	}
	:global(body) {
		background-color: var(--background);
		height: 100%;
		width: 100%;
	}
	main {
		padding: 0px 12px;
		box-sizing: border-box;
		overflow: hidden;
	}
	@media (max-width: 1040px) {
	}
	@media (max-width: 480px) {
	}
</style>

<main>
	<slot />
</main>
