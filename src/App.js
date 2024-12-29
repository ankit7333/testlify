
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './ui/AppLayout'
import Yourwork from './pages/Yourwork'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="/Yourwork" />} />
          <Route path="/Yourwork" element={<Yourwork />} />
          <Route path="/Projects" element={<p>Projects</p>} />
          <Route path="/Filters" element={<p>Filters</p>} />
          <Route path="/Dashboard" element={<p>Dashboard</p>} />
          <Route path="/People" element={<p>People</p>} />
          <Route path="/Apps" element={<p>Apps</p>} />
        </Route>
        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
