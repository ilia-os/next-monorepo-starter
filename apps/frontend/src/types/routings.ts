import React from 'react'
import type { TFunction } from 'next-i18next'

export type TRoutesSection = 'header' | null

export type TRouteName = 'landing' | 'example'

export type TRouteMapItem = {
	pathname: string
	title: string
	sections: TRoutesSection[]
	icon?: React.ReactNode
}

export type TRouteMap = Record<string, TRouteMapItem>
export type TRouteMapGetter = (t: TFunction) => Record<string, TRouteMapItem>
