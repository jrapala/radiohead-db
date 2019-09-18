const Logo = require('./images/logo.svg')
import React, { Fragment } from 'react'
import { render } from 'react-dom'
import InputRow from './InputRow'
import AlbumInfo from './AlbumInfo'

const App = () => {
	return (
		<Fragment>
			<img src={Logo} alt="Radiohead Logo" />
			<h2>Album Database</h2>
			<InputRow label="Find a Song:" type="song" />
			<InputRow label="View an Album:" type="album" />
			<AlbumInfo />
			<hr />
			<AlbumInfo />
		</Fragment>
	)
}

render(React.createElement(App), document.getElementById('root'))
