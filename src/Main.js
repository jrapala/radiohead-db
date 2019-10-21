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

const Main = () => {
	const [userSelectedAlbumId, setUserSelectedAlbumId] = useState()
	const [albumResults, setAlbumResults] = useState()

	const { loading, error, data } = useQuery(GET_ALBUM, {
		variables: { id: userSelectedAlbumId },
		skip: !userSelectedAlbumId,
		onCompleted: data => {
			setAlbumResults([data.findAlbumById])
		},
	})

	const handleAlbumSelection = event => {
		event.target.value
			? setUserSelectedAlbumId(event.target.value)
			: setAlbumResults()
	}

	return (
		<Fragment>
			<SongPicker />
			<AlbumPicker handleAlbumSelection={handleAlbumSelection} />
			{albumResults &&
				albumResults.map(album => (
					<AlbumInfo key={album.title} album={album} />
				))}
		</Fragment>
	)
}

export default Main
