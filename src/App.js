import React, { Fragment } from 'react'
import { render } from 'react-dom'
import Logo from './images/logo.svg'
import SongPicker from './SongPicker'
import AlbumPicker from './AlbumPicker'
import AlbumInfo from './AlbumInfo'

const albums = []

const App = () => {
	return (
		<Fragment>
			<img src={Logo} alt="Radiohead Logo" />
			<h2>Album Database</h2>
			<SongPicker />
			<AlbumPicker />
			{albums.forEach(album => (
				<AlbumInfo album={album} />
			))}
		</Fragment>
	)
}

render(React.createElement(App), document.getElementById('root'))
