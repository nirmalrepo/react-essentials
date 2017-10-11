import React from 'react'
const { render } = ReactDOM
import {hello, goodbye} from './lib.js'


render(
	<div>
		{hello}
		{goodbye}
	</div>,
	document.getElementById('react-container')
)