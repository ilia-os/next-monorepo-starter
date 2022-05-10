import { TRouteMapItem, TRouteName } from '@types'

const NOOP_TRANSLATE_FN = (value: string): string => value

export const routesMap = (
	t = NOOP_TRANSLATE_FN
): Record<TRouteName, TRouteMapItem> => ({
	home: {
		pathname: '/',
		title: t('common:pages.home.title'),
		sections: ['header'],
	},
})

export default routesMap
