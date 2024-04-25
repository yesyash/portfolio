<script lang="ts">
	import { cva, type VariantProps, cx } from 'class-variance-authority';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { textStyles } from './text-styles';

	interface $$Props extends HTMLButtonAttributes, VariantProps<typeof textStyles> {}

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
<svelte:element this={textVariant} class={cx(textStyles({ variant }), $$props.class)}>
	<slot />
</svelte:element>
