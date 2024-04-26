<script context="module" lang="ts">
	export type TBlogCardProps = {
		title: string;
		publishedDate: string;
		image: {
			src: string;
			alt: string;
		};
		classNames?: Partial<{
			image: string;
			title: string;
			publishedDate: string;
		}>;
	};
</script>

<script lang="ts">
	import { cn } from '../../utils/classname';

	import Text from './text/text.svelte';

	export let title: TBlogCardProps['title'];
	export let publishedDate: TBlogCardProps['publishedDate'];
	export let image: TBlogCardProps['image'];
	export let classNames: TBlogCardProps['classNames'];
</script>

<div>
	<div class="h-[400px] pb-4">
		<img
			src={image.src}
			alt={image.alt}
			class={cn('w-full h-full object-cover', classNames?.image)}
		/>
	</div>

	<div class="space-y-2">
		<Text variant="b4" class={cn('capitalize text-stone-500', classNames?.publishedDate)}>
			{publishedDate}
		</Text>

		<Text variant="h5" class={cn('text-2xl font-semibold text-stone-900', classNames?.title)}>
			{title}
		</Text>
	</div>
</div>
