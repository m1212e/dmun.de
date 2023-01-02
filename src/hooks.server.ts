import type { RequestEvent } from '.svelte-kit/types/src/routes/$types';
import { setLanguage } from './services/language';

export async function handle({ event, resolve }: { event: RequestEvent; resolve: any }) {
	if (event.cookies.get('lang')) {
		setLanguage(event.cookies.get('lang')!);
	} else if (event.request.headers.get('Accept-Language')) {
		setLanguage(event.request.headers.get('Accept-Language')!.split(',')[0]!);
	}
	return resolve(event);
}
