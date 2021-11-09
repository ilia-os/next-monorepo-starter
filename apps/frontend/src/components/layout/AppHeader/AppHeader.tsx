import * as React from 'react'
import { useTranslation } from '@hooks'
import styles from './AppHeader.module.scss'
import { routesMap } from '@constants'
import { Container, Link } from '@components'

export type TAppHeaderProps = {}

/**  */
export const AppHeader: React.FC<TAppHeaderProps> = ({}) => {
	const { t } = useTranslation(['common'])
	const routes = routesMap(t)
	const links = Object.entries(routes).filter((e) => e[1].sections.includes('header'))

	return (
    <Container bg='primary'>
      <div className={styles.component}>
        {t('common:Header')}
        {links.map(([key, link]) => (
          <Link href={link.pathname} key={key}>
            <a className={styles.link}>
              {link.title}
            </a>
          </Link>
        ))}
      </div>
    </Container>
	)
}

export default AppHeader
