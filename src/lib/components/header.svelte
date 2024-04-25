<script lang="ts">
	const LINKS: Array<{ label: string; route: string }> = [
		{
			label: 'Blog',
			route: '/blog'
		},
		{
			label: 'Resume',
			route: '/resume'
		}
	];
</script>

<header class="w-full">
	<nav class="">
		<ul class="flex items-center gap-6">
			{#each LINKS as link}
				<li>
					<a href={link.route}>{link.label} </a>
				</li>
			{/each}
		</ul>
	</nav>
</header>
