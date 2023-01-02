// --- Pages/Components ---
export type Navbar = {
	logo: Image;
	translations: Translation[] &
		{ home: string; association: string; conferences: string; news: string }[];
};

export type Footer = {
	translations: Translation[] &
		{ imprint: string }[];
};

// --- System ---
export type DirectusType = {
	languages: Languages;
	navbar: Navbar;
};

type Languages = {
	code: string;
	name: string;
};

export type Translation = {
	languages_code: { code: string };
};

export type Image = {
	id: string;
};
