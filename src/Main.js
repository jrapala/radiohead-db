import React, { Fragment } from 'react'
import SongPicker from './SongPicker'
import AlbumPicker from './AlbumPicker'
import AlbumInfo from './AlbumInfo'

const albums = []

const Main = () => {
	return (
		<Fragment>
			<SongPicker />
			<AlbumPicker />
			{albums.forEach(album => (
				<AlbumInfo album={album} />
			))}
		</Fragment>
	)
}

export default Main
