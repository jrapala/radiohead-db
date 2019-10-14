import React, { Fragment, useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import SongPicker from './SongPicker'
import AlbumPicker from './AlbumPicker'
import AlbumInfo from './AlbumInfo'

const GET_ALBUM = gql`
	query($id: ID!) {
		findAlbumById(id: $id) {
			title
			releaseYear
			songs {
				songTitle
			}
		}
	}
`

const albums = []

const Main = () => {
	const [album, selectAlbum] = useState()
	const { loading, error, data } = useQuery(GET_ALBUM, {
		variables: { id: album },
		skip: !album,
	})

	const handleAlbumSelection = event => {
		selectAlbum(event.target.value)
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
