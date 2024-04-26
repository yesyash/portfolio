<script lang="ts">
	import BlogCard from '$lib/components/blog-card.svelte';
	import type { TBlogCardProps } from '$lib/components/blog-card.svelte';
	import Header from '$lib/components/header.svelte';
	import ProjectCard, {
		type TProjectCardProps
	} from '$lib/components/project-card/project-card.svelte';
	import Text from '$lib/components/text/text.svelte';
	import { cn } from '../utils/classname';

	const name = 'Yash Raj';
	const description = 'I build & design people-centric products on the web.';

	const details: Array<TProjectCardProps> = [
		{
			title: 'Space Tourism',
			description:
				'Plan your trip to the outerspace from the comfort of your house. Pick a destination, meet your crew, get equiped with the technology and off you goo.',
			image: {
				src: 'https://images.unsplash.com/photo-1713782894016-01154435f4f4?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
				alt: ''
			}
		},
		{
			color: 'violet',
			title: 'Animeroll',
			description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
			image: {
				src: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
				alt: ''
			}
		},
		{
			color: 'rose',
			title: 'Animeroll',
			description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
			image: {
				src: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
				alt: ''
			}
		}
	];

	const blogs: Array<TBlogCardProps> = [
		{
			title: 'Fixing a Memory Leak in a Production Node.js App',
			publishedDate: '12th May 2021',
			image: {
				src: 'https://images.unsplash.com/photo-1713807868932-f7a77576ac5a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
				alt: ''
			}
		},
		{
			title: 'RSC with Dan Abramov and Joe Savona Live Stream',
			publishedDate: '16 February 2024',
			image: {
				src: 'https://plus.unsplash.com/premium_photo-1670360042387-f1923ea06a8d?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
				alt: ''
			}
		},
		{
			title: "Remix: The Yang to React's Yin",
			publishedDate: '12th May 2021',
			image: {
				src: 'https://plus.unsplash.com/premium_photo-1670360042659-a8637a2fd60e?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
				alt: ''
			}
		},
		{
			title: 'Objects, Arrays and their working in JavaScript',
			publishedDate: '12th May 2021',
			image: {
				src: 'https://images.unsplash.com/photo-1713783475818-3fdb1a156d79?q=80&w=3200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
				alt: ''
			}
		},
		{
			title: 'RSC with Dan Abramov and Joe Savona Live Stream',
			publishedDate: '12th May 2021',
			image: {
				src: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
				alt: ''
			}
		}
	];
</script>

<main class="p-6">
	<Header />

	<div class="flex items-center flex-col justify-center h-[620px] relative">
		<Text variant="h1" class="pb-5 text-stone-900">{name}</Text>
		<Text variant="b1" class=" text-stone-900 max-w-[360px] text-center">{description}</Text>
	</div>

	<div class="relative mt-28 max-w-6xl mx-auto">
		<span
			class={cn(
				'text-stone-200 text-[200px] leading-[1.45] [-webkit-text-fill-color:white] [-webkit-text-stroke:1.5px_rgb(231,229,228)]',
				'absolute left-1/2 -translate-x-1/2 -top-44 w-max h-max -z-10'
			)}>My Work</span
		>

		<div class="space-y-24">
			{#each details as detail}
				<ProjectCard
					color={detail.color}
					title={detail.title}
					image={detail.image}
					description={detail.description}
				/>
			{/each}
		</div>

		<section class="py-32">
			<Text variant="h5" class="pb-8">My Experiences</Text>

			<div class="grid grid-cols-4 gap-x-5 gap-y-10">
				{#each blogs as blog}
					<BlogCard
						title={blog.title}
						image={blog.image}
						classNames={blog.classNames}
						publishedDate={blog.publishedDate}
					/>
				{/each}
			</div>
		</section>
	</div>
</main>
