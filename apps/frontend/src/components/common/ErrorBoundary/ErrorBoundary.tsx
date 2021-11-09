import React, { Component, ErrorInfo } from 'react'

class ErrorBoundary extends Component {
	state = { hasError: false }

	componentDidCatch(error: Error, info: ErrorInfo) {
		console.error('ErrorBoundary caught an error:')
		console.error(error) // TODO Send errors to bug tracker.
		this.setState({ hasError: true })
	}

	render() {
		if (this.state.hasError) {
			return <h1>Sorry, an error has occurred, we logged a ticket automatically</h1>
		}
		return this.props.children
	}
}

export default ErrorBoundary
