import React, { Fragment, useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import useSongPicker from './useSongPicker'
import useAlbumPicker from './useAlbumPicker'
import AlbumInfo from './AlbumInfo'

const GET_ALBUM_BY_ALBUM_ID = gql`
	query($id: ID!) {
		findAlbumById(id: $id) {
			title
			releaseYear
			songs {
				id
				songTitle
			}
		}
	}
`

const GET_ALBUM_BY_SONG_ID = gql`
	query($id: ID!) {
		findSongById(id: $id) {
			recordings {
				album {
					title
					releaseYear
					songs {
						id
						songTitle
					}
				}
			}
		}
	}
`

const GET_ALL_ALBUMS = gql`
	{
		allAlbums {
			id
			title
		}
	}
`

const Main = () => {
	const [albumResults, setAlbumResults] = useState()

	// Create Pickers
	const [song, SongPicker, setSong] = useSongPicker()
	const [album, AlbumPicker, setAlbum] = useAlbumPicker()

	// Handle user album selection
	const getAlbumByAlbumQuery = useQuery(GET_ALBUM_BY_ALBUM_ID, {
		variables: { id: album },
		skip: !album,
		onCompleted: data => {
			setSong('')
			setAlbumResults([data.findAlbumById])
		},
	})

	// Handle user song selection
	const getAlbumBySongQuery = useQuery(GET_ALBUM_BY_SONG_ID, {
		variables: { id: song },
		skip: !song,
		onCompleted: data => {
			setAlbum('')
			setAlbumResults(
				data.findSongById.recordings.map(recording => recording.album)
			)
		},
	})

	return (
		<Fragment>
			<SongPicker />
			<AlbumPicker />
			{albumResults &&
				albumResults.map(album => (
					<AlbumInfo key={album.title} album={album} song={song} />
				))}
		</Fragment>
	)
}

export default Main
