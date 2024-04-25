import { cva } from 'class-variance-authority';

export const textStyles = cva('', {
	variants: {
		variant: {
			h1: 'text-8xl font-bold',
			h2: 'text-7xl font-bold',
			h3: 'text-6xl font-bold',
			h4: 'text-5xl font-bold',
			h5: 'text-4xl font-bold',
			b1: 'text-2xl font-normal',
			b2: 'text-xl font-normal',
			b3: 'text-base font-normal',
			b4: 'text-sm font-normal',
			b5: 'text-xs font-normal',
			'b1-light': 'text-2xl font-light',
			'b2-light': 'text-xl font-light',
			'b3-light': 'text-base font-light',
			'b4-light': 'text-sm font-light',
			'b5-light': 'text-xs font-light'
		}
	}
});
