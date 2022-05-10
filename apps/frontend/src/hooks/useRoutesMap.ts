import { useMemo } from 'react'
import { TFunction, TRouteMapItem, TRouteName } from '@types'
import { routesMap } from '@constants'

export const useRoutesMap = (t?: TFunction) =>
	useMemo<Record<TRouteName, TRouteMapItem>>(() => routesMap(t), [t])
