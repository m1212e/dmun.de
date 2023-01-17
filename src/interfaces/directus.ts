// --- Pages/Components ---
export type Navbar = {
	logo: Image;
	translations: Translation[] &
		{ home: string; association: string; conferences: string; news: string }[];
};

export type Footer = {
	translations: Translation[] & { imprint: string }[];
};

export type Imprint = {
	translations: Translation[] & { text: string }[];
};

export type Home = {
	translations: Translation[] &
		{
			title: string;
			subtitle: string;
			conferences: string;
			association: string;
			section1_heading: string;
			section1_text: string;
			section2_heading: string;
			section2_text: string;
			section3_heading: string;
			section3_text: string;
		}[];
	main_image: Image;
	section1_image: Image;
	section2_image: Image;
	section3_image: Image;
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
