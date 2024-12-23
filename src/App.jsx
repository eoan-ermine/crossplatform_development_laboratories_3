import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoPage from './pages/TodoPage';
import DndPage from './pages/DndPage';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/crossplatform_development_laboratories_3/" element={<DndPage />} />
			</Routes>
		</Router>
	);
}

export default App;