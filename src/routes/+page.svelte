<script>
	import Header from '$lib/components/header.svelte';
	import Text from '$lib/components/text/text.svelte';
</script>

<div class="p-6">
	<Header />

	<Text variant="bg-h1" class="pb-2">Welcome to SvelteKit</Text>

	<Text variant="bg-b1">
		Visit <a
			href="https://kit.svelte.dev"
			class="text-blue-600 hover:text-blue-700 underline underline-offset-2 hover:no-underline transition-all"
			>kit.svelte.dev</a
		> to read the documentation
	</Text>
</div>
