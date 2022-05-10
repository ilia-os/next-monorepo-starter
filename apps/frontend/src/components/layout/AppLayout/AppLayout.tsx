import * as React from 'react'
import styles from './AppLayout.module.scss'
import { useTranslation } from '@hooks'
import { cx } from '@helpers'
import { DefaultSeo, Footer, Header } from '@components'
import { titleTemplate } from '@constants'

export type TAppLayoutProps = {
	children: React.ReactNode
}

/**  */
export const AppLayout: React.FC<TAppLayoutProps> = ({ children }) => {
	const { t } = useTranslation(['common'])

	return (
		<>
			<DefaultSeo
				defaultTitle={t('common:org.name')} // TODO change me in locales
				titleTemplate={titleTemplate}
			/>

			<Header />

			<div className={styles.component}>
				<main className={styles.content}>{children}</main>
				<Footer />
			</div>
		</>
	)
}

export default AppLayout
