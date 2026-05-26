import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import VideoDetail from './pages/VideoDetail'
import PosterDetails from './pages/PosterDetails'
 
export default function App() {
  return (
    <Routes>
      <Route path="/"           element={<Home />}         />
      <Route path="/video/:id"  element={<VideoDetail />}  />
      <Route path="/poster/:id" element={<PosterDetails />} />
    </Routes>
  )
}
 