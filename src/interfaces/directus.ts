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
			section2_button: string;
			section3_heading: string;
			section3_text: string;
			section3_button: string;
			sponsors: string;
		}[];
	main_image: Image;
	section1_image: Image;
	section2_image: Image;
	section3_image: Image;
	sponsors: { sponsors_id: { image: Image; website: string } }[];
};

export type Association = {
	translations: Translation[] &
		{
			title: string;
			text: string;
			text_left: string;
			button_left: string;
			text_right: string;
			commitment_title: string;
			commitment_text: string;
			commitment_button: string;
			board_title: string;
			member_title: string;
			member_text: string;
			junon_title: string;
			junon_text: string;
			junon_button: string;
		}[];
	leaf_image: Image;
	junon_image: Image;
	junon_link: string;
};

export type Conference = {
	translations: Translation[] & { text: string }[];
	name: string;
	logo: Image;
	state:
		| "DE-BW"
		| "DE-BE"
		| "DE-BY"
		| "DE-BB"
		| "DE-HB"
		| "DE-HH"
		| "DE-HE"
		| "DE-MV"
		| "DE-NI"
		| "DE-NW"
		| "DE-RP"
		| "DE-SL"
		| "DE-SN"
		| "DE-ST"
		| "DE-SH"
		| "DE-TH";
	website: string;
};

export type ModelUN = {
	translations: Translation[] & { text: string; testemonials: string }[];
};

export type YearlyTopic = {
	id: string;
	translations: Translation[] & { title: string; text: string }[];
};

export type Board = {
	name: string;
	image: Image;
	translations: Translation[] & { role: string }[];
};

export type BBVN = {
	translations: Translation[] &
		{ introduction: string; book_now: string; contact: string }[];
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
