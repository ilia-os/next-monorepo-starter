import React from 'react'
import Document, {
	DocumentContext,
	DocumentInitialProps,
	Head,
	Html,
	Main,
	NextScript,
} from 'next/document'

class MyDocument extends Document {
	static async getInitialProps(
		ctx: DocumentContext
	): Promise<DocumentInitialProps> {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render(): React.ReactElement {
		return (
			<Html>
				<Head>
					<link rel="icon" href="/favicon.ico" sizes="any" />
				</Head>

				<body>
					<Main />

					{/* Here we will mount our modal portal */}
					<div id="modal" />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
