
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Stack } from 'react-bootstrap';

import SideMenu from './common/SideMenu';

import Home from './pages/Home';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

const SwitchRoutes = () => {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

const App = () => {
  return (
    <div className="App glass">
      <Stack direction="horizontal" className="h-100">
        <BrowserRouter>
          <SideMenu />
          <div className="w-75 ps-4 pe-3 py-3 align-self-start h-100 overflow-scroll">
            <SwitchRoutes />
          </div>
        </BrowserRouter>
      </Stack>
    </div>
  );
}

export default App;
