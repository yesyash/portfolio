<script lang="ts">
	import { type VariantProps } from 'class-variance-authority';
	import { textStyles } from './text-styles';
	import type { TClass } from '../common/class.type';
	import { cn } from '../../../utils/classname';

	interface $$Props extends VariantProps<typeof textStyles>, TClass {}

	type TTextVariants = VariantProps<typeof textStyles>['variant'];
	export let variant: TTextVariants = 'b1';

	const variantToHtmlElementMap: Record<NonNullable<TTextVariants>, string> = {
		h1: 'h1',
		h2: 'h2',
		h3: 'h3',
		h4: 'h4',
		h5: 'h5',
		b1: 'p',
		b2: 'p',
		b3: 'p',
		b4: 'p',
		b5: 'p',
		'b1-light': 'p',
		'b2-light': 'p',
		'b3-light': 'p',
		'b4-light': 'p',
		'b5-light': 'p'
	};

	let textVariant = variantToHtmlElementMap[variant ?? 'b1'];
</script>

<!-- render different html elements depending on the variant passed as prop -->
<svelte:element this={textVariant} class={cn(textStyles({ variant }), $$props.class)}>
	<slot />
</svelte:element>
