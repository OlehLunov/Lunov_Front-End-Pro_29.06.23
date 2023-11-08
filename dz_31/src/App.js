import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UsersList from './components/UsersList';
import Albums from './components/Albums';
import Photos from './components/Photos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="/user/:userId/albums" element={<Albums />} />
        <Route path="/album/:albumId/photos" element={<Photos />} />
      </Routes>
    </Router>
  );
}

export default App;