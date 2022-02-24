import React from 'react'
import Document, { DocumentContext, Html, Head, Main, NextScript, DocumentInitialProps } from 'next/document'

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render(): React.ReactElement {
		return (
			<Html>
				<Head>
					{/*<link*/}
					{/*	rel="stylesheet"*/}
					{/*	href='https://fonts.googleapis.com/...'*/}
					{/*/>*/}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
