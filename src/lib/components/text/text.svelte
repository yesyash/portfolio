<script lang="ts">
	import { cva, type VariantProps, cx } from 'class-variance-authority';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	const text = cva('', {
		variants: {
			variant: {
				'bg-h1': 'text-4xl font-bold',
				'bg-h2': 'text-3xl font-bold',
				'bg-h3': 'text-2xl font-bold',
				'bg-h4': 'text-xl font-bold',
				'bg-h5': 'text-lg font-bold',
				'bg-b1': 'text-base font-normal',
				'bg-b2': 'text-sm font-normal',
				'bg-b3': 'text-xs font-normal',
				'bg-b4': 'text-xs font-light',
				'bg-b5': 'text-xs font-light',
				'bg-b1-light': 'text-base font-light',
				'bg-b2-light': 'text-sm font-light'
			}
		}
	});

	interface $$Props extends HTMLButtonAttributes, VariantProps<typeof text> {}

	type TTextVariants = VariantProps<typeof text>['variant'];
	export let variant: TTextVariants = 'bg-b1';

	const variantToHtmlElementMap: Record<NonNullable<TTextVariants>, string> = {
		'bg-h1': 'h1',
		'bg-h2': 'h2',
		'bg-h3': 'h3',
		'bg-h4': 'h4',
		'bg-h5': 'h5',
		'bg-b1': 'p',
		'bg-b2': 'p',
		'bg-b3': 'p',
		'bg-b4': 'p',
		'bg-b5': 'p',
		'bg-b1-light': 'p',
		'bg-b2-light': 'p'
	};

	let textVariant = variantToHtmlElementMap[variant ?? 'bg-b1'];
</script>

<!-- render different html elements depending on the variant passed as prop -->
<svelte:element this={textVariant} class={cx(text({ variant }), $$props.class)}>
	<slot />
</svelte:element>
