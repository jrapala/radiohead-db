import React from 'react'

const InputRow = ({ label, type }) => {
	return (
		<div className="input-row">
			<label htmlFor={type}>{label}</label>
			<div>
				<select id={type}>
					<option>hi</option>
				</select>
			</div>
		</div>
	)
}

export default InputRow
