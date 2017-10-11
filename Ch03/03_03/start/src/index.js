import React from 'react'
import { render } from 'react-dom'
import { SkiDayCount } from './components/SkiDayCount'

window.React = React

//total, powder ... are properties , a property can be a function, number, string
render(
	<SkiDayCount total={50}
				 powder={20}
				 backcountry={10}
				 goal={100}/>,
	document.getElementById('react-container')
)