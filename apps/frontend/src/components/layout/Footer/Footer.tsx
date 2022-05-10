import * as React from 'react'
import styles from './Footer.module.scss'
import { VercelLogo } from '@icons'

export type TFooterProps = {}

/**  */
export const Footer: React.FC<TFooterProps> = ({}) => {
	return (
		<footer className={styles.component}>
			<a
				href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
				target="_blank"
				rel="noopener noreferrer"
			>
				Powered by{' '}
				<span className={styles.logo}>
					<VercelLogo width={72} height={16} />
				</span>
			</a>
		</footer>
	)
}

export default Footer
