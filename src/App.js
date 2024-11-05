// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnnModelMap from './components/AnnModelMap';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AnnModelMap />} />
            </Routes>
        </Router>
    );
};

export default App;
