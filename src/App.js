import React, { Fragment } from 'react'
import { render } from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

import Logo from './images/logo.svg'
import SongPicker from './SongPicker'
import AlbumPicker from './AlbumPicker'
import AlbumInfo from './AlbumInfo'

const client = new ApolloClient({
	uri: 'http://localhost:4000/',
})

const albums = []

const App = () => {
	return (
		<ApolloProvider client={client}>
			<Fragment>
				<img src={Logo} alt="Radiohead Logo" />
				<h2>Album Database</h2>
				<SongPicker />
				<AlbumPicker />
				{albums.forEach(album => (
					<AlbumInfo album={album} />
				))}
			</Fragment>
		</ApolloProvider>
	)
}

render(React.createElement(App), document.getElementById('root'))
