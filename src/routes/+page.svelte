<script>
	import Header from '$lib/components/header.svelte';
	import ProjectCard from '$lib/components/project-card/project-card.svelte';
	import Text from '$lib/components/text/text.svelte';
	import { cx } from 'class-variance-authority';

	const name = 'Yash Raj';
	const description = 'I build & design people-centric products on the web.';
</script>

<main class="p-6">
	<Header />

	<!-- Section 1 -->
	<div class="flex items-center flex-col justify-center h-[620px] relative">
		<Text variant="h1" class="pb-5 text-stone-900">{name}</Text>
		<Text variant="b1" class=" text-stone-900 max-w-[360px] text-center">{description}</Text>
	</div>

	<div class="relative mt-28 max-w-6xl mx-auto">
		<span
			class={cx(
				'text-stone-200 text-[200px] leading-[1.45] [-webkit-text-fill-color:white] [-webkit-text-stroke:1.5px_rgb(231,229,228)]',
				'absolute left-1/2 -translate-x-1/2 -top-44 w-max h-max -z-10'
			)}>My Work</span
		>

		<div class="space-y-24">
			<ProjectCard
				title="Space Tourism"
				description="Plan your trip to the outerspace from the comfort of your house. Pick a destination, meet your crew, get equiped with the technology and off you goo."
				image={{
					src: 'https://images.unsplash.com/photo-1713782894016-01154435f4f4?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
					alt: ''
				}}
			/>

			<ProjectCard
				color="violet"
				title="Animeroll"
				description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
				image={{
					src: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
					alt: ''
				}}
			/>

			<ProjectCard
				color="rose"
				title="Animeroll"
				description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
				image={{
					src: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
					alt: ''
				}}
			/>
		</div>
	</div>
</main>
