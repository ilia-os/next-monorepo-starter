import React, { useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export type TPortalProps = {
	selector?: string
	children: React.ReactNode
}

/** React Portal which renders children into html tag which can be found with passed selector. */
const Portal: React.FC<TPortalProps> = ({ children, selector = '#modal' }) => {
	const ref = useRef<Element | null>(null)
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		ref.current = document.querySelector(selector)
		setMounted(true)
	}, [selector])

	return mounted && ref.current ? createPortal(children, ref.current) : null
}

export default Portal
