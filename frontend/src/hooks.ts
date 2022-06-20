import { detectLocale } from '$i18n/i18n-util'
import type { GetSession } from '@sveltejs/kit'
import type { RequestEvent } from '@sveltejs/kit/types/private'
import { initAcceptLanguageHeaderDetector } from 'typesafe-i18n/detectors'

export const getSession: GetSession = (event) => {
	// detect the preferred language the user has configured in his browser
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language
	const headers = getHeaders(event)

	if (headers.cookie) {
		const locale = headers.cookie.match(/(?<=lang=)(.*?)(?=\s*;|$)/)[0]
		if (locale) {
			return { locale }
		}
	} else {
		const acceptLanguageDetector = initAcceptLanguageHeaderDetector({ headers })
		const locale = detectLocale(acceptLanguageDetector)

		return {
			locale,
		}
	}
}

const getHeaders = (event: RequestEvent) => {
	const headers: Record<string, string> = {}
	event.request.headers.forEach((value, key) => (headers[key] = value))

	return headers
}
