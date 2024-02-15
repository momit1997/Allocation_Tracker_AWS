import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from './component/SearchPage';
import ResultsPage from './component/ResultsPage';
import PasswordPage from './component/PasswordPage';

function App() {
  return (
    <div>
      <Routes>
      <Route exact path = "/" element={<PasswordPage/>}/>
      <Route path="/search" element={<SearchPage/>} />
      <Route path="/results/:searchId" element={<ResultsPage/>} />
      </Routes>
    </div>
  );
}

export default App;