// --- Pages/Components ---
export type Navbar = {
	logo: Image;
	translations: Translation[] &
		{
			home: string;
			association: string;
			conferences: string;
			news: string;
			sponsoring: string;
		}[];
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

export type Sponsoring = {
	translations: Translation[] &
		{
			title: string;
			text: string;
			sponsoring_title: string;
			sponsoring_text: string;
			sponsoring_button: string;
			donation_title: string;
			donation_text: string;
			donation_button: string;
			membership_title: string;
			membership_text: string;
			membership_download_form: string;
			membership_send_form: string;
			current_sponsors: string;
		}[];
	sponsoring_button_link: string;
	donation_button_link: string;
	membership_form: { id: string };
	membership_form_send_link: string;
};

export type BBVN = {
	translations: Translation[] &
		{ introduction: string; book_now: string; contact: string }[];
	modules: {
		bbvn_modules_id: {
			image: Image;
			translations: Translation[] &
				{
					title: string;
					target_group: string;
					scope: string;
					methods: string;
					goals: string;
					details: string;
				}[];
		};
	}[];
};

export type News = {
	id: string;
	image: Image;
	/**
	 * Timestamp of creation
	 */
	date_created: number;
	translations: Translation[] & { title: string; text: string }[];
};

export type Sponsor = {
	image: Image;
	website: string;
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
	filename_disk: string;
};
