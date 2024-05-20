// ReactDOM.render(<App />, document.getElementById('root'))

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// ReactDOM.render(
// 	<Router>
// 		<App />,
// 	</Router>,
// 	document.getElementById('root')
// )

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
