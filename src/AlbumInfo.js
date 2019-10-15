import React from 'react'

const AlbumInfo = ({ album }) => (
	<div className="album">
		<div>
			<h3>{album.title}</h3>
			<p>{album.releaseYear}</p>
		</div>
		<div>
			{album.songs.map((song, i) => {
				return (
					<p key={song.songTitle}>
						<span>{i + 1}</span>
						{song.songTitle}
					</p>
				)
			})}
		</div>
	</div>
)

export default AlbumInfo
