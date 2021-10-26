<svelte:head>
	<title>SvelteKit Project</title>
</svelte:head>

<h1>Hello Universe <span>Hello</span></h1>

<style>
	h1 {
		@apply sm:(text-5xl text-green-600) ;
		& span {
			@apply bg-green-700;
		}
	}
</style>
