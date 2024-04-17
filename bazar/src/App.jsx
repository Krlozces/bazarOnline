import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Box from './components/Box';
import List from './components/List';
import Details from './components/Details';
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Box />} />
          <Route path="/items" element={<List />} />
          <Route path="/items/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
