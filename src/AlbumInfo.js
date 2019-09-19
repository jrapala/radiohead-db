import React from 'react'

const AlbumInfo = ({ title, tracks, releaseYear }) => {
	return (
		<div className="album">
			<div>
				<h3>{title}</h3>
				<p>{releaseYear}}</p>
			</div>
			<div>
				{tracks.map(track => {
					;<p>
						<span>{track.trackNumber}</span>
						{track.trackTitle}
					</p>
				})}
			</div>
		</div>
	)
}

export default AlbumInfo
