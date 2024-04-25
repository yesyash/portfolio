<script lang="ts">
	import { cx } from 'class-variance-authority';
	import { textStyles } from './text/text-styles';
	import HalfLoader from '$lib/icons/half-loader.icon.svelte';

	type TLink = {
		id: string;
		label: string;
		route: string;
	};

	const LINKS: Array<TLink> = [
		{
			id: 'blog',
			label: 'Blog',
			route: '/blog'
		},
		{
			id: 'resume',
			label: 'Resume',
			route: '/resume'
		},
		{
			id: 'get-in-touch',
			label: 'Get in touch',
			route: '/#get-in-touch'
		}
	];
</script>

<header class="w-full">
	<nav class="flex items-center">
		<div class="p-2 -m-2">
			<HalfLoader class="w-8 h-8" />
		</div>

		<ul class="flex items-center gap-6 ml-auto">
			{#each LINKS as link}
				<li>
					<a
						href={link.route}
						class={cx(
							textStyles({ variant: link.id === 'get-in-touch' ? 'b2' : 'b2-light' }),
							link.id === 'get-in-touch' && 'px-4 py-2 -mx-2 bg-blue-100 rounded-lg text-blue-700'
						)}>{link.label}</a
					>
				</li>
			{/each}
		</ul>
	</nav>
</header>
