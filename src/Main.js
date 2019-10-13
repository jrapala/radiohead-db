import React, { Fragment } from 'react'
import SongPicker from './SongPicker'
import AlbumPicker from './AlbumPicker'
import AlbumInfo from './AlbumInfo'

const albums = []

const Main = () => {
	const handleAlbumSelection = event => {
		console.log(event.target.value)
	}

	return (
		<Fragment>
			<SongPicker />
			<AlbumPicker handleAlbumSelection={handleAlbumSelection} />
			{albums.forEach(album => (
				<AlbumInfo album={album} />
			))}
		</Fragment>
	)
}

export default Main
