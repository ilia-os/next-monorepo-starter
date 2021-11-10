import { TRouteMapItem, TRouteName } from '@typings'

const NOOP_TRANSLATE_FN = (value: string): string => value

const routesMap = (t = NOOP_TRANSLATE_FN): Record<TRouteName, TRouteMapItem> => ({
	landing: { pathname: '/', title: t('common:pages.landing'), sections: ['header'] },
	example: { pathname: '/example', title: t('common:pages.example'), sections: ['header'] }
})

export default routesMap
