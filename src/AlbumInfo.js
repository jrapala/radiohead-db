import React from 'react'

const AlbumInfo = ({ album }) => {
	if (album) {
		return (
			<div className="album">
				<div>
					<h3>{album.title}</h3>
					<p>{album.releaseYear}}</p>
				</div>
				<div>
					{album.songs.map((song, i) => {
						return (
							<p key={song.trackTitle}>
								<span>{song.id}</span>
								{song.trackTitle}
								{song.length}
							</p>
						)
					})}
				</div>
			</div>
		)
	} else {
		return <div />
	}
}

export default AlbumInfo
