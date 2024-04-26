<script context="module" lang="ts">
	const projectCardStyles = cva(['backdrop-blur-sm relative overflow-hidden', 'p-20 h-[645px]'], {
		variants: {
			color: {
				blue: 'bg-blue-200/20 text-blue-900',
				violet: 'bg-violet-50 text-violet-900',
				rose: 'bg-rose-50 text-rose-900'
			}
		}
	});

	type TProjectCardVariants = VariantProps<typeof projectCardStyles>;

	export type TProjectCardProps = TProjectCardVariants &
		TClass & {
			title: string;
			description: string;
			image: {
				src: string;
				alt: string;
			};
		};
</script>

<script lang="ts">
	import { cva, type VariantProps } from 'class-variance-authority';
	import type { TClass } from '../common/class.type';
	import Text from '../text/text.svelte';
	import { cn } from '../../../utils/classname';

	interface $$Props extends TProjectCardProps {}

	export let color: TProjectCardProps['color'] = 'blue';
	export let title: TProjectCardProps['title'];
	export let description: TProjectCardProps['description'];
	export let image: TProjectCardProps['image'];
</script>

<div class={cn(projectCardStyles({ color }), $$props.class)}>
	<div class="space-y-6">
		<Text variant="h3">{title}</Text>
		<Text variant="b3-light" class="max-w-[350px]">{description}</Text>
	</div>

	<img
		src={image.src}
		alt={image.alt}
		class={cn(
			'absolute shadow-[0px_0px_57.71208190917969px_rgba(0.18039216101169586,0.062745101749897,0.3960784375667572,0.30000001192092896)]',
			'shadow-[0px_0px_115.42416381835938px_rgba(0.2980392277240753,0.11372549086809158,0.5843137502670288,0.30000001192092896)]',
			'top-48 -right-36 w-[800px] h-auto rounded-3xl'
		)}
	/>
</div>
