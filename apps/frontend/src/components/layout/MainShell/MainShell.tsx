import * as React from 'react'
import { AppHeader, AppFooter } from '@components'
import styles from './MainShell.module.scss'
import cx from 'classnames'

export type TMainShell = {
	className?: string
}

/** Wrapper around page content implements regular header and footer. */
export const MainShell: React.FC<TMainShell> = ({ children, className }) => {
	return (
		<div className={cx(styles.wrapper, className)}>
      <AppHeader />
			<main className={styles.content}>{children}</main>
      <AppFooter />
		</div>
	)
}

export default MainShell
