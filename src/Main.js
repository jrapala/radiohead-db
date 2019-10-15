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
			{albums &&
				albums.map(album => (
					<AlbumInfo key={album.title} album={album} />
				))}
		</Fragment>
	)
}

export default Main
