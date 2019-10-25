import React, { Fragment } from 'react'
import { render } from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

import Logo from './images/logo.svg'
import Main from './Main'

const client = new ApolloClient({
	// uri: 'http://localhost:4000/',
	uri: 'https://m9xrgmtc3a.execute-api.us-east-1.amazonaws.com/dev/graphql',
	fetchOptions: {
		mode: 'no-cors',
	},
	// uri: 'http://localhost:1234/dev/graphql',
})

const App = () => {
	return (
		<ApolloProvider client={client}>
			<Fragment>
				<img src={Logo} alt="Radiohead Logo" />
				<h2>Album Database</h2>
				<Main />
			</Fragment>
		</ApolloProvider>
	)
}

render(React.createElement(App), document.getElementById('root'))
