import * as React from 'react'
import styles from './Header.module.scss'
import { useRoutesMap, useTranslation } from '@hooks'
import { Link } from '@components'

export type THeaderProps = {}

/**  */
export const Header: React.FC<THeaderProps> = ({}) => {
	const { t } = useTranslation(['common'])
	const routesMap = useRoutesMap(t)

	return (
		<header className={styles.component}>
			<Link href={routesMap.home.pathname} title={routesMap.home.title}>
				<a className={styles.logo}>
					{t('common:org.name')
						.split(' ')
						.map((i) => i[0])}
				</a>
			</Link>
			<ul className={styles.menu}>
				{Object.entries(routesMap)
					.filter(([key, route]) => route.sections.includes('header'))
					.map(([key, route]) => (
						<li className={styles.item} key={key}>
							<Link href={route.pathname} title={route.title}>
								<a>{route.title}</a>
							</Link>
						</li>
					))}
			</ul>
		</header>
	)
}

export default Header
