export type AboutUs = {
	id: number;
	image: string & DirectusFiles;
	translations: string & AboutUsTranslations[];
	persons: string & AboutUsPersons[];
  };
  
  export type AboutUsPersons = {
	id: number;
	about_us_id?: number & AboutUs;
	image: string & DirectusFiles;
	translations: string & AboutUsPersonsTranslations[];
  };
  
  export type AboutUsPersonsTranslations = {
	id: number;
	about_us_persons_id?: number & AboutUsPersons;
	languages_code?: string & Languages;
	name: string;
	text: string;
  };
  
  export type AboutUsTranslations = {
	id: number;
	about_us_id?: number & AboutUs;
	languages_code?: string & Languages;
	title: string;
	text: string;
  };
  
  export type Donation = {
	id: number;
	name: string;
	iban: string;
	bic: string;
	paypal: string;
	translations: string & DonationTranslations[];
  };
  
  export type DonationTranslations = {
	id: number;
	donation_id?: number & Donation;
	languages_code?: string & Languages;
	title: string;
	donation_account: string;
  };
  
  export type Faq = {
	id: number;
	translations: string & FaqTranslations[];
  };
  
  export type FaqTranslations = {
	id: number;
	faq_id?: number & Faq;
	languages_code?: string & Languages;
	question: string;
	answer: string;
  };
  
  export type Goals = {
	id: number;
	image: string & DirectusFiles;
	translations: string & GoalsTranslations[];
  };
  
  export type GoalsTranslations = {
	id: number;
	goals_id?: number & Goals;
	languages_code?: string & Languages;
	title: string;
	text: string;
  };
  
  export type Home = {
	id: string;
	us_left_image: string & DirectusFiles;
	us_right_image: string & DirectusFiles;
	translations: string & HomeTranslations[];
	carousel: string & HomeCarouselEntries[];
  };
  
  export type HomeCarouselEntries = {
	id: number;
	image: string & DirectusFiles;
	home_id?: string & Home;
	translations: string & HomeCarouselEntriesTranslations[];
  };
  
  export type HomeCarouselEntriesTranslations = {
	id: number;
	home_carousel_entries_id: number & HomeCarouselEntries;
	languages_code: string & Languages;
	title: string;
	text: string;
  };
  
  export type HomeTranslations = {
	id: number;
	home_id: string & Home;
	languages_code: string & Languages;
	topical: string;
	topical_content: string;
	more_posts: string;
	us_left_title: string;
	us_right_title: string;
	us_left_text: string;
	us_right_text: string;
  };
  
  export type Imprint = {
	id: number;
	translations: string & ImprintTranslations[];
  };
  
  export type ImprintTranslations = {
	id: number;
	imprint_id?: number & Imprint;
	languages_code?: string & Languages;
	text: string;
  };
  
  export type Languages = {
	code: string;
	name: string;
	direction: string;
  };
  
  export type Layout = {
	id: number;
	translations: string & LayoutTranslations[];
  };
  
  export type LayoutTranslations = {
	id: number;
	layout_id: number & Layout;
	languages_code: string & Languages;
	about_us: string;
	projects: string;
	goals: string;
	news: string;
	donate: string;
	imprint: string;
	faq: string;
	home: string;
	dividernavbar: string;
	""divider-b3x3mu"": string;
  };
  
  export type Post = {
	id: number;
	image: string & DirectusFiles;
	pinned: boolean;
	date?: string;
	translations: string & PostTranslations[];
  };
  
  export type PostTranslations = {
	id: number;
	post_id?: number & Post;
	languages_code?: string & Languages;
	title: string;
	text: string;
  };
  
  export type Projects = {
	id: number;
	image: string & DirectusFiles;
	translations: string & ProjectsTranslations[];
  };
  
  export type ProjectsTranslations = {
	id: number;
	projects_id?: number & Projects;
	languages_code?: string & Languages;
	title: string;
	text: string;
  };
  
  export type DirectusActivity = {
	id: number;
	action: string;
	user?: string & DirectusUsers;
	timestamp: string;
	ip?: string;
	user_agent?: string;
	collection: string;
	item: string;
	comment?: string;
	origin?: string;
	revisions: string & DirectusRevisions[];
  };
  
  export type DirectusCollections = {
	collection: string;
	icon?: string;
	note?: string;
	display_template?: string;
	hidden: boolean;
	singleton: boolean;
	translations?: unknown;
	archive_field?: string;
	archive_app_filter: boolean;
	archive_value?: string;
	unarchive_value?: string;
	sort_field?: string;
	accountability?: string;
	color?: string;
	item_duplication_fields?: unknown;
	sort?: number;
	group?: string & DirectusCollections;
	collapse: string;
	collection_divider: string;
	archive_divider: string;
	sort_divider: string;
	accountability_divider: string;
	duplication_divider: string;
  };
  
  export type DirectusFields = {
	id: number;
	collection: string & DirectusCollections;
	field: string;
	special?: unknown;
	interface?: string;
	options?: unknown;
	display?: string;
	display_options?: unknown;
	readonly: boolean;
	hidden: boolean;
	sort?: number;
	width?: string;
	translations?: unknown;
	note?: string;
	conditions?: unknown;
	required?: boolean;
	group?: string & DirectusFields;
	validation?: unknown;
	validation_message?: string;
  };
  
  export type DirectusFiles = {
	id: string;
	storage: string;
	filename_disk?: string;
	filename_download: string;
	title?: string;
	type?: string;
	folder?: string & DirectusFolders;
	uploaded_by?: string & DirectusUsers;
	uploaded_on: string;
	modified_by?: string & DirectusUsers;
	modified_on: string;
	charset?: string;
	filesize?: number;
	width?: number;
	height?: number;
	duration?: number;
	embed?: string;
	description?: string;
	location?: string;
	tags?: unknown;
	metadata?: unknown;
	storage_divider: string;
  };
  
  export type DirectusFolders = {
	id: string;
	name: string;
	parent?: string & DirectusFolders;
  };
  
  export type DirectusMigrations = {
	version: string;
	name: string;
	timestamp?: string;
  };
  
  export type DirectusPermissions = {
	id: number;
	role?: string & DirectusRoles;
	collection: string;
	action: string;
	permissions?: unknown;
	validation?: unknown;
	presets?: unknown;
	fields?: unknown;
  };
  
  export type DirectusPresets = {
	id: number;
	bookmark?: string;
	user?: string & DirectusUsers;
	role?: string & DirectusRoles;
	collection?: string;
	search?: string;
	layout?: string;
	layout_query?: unknown;
	layout_options?: unknown;
	refresh_interval?: number;
	filter?: unknown;
	icon: string;
	color?: string;
  };
  
  export type DirectusRelations = {
	id: number;
	many_collection: string;
	many_field: string;
	one_collection?: string;
	one_field?: string;
	one_collection_field?: string;
	one_allowed_collections?: unknown;
	junction_field?: string;
	sort_field?: string;
	one_deselect_action: string;
  };
  
  export type DirectusRevisions = {
	id: number;
	activity: number & DirectusActivity;
	collection: string;
	item: string;
	data?: unknown;
	delta?: unknown;
	parent?: number & DirectusRevisions;
  };
  
  export type DirectusRoles = {
	id: string;
	name: string;
	icon: string;
	description?: string;
	ip_access?: unknown;
	enforce_tfa: boolean;
	admin_access: boolean;
	app_access: boolean;
	users: string & DirectusUsers[];
  };
  
  export type DirectusSessions = {
	token: string;
	user?: string & DirectusUsers;
	expires: string;
	ip?: string;
	user_agent?: string;
	share?: string & DirectusShares;
	origin?: string;
  };
  
  export type DirectusSettings = {
	id: number;
	project_name: string;
	project_url?: string;
	project_color?: string;
	project_logo?: string & DirectusFiles;
	public_foreground?: string & DirectusFiles;
	public_background?: string & DirectusFiles;
	public_note?: string;
	auth_login_attempts?: number;
	auth_password_policy?: string;
	storage_asset_transform?: string;
	storage_asset_presets?: unknown;
	custom_css?: string;
	storage_default_folder?: string & DirectusFolders;
	basemaps?: unknown;
	mapbox_key?: string;
	module_bar?: unknown;
	project_descriptor?: string;
	translation_strings?: unknown;
	default_language: string;
	custom_aspect_ratios?: unknown;
	branding_divider: string;
	modules_divider: string;
	security_divider: string;
	files_divider: string;
	map_divider: string;
	image_editor: string;
  };
  
  export type DirectusUsers = {
	id: string;
	first_name?: string;
	last_name?: string;
	email?: string;
	password?: string;
	location?: string;
	title?: string;
	description?: string;
	tags?: unknown;
	avatar?: string & DirectusFiles;
	language?: string;
	theme?: string;
	tfa_secret?: string;
	status: string;
	role?: string & DirectusRoles;
	token?: string;
	last_access?: string;
	last_page?: string;
	provider: string;
	external_identifier?: string;
	auth_data?: unknown;
	email_notifications?: boolean;
	preferences_divider: string;
	admin_divider: string;
  };
  
  export type DirectusWebhooks = {
	id: number;
	name: string;
	method: string;
	url: string;
	status: string;
	data: boolean;
	actions: unknown;
	collections: unknown;
	headers?: unknown;
	triggers_divider: string;
  };
  
  export type DirectusDashboards = {
	id: string;
	name: string;
	icon: string;
	note?: string;
	date_created?: string;
	user_created?: string & DirectusUsers;
	color?: string;
	panels: string & DirectusPanels[];
  };
  
  export type DirectusPanels = {
	id: string;
	dashboard: string & DirectusDashboards;
	name?: string;
	icon?: string;
	color?: string;
	show_header: boolean;
	note?: string;
	type: string;
	position_x: number;
	position_y: number;
	width: number;
	height: number;
	options?: unknown;
	date_created?: string;
	user_created?: string & DirectusUsers;
  };
  
  export type DirectusNotifications = {
	id: number;
	timestamp?: string;
	status?: string;
	recipient: string & DirectusUsers;
	sender?: string & DirectusUsers;
	subject: string;
	message?: string;
	collection?: string;
	item?: string;
  };
  
  export type DirectusShares = {
	id: string;
	name?: string;
	collection?: string & DirectusCollections;
	item?: string;
	role?: string & DirectusRoles;
	password?: string;
	user_created?: string & DirectusUsers;
	date_created?: string;
	date_start?: string;
	date_end?: string;
	times_used?: number;
	max_uses?: number;
  };
  
  export type DirectusFlows = {
	id: string;
	name: string;
	icon?: string;
	color?: string;
	description?: string;
	status: string;
	trigger?: string;
	accountability?: string;
	options?: unknown;
	operation?: string & DirectusOperations;
	date_created?: string;
	user_created?: string & DirectusUsers;
	operations: string & DirectusOperations[];
  };
  
  export type DirectusOperations = {
	id: string;
	name?: string;
	key: string;
	type: string;
	position_x: number;
	position_y: number;
	options?: unknown;
	resolve?: string & DirectusOperations;
	reject?: string & DirectusOperations;
	flow: string & DirectusFlows;
	date_created?: string;
	user_created?: string & DirectusUsers;
  };
  
  export type CustomDirectusTypes = {
	about_us: AboutUs;
	about_us_persons: AboutUsPersons;
	about_us_persons_translations: AboutUsPersonsTranslations;
	about_us_translations: AboutUsTranslations;
	donation: Donation;
	donation_translations: DonationTranslations;
	faq: Faq;
	faq_translations: FaqTranslations;
	goals: Goals;
	goals_translations: GoalsTranslations;
	home: Home;
	home_carousel_entries: HomeCarouselEntries;
	home_carousel_entries_translations: HomeCarouselEntriesTranslations;
	home_translations: HomeTranslations;
	imprint: Imprint;
	imprint_translations: ImprintTranslations;
	languages: Languages;
	layout: Layout;
	layout_translations: LayoutTranslations;
	post: Post;
	post_translations: PostTranslations;
	projects: Projects;
	projects_translations: ProjectsTranslations;
	directus_activity: DirectusActivity;
	directus_collections: DirectusCollections;
	directus_fields: DirectusFields;
	directus_files: DirectusFiles;
	directus_folders: DirectusFolders;
	directus_migrations: DirectusMigrations;
	directus_permissions: DirectusPermissions;
	directus_presets: DirectusPresets;
	directus_relations: DirectusRelations;
	directus_revisions: DirectusRevisions;
	directus_roles: DirectusRoles;
	directus_sessions: DirectusSessions;
	directus_settings: DirectusSettings;
	directus_users: DirectusUsers;
	directus_webhooks: DirectusWebhooks;
	directus_dashboards: DirectusDashboards;
	directus_panels: DirectusPanels;
	directus_notifications: DirectusNotifications;
	directus_shares: DirectusShares;
	directus_flows: DirectusFlows;
	directus_operations: DirectusOperations;
  };
  