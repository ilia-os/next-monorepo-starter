import * as React from 'react'
import { useTranslation } from '@hooks'
import styles from './AppFooter.module.scss'
import { Container } from '@components'

export type TAppFooterProps = {}

/**  */
export const AppFooter: React.FC<TAppFooterProps> = ({}) => {
	const { t } = useTranslation(['common'])

	return (
    <Container bg='primary'>
      <div className={styles.component}>
        {t('common:Footer')}
      </div>
    </Container>
	)
}

export default AppFooter
