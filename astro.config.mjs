// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import playformInline from "@playform/inline";
import netlify from "@astrojs/netlify";
import tailwindcss from "@tailwindcss/vite";
import sitemap from '@astrojs/sitemap';
// https://astro.build/config
export default defineConfig({
	site: "https://www.villacontrol.online",
	base: "/",
	integrations: [mdx(), playformInline({ Critters: true })],
	output: "static",
	devToolbar: {
		enabled: false,
	},
	trailingSlash:'ignore',
	adapter: sitemap(),
	vite: {
		plugins: [tailwindcss()],
	},
});
