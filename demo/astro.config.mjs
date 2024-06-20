import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'
import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Demo Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			expressiveCode: {
				themes: ['dracula', 'github-light'],
				plugins: [pluginLineNumbers(),pluginCollapsibleSections()],
			  },
			  customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: 'Start Here',
					badge: 'New',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'About', link: '/about/' },
						//{ label: 'New Page', link: '/new-page/' },
						{ label: 'Hello World', link: '/hello-world/' },
					],
				},
				{
					label: 'Custom',
					// Autogenerate a group of links for the 'constellations' directory.
					autogenerate: { directory: 'custom' },
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
