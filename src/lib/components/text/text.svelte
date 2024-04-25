<script lang="ts">
	import { cva, type VariantProps, cx } from 'class-variance-authority';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	const text = cva('', {
		variants: {
			variant: {
				h1: 'text-4xl font-bold',
				h2: 'text-3xl font-bold',
				h3: 'text-2xl font-bold',
				h4: 'text-xl font-bold',
				h5: 'text-lg font-bold',
				b1: 'text-base font-normal',
				b2: 'text-sm font-normal',
				b3: 'text-xs font-normal',
				b4: 'text-xs font-light',
				b5: 'text-xs font-light'
			}
		}
	});

	interface $$Props extends HTMLButtonAttributes, VariantProps<typeof text> {}

	type TTextVariants = VariantProps<typeof text>['variant'];
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
		b5: 'p'
	};

	let textVariant = variantToHtmlElementMap[variant ?? 'b1'];
</script>

<!-- render different html elements depending on the variant passed as prop -->
<svelte:element this={textVariant} class={cx(text({ variant }), $$props.class)}>
	<slot />
</svelte:element>
