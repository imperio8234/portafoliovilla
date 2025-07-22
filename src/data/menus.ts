import type { MainMenuItem, MenuNavigation } from "~/types";

export const menuMain: MainMenuItem[] = [
	{
		id: "home",
		label: "Home",
		url: "/",
	},
	{
		id: "solu",
		label: "Soluciones",
		url: "/soluciones",
	},
	{
		id: "about",
		label: "About",
		url: "/about-us",
		submenu: [
			{ id: "testimonials", label: "Testimonials", url: "/about-us/testimonials" },
		],
	},
	{
		id: "servicios",
		label: "Servicios",
		url: "/services",
		submenu: [
			{ id: "desarrollo", label: "Desarrollo a medida", url: "/services/desarrollo" },
			{ id: "mantenimiento", label: "Mantenimiento y soporte", url: "/services/mantenimiento" },
			{ id: "automatizaciones", label: "Automatizaciones con IA", url: "/services/automatizaciones" },
		],
	},
	{
		id: "blog",
		label: "Blog",
		url: "/blog",
	},
];

export const menuNavigation: MenuNavigation = {
	prettyName: "Navigation",
	items: [
		{ name: "Home", url: "/" },
		{ name: "Soluciones", url: "/soluciones" },
		{ name: "About Us", url: "/about-us" },
		{ name: "Servicios", url: "/servicios" },
		{ name: "Blog", url: "/blog" },
	],
};

export const menuService: MenuNavigation = {
	prettyName: "Service",
	items: [
		{ name: "Home", url: "/" },
		{ name: "Soluciones", url: "/soluciones" },
		{ name: "About Us", url: "/about-us" },
		{ name: "Servicios", url: "/servicios" },
		{ name: "Blog", url: "/blog" },
	],
};

export const menuMisc: MenuNavigation = {
	prettyName: "Miscellaneous",
	items: [
		{ name: "Home", url: "/" },
		{ name: "Soluciones", url: "/soluciones" },
		{ name: "About Us", url: "/about-us" },
		{ name: "Servicios", url: "/servicios" },
		{ name: "Blog", url: "/blog" },
	],
};

export const menuLegal: MenuNavigation = {
	prettyName: "Legal",
	items: [
		{ name: "Home", url: "/" },
		{ name: "Soluciones", url: "/soluciones" },
		{ name: "About Us", url: "/about-us" },
		{ name: "Servicios", url: "/servicios" },
		{ name: "Blog", url: "/blog" },
	],
};
