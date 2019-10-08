import React, { Fragment } from 'react'
import { render } from 'react-dom'
import Logo from './images/logo.svg'
import InputRow from './InputRow'
import AlbumInfo from './AlbumInfo'

const albums = []

const App = () => {
	return (
		<Fragment>
			<img src={Logo} alt="Radiohead Logo" />
			<h2>Album Database</h2>
			<InputRow label="Find a Song:" type="song" />
			<InputRow label="View an Album:" type="album" />
			{albums.forEach(album => (
				<AlbumInfo album={album} />
			))}
		</Fragment>
	)
}

render(React.createElement(App), document.getElementById('root'))
