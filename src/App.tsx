import './App.css';
import Main from './pages/main/main';
import Create from './pages/create/create';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Viewing from './pages/viewing/viewing';

function App(): JSX.Element {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='create' element={<Create />} />
        <Route path='viewing' element={<Viewing />} />
        <Route path='create/viewing' element={<Viewing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
