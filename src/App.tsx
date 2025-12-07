import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './screens/Home'; // ✅ use this one
import Build from './screens/Build';
import ProgramEditor from './screens/ProgramEditor';
import DayEditor from './screens/DayEditor';
import Session from './screens/Session';
import History from './screens/History';

function Tabs() {
  return (
    <nav className="tabs">
      <NavLink to="/" end className={({ isActive }) => isActive ? "tab active" : "tab"}>🏠 Home</NavLink>
      <NavLink to="/build" className={({ isActive }) => isActive ? "tab active" : "tab"}>🏋️ Build</NavLink>
      <NavLink to="/train" className={({ isActive }) => isActive ? "tab active" : "tab"}>▶️ Train</NavLink>
      <NavLink to="/history" className={({ isActive }) => isActive ? "tab active" : "tab"}>📖 History</NavLink>
      <NavLink to="/stats" className={({ isActive }) => isActive ? "tab active" : "tab"}>📊 Stats</NavLink>
      <NavLink to="/settings" className={({ isActive }) => isActive ? "tab active" : "tab"}>⚙️ Settings</NavLink>
    </nav>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <main>
          <Routes>
            <Route path="/" element={<Home />} /> {/* ✅ now uses imported Home */}
            <Route path="/build" element={<Build />} />
            <Route path="/program/:id" element={<ProgramEditor />} />
            <Route path="/program/:id/week/:week/day/:day" element={<DayEditor />} />
            <Route path="/session/:programId/:week/:day" element={<Session />} />
            <Route path="/history" element={<History />} />
            <Route path="/train" element={<div className="card">Train</div>} />
            <Route path="/stats" element={<div className="card">Stats</div>} />
            <Route path="/settings" element={<div className="card">Settings</div>} />
          </Routes>
        </main>
        <Tabs />
      </div>
    </BrowserRouter>
  );
}