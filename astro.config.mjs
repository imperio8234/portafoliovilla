// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import playformInline from "@playform/inline";
import vercel from "@astrojs/vercel/static"; 
import tailwindcss from "@tailwindcss/vite";
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: "https://www.villacontrol.online",
	base: "/",
	integrations: [
		mdx(), 
		playformInline({ Critters: true }),
		sitemap() // sitemap va en integrations, no en adapter
	],
	output: "static",
	// @ts-ignore
	adapter: vercel(), // Adapter correcto para Vercel
	devToolbar: {
		enabled: false,
	},
	trailingSlash: 'ignore',
	vite: {
		plugins: [tailwindcss()],
	},
});