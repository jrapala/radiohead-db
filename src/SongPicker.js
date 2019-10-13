import React from 'react'

const SongPicker = () => {
	return (
		<div className="input-row">
			<label htmlFor="song">Find a Song:</label>
			<div>
				<select id="song"></select>
			</div>
		</div>
	)
}

export default SongPicker
