import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PackingList from './PackingList/PackingList'

const App = () => {
	return (
		<Routes>
		  <Route path="/" element={<PackingList />}></Route>
    </Routes>
	)
}

export default App
