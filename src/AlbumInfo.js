import React from 'react'

const AlbumInfo = ({ title, tracks, releaseYear }) => {
	return (
		<div className="album">
			<div>
				<h3>{title}</h3>
				<p>{releaseYear}}</p>
			</div>
			<div>
				{songs.map((song, idx) => (
					<p key={song.trackTitle}>
						<span>{idx + 1}</span>
						{song.trackTitle}
						{song.length}
					</p>
				)}
			</div>
		</div>
	)
}

export default AlbumInfo
