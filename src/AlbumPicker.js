import React from 'react'

const AlbumPicker = () => {
	return (
		<div className="input-row">
			<label htmlFor="album">View an Album:</label>
			<div>
				<select id="album" defaultValue="">
					<option value=""></option>
				</select>
			</div>
		</div>
	)
}

export default AlbumPicker
