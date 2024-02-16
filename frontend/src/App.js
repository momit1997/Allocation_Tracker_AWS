import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 
import SearchPage from './component/SearchPage';
import ResultsPage from './component/ResultsPage';
import PasswordPage from './component/PasswordPage';
 
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
 
  return (
    <div>
        <Routes>
          <Route
            exact
            path="/"
            element={<PasswordPage setIsAuthenticated={setIsAuthenticated} />}
          />
          {isAuthenticated && (
            <>
              <Route path="/search" element={<SearchPage />} />
              <Route path="/results/:searchId" element={<ResultsPage />} />
            </>
          )}
        </Routes>
    </div>
  );
}
 
export default App;