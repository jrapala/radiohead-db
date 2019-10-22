import React, { Fragment, useState, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import useDropdown from './useDropdown'
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

const GET_ALL_SONGS = gql`
	{
		allSongs {
			id
			songTitle
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
	const [songOptions, setSongOptions] = useState([])
	const [albumOptions, setAlbumOptions] = useState([])
	const [albumResults, setAlbumResults] = useState()

	// Create dropdown components
	const [song, SongPicker, setSong] = useDropdown(
		'Find a Song:',
		'',
		songOptions,
		'songTitle'
	)

	const [album, AlbumPicker, setAlbum] = useDropdown(
		'Find an Album:',
		'',
		albumOptions,
		'title'
	)

	// Populate dropdown components
	const getAllSongsQuery = useQuery(GET_ALL_SONGS, {
		onCompleted: data => {
			setSongOptions(data.allSongs)
		},
	})

	const getAllAlbumsQuery = useQuery(GET_ALL_ALBUMS, {
		onCompleted: data => {
			setAlbumOptions(data.allAlbums)
		},
	})

	// Handle user selection
	const getAlbumByAlbumQuery = useQuery(GET_ALBUM_BY_ALBUM_ID, {
		variables: { id: album },
		skip: !album,
		onCompleted: data => {
			setSong('')
			setAlbumResults([data.findAlbumById])
		},
	})

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
