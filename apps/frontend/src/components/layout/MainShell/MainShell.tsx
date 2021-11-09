import * as React from 'react'
import { Container, AppHeader, AppFooter } from '@components'
import styles from './MainShell.module.scss'
import cx from 'classnames'

export type TMainShell = {
	className?: string
}

/** Wrapper around page content implements regular header and footer. */
export const MainShell: React.FC<TMainShell> = ({ children, className }) => {
	return (
		<div className={cx(styles.pageBox, className)}>
      <AppHeader />
			<main className={styles.mainBox}>{children}</main>

			<div className={styles.footerWrapper}>
        <AppFooter />
			</div>
		</div>
	)
}

export default MainShell
