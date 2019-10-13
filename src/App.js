import React, { Fragment } from 'react'
import { render } from 'react-dom'
import Logo from './images/logo.svg'
import Main from './Main'

const App = () => {
	return (
		<Fragment>
			<img src={Logo} alt="Radiohead Logo" />
			<h2>Album Database</h2>
			<Main />
		</Fragment>
	)
}

render(React.createElement(App), document.getElementById('root'))
