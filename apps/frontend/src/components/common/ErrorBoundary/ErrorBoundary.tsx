import React, { Component, ErrorInfo } from 'react'

class ErrorBoundary extends Component {
	state = { hasError: false }

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	componentDidCatch(error: Error, info: ErrorInfo) {
		console.error('ErrorBoundary caught an error:')
		console.error(error) // TODO Send errors to bug tracker.
		this.setState({ hasError: true })
	}

	render() {
		if (this.state.hasError) {
			return (
				<h1>Sorry, an error has occurred, we logged a ticket automatically</h1>
			)
		}
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		return this.props.children as React.ReactNode
	}
}

export default ErrorBoundary
