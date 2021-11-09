import * as React from 'react'
import { useMemo } from '@hooks'
import { cx } from '@helpers'
import styles from './Container.module.scss'

export type TContainerProps = {
	bg?: 'primary' | 'secondary' | 'red'
	expand?: boolean
	fullWidth?: boolean
	fullHeight?: boolean
	wide?: boolean
	backgroundContent?: React.FC
	className?: string
}

/**  */
export const Container: React.FC<TContainerProps> = ({ bg, expand, fullWidth, fullHeight, wide, backgroundContent, children, className }) => {
	const componentStyle = useMemo(
		() =>
			({
				'primary': { backgroundColor: '#303030', color: '#FFFFFF' },
				'secondary': { backgroundColor: '#F2F2F2', color: '#303030' },
				'red': { backgroundColor: '#8C2020', color: '#FFFFFF' }
			}[bg || 'secondary']),
		[bg]
	)

	return (
		<div
			className={cx(
				styles.component,
				expand && styles.expandRight,
				fullWidth && styles.fullWidth,
				fullHeight && styles.fullHeight,
				wide && styles.wide,
				className
			)}
			style={componentStyle}
		>
			<div className={styles.content}>{children}</div>
		</div>
	)
}

export default Container
