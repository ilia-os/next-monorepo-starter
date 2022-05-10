import * as React from 'react'
import styles from './MonorepoPromo.module.scss'
import { useRoutesMap, useTranslation } from '@hooks'
import { cx } from '@helpers'

export type TMonorepoPromoProps = {}

/**  */
export const MonorepoPromo: React.FC<TMonorepoPromoProps> = ({}) => {
	const { t } = useTranslation()
	const routes = useRoutesMap(t)

	return (
		<div className={styles.component}>
			<h1 className={styles.title}>
				{'Welcome to '}
				<a href="https://github.com/wget-high/next-monorepo-starter#readme">
					Next.js monorepo!
				</a>
			</h1>

			<p className={styles.description}>
				Get started by editing{' '}
				<code className={styles.code}>pages/index.tsx</code>
			</p>

			<div className={styles.grid}>
				<a
					href="https://github.com/wget-high/next-monorepo-starter#readme"
					className={cx(styles.card, styles.monorepo)}
				>
					<h2>Monorepo documentation &rarr;</h2>
					<p>Find monorepo flight manual</p>
				</a>

				<a href={routes.example.pathname} className={styles.card}>
					<h2>Example page &rarr;</h2>
					<p>Example page with same layout. Routing is performed by next</p>
				</a>

				<a href="https://nextjs.org/docs" className={styles.card}>
					<h2>Documentation &rarr;</h2>
					<p>Find in-depth information about Next.js features and API.</p>
				</a>

				<a href="https://nextjs.org/learn" className={styles.card}>
					<h2>Learn &rarr;</h2>
					<p>Learn about Next.js in an interactive course with quizzes!</p>
				</a>

				<a
					href="https://github.com/vercel/next.js/tree/canary/examples"
					className={styles.card}
				>
					<h2>Examples &rarr;</h2>
					<p>Discover and deploy boilerplate example Next.js projects.</p>
				</a>

				<a
					href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					className={styles.card}
				>
					<h2>Deploy &rarr;</h2>
					<p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
				</a>
			</div>
		</div>
	)
}

export default MonorepoPromo
