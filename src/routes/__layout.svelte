<script>
	import '@/styles'
	import { browser } from "$app/env";
  	if (browser) import("virtual:windi-devtools")
</script>

<main>
	<slot />
</main>