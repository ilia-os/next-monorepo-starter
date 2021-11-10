import * as React from 'react'
import type { GetServerSideProps, GetStaticProps, GetStaticPaths, NextPage } from '@typings'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { ErrorBoundary, NextSeo, MainShell, Link } from '@components'
import { useTranslation, useRouter, useEffect } from '@hooks'
import { titleTemplate } from '@constants'

export type TExamplePageProps = {}

/**  */
const ExamplePage: NextPage<TExamplePageProps> = (props) => {
	const { t } = useTranslation(['common'])

	return (
		<ErrorBoundary>
			<NextSeo title="" titleTemplate={titleTemplate} />
			<MainShell>
				<div>ExamplePage</div>
				<br />
				<Link href="/">
					<a>GO TO MAIN</a>
				</Link>
			</MainShell>
		</ErrorBoundary>
	)
}

export const getStaticProps: GetStaticProps<TExamplePageProps> = async ({ locale, locales, params, preview, previewData }) => {
	return {
		props: {
			...await serverSideTranslations(String(locale), ['common']),
		},
		revalidate: false, // false or number in seconds.
	}
}

// export const getStaticPaths: GetStaticPaths = async  () =>  {
//    const paths = [
//      { params: { id: '1' } }
//    ]
//   return {
//     paths,
//     fallback: false, // false = will return 404 page, true = let's use router.isFallback.
//   };
// }

// export const getServerSideProps: GetServerSideProps<TProps> = async ({ params, query, req, res }) => {
// 	return {
//      props: {
// 			...await serverSideTranslations(locale, ['common']),
// 		},
// 	}
// }

export default ExamplePage
